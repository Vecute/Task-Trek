// Модуль с функциями для схлопывания кнопок

// Функции для схлопывания кнопок
export function hideTodo () {
  // Получаем элементы, которые нужно скрыть
  const cardContainer = document.body.getElementsByClassName('card__container')[0];
  const categoryButton = document.body.getElementsByClassName('category__button')[0];
  const todo = document.body.querySelector('.todo');
  // Скрываем или показываем элементы
  cardContainer.classList.toggle("hidden");
  categoryButton.classList.toggle("hidden");
  todo.classList.toggle("collapsed");
}
export function hideProgress () {
  // Получаем элементы, которые нужно скрыть
  const cardContainer = document.body.getElementsByClassName('card__container')[1];
  const progress = document.body.querySelector('.progress');
  // Скрываем или показываем элементы
  cardContainer.classList.toggle("hidden");
  progress.classList.toggle("collapsed");
}
export function hideCompleted () {
  // Получаем элементы, которые нужно скрыть
  const cardContainer = document.body.getElementsByClassName('card__container')[2];
  const categoryButton = document.body.getElementsByClassName('category__button')[1];
  const completed = document.body.querySelector('.completed');
  // Скрываем или показываем элементы
  cardContainer.classList.toggle("hidden");
  categoryButton.classList.toggle("hidden");
  completed.classList.toggle("collapsed");
}