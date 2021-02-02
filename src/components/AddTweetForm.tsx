import React from 'react';
import { useHomeStyles } from '../pages/Home/theme';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

interface IAddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
  maxRows?: number;
};

const MAX_LENGTH = 280;

export const AddTweetForm: React.FC<IAddTweetFormProps> = ({
  classes,
  maxRows,
}: IAddTweetFormProps): React.ReactElement => {
  const [text, setText] = React.useState<string>('');
  const textLimitPercent: number = (text.length / MAX_LENGTH) * 100;
  const textCounter = -text.length + MAX_LENGTH;

  const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const handleClickAddTweet = (): void => {
    setText('');
  };

  return (
    <>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя User'sAvatar`}
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHn5bIACKYJhg/profile-displayphoto-shrink_100_100/0/1595353821718?e=1616630400&v=beta&t=2VC5m-EE02kz-pQMvb-TnNKVO9jcndpar4mGSVRnQpc"
        />
        <TextareaAutosize
          onChange={handleChangeTextarea}
          className={classes.addFormTextarea}
          placeholder="Что происходит?"
          value={text}
          rowsMax={maxRows}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
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
            disabled={textLimitPercent >= 100}
            color="primary"
            variant="contained">
            Твитнуть
          </Button>
        </div>
      </div>
    </>
  );
};
