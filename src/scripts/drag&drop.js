// Модуль с функциями для работы Drag&Drop

// Импортируем сторонние модули
import {moveCard} from './cardTransfer.js';

let draggedCardId = null; // Глобальная переменная для хранения ID перетаскиваемой карточки

// Функция для добавления обработчиков событий на Drag&Drop
export function addEventListenerForDragAndDrop() {
  // Добавляем обработчики событий для drag and drop
  document.addEventListener('dragstart', (e) => {
     // Получаем ID карточки из атрибута data-id
    draggedCardId = e.target.dataset.id;
    // Добавляем класс 'dragging' для визуального эффекта
    e.target.classList.add('dragging');
  });

  document.addEventListener('dragover', (e) => {
    // Разрешаем drop, чтобы можно было поместить карточку в это место
    e.preventDefault();
  });

  document.addEventListener('drop', (e) => {
    if (e.target.closest('.card__container')) { // Проверяем, был ли drop внутри контейнера карточек
      // Получаем id контейнера, в который была перемещена карточка
      const dropTargetId = e.target.closest('.card__container').id;

      // Получаем ссылку на перетаскиваемую карточку по её id
      const card = document.querySelector(`[data-id="${draggedCardId}"]`);

      // Определяем новый статус на основе id контейнера
      let newStatus;
      switch (dropTargetId) { // Используем switch для определения нового статуса на основе ID контейнера
        case 'todo__container':
          newStatus = 'todo';
          break;
        case 'progress__container':
          newStatus = 'progress';
          break;
        case 'completed__container':
          newStatus = 'completed';
          break;
      }

      // Вызываем функцию moveCard с новым статусом
      moveCard(card, newStatus);

      // Удаляем класс 'dragging', чтобы вернуть карточке исходный вид
      card.classList.remove('dragging');
    }
  });

  document.addEventListener('dragend', (e) => {
    // Удаляем класс 'dragging', чтобы вернуть карточке исходный вид
    e.target.classList.remove('dragging');
  });
}