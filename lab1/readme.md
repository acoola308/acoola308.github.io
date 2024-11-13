![image](https://github.com/user-attachments/assets/35d4f61f-6813-4540-8549-4426aed25204)
![image](https://github.com/user-attachments/assets/17193696-b18a-45ab-9582-f6cb6e1794fa)
![image](https://github.com/user-attachments/assets/bab47d0d-d5b5-476c-88d7-c679c68ca838)
![image](https://github.com/user-attachments/assets/2ace5e93-2c99-40bc-8529-32ccd3bf05e3)

# основное задание: 
1. поменяйте цветовую палитру калькулятора с оранжево-серой на любую другую;  
2. cделайте фон калькулятора темным (наподобие ночной темы);  
3. cделайте кнопки квадратными вместо круглых.;  
4. измените цвет вывода результата на любой другой;  
5. сделайте окно вывода со скруглеными краями;  
6. поменяйте шрифт цифр;  
7. сделайте шрифт более толстым;  
8. измените цвет при наведении мышки на кнопку на другой;  
9. добавьте надпись внизу "ЛР выполнена ФИО";  
10. выровняйте калькулятор по центру;  
11. увеличьте размер окна вывода;  
12. добавьте кнопку для смены темы (смена цвета фона);  
13. сделайте шрифт тоньше;  
14. смените цвет шрифта;  
15. добавьте любое изображение на фон;  
16. добавьте кнопку со ссылкой на GitHub;  
17. сделайте поле с выпадающим списком;  
18. сделайте сворачивающиеся и разворачивающиеся подробности (Автор -> ФИО, Группа);  
19. добавьте поле с целью ЛР и подсветить слова: знакомство, HTML, CSS (с помощью тега).

# дополнительное задание:
1. переделать калькулятор на гриды;
2. добавить в верхнем левом углу кнопку, открывающую/закрывающую блок информации;
3. добавить светлую и тёмную темы, зависящие от режима пользовательского устройства (светлый режим/тёмный режим).

# код html:
```HTML
<!DOCTYPE html>
<html>
<head>
  <title>Калькулятор</title>
  <link rel="stylesheet" href="stylecalc.css">
</head>
<body>
    <button class="knopka" onclick="showblock()">Показать/спрятать</button>
    <div id="calculator">
        <div id="result" class="result">0</div> 
        <div id="btn_op_clear" class="my-btn secondary">C</div>
        <div id="btn_op_sign" class="my-btn secondary">+/-</div>
        <div id="btn_op_percent" class="my-btn secondary">%</div>
        <div id="btn_op_div" class="my-btn primary">/</div>
        <div id="btn_digit_7" class="my-btn">7</div>
        <div  id="btn_digit_8" class="my-btn">8</div>
        <div  id="btn_digit_9" class="my-btn">9</div>
        <div  id="btn_op_mult" class="my-btn primary">x</div>
        <div  id="btn_digit_4" class="my-btn">4</div>
        <div  id="btn_digit_5" class="my-btn">5</div>
        <div  id="btn_digit_6" class="my-btn">6</div>
        <div  id="btn_op_minus" class="my-btn primary">-</div>
        <div  id="btn_digit_1" class="my-btn">1</div>
        <div  id="btn_digit_2" class="my-btn">2</div>
        <div  id="btn_digit_3" class="my-btn">3</div>
        <div  id="btn_op_plus" class="my-btn primary">+</div>
        <div  id="btn_digit_0" class="my-btn">0</div>
        <div  id="btn_digit_dot" class="my-btn">.</div>
        <div  id="btn_op_equal" class="my-btn primary execute">=</div>
    </div>
    <div id="info" style="display: none;">
        <h2 class="my">ЛР выполнена Акуловым Антоном Дмитриевичом</h2>
        <div class="mycenter">
            <button class="my btn" onclick="window.open('https://github.com/acoola308', '_blank');">Мой GitHub</button>
        </div>
        <p>
            Цель данной лабораторной работы - <mark>знакомство</mark> с инструментами построения пользовательских интерфейсов web-сайтов:
            <mark>HTML</mark>, <mark>CSS</mark>.
        </p>
        <details>
            <summary class="my">Автор</summary>
            <p>ФИО: Акулов Антон Дмитриевич
            Группа: ИС-22</p>
        </details>
    </div>
    <script>
        function showblock() {
            const block = document.getElementById("info");
            block.style.display = block.style.display === "none" ? "block" : "none";
        }
    </script>  
</body>
</html>
```
# код css:
```CSS
@media (prefers-color-scheme: light) {
    .my-btn {
        background: #d0d0d0;
        color:  #0a0a23;
    }

    .my-btn.secondary {
        background: rgb(118, 118, 118);
        color: white;
    }

    .my-btn:hover {
        background: #b0b0b0;
    }

    .my-btn.primary:hover {
        background: #e0e0e0; 
    }
    
    .my-btn.secondary:hover {
        background:  #383838; 
    }

    .result {
        background: #f2f2f2;
        color: #0a0a23;
    }

    #calculator {
        background: #e0e0e0;
    }

    #info {
        color: #0a0a23;
        border: 1px solid #aaa;
        background-color: #e0e0e0;
    }

    .btn {
        background: #d3d3d3;
        color: #0a0a23;
        border: 1px solid #888;
    }

    .knopka {
        background: #d0d0d0;
        color: #0a0a23;
        border: 2px solid #888;
    }

    .btn:hover {
        background: #b0b0b0;
    }

    .knopka:hover {
        background: #b0b0b0;
    }
    
    .knopka:active {
        filter: brightness(130%);
    }
}


@media (prefers-color-scheme: dark) {
    .my-btn {
        background: #505050;
        color: #F5F5DC;
    }

    .my-btn.secondary {
        background: #a9a9a9;
    }

    .my-btn:hover {
        background: #6d6d6d;
    }
    
    .my-btn.primary:hover {
        background: #3b3b3b; 
    }
    
    .my-btn.secondary:hover {
        background: #888888; 
    }

    .result {
        background: #1a1a1a;
        color: #F5F5DC;
    }

    #calculator {
        background: #2b2b2b;
    }

    #info {
        color: #F5F5DC;
        border: 1px solid #444;
        background-color: #2b2b2b;
    }

    .btn {
        background: #a9a9a9;
        color: #F5F5DC;
        border: 1px solid #666;
    }

    .knopka {
        background: #505050;
        color: #F5F5DC;
        border: 1px solid #666;
    }

    .btn:hover {
        background: #888888;
    }

    .knopka:hover {
        background: #888888;
    }

    .knopka:active {
        filter: brightness(130%);
    }
}

.my-btn {
    display: grid;
    place-items: center;
    height: 50px;
    /*border-radius: 50%;*/
    border: none;  
    font-size: 1.5rem;
    font-family: Roboto, sans-serif;
    font-weight:  100;
    cursor: pointer;
    user-select: none;
}

.my-btn.primary {
    background: #7b68ee;
}

.my-btn:active {
    filter: brightness(130%);
}


.my-btn.execute {
    grid-column: span 2 / span 2;
   
    /*border-radius: 34px;*/
}

.result {
    margin-bottom: 15px;
    padding-right: 10px;
    height: 65px;
    grid-column: span 4 / span 4;
    justify-content: end;
    align-items: center;
    font-size: 1.5rem;
    font-family: Roboto, sans-serif;
    border-radius: 10px;
    display: grid;
    place-items: center;
}

#calculator {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    width: 240px;
    margin-top: 20px; 
    padding: 25px 15px 15px 15px;
    border-radius: 10px;
}

#info {
    display: none;
    top: 400px;
    left: 50%-135px;
    position: absolute;
    font-size: 14px;
    font-family: Roboto, sans-serif;
    height: 280px;
    width: 230px;
    padding: 15px; 
    border-radius: 10px;
}

h2 {
    font-size: 1.20em;
}


.btn {
    width: 130px;
    height: 30px;
    border-radius: 8px;
    padding: 3px;
    user-select: none;
}

.knopka {
    border-radius: 8px;
    padding: 6px;
    height: 50px;
    width: 200px;
    user-select: none;
    position: absolute;
    top: 15px;
    left: 15px;
}

.my {
    text-align: center;
}

.btn:active {
    filter: brightness(130%);
}

.mycenter {
    display: grid;
    place-items: center
}

body {
    height: 100%;
    background-image: url("i.webp");
    display: grid;
    place-items: center;
    user-select: none;
}

.rel {
    position: relative;
}
```
