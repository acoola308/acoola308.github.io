![image](./img/1.png)
![image](./img/2.png)
![image](./img/3.png)

# основное задание:
создать двухстраничное приложение из примера по вариантам. вариант состоит из 2 методов и доп фильтра на эти методы.

**1 вариант**  

главная страница - [groups.getMembers](https://dev.vk.com/ru/method/groups.getMembers). получаем список пользователей группы и отображаем их. необходимо сделать компонент для фильтра sort (см. groups.getMembers -> Параметры -> sort).

Вторая страница - [users.get](https://dev.vk.com/ru/method/users.get). Отображаем выбранного пользователя на первой странице.

# дополнительное задание:
Переписать все XHR-запросы на axios

# код лабараторной работы:
## index.html
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Simple App</title>
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <style>
        .center {
            display: grid;
            place-items: center;
            margin-top: 10px;
        }

        .d-flex {
            gap: 10px;
        }
        #root {
            padding: 10px;
        }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body>
<div id="root"></div>
<script src="main.js" type="module"></script>

<script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```
## main.js
```JavaScript
import {MainPage} from "./pages/main/index.js";


const root = document.getElementById('root');

const mainPage = new MainPage(root, 3)
mainPage.render();
```
