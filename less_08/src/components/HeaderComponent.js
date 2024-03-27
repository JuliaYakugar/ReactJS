import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderComponent() {

    return (
        <header class="header">
            <div class="container header__wrap">
                <div class="heder__left">
                    <Link class="header__logo" to="/">
                        <img src={require('../img/logo.svg').default} alt="Home" />
                    </Link>
                    <button class="header__search">
                        <img src={require('../img/search.svg').default} alt="Search" />
                    </button>
                </div>
                <div class="header__right">
                    <input class="header__input" type="checkbox" id="burger" />
                    <label class="header__menu header__item" for="burger">
                        <img src={require('../img/menu.svg').default} alt="Menu" />
                    </label>
                    <nav class="header__nav nav">
                        <div class="nav__wrap">
                            <label class="nav__close" for="burger">X</label>
                            <h2 class="nav__title">MENU</h2>
                            <h3 class="nav__heading">MAN</h3>
                            <ul class="nav__list">
                                <li class="nav__item">
                                    <a href="#" class="nav__link">Accessories</a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__link">Bags</a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__link">Denim</a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__link">T-Shirts</a>
                                </li>
                            </ul>

                            <h3 class="nav__heading">WOMAN</h3>
                            <ul class="nav__list">
                                <li class="nav__item">
                                    <a href="#" class="nav__link">Accessories</a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__link">Jackets & Coats</a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__link">Polos</a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__link">T-Shirts</a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__link">Shirts</a>
                                </li>
                                
                            </ul>

                            <h3 class="nav__heading">KIDS</h3>
                            <ul class="nav__list">
                                <li class="nav__item">
                                    <a href="#" class="nav__link">Accessories</a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__link">Jackets & Coats</a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__link">Polos</a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__link">T-Shirts</a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__link">Shirts</a>
                                </li>
                                <li class="nav__item">
                                    <a href="#" class="nav__link">Bags</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Link class="header__item" to='/registration'>
                        <img src={require('../img/profile.svg').default} alt="Profile" />
                    </Link>
                    <Link class="header__item header__backet" to='/cart'>
                        <img src={require('../img/basket.svg').default} alt="Basket" />
                    </Link>
                </div>
            </div>
        </header>
    )

}
