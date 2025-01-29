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