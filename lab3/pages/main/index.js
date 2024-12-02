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