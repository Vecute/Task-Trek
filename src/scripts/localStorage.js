// Модуль с функциями для работы с localStorage

// Функции для работы с localStorage: сохранение и получение данных
export function setDate(data) { // Сразу экспортируем функцию
    localStorage.setItem('tasks', JSON.stringify(data)); // Сохраняем данные в localStorage с ключом 'tasks', предварительно преобразовав их в формат JSON
}
export function getDate() { // Сразу экспортируем функцию
    return JSON.parse(localStorage.getItem('tasks')); // Получаем данные из localStorage с ключом 'tasks' и преобразуем их из формата JSON в JavaScript-объект
}