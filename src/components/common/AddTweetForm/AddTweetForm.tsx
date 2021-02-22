import React from 'react';
import './AddTweetForm.scss';
import { HiOutlineCalendar } from 'react-icons/hi';
import { CgPoll, CgImage } from 'react-icons/cg';
import { FiSmile } from 'react-icons/fi';

const AddTweetForm: React.FC = () => {
  const [draftRows, setDraftRows] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.target['rows'] = 1;
    const textareaLineHeight = 25;
    const currentRows = Math.floor(event.target.scrollHeight / textareaLineHeight);
    event.target.rows = currentRows;
    setDraftRows(currentRows);
  };

  return (
    <div className="add-tweet-form__wrapper">
      <div className="add-tweet-form__container">

        <div className="add-tweet-form__block-image">
          <div className="add-tweet-form__image" />
        </div>

        <div className="add-tweet-form__block-content">
          <textarea
            className="add-tweet-form__textarea"
            rows={draftRows}
            id="draft-input"
            placeholder="What's happening?"
            onChange={handleChange}
          ></textarea>

          <div className="add-tweet-actions__wrapper">
            <div className="add-tweet-actions__bar">
              <div className="add-tweet-actions__icon-wrapper">
                <CgImage className="add-tweet-actions__icon" />
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
            <button className="add-tweet-actions__button">Tweet</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddTweetForm;
