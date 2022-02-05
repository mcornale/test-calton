import { useState } from 'react';
import arrowDownSrc from '../../assets/icons/arrow-down.svg';

import './DropDown.css';

const DropDown = (props) => {
  const { label, options, activeOption, onUpdateShowingMode } = props;

  const [areOptionsVisible, setAreOptionsVisible] = useState(false);

  const onClickSelectHandler = (e) => {
    e.preventDefault();
    setAreOptionsVisible((prevVisibility) => !prevVisibility);
  };

  const onClickOptionHandler = (e) => {
    e.preventDefault();
    onUpdateShowingMode(e.target.innerHTML);
    setAreOptionsVisible(false);
  };

  return (
    <div className={`dropdown ${areOptionsVisible && 'dropdown--open'}`}>
      <label className='dropdown__label'>{label}</label>
      <button onClick={onClickSelectHandler} className='dropdown__select'>
        <p>{activeOption}</p>
        <img
          className={`dropdown__icon ${
            areOptionsVisible && 'dropdown__icon--reverse'
          }`}
          src={arrowDownSrc}
          alt='open select menu'
        />
      </button>
      {areOptionsVisible && (
        <div className='dropdown__options'>
          {options.map((option, index) => (
            <button
              onClick={onClickOptionHandler}
              key={index}
              className={`dropdown__option ${
                option === activeOption && 'dropdown__option--active'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
