// Приложение для переключения темы сайта
// Создать приложение, позволяющее пользователю переключать между светлой и темной темой сайта.
// Функционал:
// Action types: TOGGLE_THEME.
// Actions: Создайте действие для переключения темы.
// Reducer: Реализуйте редьюсер, который обрабатывает это действие и изменяет тему в состоянии приложения.
// Component: Создайте компонент, который отображает переключатель для изменения темы сайта.

// Описание:
// Состояние: Для хранения текущей темы можно использовать логическую переменную (true для темной темы и false для светлой) или строку ("dark" или "light").
// Интерфейс: Ваш интерфейс может состоять из переключателя, который изменяет тему с светлой на темную и обратно.

import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Theme from './components/theme/theme'
import './App.css';

const App = () => {

    const changeTheme = () => {
        store.dispatch({ type: 'TOGGLE_THEME' });
    };

    return (
        <Provider store={store}>
            <button onClick={changeTheme}>Поменять тему</button>
            <Theme />
        </Provider>
    )
}

export default App;
