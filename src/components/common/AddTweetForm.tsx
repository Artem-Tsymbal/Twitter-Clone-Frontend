import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import Alert from '@material-ui/lab/Alert';
import { fetchAddTweet } from '../../store/ducks/tweets/actionCreators';
import { selectAddTweetFormStatus } from '../../store/ducks/tweets/selectors';
import { AddTweetFormStatus } from '../../store/ducks/tweets/contracts/state';
import { UploadImages } from './UploadImages';
import { uploadImage } from '../../utils/uploadImage';
import { setLoadingStatusOfTweet } from '../../store/ducks/tweet/actionCreators';
import { LoadingStatus } from '../../store/types';

interface IAddTweetFormProps {
  classes: any;
  maxRows?: number;
}

const MAX_LENGTH = 280;

export interface IImageObj {
  blobUrl: string;
  file: File;
}

export const AddTweetForm: React.FC<IAddTweetFormProps> = ({
  classes,
  maxRows,
}: IAddTweetFormProps): React.ReactElement => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState<string>('');
  const [images, setImages] = React.useState<IImageObj[]>([]);

  const addFormState = useSelector(selectAddTweetFormStatus);
  const textLimitPercent: number = (text.length / MAX_LENGTH) * 100;
  const textCounter = MAX_LENGTH - text.length;

  const handleChangeTextare = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = async (): Promise<void> => {
    const result = [];
    dispatch(setLoadingStatusOfTweet(LoadingStatus.LOADING));
    for (let i = 0; i < images.length; i += 1) {
      const { file } = images[i];
      const { url } = await uploadImage(file);
      result.push(url);
    }
    dispatch(fetchAddTweet({ text, images: result }));
    setText('');
    setImages([]);
  };

  return (
    <div>
      <div className={classes.addFormBody}>
        <Avatar className={classes.tweetAvatar} alt={'Аватарка пользователя UserAvatar'} />
        <TextareaAutosize
          onChange={handleChangeTextare}
          className={classes.addFormTextarea}
          placeholder="Что происходит?"
          value={text}
          rowsMax={maxRows}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
          <UploadImages images={images} onChangeImages={setImages} />
        </div>
        <div className={classes.addFormBottomRight}>
          {text && (
            <>
              <span>{textCounter}</span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  variant="static"
                  size={20}
                  thickness={5}
                  value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                  style={text.length >= MAX_LENGTH ? { color: 'rgb(178,34,34)' } : undefined}
                />
                {(text.length) && (
                  <CircularProgress
                    style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                    variant="static"
                    size={20}
                    thickness={6}
                    value={100}
                  />
                )}
              </div>
            </>
          )}
          <Button
            onClick={handleClickAddTweet}
            disabled={addFormState === AddTweetFormStatus.LOADING || !text || text.length >= MAX_LENGTH}
            color="primary"
            variant="contained">
            {addFormState === AddTweetFormStatus.LOADING ? (
              <CircularProgress color="inherit" size={16} />
            ) : (
                'Твитнуть'
              )}
          </Button>
        </div>
      </div>
      {
        addFormState === AddTweetFormStatus.ERROR && (
          <Alert severity="error">Произошла ошибка при добавлении твита!</Alert>
        )
      }
    </div>
  );
};
