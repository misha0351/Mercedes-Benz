window.onload = function () {
    const image = document.getElementById("receiptImage");

    if (image) {
        image.addEventListener("click", function () {
            alert("Успішно сплачено. На вашу електрону пошту прийде повідомлення стосовно авто через: 3 дні.");
        });
    } else {
        console.error("Зображення з id 'receiptImage' не знайдено.");
    }
};