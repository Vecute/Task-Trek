// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/localStorage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDate = getDate;
exports.setDate = setDate;
// Модуль с функциями для работы с localStorage

// Функции для работы с localStorage: сохранение и получение данных
function setDate(data) {
  // Сразу экспортируем функцию
  localStorage.setItem('tasks', JSON.stringify(data)); // Сохраняем данные в localStorage с ключом 'tasks', предварительно преобразовав их в формат JSON
}
function getDate() {
  // Сразу экспортируем функцию
  return JSON.parse(localStorage.getItem('tasks')); // Получаем данные из localStorage с ключом 'tasks' и преобразуем их из формата JSON в JavaScript-объект
}
},{}],"scripts/additionalFunctions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addWhiteLine = addWhiteLine;
exports.getUsers = getUsers;
exports.updateDeleteButtonVisibility = updateDeleteButtonVisibility;
var _main = require("./main.js");
// Модуль с дополнительными функциями

// Импортируем сторонние модули

// Функция для получения списка пользователей с API 
function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users') // Отправляем запрос на API для получения списка пользователей
  .then(function (response) {
    return response.json();
  }) // Преобразуем ответ сервера в JSON формат
  .then(function (users) {
    // Обрабатываем полученный список пользователей
    var selector = document.querySelector('.modal__selector'); // Находим селектор (список выбора) в DOM по классу 'modal__selector'
    while (selector.firstChild) {
      // Удаляем все текущие опции из селектора
      selector.firstChild.remove();
    }

    // Создаем статическую опцию "Select user" и добавляем её в селектор
    var defaultOption = document.createElement('option');
    defaultOption.value = 0;
    defaultOption.textContent = 'Select user';
    selector.appendChild(defaultOption);
    users.forEach(function (user) {
      // Для каждого пользователя создаем новую опцию в селекторе
      var option = document.createElement('option');
      option.value = user.id; // Устанавливаем значение опции как id пользователя
      option.textContent = user.name; // Устанавливаем текст опции как имя пользователя
      selector.appendChild(option); // Добавляем опцию в селектор
    });
  });
}

// Функция для обновления видимости кнопки "Удалить все" в зависимости от наличия завершенных задач
function updateDeleteButtonVisibility() {
  if (_main.completedContainer.children.length === 0) {
    // Если в completedContainer нету карточек, скрываем кнопку deleteAll
    _main.deleteAll.style.display = 'none';
  } else {
    _main.deleteAll.style.display = '';
  }
}

// Функция для добавления белой линии в пустой контейнер TODO
function addWhiteLine() {
  if (_main.todoContainer.children.length == 0) {
    // Проверяем, есть ли карточки в контейнере TODO
    _main.todoContainer.classList.add("white-line"); // Если карточек нет, добавляем класс 'white-line' к контейнеру
  } else {
    _main.todoContainer.classList.remove("white-line"); // Если карточки есть, удаляем класс 'white-line' из контейнера
  }
}
},{"./main.js":"scripts/main.js"}],"scripts/loadTasks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadTasks = loadTasks;
exports.updateCounts = updateCounts;
var _main = require("./main.js");
var _localStorage = require("./localStorage.js");
var _additionalFunctions = require("./additionalFunctions.js");
// Модуль с функциями загрузки и обновления списка задач

// Импортируем сторонние модули

// Функция для загрузки задач из localStorage и отображения их на странице
function loadTasks() {
  var tasks = (0, _localStorage.getDate)(); // Получаем текущий список задач из localStorage
  // Очищаем контейнеры карточек перед добавлением новых
  _main.todoContainer.innerHTML = '';
  _main.progressContainer.innerHTML = '';
  _main.completedContainer.innerHTML = '';
  tasks.forEach(function (task) {
    // Перебираем каждую задачу в списке
    if (task.status === 'todo') {
      _main.todoContainer.innerHTML += createCard('todo', task); // Добавляем карточку в контейнер TODO
    } else if (task.status === 'progress') {
      _main.progressContainer.innerHTML += createCard('progress', task); // Добавляем карточку в контейнер PROGRESS
    } else if (task.status === 'completed') {
      _main.completedContainer.innerHTML += createCard('completed', task); // Добавляем карточку в контейнер COMPLETED
    }
  });
  updateCounts(); // Обновляем счетчики задач
  // Обновляем видимость кнопки удаления всех карточек
  (0, _additionalFunctions.updateDeleteButtonVisibility)();
}

// Функция для обновления счетчиков задач в категориях
function updateCounts() {
  // Получаем количество всех задач
  var todoCountLength = _main.todoContainer.children.length;
  var progressCountLength = _main.progressContainer.children.length;
  var completedCountLength = _main.completedContainer.children.length;
  // Получаем текстовые поля счётчиков
  var todoCount = document.getElementById('todo__count');
  var progressCount = document.getElementById('progress__count');
  var completedCount = document.getElementById('completed__count');
  // Устанавливаем нужные счётчики
  todoCount.textContent = todoCountLength;
  progressCount.textContent = progressCountLength;
  completedCount.textContent = completedCountLength;
  // Проверяем содержимое контейнера TODO для отрисовки белой линии
  (0, _additionalFunctions.addWhiteLine)();
}
function createCard(status, _ref) {
  var id = _ref.id,
    title = _ref.title,
    description = _ref.description,
    time = _ref.time,
    userName = _ref.userName;
  // Функция для создания HTML-кода карточки задачи (используем деструктуризацию)
  return "\n    <div class=\"card ".concat(status, "__card\" data-id=\"").concat(id, "\" draggable=\"true\">\n      <div class=\"card__buttons\">\n        ").concat(status === 'todo' ? // Если статус 'todo', добавляем кнопки Edit, Delete, Start 
  "\n            <button class=\"card__edit todo__button\">Edit</button>\n            <button class=\"card__delete todo__button\">Delete</button>\n            <button class=\"card__forward todo__button\">Start</button>\n          " : status === 'progress' ? // Если статус 'progress', добавляем кнопки Back, Complete 
  "\n            <button class=\"card__back progress__button\">Back</button>\n            <button class=\"card__forward progress__button\">Complete</button>\n          " : status === 'completed' ? // Если статус 'completed', добавляем кнопки Back, Delete
  "\n            <button class=\"card__back completed__button\">Back</button>\n            <button class=\"card__delete completed__button\">Delete</button>\n          " : '' // Если статус не распознан, не добавляем кнопки
  , "\n      </div>\n      <h3 class=\"card__title\">").concat(title, "</h3>\n      <p class=\"card__description\">").concat(description, "</p>\n      <div class=\"card__bottom\">\n        <p class=\"card__user\">").concat(userName, "</p>\n        <p class=\"card__time\">").concat(time, "</p>\n      </div>\n    </div>\n  ");
}
},{"./main.js":"scripts/main.js","./localStorage.js":"scripts/localStorage.js","./additionalFunctions.js":"scripts/additionalFunctions.js"}],"scripts/time.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showTime = showTime;
// Модуль с функцией отображения времени

// Функция отображения текущего времени
function showTime() {
  // Получаем текущую дату и время
  var date = new Date();
  // Преобразуем время в строку
  var timeString = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
  // Помещаем время в элемент с id clock
  document.getElementById("clock").innerText = timeString;
  // Запускаем функцию showTime каждую секунду
  setTimeout(showTime, 1000);
}
},{}],"scripts/eventHandlers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addWindowEventListeners = addWindowEventListeners;
var _loadTasks = require("./loadTasks.js");
var _time = require("./time.js");
// Модуль с функцией добавления слушателей к объекту window

// Импортируем сторонние модули

// Функция для добавления обработчиков событий к окну (загрузка страницы и изменение localStorage)
function addWindowEventListeners() {
  window.addEventListener("load", function () {
    // Добавляем обработчик события загрузки страницы, который вызывает функцию loadTasks и showtime
    (0, _loadTasks.loadTasks)();
    (0, _time.showTime)();
  });
  window.addEventListener("storage", function () {
    // Добавляем обработчик события на все изменения, для отображения изменений в другой вкладке , который вызывает функцию loadTasks
    (0, _loadTasks.loadTasks)();
  });
}
},{"./loadTasks.js":"scripts/loadTasks.js","./time.js":"scripts/time.js"}],"scripts/modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createModal = createModal;
exports.createTaskModal = createTaskModal;
exports.modalReset = modalReset;
exports.taskModalConfirm = taskModalConfirm;
exports.validateInput = validateInput;
var _main = require("./main.js");
var _loadTasks = require("./loadTasks.js");
var _localStorage = require("./localStorage.js");
var _additionalFunctions = require("./additionalFunctions.js");
// Модуль с модальными окнами

// Импортируем сторонние модули

// Функция создания модального окна для добавления или редактирования карточки
function createTaskModal() {
  // Функция создания модального окна для добавления или редактирования карточки
  var taskModal = document.createElement('div'); // Создаём div для модального окна
  // Добавляем HTML-структуру модального окна, включая поля ввода, кнопки и селектор
  taskModal.innerHTML = "<div class=\"modal__content\"> \n    <div class=\"card todo__card modal__card\">\n        <input class=\"modal__title\" placeholder=\"Title\" id=\"modal__title\"></input>\n        <textarea class=\"modal__description\" rows=\"10\" placeholder=\"Description\" id=\"modal__description\"></textarea>\n        <div class=\"modal__bottom\">\n            <select class=\"modal__selector\" name=\"modal__user\" required=\"required\" id=\"modal__user\">\n                <option value=\"0\" selected>Select user</option>\n            </select>\n            <div class=\"card__buttons\">\n                <button class=\"todo__button\" id=\"task__cancel\"\">Cancel</button>\n                <button class=\"todo__button\" id=\"task__confirm\">Confirm</button>\n            </div>\n        </div>\n    </div>\n  </div>";
  taskModal.classList.add('modal'); // Добавляем класс 'modal'
  taskModal.setAttribute('id', 'modal'); // Устанавливаем id 'modal'
  document.body.prepend(taskModal); // Добавляем модальное окно в начало body
  (0, _additionalFunctions.getUsers)(); // Загружаем список пользователей для селектора
}

// Функция для обнуления модального окна
function modalReset() {
  _main.modalTitle.style.border = '1px solid #4e50d3'; // Возвращаем стандартный цвет рамки для названия
  _main.modalDescription.style.border = '1px solid #4e50d3'; // Возвращаем стандартный цвет рамки для описания
  _main.modalUser.style.border = '1px solid #4e50d3'; // Возвращаем стандартный цвет рамки для выбора пользователя
  // Обнуляем все элементы модального окна
  _main.modalTitle.value = '';
  _main.modalDescription.value = '';
  _main.modalUser.value = 0;
}

// Функция для проверки введённых данных в модальном окне
function validateInput(title, description, user) {
  if (!title.trim()) {
    // Проверка названия на наличие непустого значения
    _main.modalTitle.style.border = '2px solid red'; // Устанавливаем красную рамку для поля ввода названия
    return false; // Возвращаем false, если название пустое
  } else {
    _main.modalTitle.style.border = '1px solid #4e50d3'; // Устанавливаем стандартную рамку, если название не пустое
  }
  if (!description.trim()) {
    // Проверка описания на наличие непустого значения
    _main.modalDescription.style.border = '2px solid red'; // Устанавливаем красную рамку для поля ввода описания
    return false; // Возвращаем false, если описание пустое
  } else {
    _main.modalDescription.style.border = '1px solid #4e50d3'; // Устанавливаем стандартную рамку, если описание не пустое
  }
  if (user == 0) {
    // Проверка выбора пользователя
    _main.modalUser.style.border = '2px solid red'; // Устанавливаем красную рамку для селектора пользователя
    return false; // Возвращаем false, если пользователь не выбран
  } else {
    _main.modalUser.style.border = '1px solid #4e50d3'; // Устанавливаем стандартную рамку, если пользователь выбран
  }
  return true; // Если все проверки пройдены возвращает true
}

// Функция для обработки подтверждения в модальном окне (создание или обновление карточки)
function taskModalConfirm(editingCard) {
  var valueTitle = _main.modalTitle.value; // Получаем значение из поля ввода названия
  var valueDescription = _main.modalDescription.value; // Получаем значение из поля ввода описания
  var valueUser = _main.modalUser.value; // Получаем значение из поля выбора пользователя (ID)
  // Вызов функции проверки на наличие введённых значений
  if (!validateInput(valueTitle, valueDescription, valueUser)) {
    return; // Останавливаем выполнение, если проверка не пройдена
  }
  var tasks = (0, _localStorage.getDate)(); // Получаем текущий список задач из localStorage
  if (editingCard) {
    // Проверяем, есть ли карточка в режиме редактирования
    // Обновляем текстовое содержимое элементов карточки с новыми значениями из модального окна
    editingCard.querySelector('.card__title').textContent = _main.modalTitle.value;
    editingCard.querySelector('.card__description').textContent = _main.modalDescription.value;
    editingCard.querySelector('.card__user').textContent = _main.modalUser.options[_main.modalUser.selectedIndex].text;
    // Получаем текущий список задач из localStorage
    var _tasks = (0, _localStorage.getDate)();
    // Находим задачу, которую нужно обновить, по id карточки
    var taskToUpdate = _tasks.find(function (task) {
      return task.id === Number(editingCard.dataset.id);
    });
    if (taskToUpdate) {
      // Проверяем, нашли ли мы задачу
      // Обновляем свойства задачи с новыми значениями из модального окна
      taskToUpdate.title = _main.modalTitle.value;
      taskToUpdate.description = _main.modalDescription.value;
      taskToUpdate.userID = _main.modalUser.value;
      taskToUpdate.userName = _main.modalUser.options[_main.modalUser.selectedIndex].text;
      (0, _localStorage.setDate)(_tasks);
    }
    // Обновляем ID карточки
    editingCard.dataset.id = taskToUpdate.id;
  } else {
    var date = new Date(); // Получаем текущее время
    var timeString = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    }); // Преобразуем время в строку
    var id = Date.now(); // Генерируем уникальный идентификатор для задачи, используя текущее время в миллисекундах
    var userName = _main.modalUser.options[_main.modalUser.selectedIndex].text; // Забираем имя пользователя
    // Добавляем новую карточку в контейнер
    _main.todoContainer.innerHTML += "<div class=\"card todo__card\" data-id=\"".concat(id, "\" draggable=\"true\">\n                                    <div class=\"card__buttons\">\n                                      <button class=\"card__edit todo__button\">Edit</button>\n                                      <button class=\"card__delete todo__button\">Delete</button>\n                                      <button class=\"card__forward todo__button\">Start</button>\n                                    </div>\n                                    <h3 class=\"card__title\">").concat(valueTitle, "</h3>\n                                    <p class=\"card__description\">").concat(valueDescription, "</p>\n                                    <div class=\"card__bottom\">\n                                      <p class=\"card__user\">").concat(userName, "</p>\n                                      <p class=\"card__time\">").concat(timeString, "</p>\n                                    </div>\n                                  </div>");
    tasks.push({
      // Добавляем данные новой задачи в массив
      id: id,
      // Устанавливаем идентификатор задачи
      time: timeString,
      // Устанавливаем время создания задачи
      title: valueTitle,
      // Устанавливаем название задачи
      description: valueDescription,
      // Устанавливаем описание задачи
      userID: _main.modalUser.value,
      // Устанавливаем ответственного за задачу пользователя
      userName: _main.modalUser.options[_main.modalUser.selectedIndex].text,
      status: 'todo' // Устанавливаем статус задачи
    });
    (0, _localStorage.setDate)(tasks); // Сохраняем обновленный список задач в localStorage
  }
  // Закрываем модальное окно
  _main.modal.style.display = "none";
  // Сбрасываем ссылку на редактируемую карточку
  editingCard = null;
  // Обнуляем модальное окно
  modalReset();
  // Обновляем счётчики
  (0, _loadTasks.updateCounts)();
}

// Функция для создания модального окна подтверждения
function createModal(warningText, cancelFunction, confirmFunction, colorCategory) {
  // Создаем div-элемент для модального окна
  var confirmModal = document.createElement('div');
  // Устанавливаем id и class модального окна для удобства обращения
  confirmModal.id = 'confirmModal';
  confirmModal.className = 'modalConfirm';
  // Устанавливаем HTML-содержимое модального окна
  confirmModal.innerHTML = "\n      <div class=\"modalConfirm__content\">\n        <div class=\"modalConfirm__container".concat(colorCategory, "\">\n          <p class=\"modalConfirm__warning\">").concat(warningText, "</p>\n          <div class=\"modalConfirm__bottom\">\n            <button id=\"modalConfirm__cancel\" class=\"modalConfirm__button").concat(colorCategory, " cancel\">Cancel</button>\n            <button id=\"modalConfirm__confirm\" class=\"modalConfirm__button").concat(colorCategory, "\">Confirm</button>\n          </div>\n        </div>\n      </div>");
  // Показываем модальное окно подтверждения
  confirmModal.style.display = 'block';
  // Добавляем модальное окно в конец body
  document.body.appendChild(confirmModal);
  // Добавляем обработчики событий для кнопок "Confirm" и "Cancel"
  document.getElementById('modalConfirm__confirm').addEventListener('click', confirmFunction);
  document.getElementById('modalConfirm__cancel').addEventListener('click', cancelFunction);
  // Обработчик события клика для закрытия модального окна при клике вне его области
  document.addEventListener('click', function (event) {
    if (event.target == confirmModal) {
      confirmModal.remove();
    }
  });
}
},{"./main.js":"scripts/main.js","./loadTasks.js":"scripts/loadTasks.js","./localStorage.js":"scripts/localStorage.js","./additionalFunctions.js":"scripts/additionalFunctions.js"}],"scripts/cardTransfer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveToCompleted = moveToCompleted;
exports.moveToInProgress = moveToInProgress;
exports.moveToTodo = moveToTodo;
var _main = require("./main.js");
var _loadTasks = require("./loadTasks.js");
var _localStorage = require("./localStorage.js");
var _additionalFunctions = require("./additionalFunctions.js");
var _modal = require("./modal.js");
// Модуль с функциями для перетаскивания карточек между разделами

// Импортируем сторонние модули

function moveToTodo(card) {
  // Функция перемещения карточки в ToDo
  // Получаем ссылки на поля карточки и id
  var currentTitle = card.getElementsByClassName('card__title')[0].innerHTML;
  var currentDescription = card.getElementsByClassName('card__description')[0].innerHTML;
  var currentTime = card.getElementsByClassName('card__time')[0].innerHTML;
  var currentUser = card.getElementsByClassName('card__user')[0].innerHTML;
  var id = Number(card.dataset.id);
  // Создаём такую же карточку в новом разделе
  _main.todoContainer.innerHTML += "<div class=\"card todo__card\" data-id=\"".concat(id, "\" draggable=\"true\">\n                                  <div class=\"card__buttons\">\n                                    <button class=\"card__edit todo__button\">Edit</button>\n                                    <button class=\"card__delete todo__button\">Delete</button>\n                                    <button class=\"card__forward todo__button\">Start</button>\n                                  </div>\n                                  <h3 class=\"card__title\">").concat(currentTitle, "</h3>\n                                  <p class=\"card__description\">").concat(currentDescription, "</p>\n                                  <div class=\"card__bottom\">\n                                    <p class=\"card__user\">").concat(currentUser, "</p>\n                                    <p class=\"card__time\">").concat(currentTime, "</p>\n                                  </div>\n                                </div>");
  // Удаляем старую карточку
  card.remove(card);
  // Получаем текущие задачи из Local Storage
  var tasks = (0, _localStorage.getDate)();
  // Находим задачу, которую нужно обновить
  var taskToUpdate = tasks.find(function (task) {
    return task.id === id;
  });
  // Обновляем поле 'status'
  taskToUpdate.status = 'todo';
  // Обновляем Local Storage с новым массивом задач
  (0, _localStorage.setDate)(tasks);
  // Обновляем счётчики
  (0, _loadTasks.updateCounts)();
  // Обновляем видимость кнопки удаления всех карточек
  (0, _additionalFunctions.updateDeleteButtonVisibility)();
}
;
function moveToInProgress(card) {
  // Функция перемещения карточки в In Progress
  var cancelFunction = function cancelFunction() {
    // Функция для отмены в модальном окне
    confirmModal.remove(); // Закрываем модальное окно
  };
  var confirmFunction = function confirmFunction() {
    // Функция для подтверждения в модальном окне
    confirmModal.remove(); // Закрываем модальное окно
    toProgressWhatever(); // Перемещаем карточку, если подтвердили превышение лимита
  };
  if (_main.progressContainer.children.length > 5) {
    // Если в активных задачах уже 6 задач
    // Создаем модальное окно с подтверждением
    (0, _modal.createModal)('You have accumulated unfulfilled tasks. Are you sure you want to add another task?', cancelFunction, confirmFunction, 'Progress');
  } else {
    toProgressWhatever(); // Перемещаем карточку если лимита нету
  }
  function toProgressWhatever() {
    // Функция для продолжения перемещения в колонку In Progress
    // Получаем ссылки на поля карточки и id
    var currentTitle = card.getElementsByClassName('card__title')[0].innerHTML;
    var currentDescription = card.getElementsByClassName('card__description')[0].innerHTML;
    var currentTime = card.getElementsByClassName('card__time')[0].innerHTML;
    var currentUser = card.getElementsByClassName('card__user')[0].innerHTML;
    var id = Number(card.dataset.id);
    // Создаём такую же карточку в новом разделе
    _main.progressContainer.innerHTML += "<div class=\"card progress__card\" data-id=\"".concat(id, "\" draggable=\"true\">\n                                        <div class=\"card__buttons\">\n                                          <button class=\"card__back progress__button\">Back</button>\n                                          <button class=\"card__forward progress__button\">Complete</button>\n                                        </div>\n                                        <h3 class=\"card__title\">").concat(currentTitle, "</h3>\n                                        <p class=\"card__description\">").concat(currentDescription, "</p>\n                                        <div class=\"card__bottom\">\n                                          <p class=\"card__user\">").concat(currentUser, "</p>\n                                          <p class=\"card__time\">").concat(currentTime, "</p>\n                                        </div>\n                                      </div>");
    // Удаляем старую карточку
    card.remove(card);
    // Получаем текущие задачи из Local Storage
    var tasks = (0, _localStorage.getDate)();
    // Находим задачу, которую нужно обновить
    var taskToUpdate = tasks.find(function (task) {
      return task.id === id;
    });
    // Обновляем поле 'status'
    taskToUpdate.status = 'progress';
    // Обновляем Local Storage с новым массивом задач
    (0, _localStorage.setDate)(tasks);
    // Обновляем счётчики
    (0, _loadTasks.updateCounts)();
    // Обновляем видимость кнопки удаления всех карточек
    (0, _additionalFunctions.updateDeleteButtonVisibility)();
  }
}
function moveToCompleted(card) {
  // Функция перемещения карточки в Completed
  // Получаем ссылки на поля карточки и id
  var currentTitle = card.getElementsByClassName('card__title')[0].innerHTML;
  var currentDescription = card.getElementsByClassName('card__description')[0].innerHTML;
  var currentTime = card.getElementsByClassName('card__time')[0].innerHTML;
  var currentUser = card.getElementsByClassName('card__user')[0].innerHTML;
  var id = Number(card.dataset.id);
  // Создаём такую же карточку в новом разделе
  _main.completedContainer.innerHTML += "<div class=\"card completed__card\" data-id=\"".concat(id, "\" draggable=\"true\">\n                                      <div class=\"card__buttons\">\n                                        <button class=\"card__back completed__button\">Back</button>\n                                        <button class=\"card__delete completed__button\">Delete</button>\n                                      </div>\n                                      <h3 class=\"card__title\">").concat(currentTitle, "</h3>\n                                      <p class=\"card__description\">").concat(currentDescription, "</p>\n                                      <div class=\"card__bottom\">\n                                        <p class=\"card__user\">").concat(currentUser, "</p>\n                                        <p class=\"card__time\">").concat(currentTime, "</p>\n                                      </div>\n                                    </div>");
  // Удаляем старую карточку
  card.remove(card);
  // Получаем текущие задачи из Local Storage
  var tasks = (0, _localStorage.getDate)();
  // Находим задачу, которую нужно обновить
  var taskToUpdate = tasks.find(function (task) {
    return task.id === id;
  });
  // Обновляем поле 'status'
  taskToUpdate.status = 'completed';
  // Обновляем Local Storage с новым массивом задач
  (0, _localStorage.setDate)(tasks);
  // Обновляем счётчики
  (0, _loadTasks.updateCounts)();
  // Обновляем видимость кнопки удаления всех карточек
  (0, _additionalFunctions.updateDeleteButtonVisibility)();
}
;
},{"./main.js":"scripts/main.js","./loadTasks.js":"scripts/loadTasks.js","./localStorage.js":"scripts/localStorage.js","./additionalFunctions.js":"scripts/additionalFunctions.js","./modal.js":"scripts/modal.js"}],"scripts/drag&drop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addEventListenerForDragAndDrop = addEventListenerForDragAndDrop;
var _cardTransfer = require("./cardTransfer.js");
// Модуль с функциями для работы Drag&Drop

// Импортируем сторонние модули

var draggedCardId = null;
// Функции для добавления обработчиков событий на Drag&Drop
function addEventListenerForDragAndDrop() {
  // Добавляем обработчики событий для drag and drop
  document.addEventListener('dragstart', function (e) {
    // Сохраняем id перетаскиваемой карточки
    draggedCardId = e.target.dataset.id;
    // Добавляем класс 'dragging' для визуального эффекта
    e.target.classList.add('dragging');
  });
  document.addEventListener('dragover', function (e) {
    // Обработчик события перетаскивания над элементом
    // Разрешаем drop, чтобы можно было поместить карточку в это место
    e.preventDefault();
  });
  document.addEventListener('drop', function (e) {
    // Обработчик события отпускания карточки
    // Получаем id контейнера, в который была перемещена карточка
    var dropTargetId = e.target.closest('.card__container').id;
    // Получаем ссылку на перетаскиваемую карточку по её id
    var card = document.querySelector("[data-id=\"".concat(draggedCardId, "\"]"));

    // Проверяем, куда была перемещена карточка, и вызываем соответствующую функцию перемещения
    if (dropTargetId === 'todo__container' && !card.classList.contains('todo__card')) {
      // Дополнительно проверяем, чтобы нельзя было поместить карточку в изначальный раздел
      (0, _cardTransfer.moveToTodo)(card);
    } else if (dropTargetId === 'progress__container' && !card.classList.contains('progress__card')) {
      (0, _cardTransfer.moveToInProgress)(card);
    } else if (dropTargetId === 'completed__container' && !card.classList.contains('completed__card')) {
      (0, _cardTransfer.moveToCompleted)(card);
    }

    // Удаляем класс 'dragging', чтобы вернуть карточке исходный вид
    card.classList.remove('dragging');
  });
  document.addEventListener('dragend', function (e) {
    // Удаляем класс 'dragging', чтобы вернуть карточке исходный вид
    e.target.classList.remove('dragging');
  });
}
},{"./cardTransfer.js":"scripts/cardTransfer.js"}],"scripts/hideCategories.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideCompleted = hideCompleted;
exports.hideProgress = hideProgress;
exports.hideTodo = hideTodo;
// Модуль с функциями для схлопывания кнопок

// Функции для схлопывания кнопок
function hideTodo() {
  // Получаем элементы, которые нужно скрыть
  var cardContainer = document.body.getElementsByClassName('card__container')[0];
  var categoryButton = document.body.getElementsByClassName('category__button')[0];
  var todo = document.body.querySelector('.todo');
  // Скрываем или показываем элементы
  cardContainer.classList.toggle("hidden");
  categoryButton.classList.toggle("hidden");
  todo.classList.toggle("collapsed");
}
function hideProgress() {
  // Получаем элементы, которые нужно скрыть
  var cardContainer = document.body.getElementsByClassName('card__container')[1];
  var progress = document.body.querySelector('.progress');
  // Скрываем или показываем элементы
  cardContainer.classList.toggle("hidden");
  progress.classList.toggle("collapsed");
}
function hideCompleted() {
  // Получаем элементы, которые нужно скрыть
  var cardContainer = document.body.getElementsByClassName('card__container')[2];
  var categoryButton = document.body.getElementsByClassName('category__button')[1];
  var completed = document.body.querySelector('.completed');
  // Скрываем или показываем элементы
  cardContainer.classList.toggle("hidden");
  categoryButton.classList.toggle("hidden");
  completed.classList.toggle("collapsed");
}
},{}],"scripts/deleteAllCompleted.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAllCompleted = deleteAllCompleted;
var _main = require("./main.js");
var _loadTasks = require("./loadTasks.js");
var _localStorage = require("./localStorage.js");
var _additionalFunctions = require("./additionalFunctions.js");
var _modal = require("./modal.js");
// Модуль с функцией удаления всех завершённых задач

// Импортируем сторонние модули

// Функция для удаления всех завершенных задач
function deleteAllCompleted() {
  (0, _modal.createModal)('Are you sure you want to delete all completed tasks?',
  // Текст предупреждения в модальном окне
  function () {
    // Функция, выполняемая при нажатии кнопки "Cancel"
    // Скрываем модальное окно подтверждения без удаления задач
    confirmModal.remove();
  }, function () {
    // Функция, выполняемая при нажатии кнопки "Confirm"
    // Получаем текущие задачи из Local Storage
    var tasks = (0, _localStorage.getDate)();
    // Фильтруем задачи, оставляя только те, у которых статус не 'completed'
    var updatedTasks = tasks.filter(function (task) {
      return task.status !== 'completed';
    });
    // Обновляем Local Storage с новым массивом задач (без завершенных)
    (0, _localStorage.setDate)(updatedTasks);
    // Очищаем содержимое контейнера завершенных задач в DOM
    _main.completedContainer.innerHTML = '';
    // Обновляем счетчики задач
    (0, _loadTasks.updateCounts)();
    // Скрываем модальное окно подтверждения
    confirmModal.remove();
    // Обновляем видимость кнопки удаления всех карточек
    (0, _additionalFunctions.updateDeleteButtonVisibility)();
  }, 'Completed' // Цвет категории для оформления модального окна
  );
}
},{"./main.js":"scripts/main.js","./loadTasks.js":"scripts/loadTasks.js","./localStorage.js":"scripts/localStorage.js","./additionalFunctions.js":"scripts/additionalFunctions.js","./modal.js":"scripts/modal.js"}],"scripts/main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todoHeader = exports.todoContainer = exports.taskConfirm = exports.progressHeader = exports.progressContainer = exports.modalUser = exports.modalTitle = exports.modalDescription = exports.modal = exports.deleteAll = exports.completedHeader = exports.completedContainer = exports.cancelModal = void 0;
var _loadTasks = require("./loadTasks.js");
var _localStorage = require("./localStorage.js");
var _eventHandlers = require("./eventHandlers.js");
var _modal = require("./modal.js");
var _dragDrop = require("./drag&drop.js");
var _cardTransfer = require("./cardTransfer.js");
var _hideCategories = require("./hideCategories.js");
var _deleteAllCompleted = require("./deleteAllCompleted.js");
var _additionalFunctions = require("./additionalFunctions.js");
// Модуль с основными функциями (инициализация, кнопки, слушатели)

// Импортируем сторонние модули

// Проверка наличия данных в localStorage и создание пустого массива, если данных нет
if (!localStorage.getItem('tasks')) {
  localStorage.setItem('tasks', JSON.stringify([])); // Если его нет, то создаем его с пустым массивом в качестве значения
}
(0, _modal.createTaskModal)(); // Создаём модальное окно для добавления или редактирования карточки
var modal = exports.modal = document.getElementById("modal");
var cancelModal = exports.cancelModal = document.getElementById("task__cancel");
var taskConfirm = exports.taskConfirm = document.getElementById("task__confirm");
// Получаем заголовки категорий
var todoHeader = exports.todoHeader = document.getElementById('todo__header');
var progressHeader = exports.progressHeader = document.getElementById('progress__header');
var completedHeader = exports.completedHeader = document.getElementById('completed__header');
// Получаем поля с именем, описанием и исполнителем карточки
var modalTitle = exports.modalTitle = document.getElementById('modal__title');
var modalDescription = exports.modalDescription = document.getElementById('modal__description');
var modalUser = exports.modalUser = document.getElementById('modal__user');
// Получаем контейнеры категорий
var todoContainer = exports.todoContainer = document.getElementById('todo__container');
var progressContainer = exports.progressContainer = document.getElementById('progress__container');
var completedContainer = exports.completedContainer = document.getElementById('completed__container');
// Получаем кнопку удаления всех завершённых задач
var deleteAll = exports.deleteAll = document.getElementById('completed__delete-all');

// Создаём переменную для хранения редактируемой карточки (изначально null)
var editingCard = null;
(0, _eventHandlers.addWindowEventListeners)(); // Вызов функции для добавления обработчиков событий к окну
(0, _dragDrop.addEventListenerForDragAndDrop)(); // Вызов функции для добавления обработчиков событий на Drag&Drop

// Добавляем слушатель событий на весь документ
document.body.addEventListener('click', function (e) {
  if (e.target.classList.contains('card__edit')) {
    // Проверка, кликнули ли по кнопке "Edit"
    modal.style.display = "block"; // Показываем модальное окно
    // Получаем ссылку на редактируемую карточку
    editingCard = e.target.closest('.card'); // Получаем ссылку на редактируемую карточку
    var card = e.target.closest('.card');
    // Заполняем поля модального окна значениями из карточки
    modalTitle.value = card.querySelector('.card__title').textContent;
    modalDescription.value = card.querySelector('.card__description').textContent;
    // Получаем имя пользователя из карточки
    var userName = card.querySelector('.card__user').textContent;
    for (var i = 0; i < modalUser.options.length; i++) {
      // Находим соответствующего пользователя в селекторе модального окна и выбираем его
      if (modalUser.options[i].text === userName) {
        modalUser.selectedIndex = i;
        break; // Выходим из цикла, когда нашли нужного пользователя
      }
    }
  }
  if (e.target.classList.contains('todo__add')) {
    // Проверка, кликнули ли по кнопке "Add todo"
    // Удаляем статус редактируемой карточки
    editingCard = null;
    // Показываем модальное окно
    modal.style.display = "block";
  }
  if (e.target === taskConfirm) {
    // Проверка, кликнули ли по кнопке "Confirm" в модальном окне создания или редактирования карточки
    // Передаём пустую или редактируемую карточку
    (0, _modal.taskModalConfirm)(editingCard);
  }
  if (e.target === deleteAll) {
    // Проверка, кликнули ли по кнопке "Delete all" для удаления всех завершённых карточек
    // Запускаем функцию удаления всех завершённых карточек
    (0, _deleteAllCompleted.deleteAllCompleted)();
  }
  if (e.target === cancelModal) {
    // Проверка, кликнули ли по кнопке "Cancel" в модальном окне создания или редактирования карточки
    // Закрываем модальное окно
    modal.style.display = "none";
    // Обнуляем модальное окно
    (0, _modal.modalReset)();
  }
  if (e.target === modal) {
    // При нажатии в любом месте за пределами модального окна, оно скрывается
    modal.style.display = "none";
    // Обнуляем модальное окно
    (0, _modal.modalReset)();
  }
  if (e.target.closest('.todo__header') === todoHeader) {
    // Схлопывание колонки ToDo
    (0, _hideCategories.hideTodo)();
  }
  if (e.target.closest('.progress__header') === progressHeader) {
    // Схлопывание колонки In Progress
    (0, _hideCategories.hideProgress)();
  }
  if (e.target.closest('.completed__header') === completedHeader) {
    // Схлопывание колонки Completed
    (0, _hideCategories.hideCompleted)();
  }
  if (e.target.classList.contains('card__delete')) {
    // Проверка, кликнули ли по кнопке "Delete" для удаления карточки
    // Находим карточку, которую нужно удалить
    var _card = e.target.closest('.card');
    // Получаем id карточки и преобразуем его в число
    var id = Number(_card.dataset.id);
    // Удаляем карточку из DOM
    _card.remove();
    // Получаем текущие задачи из Local Storage
    var tasks = (0, _localStorage.getDate)();
    // Удаляем задачу с соответствующим id из массива задач
    var updatedTasks = tasks.filter(function (task) {
      return task.id !== id;
    });
    // Обновляем Local Storage с новым массивом задач
    (0, _localStorage.setDate)(updatedTasks);
    // Обновляем счётчики
    (0, _loadTasks.updateCounts)();
    // Обновляем видимость кнопки удаления всех карточек
    (0, _additionalFunctions.updateDeleteButtonVisibility)();
  }
  if (e.target.classList.contains('card__forward')) {
    // Проверяем, была ли нажата кнопка "вперед"
    var _card2 = e.target.closest('.card'); // Находим карточку, к которой относится кнопка
    if (_card2.parentElement === todoContainer) {
      // Если карточка находится в ToDo
      (0, _cardTransfer.moveToInProgress)(_card2); // Перемещаем её в InProgress
    } else if (_card2.parentElement === progressContainer) {
      // Если карточка находится в InProgress
      (0, _cardTransfer.moveToCompleted)(_card2); // Перемещаем её в Completed
    }
  }
  if (e.target.classList.contains('card__back')) {
    // Проверяем, была ли нажата кнопка "назад"
    var _card3 = e.target.closest('.card'); // Находим карточку, к которой относится кнопка
    if (_card3.parentElement === progressContainer) {
      // Если карточка находится в InProgress
      (0, _cardTransfer.moveToTodo)(_card3); // Перемещаем её в ToDo
    } else if (_card3.parentElement === completedContainer) {
      // Если карточка находится в Completed
      (0, _cardTransfer.moveToInProgress)(_card3); // Перемещаем её в InProgress
    }
  }
});
},{"./loadTasks.js":"scripts/loadTasks.js","./localStorage.js":"scripts/localStorage.js","./eventHandlers.js":"scripts/eventHandlers.js","./modal.js":"scripts/modal.js","./drag&drop.js":"scripts/drag&drop.js","./cardTransfer.js":"scripts/cardTransfer.js","./hideCategories.js":"scripts/hideCategories.js","./deleteAllCompleted.js":"scripts/deleteAllCompleted.js","./additionalFunctions.js":"scripts/additionalFunctions.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55216" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/main.js"], null)
//# sourceMappingURL=/main.d8ebb8d6.js.map