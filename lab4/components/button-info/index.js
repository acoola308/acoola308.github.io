import { MainPage } from "../../pages/main/index.js";

export class ButtonInfo {
    constructor(parent, id) {
        this.parent = parent;
        this.id = id
    }

    addListeners() {
        document.querySelectorAll(".myb").forEach((button) => {
                button.addEventListener("click", () => {
                    const mainPage = new MainPage(document.getElementById('root'), button.id)
                    mainPage.render();
                })
            })
    }

    getHTML() {
        return (
            `
                <button id="1" data_id="1" class="btn btn-primary myb" type="button">По id (возрастание)</button>
                <button id="2" data_id="2" class="btn btn-primary myb" type="button">По id (убывание)</button>
                <button id="3" data_id="3" class="btn btn-primary myb" type="button">По вступлению</button>
                <button id="4" data_id="4" class="btn btn-primary myb" type="button">По вступлению (наоборот)</button>
            `
        )
    }

    render() {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners()
        const new_color = document.getElementById(this.id)
        new_color.style.backgroundColor = 'red';
        new_color.style.borderColor = 'red';

    }
}