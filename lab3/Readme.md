![Снимок экрана 2024-12-02 184045](https://github.com/user-attachments/assets/3306d477-fcb3-40ef-8841-d43760d837c8)
![Снимок экрана 2024-12-02 184054](https://github.com/user-attachments/assets/06ba0665-1f8a-48d6-85bf-a7fd7792dc49)
![Снимок экрана 2024-12-02 184231](https://github.com/user-attachments/assets/c1e8e870-83fc-4171-8c23-4aeed480dcfb)

# основное задание:
cоздать двухстраничное приложение из примера по варианту. вариант состоит из темы и компонента, который необходимо использовать. все данные должны соответствовать теме. компонент можно применить по своему усмотрению.

вариант:
1. тема - собаки, компонент - [аккордеон](https://bootstrap-4.ru/docs/5.2/components/accordion/).

# дополнительное задание:
изучить фреймворк Tailwind CSS и на его основе сверстать карточки подробной информации о породах (собачьи страницы)

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
## main.js
```JavaScript
import {MainPage} from "./pages/main/index.js"


const root = document.getElementById('root');

const mainPage = new MainPage(root)
mainPage.render(1);
```
## ./pages/main/index.js
```JavaScript
import {AccordionComponent} from "../../components/accordion/index.js"
import { IngoDogPage } from "../Infodog/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    
    getHTML() {
        return (
            `
                <div class="accordion" id="accordionExample" style="width: 450px;"></div>
            `
        )
    }

    get pageRoot() {
        return document.getElementById('accordionExample')
    }

    getData() {
        return [ 
            {
                id: 1,
                name: "Овчарка",
                src: "././src/img/scale_1200.png",
                info: "Овчарка – это группа пород собак, известных своим интеллектом, верностью и универсальностью. Они активно используются как служебные, пастушьи и семейные собаки.",
                pos: "One",
                show: "",
                collapse: ""
            },
            {
                id: 2,
                name: "Лабрадор Ретривер",
                src: "././src/img/Dogs_Bokeh_Labrador_Retriever_Sitting_586668_640x960.jpg",
                info: "Лабрадор ретривер — это одна из самых популярных пород в мире благодаря своему дружелюбному и уравновешенному характеру. Они умные, легко обучаемые и подходят для работы в роли служебных собак, а также как семейные питомцы.",
                pos: "Two",
                show: "",
                collapse: ""
            },
            {
                id: 3,
                name: "Бульдог",
                src: "././src/img/0c07cce61e4c5b82d6af47c6ec4c5437.webp",
                info: "Бульдог — компактная и мощная порода, известная своей характерной внешностью с морщинами и крепким телосложением. Они спокойные, лояльные и привязаны к своим владельцам. Бульдоги идеальны для людей, которые ищут спокойного компаньона с минимальными потребностями в физических нагрузках.",
                pos: "Three",
                show: "",
                collapse: ""
            },
        ]
    }
    
    clickCard(e) {
        const button = e.target;
        const cardId = button.dataset.id;
        const cardName = button.dataset.name;
        const cardSrc = button.dataset.src;
        const cardInfo = button.dataset.info
        const infodogpage = new IngoDogPage(this.parent, cardId, cardSrc, cardName, cardInfo)
        infodogpage.render()
    }

    render(id) {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const data = this.getData()
        data.forEach((item) => {
            if (id == item.id) {
                item.show = " show";
                item.collapse = "";
            }

            else {
                item.show = "";
                item.collapse = " collapsed";
            }
            const accordion = new AccordionComponent(this.pageRoot)
            accordion.render(item, this.clickCard.bind(this)); 
        })
    }
}
```
## ./pages/infodog/index.js
```JavaScript
import { InfoDogComponent } from "../../components/infodog/index.js"
import { MainPage } from "../main/index.js"
import { BackButtonComponent } from "../../components/back-button/index.js"

export class IngoDogPage {
    constructor(parent, id, src, name, info) {
        this.parent = parent
        this.id = id
        this.name = name
        this.info = info
        this.src = src
    }

    getData() {
        return {
            id: 1,
            src: this.src,
            title: this.name,
            text: this.info
        }
    }

    get pageRoot() {
        return document.getElementById('infodog-page')
    }

    getHTML() {
        return (
            `
                <div id="infodog-page" class="tw-mx-auto tw-my-auto tw-w-[540px]"></div>
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render(this.id)
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const data = this.getData()
        const infodog = new InfoDogComponent(this.pageRoot)
        infodog.render(data)

        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))
    }
}
```
## ./components/accordion/index.js
```JavaScript
export class AccordionComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `  
              <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${data.pos}">
                    <button class="accordion-button${data.collapse}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${data.pos}" aria-expanded="true" aria-controls="collapse${data.pos}">
                        ${data.name}
                    </button>
                    </h2>
                    <div id="collapse${data.pos}" class="accordion-collapse collapse${data.show}" aria-labelledby="heading${data.pos}" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="h"><strong>${data.name}</strong></div>
                            <img src="${data.src}" class="img-fluid" alt="...">
                            <button type="button" class="btn btn-primary mybt" id="click-card-${data.id}" data-id="${data.id}" data-src="${data.src}" data-name="${data.name}" data-info="${data.info}">Подробнее о породе</button>
                        </div>
                    </div>
                </div> 
            `
        )
    }

    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
    }

    render(data, listener) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
    }
}
```
## ./components/back-button/index.js
```JavaScript
export class BackButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    addListeners(listener) {
        document
            .getElementById("back-button")
            .addEventListener("click", listener)
    }

    getHTML() {
        return (
            `
                <button id="back-button" class="btn btn-primary" type="button">Назад</button>
            `
        )
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}
```
## ./components/infodog/index.js
```JavaScript
export class InfoDogComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (
            `
                <div class="tw-container tw-flex tw-border-2 tw-mb-3">
                        <div class="tw-basis-1/3">
                            <img src="${data.src}" class="tw-w-full tw-h-auto" alt="картинка">
                        </div>
                        <div class="tw-basis-2/3 tw-px-5 tw-py-2">
                            <h1 class="tw-text-2xl">${data.title}</h5>
                            <p class="">${data.text}</p>
                        </div>
                </div>
            `
        )
    }

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}
```
