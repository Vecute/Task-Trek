// Модуль с основными функциями (инициализация, кнопки, слушатели)

// Импортируем сторонние модули
import {updateCounts} from './loadTasks.js';
import {getDate, setDate} from './localStorage.js';
import {addWindowEventListeners} from './eventHandlers.js';
import {createTaskModal, modalReset, taskModalConfirm} from './modal.js';
import {addEventListenerForDragAndDrop} from './drag&drop.js';
import {moveCard} from './cardTransfer.js';
import {hideTodo, hideProgress, hideCompleted} from './hideCategories.js';
import {deleteAllCompleted} from './deleteAllCompleted.js';
import {updateDeleteButtonVisibility} from './additionalFunctions.js';

// Проверка наличия данных в localStorage и создание пустого массива, если данных нет
if (!localStorage.getItem('tasks')) {
  localStorage.setItem('tasks', JSON.stringify([])); // Если его нет, то создаем его с пустым массивом в качестве значения
}

createTaskModal(); // Создаём модальное окно для добавления или редактирования карточки
export const modal = document.getElementById("modal");
export const cancelModal = document.getElementById("task__cancel");
export const taskConfirm = document.getElementById("task__confirm");
// Получаем заголовки категорий
export const todoHeader = document.getElementById('todo__header');
export const progressHeader = document.getElementById('progress__header');
export const completedHeader = document.getElementById('completed__header');
// Получаем поля с именем, описанием и исполнителем карточки
export const modalTitle = document.getElementById('modal__title');
export const modalDescription = document.getElementById('modal__description');
export const modalUser = document.getElementById('modal__user');
// Получаем контейнеры категорий
export const todoContainer = document.getElementById('todo__container');
export const progressContainer = document.getElementById('progress__container');
export const completedContainer = document.getElementById('completed__container');
// Получаем кнопку удаления всех завершённых задач
export const deleteAll = document.getElementById('completed__delete-all');

// Создаём переменную для хранения редактируемой карточки (изначально null)
let editingCard = null;

addWindowEventListeners(); // Вызов функции для добавления обработчиков событий к окну
addEventListenerForDragAndDrop(); // Вызов функции для добавления обработчиков событий на Drag&Drop

// Добавляем слушатель событий на весь документ
document.body.addEventListener('click', function(e) {
  if (e.target.classList.contains('card__edit')) { // Проверка, кликнули ли по кнопке "Edit"
    modal.style.display = "block";  // Показываем модальное окно
    // Получаем ссылку на редактируемую карточку
    editingCard = e.target.closest('.card'); // Получаем ссылку на редактируемую карточку
    let card = e.target.closest('.card');
    // Заполняем поля модального окна значениями из карточки
    modalTitle.value = card.querySelector('.card__title').textContent; 
    modalDescription.value = card.querySelector('.card__description').textContent;
    // Получаем имя пользователя из карточки
    const userName = card.querySelector('.card__user').textContent;
    for (let i = 0; i < modalUser.options.length; i++) { // Находим соответствующего пользователя в селекторе модального окна и выбираем его
      if (modalUser.options[i].text === userName) {
        modalUser.selectedIndex = i;
        break; // Выходим из цикла, когда нашли нужного пользователя
      }
    }
  }
  if (e.target.classList.contains('todo__add')) { // Проверка, кликнули ли по кнопке "Add todo"
    // Удаляем статус редактируемой карточки
    editingCard = null;
    // Показываем модальное окно
    modal.style.display = "block";
  }
  if (e.target === taskConfirm) { // Проверка, кликнули ли по кнопке "Confirm" в модальном окне создания или редактирования карточки
    // Передаём пустую или редактируемую карточку
    taskModalConfirm(editingCard);
  }
  if (e.target === deleteAll) { // Проверка, кликнули ли по кнопке "Delete all" для удаления всех завершённых карточек
    // Запускаем функцию удаления всех завершённых карточек
    deleteAllCompleted();
  }
  if (e.target === cancelModal) { // Проверка, кликнули ли по кнопке "Cancel" в модальном окне создания или редактирования карточки
    // Закрываем модальное окно
    modal.style.display = "none";
    // Обнуляем модальное окно
    modalReset();
  }
  if (e.target.closest('.todo__header') === todoHeader) { // Схлопывание колонки ToDo
    hideTodo();
  }
  if (e.target.closest('.progress__header') === progressHeader) { // Схлопывание колонки In Progress
    hideProgress();
  }
  if (e.target.closest('.completed__header') === completedHeader) { // Схлопывание колонки Completed
    hideCompleted();
  }
  if (e.target.classList.contains('card__delete')) { // Проверка, кликнули ли по кнопке "Delete" для удаления карточки
    // Находим карточку, которую нужно удалить
    const card = e.target.closest('.card');
    // Получаем id карточки и преобразуем его в число
    const id = Number(card.dataset.id);
    // Удаляем карточку из DOM
    card.remove();
    // Получаем текущие задачи из Local Storage
    const tasks = getDate();
    // Удаляем задачу с соответствующим id из массива задач
    const updatedTasks = tasks.filter(task => task.id !== id);
    // Обновляем Local Storage с новым массивом задач
    setDate(updatedTasks);
    // Обновляем счётчики
    updateCounts();
    // Обновляем видимость кнопки удаления всех карточек
    updateDeleteButtonVisibility();
  }

  if (e.target.classList.contains('card__forward') || e.target.classList.contains('card__back')) {
    const card = e.target.closest('.card'); // Находим карточку, к которой относится кнопка (ближайший родительский элемент с классом 'card')
    const currentStatus = card.parentElement.id.replace('__container', ''); // Получаем текущий статус из ID родительского контейнера (удаляем '__container' из ID)

    // Определяем новый статус
    let newStatus; // Объявляем переменную для хранения нового статуса
    if (e.target.classList.contains('card__forward')) {// Если нажата кнопка "вперед"
      switch (currentStatus) { // Используем switch для определения нового статуса на основе текущего
        case 'todo':
          newStatus = 'progress'; // Если текущий статус 'todo', новый статус будет 'progress' 
          break; // Выходим из switch
        case 'progress':
          newStatus = 'completed'; // Если текущий статус 'progress', новый статус будет 'completed'
          break; // Выходим из switch
        // Для "completed" не нужно ничего делать, так как это конечный статус
      }
    } else if (e.target.classList.contains('card__back')) { // Если нажата кнопка "назад"
      switch (currentStatus) { // Используем switch для определения нового статуса на основе текущего
        case 'progress':
          newStatus = 'todo'; // Если текущий статус 'progress', новый статус будет 'todo'
          break; // Выходим из switch
        case 'completed':
          newStatus = 'progress'; // Если текущий статус 'completed', новый статус будет 'progress'
          break; // Выходим из switch
        // Для "todo" не нужно ничего делать, так как это начальный статус
      }
    }

    // Перемещаем карточку, если новый статус определен
    if (newStatus) { // Проверяем, был ли определен новый статус (т.е. не остался undefined)
      moveCard(card, newStatus); // Вызываем функцию moveCard, передавая карточку и новый статус
    }
  }
});

// Обработчик события нажатия на кнопку 'Escape'
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (modal.style.display === "block") {
      // Закрываем модальное окно
      modal.style.display = "none";
      // Обнуляем модальное окно
      modalReset();
    }
  }
});

// Объявляем переменную mouseDown и устанавливаем ее значение в false. Это будет использоваться для отслеживания состояния кнопки мыши (нужно, чтобы при выделении текста и перемещении курсора за пределы модального окна, окно не скрывалось)
let mouseDown = false;

document.body.addEventListener('mousedown', function(e) { // Добавляем обработчик событий для события 'mousedown'
  if (e.target === modal) { // Проверка, кликнули ли по модальному окну
    mouseDown = true; // Кнопка мыши была нажата внутри модального окна
  }
});

document.body.addEventListener('mouseup', function(e) { // Добавляем обработчик событий для события 'mouseup'
  if (e.target === modal && mouseDown) {  // Проверка, кликнули ли по модальному окну и была ли кнопка мыши нажата внутри модального окна
    modal.style.display = "none"; // Скрываем модальное окно
    modalReset(); // Сбрасываем состояние модального окна
  }
  mouseDown = false; // Возвращаем mouseDown обратно в false
});
