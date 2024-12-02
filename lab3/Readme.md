![Снимок экрана 2024-12-02 184045](https://github.com/user-attachments/assets/3306d477-fcb3-40ef-8841-d43760d837c8)
![Снимок экрана 2024-12-02 184054](https://github.com/user-attachments/assets/06ba0665-1f8a-48d6-85bf-a7fd7792dc49)
![Снимок экрана 2024-12-02 184231](https://github.com/user-attachments/assets/c1e8e870-83fc-4171-8c23-4aeed480dcfb)

# основное задание:
cоздать двухстраничное приложение из примера по варианту. вариант состоит из темы и компонента, который необходимо использовать. все данные должны соответствовать теме. компонент можно применить по своему усмотрению.

вариант:
1. тема - собаки, компонент - [аккордеон](https://bootstrap-4.ru/docs/5.2/components/accordion/).

# дополнительное задание:
изучить фреймворк Tailwind CSS и на его основе сверстать карточки подробной информации о породах (собачье страницы)

# код лабараторной работы:
## index.html
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Simple App</title>
    <link rel="stylesheet" href="./src/style.css">
    <link rel="stylesheet" href="./src/output.css">
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
</head>
<body>
    <main>
        <div class="root" id="root"></div>
    </main>
    <script src="main.js" type="module"></script>

    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    
</body>
</html>
```
## style.css
```CSS
main {
    display: grid;
    place-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.h {
    font-family: 'Arial', sans-serif;
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
}

.mybt {
    margin-top: 15px;
}


.accordion-body {
    display: grid;
    place-items: center;
}

.img-fluid {
    height: 300px;
    width: 250px;
}
```
