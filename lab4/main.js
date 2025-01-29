import {MainPage} from "./pages/main/index.js";


const root = document.getElementById('root');

const mainPage = new MainPage(root, 3)
mainPage.render();
