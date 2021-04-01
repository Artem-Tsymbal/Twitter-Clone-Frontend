import React from 'react';

import './SearchBox.scss';
import { FiSearch } from 'react-icons/fi';
import { MdCancel } from 'react-icons/md';

const SearchBox: React.FC = () => {
  const [visibleModal, setVisibleModal] = React.useState<boolean>(false);
  const [text, setText] = React.useState<string>('');
  const searchBox = React.useRef<HTMLInputElement>(null);

  const onFocusInput = (): void => {
    setVisibleModal(true);
  };

  const onBlurInput = (): void => {
    setVisibleModal(false);
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.currentTarget) {
      setText(event.currentTarget.value);
    }
  };

  const handleClickCleanInput = (): void => {
    setText('');
  };

  return (
    <div className="search-box" onClick={() => searchBox.current?.focus()} >
      <FiSearch className="search-box__icon" />
      <input
        ref={searchBox}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        onChange={handleChangeInput}
        value={text}
        type="text"
        className="search-box__input"
        placeholder="Search Twitter" />
      <MdCancel onClick={handleClickCleanInput} className="search-box__cancel" />
      {visibleModal && (
        <div className="search-box-modal">
          <p className="search-box-modal__text">
            Try searching for people, topics, or keywords
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
