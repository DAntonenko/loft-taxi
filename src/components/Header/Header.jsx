import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/auth';
import emblem from '../../assets/emblem.svg';
import logo from '../../assets/logo.svg';
import Button from '../Button/Button';

import './Header.scss';

export const Header = ({ passedOnMapClickHandler, passedOnProfileClickHandler, logOut, navigate }) => {
  Header.propTypes = {
    passedOnMapClickHandler: PropTypes.func,
    passedOnProfileClickHandler: PropTypes.func,
    logOut: PropTypes.func,
    navigate: PropTypes.func,
  }

  const MENU_ITEMS = [
    {
      onClickHandler: passedOnMapClickHandler,
      text: 'Карта',
    },
    {
      onClickHandler: passedOnProfileClickHandler,
      text: 'Профиль',
    },
    {
      onClickHandler: () => {
        logOut();
      },
      text: 'Выйти',
    },
  ]

  return (
    <header className = 'header'>
      <img
        className='header__emblem'
        src={ emblem }
        alt='эмблема Лофт-Такси'
      />
      <img
        className='header__logo'
        src={ logo }
        alt='логотип Лофт-Такси'
      />
      <nav className='header__navigation'>
        <ul className='header__navigation-list'>
          {MENU_ITEMS.map((item) => {
            return (
              <li className='header__navigation-list-item' key={item.text}>
                <Button
                  className='header__navigation-button'
                  type='button'
                  text={item.text}
                  onClick={item.onClickHandler}
                />
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default connect(
  null,
  { logOut }
)(Header);