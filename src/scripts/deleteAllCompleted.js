// Модуль с функцией удаления всех завершённых задач

// Импортируем сторонние модули
import {completedContainer} from './main.js'
import {updateCounts} from './loadTasks.js';
import {getDate, setDate} from './localStorage.js';
import {updateDeleteButtonVisibility} from './additionalFunctions.js';
import {createModal} from './modal.js';

// Функция для удаления всех завершенных задач
export function deleteAllCompleted () {
    createModal(
      'Are you sure you want to delete all completed tasks?', // Текст предупреждения в модальном окне
      () => { // Функция, выполняемая при нажатии кнопки "Cancel"
        // Скрываем модальное окно подтверждения без удаления задач
        confirmModal.remove();
      },
      () => { // Функция, выполняемая при нажатии кнопки "Confirm"
        // Получаем текущие задачи из Local Storage
        const tasks = getDate();
        // Фильтруем задачи, оставляя только те, у которых статус не 'completed'
        const updatedTasks = tasks.filter(task => task.status !== 'completed');
        // Обновляем Local Storage с новым массивом задач (без завершенных)
        setDate(updatedTasks);
        // Очищаем содержимое контейнера завершенных задач в DOM
        completedContainer.innerHTML = '';
        // Обновляем счетчики задач
        updateCounts();
        // Скрываем модальное окно подтверждения
        confirmModal.remove();
        // Обновляем видимость кнопки удаления всех карточек
        updateDeleteButtonVisibility();
      }, 'Completed' // Цвет категории для оформления модального окна
    );
}