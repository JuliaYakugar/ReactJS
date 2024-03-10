// Создать приложение с двумя страницами: "Главная страница" и "О нас".
// На каждой странице должна быть навигационная ссылка для перехода на другую страницу.
// Шаги выполнения:
// Установка react-router-dom:
// Если еще не установлен, добавьте react-router-dom в ваш проект: npm install react-router-dom.
// Создание компонентов:
// Создайте два компонента: HomePage.jsx и AboutPage.jsx.
// В каждом компоненте добавьте простой текст, например, <h1>Главная страница</h1> для HomePage и <h1>О нас</h1> для AboutPage.
// Реализовать переходы

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <header>
        <ul>
          <li>
              <Link to="/">Главная страница</Link>
            </li>
            <li>
              <Link to="/aboutpage">О нас</Link>
            </li>
        </ul>
      </header>

      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
