// Модуль с функциями для работы Drag&Drop

// Импортируем сторонние модули
import {moveToTodo, moveToInProgress, moveToCompleted} from './cardTransfer.js';

let draggedCardId = null
// Функции для добавления обработчиков событий на Drag&Drop
export function addEventListenerForDragAndDrop() {
    // Добавляем обработчики событий для drag and drop
    document.addEventListener('dragstart', (e) => {
      // Сохраняем id перетаскиваемой карточки
      draggedCardId = e.target.dataset.id;
      // Добавляем класс 'dragging' для визуального эффекта
      e.target.classList.add('dragging');
    });
  
    document.addEventListener('dragover', (e) => { // Обработчик события перетаскивания над элементом
      // Разрешаем drop, чтобы можно было поместить карточку в это место
      e.preventDefault();
    });
  
    document.addEventListener('drop', (e) => { // Обработчик события отпускания карточки
      if (e.target.closest('.card__container')) { // Проверяем было ли карточка отпущена в один из контейнеров
      // Получаем id контейнера, в который была перемещена карточка
      const dropTargetId = e.target.closest('.card__container').id;
      // Получаем ссылку на перетаскиваемую карточку по её id
      const card = document.querySelector(`[data-id="${draggedCardId}"]`);
  
      // Проверяем, куда была перемещена карточка, и вызываем соответствующую функцию перемещения
      if (dropTargetId === 'todo__container' && !card.classList.contains('todo__card')) { // Дополнительно проверяем, чтобы нельзя было поместить карточку в изначальный раздел
          moveToTodo(card);
        } else if (dropTargetId === 'progress__container' && !card.classList.contains('progress__card')) {
          moveToInProgress(card);
        } else if (dropTargetId === 'completed__container' && !card.classList.contains('completed__card')) {
          moveToCompleted(card);
      }
      // Удаляем класс 'dragging', чтобы вернуть карточке исходный вид
      card.classList.remove('dragging');
      }
    });
  
    document.addEventListener('dragend', (e) => {
      // Удаляем класс 'dragging', чтобы вернуть карточке исходный вид
      e.target.classList.remove('dragging');
    });
  }