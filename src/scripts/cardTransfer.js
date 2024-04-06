// Модуль с функциями для перетаскивания карточек между разделами

// Импортируем сторонние модули
import {todoContainer, progressContainer, completedContainer} from './main.js'
import {updateCounts} from './loadTasks.js';
import {getDate, setDate} from './localStorage.js';
import {updateDeleteButtonVisibility} from './additionalFunctions.js';
import {createModal} from './modal.js';

export function moveToTodo(card) { // Функция перемещения карточки в ToDo
    // Получаем ссылки на поля карточки и id
    const currentTitle = card.getElementsByClassName('card__title')[0].innerHTML;
    const currentDescription = card.getElementsByClassName('card__description')[0].innerHTML;
    const currentTime = card.getElementsByClassName('card__time')[0].innerHTML;
    const currentUser = card.getElementsByClassName('card__user')[0].innerHTML;
    const id = Number(card.dataset.id);
    // Создаём такую же карточку в новом разделе
    todoContainer.innerHTML += `<div class="card todo__card" data-id="${id}" draggable="true">
                                  <div class="card__buttons">
                                    <button class="card__edit todo__button">Edit</button>
                                    <button class="card__delete todo__button">Delete</button>
                                    <button class="card__forward todo__button">Start</button>
                                  </div>
                                  <h3 class="card__title">${currentTitle}</h3>
                                  <p class="card__description">${currentDescription}</p>
                                  <div class="card__bottom">
                                    <p class="card__user">${currentUser}</p>
                                    <p class="card__time">${currentTime}</p>
                                  </div>
                                </div>`;
    // Удаляем старую карточку
    card.remove(card);
    // Получаем текущие задачи из Local Storage
    const tasks = getDate();
    // Находим задачу, которую нужно обновить
    const taskToUpdate = tasks.find(task => task.id === id);
    // Обновляем поле 'status'
    taskToUpdate.status = 'todo';
    // Обновляем Local Storage с новым массивом задач
    setDate(tasks);
    // Обновляем счётчики
    updateCounts();
    // Обновляем видимость кнопки удаления всех карточек
    updateDeleteButtonVisibility();
  };
  
  export function moveToInProgress(card) { // Функция перемещения карточки в In Progress
    const cancelFunction = () => { // Функция для отмены в модальном окне
      confirmModal.remove(); // Закрываем модальное окно
    };
    const confirmFunction = () => { // Функция для подтверждения в модальном окне
      confirmModal.remove(); // Закрываем модальное окно
      toProgressWhatever(); // Перемещаем карточку, если подтвердили превышение лимита
    }
    if (progressContainer.children.length > 5) { // Если в активных задачах уже 6 задач
      // Создаем модальное окно с подтверждением
      createModal('You have accumulated unfulfilled tasks. Are you sure you want to add another task?', cancelFunction, confirmFunction, 'Progress');
    } else {
      toProgressWhatever() // Перемещаем карточку если лимита нету
    }
    function toProgressWhatever() { // Функция для продолжения перемещения в колонку In Progress
      // Получаем ссылки на поля карточки и id
      const currentTitle = card.getElementsByClassName('card__title')[0].innerHTML;
      const currentDescription = card.getElementsByClassName('card__description')[0].innerHTML;
      const currentTime = card.getElementsByClassName('card__time')[0].innerHTML;
      const currentUser = card.getElementsByClassName('card__user')[0].innerHTML;
      const id = Number(card.dataset.id);
      // Создаём такую же карточку в новом разделе
      progressContainer.innerHTML += `<div class="card progress__card" data-id="${id}" draggable="true">
                                        <div class="card__buttons">
                                          <button class="card__back progress__button">Back</button>
                                          <button class="card__forward progress__button">Complete</button>
                                        </div>
                                        <h3 class="card__title">${currentTitle}</h3>
                                        <p class="card__description">${currentDescription}</p>
                                        <div class="card__bottom">
                                          <p class="card__user">${currentUser}</p>
                                          <p class="card__time">${currentTime}</p>
                                        </div>
                                      </div>`;
      // Удаляем старую карточку
      card.remove(card);
      // Получаем текущие задачи из Local Storage
      const tasks = getDate();
      // Находим задачу, которую нужно обновить
      const taskToUpdate = tasks.find(task => task.id === id);
      // Обновляем поле 'status'
      taskToUpdate.status = 'progress';
      // Обновляем Local Storage с новым массивом задач
      setDate(tasks);
      // Обновляем счётчики
      updateCounts();
      // Обновляем видимость кнопки удаления всех карточек
      updateDeleteButtonVisibility();
    }
  }
  export function moveToCompleted(card) { // Функция перемещения карточки в Completed
    // Получаем ссылки на поля карточки и id
    const currentTitle = card.getElementsByClassName('card__title')[0].innerHTML;
    const currentDescription = card.getElementsByClassName('card__description')[0].innerHTML;
    const currentTime = card.getElementsByClassName('card__time')[0].innerHTML;
    const currentUser = card.getElementsByClassName('card__user')[0].innerHTML;
    const id = Number(card.dataset.id);
    // Создаём такую же карточку в новом разделе
    completedContainer.innerHTML += `<div class="card completed__card" data-id="${id}" draggable="true">
                                      <div class="card__buttons">
                                        <button class="card__back completed__button">Back</button>
                                        <button class="card__delete completed__button">Delete</button>
                                      </div>
                                      <h3 class="card__title">${currentTitle}</h3>
                                      <p class="card__description">${currentDescription}</p>
                                      <div class="card__bottom">
                                        <p class="card__user">${currentUser}</p>
                                        <p class="card__time">${currentTime}</p>
                                      </div>
                                    </div>`;
    // Удаляем старую карточку
    card.remove(card);
    // Получаем текущие задачи из Local Storage
    const tasks = getDate();
    // Находим задачу, которую нужно обновить
    const taskToUpdate = tasks.find(task => task.id === id);
    // Обновляем поле 'status'
    taskToUpdate.status = 'completed';
    // Обновляем Local Storage с новым массивом задач
    setDate(tasks);
    // Обновляем счётчики
    updateCounts();
    // Обновляем видимость кнопки удаления всех карточек
    updateDeleteButtonVisibility();
  };