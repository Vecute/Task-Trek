// Модуль с функцией для перетаскивания карточек между разделами

// Импортируем сторонние модули
import {todoContainer, progressContainer, completedContainer} from './main.js'
import {updateCounts, createCard} from './loadTasks.js';
import {getDate, setDate} from './localStorage.js';
import {updateDeleteButtonVisibility} from './additionalFunctions.js';
import {createModal} from './modal.js';

export function moveCard(card, newStatus) {
    // Получаем ссылки на поля карточки и id
    const currentTitleElement = card.getElementsByClassName('card__title')[0]; // Получаем элемент заголовка карточки
    const currentTitle = currentTitleElement.innerHTML; // Извлекаем текст заголовка из элемента
    const currentDescriptionElement = card.getElementsByClassName('card__description')[0]; // Получаем элемент описания карточки
    const currentDescription = currentDescriptionElement.innerHTML; // Извлекаем текст описания из элемента
    const currentTimeElement = card.getElementsByClassName('card__time')[0]; // Получаем элемент времени карточки
    const currentTime = currentTimeElement.innerHTML; // Извлекаем текст времени из элемента
    const currentUserElement = card.getElementsByClassName('card__user')[0]; // Получаем элемент пользователя карточки
    const currentUser = currentUserElement.innerHTML; // Извлекаем текст имени пользователя из элемента
    const id = Number(card.dataset.id); // Получаем ID карточки из атрибута data-id и преобразуем его в число
  
    // Определяем контейнер в зависимости от нового статуса
    let newContainer; // Объявляем переменную для хранения контейнера, куда будет перемещена карточка
    if (newStatus === 'todo') {
      newContainer = todoContainer; // Если новый статус 'todo', назначаем контейнер todoContainer
    } else if (newStatus === 'progress') {
      newContainer = progressContainer; // Если новый статус 'progress', назначаем контейнер progressContainer 
    } else if (newStatus === 'completed') {
      newContainer = completedContainer; // Если новый статус 'completed', назначаем контейнер completedContainer
    } 
  
    // Проверка лимита для In Progress
    if (newStatus === 'progress' && progressContainer.children.length > 5) {
      createModal(
        'You have accumulated unfulfilled tasks. Are you sure you want to add another task?',
        function () {
          confirmModal.remove(); // Функция отмены: удаляем модальное окно
        },
        function () {
          confirmModal.remove(); // Функция подтверждения: удаляем модальное окно и переносим карточку
          moveCardToContainer();
        },
        'Progress' // Передаём класс для установки цветов модального окна
      );
    } else {
      moveCardToContainer(); // Если лимит не превышен или новый статус не 'progress', сразу перемещаем карточку
    }
  
    function moveCardToContainer() { // Функция для перемещения карточки в новый контейнер
      // Создаем новую карточку с помощью createCard()
      const newCardHtml = createCard(newStatus, { // Создаем HTML-код новой карточки с нужным статусом и данными
        id: id,
        title: currentTitle,
        description: currentDescription,
        time: currentTime,
        userName: currentUser
      });
  
      // Вставляем новую карточку в нужный контейнер
      newContainer.innerHTML = newContainer.innerHTML + newCardHtml;
  
      // Удаляем старую карточку
      card.remove();
  
      // Обновляем данные в Local Storage
      const tasks = getDate(); // Получаем массив задач из Local Storage
      const taskToUpdate = tasks.find(function (task) { // Находим задачу, которую нужно обновить
        return task.id === id; // Условие поиска: ID задачи совпадает с ID перемещаемой карточки
      });
      taskToUpdate.status = newStatus; // Обновляем статус задачи на новый
      setDate(tasks); // Сохраняем обновленный массив задач в Local Storage
  
      // Обновляем счетчики и видимость кнопки удаления
      updateCounts(); // Обновляем счетчики задач в каждом статусе
      updateDeleteButtonVisibility(); // Обновляем видимость кнопки "Удалить все"
    }
  }