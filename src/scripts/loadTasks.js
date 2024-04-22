// Модуль с функциями загрузки, обновления списка задач и создания карточки

// Импортируем сторонние модули
import {todoContainer, progressContainer, completedContainer} from './main.js'
import {getDate} from './localStorage.js';
import {updateDeleteButtonVisibility, addWhiteLine} from './additionalFunctions.js';

// Функция для загрузки задач из localStorage и отображения их на странице
export function loadTasks() { 
    const tasks = getDate(); // Получаем текущий список задач из localStorage
    // Очищаем контейнеры карточек перед добавлением новых
    todoContainer.innerHTML = '';
    progressContainer.innerHTML = '';
    completedContainer.innerHTML = '';
  
    tasks.forEach(task => { // Перебираем каждую задачу в списке
      if (task.status === 'todo') {
        todoContainer.innerHTML += createCard('todo', task); // Добавляем карточку в контейнер TODO
      } else if (task.status === 'progress') {
        progressContainer.innerHTML += createCard('progress', task); // Добавляем карточку в контейнер PROGRESS
      } else if (task.status === 'completed') {
        completedContainer.innerHTML += createCard('completed', task);  // Добавляем карточку в контейнер COMPLETED
      }
    });
    updateCounts(); // Обновляем счетчики задач
    // Обновляем видимость кнопки удаления всех карточек
    updateDeleteButtonVisibility();
}

// Функция для обновления счетчиков задач в категориях
export function updateCounts() { 
    // Получаем количество всех задач
    const todoCountLength = todoContainer.children.length;
    const progressCountLength = progressContainer.children.length;
    const completedCountLength = completedContainer.children.length;
    // Получаем текстовые поля счётчиков
    const todoCount = document.getElementById('todo__count');
    const progressCount = document.getElementById('progress__count');
    const completedCount = document.getElementById('completed__count');
    // Устанавливаем нужные счётчики
    todoCount.textContent = todoCountLength;
    progressCount.textContent = progressCountLength;
    completedCount.textContent = completedCountLength;
    // Проверяем содержимое контейнера TODO для отрисовки белой линии
    addWhiteLine()
}

export function createCard(status, { id, title, description, date, userName }) { // Функция для создания HTML-кода карточки задачи (используем деструктуризацию)
  return `
    <div class="card ${status}__card" data-id="${id}" draggable="true">
      <div class="card__buttons">
        ${status === 'todo' ? // Если статус 'todo', добавляем кнопки Edit, Delete, Start 
          `
            <button class="card__edit todo__button">Edit</button>
            <button class="card__delete todo__button">Delete</button>
            <button class="card__forward todo__button">Start</button>
          ` :
          status === 'progress' ? // Если статус 'progress', добавляем кнопки Back, Complete 
          `
            <button class="card__back progress__button">Back</button>
            <button class="card__forward progress__button">Complete</button>
          ` :
          status === 'completed' ? // Если статус 'completed', добавляем кнопки Back, Delete
          `
            <button class="card__back completed__button">Back</button>
            <button class="card__delete completed__button">Delete</button>
          ` :
          '' // Если статус не распознан, не добавляем кнопки
        }
      </div>
      <h3 class="card__title">${title}</h3>
      <p class="card__description">${description}</p>
      <div class="card__bottom">
        <p class="card__user">${userName}</p>
        <p class="card__date">${date}</p>
      </div>
    </div>
  `;
}