import React from 'react';
import './AddTweetForm.scss';

import { useDispatch, useSelector } from 'react-redux';
import { selectAddTweetFormStatus } from '../../../store/ducks/tweets/selectors';
import { setLoadingStatusOfTweet } from '../../../store/ducks/tweet/actionCreators';
import { fetchAddTweet } from '../../../store/ducks/tweets/actionCreators';
import { AddTweetFormStatus } from '../../../store/ducks/tweets/contracts/state';
import { LoadingStatus } from '../../../store/types';
import { uploadImage } from '../../../utils/uploadImage';

import { HiOutlineCalendar } from 'react-icons/hi';
import { CgPoll } from 'react-icons/cg';
import { FiSmile } from 'react-icons/fi';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';


interface IAddTweetFormProps {
  defaultDraftRowsValue: number;
}

export interface IImageObj {
  blobUrl: string;
  file: File;
}

const AddTweetForm: React.FC<IAddTweetFormProps> = ({
  defaultDraftRowsValue
}: IAddTweetFormProps) => {
  const MAX_LENGTH = 280;
  const dispatch = useDispatch();
  const [draftRows, setDraftRows] = React.useState(defaultDraftRowsValue);
  const [text, setText] = React.useState<string>('');
  const [images, setImages] = React.useState<IImageObj[]>([]);

  const addFormState = useSelector(selectAddTweetFormStatus);
  const textLimitPercent: number = (text.length / MAX_LENGTH) * 100;
  const textCounter = MAX_LENGTH - text.length;

  const handleChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.target['rows'] = defaultDraftRowsValue;
    const textareaLineHeight = 25;
    const currentRows = Math.floor(event.target.scrollHeight / textareaLineHeight);
    event.target.rows = currentRows;
    setDraftRows(currentRows);
    if (event.currentTarget) {
      setText(event.currentTarget.value);
    }
  };

  const handleClickAddTweet = async (): Promise<void> => {
    const imagesList = [];
    dispatch(setLoadingStatusOfTweet(LoadingStatus.LOADING));
    for (let i = 0; i < images.length; i += 1) {
      const { file } = images[i];
      const { url } = await uploadImage(file, 'tweetImage');
      imagesList.push(url);
    }
    dispatch(fetchAddTweet({ text, images: imagesList }));
    setText('');
    setImages([]);
  };

  return (
    <div className="add-tweet-form__wrapper">
      <div className="add-tweet-form__container">

        <div className="add-tweet-form-image">
          <img alt={"Avatar"}></img>
        </div>

        <div className="add-tweet-form__block-content">
          <textarea
            className="add-tweet-form__textarea"
            rows={draftRows}
            id="draft-input"
            placeholder="What's happening?"
            onChange={handleChangeTextArea}
            value={text}
          ></textarea>

          <div className="add-tweet-actions__wrapper">
            <div className="add-tweet-actions__bar">
              <div className="add-tweet-actions__icon-wrapper">
                <ImageOutlinedIcon className="add-tweet-actions__icon" />
              </div>
              <div className="add-tweet-actions__icon-wrapper">
                <FiSmile className="add-tweet-actions__icon" />
              </div>
              <div className="add-tweet-actions__icon-wrapper">
                <CgPoll className="add-tweet-actions__icon" />
              </div>
              <div className="add-tweet-actions__icon-wrapper">
                <HiOutlineCalendar className="add-tweet-actions__icon" />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="add-tweet-actions__bar">
                {text && (
                  <>
                    <span>{textCounter}</span>
                    <div className="add-tweet-actions__circular-progress">
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
              </div>
              <button
                onClick={handleClickAddTweet}
                disabled={addFormState === AddTweetFormStatus.LOADING || !text || text.length >= MAX_LENGTH}
                className="add-tweet-actions__button"
              >
                {addFormState === AddTweetFormStatus.LOADING ? (
                  <CircularProgress color="inherit" size={16} />
                ) : (
                    'Tweet'
                  )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTweetForm;
