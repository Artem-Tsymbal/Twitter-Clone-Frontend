import React from 'react';
import './SearchBox.scss';
import { FiSearch } from 'react-icons/fi';
import { MdCancel } from 'react-icons/md';

const SearchBox: React.FC = () => {
  return (
    <div className="search-box">
      <FiSearch className="search-box__icon" />
      <input type="text" className="search-box__input" placeholder="Search Twitter" />
      <MdCancel className="search-box__cancel" />
      <div className="search-box-modal">
        <span className="search-box-modal__text"></span>
      </div>
      <div className="search-box-modal">
        <p className="search-box-modal__text">
          Try searching for people, topics, or keywords
        </p>
      </div>
    </div>


  );
};


export default SearchBox;
