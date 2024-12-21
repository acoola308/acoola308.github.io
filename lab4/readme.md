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

## ./pages/main/index.js
```JavaScript
import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";
import { ButtonInfo } from "../../components/button-info/index.js";

import {ajax} from "../../modules/ajax.js";
import { urls } from "../../modules/aaa.js";
import {groupId} from "../../modules/consts.js";

export class MainPage {
    constructor(parent, flag) {
        this.parent = parent;
        this.flag = flag
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }
    
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"></div>
            `
        )
    }

    getData() {
        ajax.post(urls.getGroupMembers(groupId, this.flag), (data) => {
            this.renderData(data.response.items)
        })
    }

    renderData(items) {
        const buttoninfo = new ButtonInfo(document.getElementById("buttons"), this.flag) 
        buttoninfo.render()
        items.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }

    clickCard(e) {
        const cardId = e.target.dataset.id
        const productPage = new ProductPage(this.parent, cardId, this.flag)
        productPage.render()
    }
    
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', '<div id="buttons" style="margin-bottom: 10px;"></div>')
        this.parent.insertAdjacentHTML('beforeend', html)
        this.getData()
    }
}
```
## ./pages/product/index.js
```JavaScript
import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";


import {ajax} from "../../modules/ajax.js";

import { urls } from "../../modules/aaa.js";



export class ProductPage {
    constructor(parent, id, flag) {
        this.parent = parent
        this.id = id
        this.flag = flag
    }

    getData() {
        ajax.post(urls.getUserInfo(this.id), (data) => {
            this.renderData(data.response)
        })
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `   <div class="center">
                    <div id="product-page"></div>
                </div>
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent, this.flag)
        mainPage.render()
    }

    renderData(item) {
        const product = new ProductComponent(this.pageRoot)
        product.render(item[0])
        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        this.getData()

    }
}
```
## ./modules/aaa.js
```JavaScript
import {accessToken, version} from "./consts.js";

class Urls {
    constructor() {
        this.url = 'https://api.vk.com/method'
        this.commonInfo = `access_token=${accessToken}&v=${version}`
    }

    getUserInfo(userId) {
        return `${this.url}/users.get?user_ids=${userId}&fields=photo_400_orig,online,last_seen&${this.commonInfo}`
    }

    getGroupMembers(groupId, flag) {
        if (flag == 1) return `${this.url}/groups.getMembers?group_id=${groupId}&sort=id_asc&fields=photo_400_orig&${this.commonInfo}`
        if (flag == 2) return `${this.url}/groups.getMembers?group_id=${groupId}&sort=id_desc&fields=photo_400_orig&${this.commonInfo}`
        if (flag == 3) return `${this.url}/groups.getMembers?group_id=${groupId}&sort=time_asc&fields=photo_400_orig&${this.commonInfo}`
        if (flag == 4) return `${this.url}/groups.getMembers?group_id=${groupId}&sort=time_desc&fields=photo_400_orig&${this.commonInfo}`
        
    }   
}

export const urls = new Urls()
```
## ./modules/ajax.js
```JavaScript
class Ajax {
    /*
    post(url, callback) {
        let xhr = new XMLHttpRequest()
        xhr.open('POST', url)
        xhr.send()

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                const data = JSON.parse(xhr.response)
                callback(data)
            }
        }
    } */

    post(url, callback) {
        axios.post(url)
            .then(response => {
                callback(response.data);
            })
            .catch(error => {
                console.error('Ошибка:', error);
                callback(null);
            });
    }
}

export const ajax = new Ajax();
```
## ./modules/consts.js
```JavaScript
export const groupId = 228518300
export const accessToken = 'vk1.a.6a3NyZ_PNxNBo2AHx-swKGifSIT8ei24_9MDryRptaob6PdRQZJNf5pJunbzyNTmP4PVQJ7AEhDjN5ObrKsmRK14t07eJhq2aXC2fEfzWWfhm0kHln7C14CSNtE3e0JcO3KcE_ROuHCPN7ygq4ZYLLqFNHxCkarrgF5APNhW1wb75pPByXEufXMwqvrIMUQM02jchZ4wWogAaVHD9_JnKw'
export const version = '5.199'
```
