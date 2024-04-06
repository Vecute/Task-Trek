// Модуль с функцией отображения времени

// Функция отображения текущего времени
export function showTime () { 
    // Получаем текущую дату и время
    const date = new Date();
    // Преобразуем время в строку
    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    // Помещаем время в элемент с id clock
    document.getElementById("clock").innerText = timeString;
    // Запускаем функцию showTime каждую секунду
    setTimeout(showTime, 1000);
}