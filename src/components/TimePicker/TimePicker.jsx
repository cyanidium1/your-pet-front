import React, { useState } from 'react';

import css from './TimePicker.module.css';

const TimePicker = ({ timeOptions, menuZIndex }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const weekDays = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  const day = new Date();
  const dayOfWeek = day.getDay();

  const currentDayWorkHours = () => {
    if (timeOptions && timeOptions.length > 0) {
      if (timeOptions[dayOfWeek]?.isOpen) {
        return `${timeOptions[dayOfWeek].from} - ${timeOptions[dayOfWeek].to}`;
      } else {
        return 'CLOSED';
      }
    }
    return 'Day - Night';
  };

  if (!timeOptions || timeOptions.length === 0) {
    return <div className={css.closed}>Day - Night</div>;
  }

  return (
    <div className={css.timePicker}>
      <div className={css.time} onClick={handleToggle}>
        {currentDayWorkHours()}
      </div>
      {isOpen && (
        <ul className={css.menu} style={{ zIndex: menuZIndex }}>
          {timeOptions.map((option, index) => (
            <li
              className={index === dayOfWeek - 1 ? css.currentDay : ''}
              key={index}
            >
              <div className={css.dayOfWeek}>{weekDays[index]} </div>
              <div className={css.workTime}>
                {option.isOpen ? `${option.from} - ${option.to}` : 'CLOSED'}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TimePicker;
