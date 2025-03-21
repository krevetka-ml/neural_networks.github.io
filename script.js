// 1. Создаем элемент <img>
const img = document.createElement("img");

// 2. Устанавливаем атрибуты src и alt
img.src = "images/my-image.jpg"; // Путь к изображению
img.alt = "Описание изображения";

// 3. (Необязательно) Устанавливаем другие атрибуты, такие как width и height
img.width = 200;
img.height = 150;

// 4. Находим элемент, в который мы хотим добавить изображение (например, div с id="image-container")
const container = document.getElementById("image-container");

// 5. Добавляем изображение в контейнер
container.appendChild(img);

// Дополнительно: добавление стилей CSS (лучше делать в CSS-файле, но для примера):
img.style.border = "1px solid black";
img.style.margin = "10px";
  