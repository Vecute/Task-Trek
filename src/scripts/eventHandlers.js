// Модуль с функцией добавления слушателей к объекту window

// Импортируем сторонние модули
import {loadTasks} from './loadTasks.js';
import {showTime} from './time.js';

 // Функция для добавления обработчиков событий к окну (загрузка страницы и изменение localStorage)
export function addWindowEventListeners() {
    window.addEventListener("load", function(){ // Добавляем обработчик события загрузки страницы, который вызывает функцию loadTasks и showtime
        loadTasks();
        showTime();
    });
    window.addEventListener("storage", function(){ // Добавляем обработчик события на все изменения, для отображения изменений в другой вкладке , который вызывает функцию loadTasks
        loadTasks();
    });
  }