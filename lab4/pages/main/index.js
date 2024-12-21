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