function showRandomImage() {
    // Переменная с путем к папке с картинками
    var imagePath = "images/";

    // Массив с именами картинок
    var images = ["image1.jpg", "image2.jpg", "image3.jpg","image4.jpg","image5.jpg","image6.jpg","image7.jpg","image8.jpg","image9.jpg","image10.jpg","image11.jpg","image12.jpg","image13.jpg","image14.jpg","image15.jpg","image16.jpg","image17.jpg","image18.jpg","image19.jpg","image21.jpg","image20.jpg","image22.jpg","image23.jpg"];

    // Получение случайного индекса картинки из массива
    var randomIndex = Math.floor(Math.random() * images.length);

    // Формирование пути к случайной картинке
    var randomImagePath = imagePath + images[randomIndex];

    // Установка случайной картинки
    document.getElementById("random-image").src = randomImagePath;
}
