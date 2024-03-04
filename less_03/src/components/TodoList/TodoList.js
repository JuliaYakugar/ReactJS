// Задание 2: Список дел с Material UI
// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

// Компоненты:

// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).
// Логика:

// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.

import React, { useState} from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

function TodoList() {
    const [newTask, setNewTask] = useState();
    const [tasks, setTasks] = useState([]);

    const addNewTask = () => {
        setTasks([...tasks, newTask]);
        setNewTask('');
    };

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div className='lesson_02'>
            <div>
                <TextField
                    id="newTask"
                    label="Новая задача"
                    variant="outlined"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <Button 
                    variant="contained"
                    onClick={addNewTask}>
                        Добавить
                </Button>
            </div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {tasks.map((value, index) => (
                    <ListItem
                        key={index}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="delete" onClick={() => deleteTask(index)}>
                                <Close />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={`Задача: ${value}`} />
                    </ListItem>
                ))}
            </List>
            
        </div>
    );
}

export default TodoList;
