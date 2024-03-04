// Задание 1: Температурный конвертер с Material UI
// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

// Компоненты:

// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).
// Логика:

// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.

import React, { useState} from 'react';
import { TextField } from '@mui/material';

function TemperatureConverter() {
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);

    const handleCelsiusChange = (event) => {
        const celsiusValue = event.target.value;
        setCelsius(celsiusValue);
        setFahrenheit(celsiusValue * 9 / 5 + 32);
    };

    const handleFahrenheitChange = (event) => {
        const fahrenheitValue = event.target.value;
        setFahrenheit(fahrenheitValue);
        setCelsius((fahrenheitValue - 32) * 5 / 9);
    };

    return (
        <div className='lesson_01'>
            <TextField
                id="celsius"
                label="Температура по цельсию"
                variant="outlined"
                value={celsius}
                onChange={handleCelsiusChange}
            />
            <TextField
                id="fahrenheit"
                label="Температура по фаренгейту"
                variant="outlined"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
            />
        </div>
    );
}


export default TemperatureConverter;
