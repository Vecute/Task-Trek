// Модуль с модальными окнами

// Импортируем сторонние модули
import {modal, modalTitle, modalDescription, modalUser, todoContainer} from './main.js'
import {updateCounts} from './loadTasks.js';
import {getDate, setDate} from './localStorage.js';
import {getUsers} from './additionalFunctions.js';

// Функция создания модального окна для добавления или редактирования карточки
export function createTaskModal () { // Функция создания модального окна для добавления или редактирования карточки
    const taskModal = document.createElement('div'); // Создаём div для модального окна
    // Добавляем HTML-структуру модального окна, включая поля ввода, кнопки и селектор
    taskModal.innerHTML = `<div class="modal__content"> 
    <div class="todo__card modal__card">
        <input class="modal__title" placeholder="Title" id="modal__title"></input>
        <textarea class="modal__description" rows="10" placeholder="Description" id="modal__description"></textarea>
        <div class="modal__bottom">
            <select class="modal__selector" name="modal__user" required="required" id="modal__user">
                <option value="0" selected>Select user</option>
            </select>
            <div class="card__buttons">
                <button class="todo__button" id="task__cancel"">Cancel</button>
                <button class="todo__button" id="task__confirm">Confirm</button>
            </div>
        </div>
    </div>
  </div>`;
    taskModal.classList.add('modal'); // Добавляем класс 'modal'
    taskModal.setAttribute('id', 'modal'); // Устанавливаем id 'modal'
    document.body.prepend(taskModal); // Добавляем модальное окно в начало body
    getUsers(); // Загружаем список пользователей для селектора
}

// Функция для обнуления модального окна
export function modalReset () {
    modalTitle.style.border = '1px solid #4e50d3'; // Возвращаем стандартный цвет рамки для названия
    modalDescription.style.border = '1px solid #4e50d3'; // Возвращаем стандартный цвет рамки для описания
    modalUser.style.border = '1px solid #4e50d3'; // Возвращаем стандартный цвет рамки для выбора пользователя
    // Обнуляем все элементы модального окна
    modalTitle.value = '';
    modalDescription.value = '';
    modalUser.value = 0;
}

// Функция для проверки введённых данных в модальном окне
export function validateInput(title, description, user) { 
    if (!title.trim()) { // Проверка названия на наличие непустого значения
      modalTitle.style.border = '2px solid red'; // Устанавливаем красную рамку для поля ввода названия
      return false; // Возвращаем false, если название пустое
    } else {
      modalTitle.style.border = '1px solid #4e50d3'; // Устанавливаем стандартную рамку, если название не пустое
    }
    if (!description.trim()) { // Проверка описания на наличие непустого значения
      modalDescription.style.border = '2px solid red'; // Устанавливаем красную рамку для поля ввода описания
      return false; // Возвращаем false, если описание пустое
    } else {
      modalDescription.style.border = '1px solid #4e50d3'; // Устанавливаем стандартную рамку, если описание не пустое
    }
    if (user == 0) { // Проверка выбора пользователя
      modalUser.style.border = '2px solid red'; // Устанавливаем красную рамку для селектора пользователя
      return false; // Возвращаем false, если пользователь не выбран
    } else {
      modalUser.style.border = '1px solid #4e50d3'; // Устанавливаем стандартную рамку, если пользователь выбран
    }
    return true; // Если все проверки пройдены возвращает true
}

// Функция для обработки подтверждения в модальном окне (создание или обновление карточки)
export function taskModalConfirm (editingCard) {
    const valueTitle = modalTitle.value; // Получаем значение из поля ввода названия
    const valueDescription = modalDescription.value; // Получаем значение из поля ввода описания
    const valueUser = modalUser.value; // Получаем значение из поля выбора пользователя (ID)
    // Вызов функции проверки на наличие введённых значений
    if (!validateInput(valueTitle, valueDescription, valueUser)) {
      return; // Останавливаем выполнение, если проверка не пройдена
    }
    const tasks = getDate(); // Получаем текущий список задач из localStorage
    if (editingCard) { // Проверяем, есть ли карточка в режиме редактирования
      // Обновляем текстовое содержимое элементов карточки с новыми значениями из модального окна
      editingCard.querySelector('.card__title').textContent = modalTitle.value;
      editingCard.querySelector('.card__description').textContent = modalDescription.value;
      editingCard.querySelector('.card__user').textContent = modalUser.options[modalUser.selectedIndex].text;
      // Получаем текущий список задач из localStorage
      const tasks = getDate();
      // Находим задачу, которую нужно обновить, по id карточки
      const taskToUpdate = tasks.find(task => task.id === Number(editingCard.dataset.id));
      if (taskToUpdate) { // Проверяем, нашли ли мы задачу
        // Обновляем свойства задачи с новыми значениями из модального окна
        taskToUpdate.title = modalTitle.value;
        taskToUpdate.description = modalDescription.value;
        taskToUpdate.userID = modalUser.value;
        taskToUpdate.userName = modalUser.options[modalUser.selectedIndex].text;
        setDate(tasks);
      }
      // Обновляем ID карточки
      editingCard.dataset.id = taskToUpdate.id;
    } else {
      const date = new Date(); // Получаем текущее время
      const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Преобразуем время в строку
      const id = Date.now(); // Генерируем уникальный идентификатор для задачи, используя текущее время в миллисекундах
      const userName = modalUser.options[modalUser.selectedIndex].text; // Забираем имя пользователя
      // Добавляем новую карточку в контейнер
      todoContainer.innerHTML += `<div class="card todo__card" data-id="${id}" draggable="true">
                                    <div class="card__buttons">
                                      <button class="card__edit todo__button">Edit</button>
                                      <button class="card__delete todo__button">Delete</button>
                                      <button class="card__forward todo__button">Start</button>
                                    </div>
                                    <h3 class="card__title">${valueTitle}</h3>
                                    <p class="card__description">${valueDescription}</p>
                                    <div class="card__bottom">
                                      <p class="card__user">${userName}</p>
                                      <p class="card__time">${timeString}</p>
                                    </div>
                                  </div>`;
      tasks.push({ // Добавляем данные новой задачи в массив
          id: id, // Устанавливаем идентификатор задачи
          time: timeString, // Устанавливаем время создания задачи
          title: valueTitle, // Устанавливаем название задачи
          description: valueDescription, // Устанавливаем описание задачи
          userID: modalUser.value, // Устанавливаем ответственного за задачу пользователя
          userName: modalUser.options[modalUser.selectedIndex].text,
          status: 'todo' // Устанавливаем статус задачи
      });
      setDate(tasks); // Сохраняем обновленный список задач в localStorage
    }
    // Закрываем модальное окно
    modal.style.display = "none";
    // Сбрасываем ссылку на редактируемую карточку
    editingCard = null; 
    // Обнуляем модальное окно
    modalReset();
    // Обновляем счётчики
    updateCounts();
}

// Функция для создания модального окна подтверждения
export function createModal(warningText, cancelFunction, confirmFunction, colorCategory) {
    // Создаем div-элемент для модального окна
    const confirmModal = document.createElement('div');
    // Устанавливаем id и class модального окна для удобства обращения
    confirmModal.id = 'confirmModal';
    confirmModal.className = 'modalConfirm';
    // Устанавливаем HTML-содержимое модального окна
    confirmModal.innerHTML = `
      <div class="modalConfirm__content">
        <div class="modalConfirm__container${colorCategory}">
          <p class="modalConfirm__warning">${warningText}</p>
          <div class="modalConfirm__bottom">
            <button id="modalConfirm__cancel" class="modalConfirm__button${colorCategory} cancel">Cancel</button>
            <button id="modalConfirm__confirm" class="modalConfirm__button${colorCategory}">Confirm</button>
          </div>
        </div>
      </div>`;
    // Показываем модальное окно подтверждения
    confirmModal.style.display = 'block';
    // Добавляем модальное окно в конец body
    document.body.appendChild(confirmModal);
    // Добавляем обработчики событий для кнопок "Confirm" и "Cancel"
    document.getElementById('modalConfirm__confirm').addEventListener('click', confirmFunction);
    document.getElementById('modalConfirm__cancel').addEventListener('click', cancelFunction);
    // Обработчик события клика для закрытия модального окна при клике вне его области
    document.addEventListener('click', (event) => {
      if (event.target == confirmModal) {
        confirmModal.remove();
      }
    })
    // Обработчик события нажатия на кнопку 'Escape' в поле ввода задачи
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        confirmModal.remove();
      }
    });
}