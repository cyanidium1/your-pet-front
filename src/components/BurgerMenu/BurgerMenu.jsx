import Navigation from 'components/Navigation/Navigation';
import s from './BurgerMenu.module.css';
import Logo from 'components/Logo/Logo';
import sprite from '../../images/icons.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function BurgerMenu({
  showMenu,
  setShowMenu,
  closeModalMenu,
  isLoggedIn,
}) {
  // const [nav, setNav] = useState(false);
  return (
    <div className={s.container}>
      <div className={s.box}>
        <Navigation
          showMenu={showMenu}
          closeMenu={closeModalMenu}
          isLoggedIn={!isLoggedIn}
        />
        <div onClick={() => setShowMenu(!showMenu)} className={s.mobile_btn}>
          {showMenu ? (
            <svg width={30} height={30}>
              <use href={sprite + '#icon-cross-small'} />
            </svg>
          ) : (
            <svg width={30} height={30}>
              <use href={sprite + '#icon-burger'} />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

// <div className={`${s.container} ${s.navContainer}`}>
//   <input className={s.checkbox} type="checkbox" name="" id="" />
//   <div className={s.logoMobile}>{/* <Logo /> */}</div>
//   <div className={s.hamburgerLines}>
//     <span className={`${s.line} ${s.line1}`}></span>
//     <span className={`${s.line} ${s.line2}`}></span>
//     <span className={`${s.line} ${s.line3}`}></span>
//   </div>

//   <div className={s.menuItems}>
//     <Navigation />
//   </div>
// </div>;
