// Модуль с дополнительными функциями

// Импортируем сторонние модули
import {todoContainer, completedContainer, deleteAll} from './main.js';

// Функция для получения списка пользователей с API 
export function getUsers () {
    fetch('https://jsonplaceholder.typicode.com/users') // Отправляем запрос на API для получения списка пользователей
    .then(response => response.json()) // Преобразуем ответ сервера в JSON формат
    .then(users => { // Обрабатываем полученный список пользователей
      const selector = document.querySelector('.modal__selector'); // Находим селектор (список выбора) в DOM по классу 'modal__selector'
      while (selector.firstChild) { // Удаляем все текущие опции из селектора
        selector.firstChild.remove();
      }
  
      // Создаем статическую опцию "Select user" и добавляем её в селектор
      const defaultOption = document.createElement('option');
      defaultOption.value = 0;
      defaultOption.textContent = 'Select user';
      selector.appendChild(defaultOption);
  
      users.forEach(user => { // Для каждого пользователя создаем новую опцию в селекторе
        const option = document.createElement('option');
        option.value = user.id; // Устанавливаем значение опции как id пользователя
        option.textContent = user.name; // Устанавливаем текст опции как имя пользователя
        selector.appendChild(option); // Добавляем опцию в селектор
      });
    });
}

// Функция для обновления видимости кнопки "Удалить все" в зависимости от наличия завершенных задач
export function updateDeleteButtonVisibility() { 
    if (completedContainer.children.length === 0) { // Если в completedContainer нету карточек, скрываем кнопку deleteAll
      deleteAll.style.display = 'none';
    } else {
      deleteAll.style.display = '';
    }
}

// Функция для добавления белой линии в пустой контейнер TODO
export function addWhiteLine() { 
    if (todoContainer.children.length == 0) { // Проверяем, есть ли карточки в контейнере TODO
      todoContainer.classList.add("white-line"); // Если карточек нет, добавляем класс 'white-line' к контейнеру
    } else {
      todoContainer.classList.remove("white-line"); // Если карточки есть, удаляем класс 'white-line' из контейнера
    }
}
  