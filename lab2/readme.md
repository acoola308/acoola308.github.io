![Снимок экрана 2024-11-16 221621](https://github.com/user-attachments/assets/bfa7f861-d268-4f04-a1c7-be1b882fcb04)
![Снимок экрана 2024-11-16 221629](https://github.com/user-attachments/assets/c557c4c2-f967-43aa-b79c-7203fa36c236)
![Снимок экрана 2024-11-16 221650](https://github.com/user-attachments/assets/27cfc7b7-f146-485d-b181-0d2840e67dae)

# основное задание:
1. запрограммируйте операцию смены знака +/-;  
2. запрограммируйте операцию вычисления процента %;  
3. добавьте кнопку стирания введенной цифры назад (backspace). Расположить кнопку можно, например, на месте нерабочих +/- и % кнопок;  
4. сделайте смену цвета фона по кнопке;  
5. запрограммируйте операцию вычисления квадратного корня √;  
6. запрограммируйте операцию возведения в квадрат x²;  
7. запрограммируйте операцию вычисления факториала x!;  
8. добавьте кнопку, которая за раз добавляет сразу три нуля (000);  
9. запрограммируйте накапливаемое сложние;  
10. запрограммируйте накапливаемое вычитание;  
11. сделайте смену цвета окна вывода результата по кнопке.  

# код html:
```HTML
<!DOCTYPE html>
<html>
<head>
  <title>Калькулятор</title>
  <link rel="stylesheet" href="laba 2.css">
</head>
<body>
    <div class="block">
    <button id ="knopka" class="knopka">Поменять фон</button>
    <button id="knopka_2" class="knopka knopka_2">Поменять окна вывода</button>
        <div id="calculator">
            <div id="result" class="result">0</div> 
            <div id="btn_op_factorial" class="my-btn secondary">x!</div>
            <div id="btn_op_square" class="my-btn secondary"><span>x<sup>2</sup></span></div>
            <div id="btn_op_square_root" class="my-btn secondary">&#8730;</div>
            <div id="btn_op_delete" class="my-btn primary">&#60;-</div>
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
            <div  id="btn_digit_000" class="my-btn">000</div>
            <div  id="btn_op_equal" class="my-btn primary execute">=</div>
        </div>
    </div>
    <script type="text/javascript" src="script.js"></script> 
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


.knopka {
    border-radius: 8px;
    padding: 6px;
    height: 50px;
    width: 140px;
    user-select: none;
    position: absolute;
    top: 10px;
    left: 10px;
}

.knopka_2 {
    top: 70px;
}

.btn:active {
    filter: brightness(130%);
}



.block {
    position: relative;
    display: grid;
    place-items: center;
}

body {
    height: 100%;
    background-image: url("i.webp");
    user-select: none;
}
```
# код javascript: 
```JavaScript
window.onload = function(){ 
    let a = '0'
    let b = ''
    let expressionResult = ''
    let selectedOperation = null

    outputElement = document.getElementById("result")

    digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')

    

    function limitOutputLength() {
        if (outputElement.innerHTML.length >= 19) {
            outputElement.innerHTML = '..' + outputElement.innerHTML.slice(-17);
        }
    }

    document.getElementById("knopka").onclick = function() {
        const block = document.getElementById("calculator")
        const currentColor = window.getComputedStyle(block).backgroundColor;
        if (currentColor == "rgb(43, 43, 43)") 
            block.style.backgroundColor = "#e0e0e0";
        else
            block.style.backgroundColor = "#2b2b2b";
    }

    document.getElementById("knopka_2").onclick = function() {
        const block = document.getElementById("result");
        const currentColor = window.getComputedStyle(block).backgroundColor;

        if (currentColor === "rgb(26, 26, 26)") { 
            block.style.backgroundColor = "#f2f2f2"; 
            block.style.color = "#0a0a23"; 
        } else {
            block.style.backgroundColor = "#1a1a1a"; 
            block.style.color = "#F5F5DC"; 
        }
    };

    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if (a === '' && (digit === '000' || digit == '.') || a === '0' && (digit === '0' || digit === '000')) return
            if (a === '-'  && (digit === '0' || digit === '000' || digit == '.')) return
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
                if (a === '0' && digit !== '.')
                    a = digit;
                else 
                    a += digit  
            }
            outputElement.innerHTML = a
            limitOutputLength();

        } else {
            if ( b === '' && (digit === '000' || digit == '.') || b === '0' && (digit === '0' || digit === '000')) return
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
                b += digit
                outputElement.innerHTML = a + selectedOperation + b
                limitOutputLength();        
            }
        }
    }

   
    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML
            onDigitButtonClicked(digitValue)
        }
    });


    document.getElementById("btn_op_mult").onclick = function() { 
        if (a === '' || selectedOperation||  a === '-') return
        selectedOperation = 'x'
        outputElement.innerHTML = a + selectedOperation
        limitOutputLength();
    }
    document.getElementById("btn_op_plus").onclick = function() { 
        if (a === '' || a === '-' || (selectedOperation && selectedOperation !== "+" && selectedOperation !== "-")) return; 

        if (selectedOperation && b !== '') { 
            if (selectedOperation === '+') {
                a = ((+a) + (+b)).toString();
            } else if (selectedOperation === '-') {
                a = ((+a) - (+b)).toString();
            }
            b = ''; 
            outputElement.innerHTML = a; 
        }
    
        selectedOperation = '+';
        outputElement.innerHTML = a + selectedOperation;
        limitOutputLength();

    }
    document.getElementById("btn_op_minus").onclick = function() { 

        if (a === '') {
            a = '-'
            outputElement.innerHTML = '-'
        }

        else {
            if (a === '-' || (selectedOperation && selectedOperation !== "+" && selectedOperation !== "-")) return

            if (selectedOperation && b !== '') { 
                if (selectedOperation === '+') {
                    a = ((+a) + (+b)).toString();
                } else if (selectedOperation === '-') {
                    a = ((+a) - (+b)).toString();
                }
                b = ''; 
                outputElement.innerHTML = a; 
            }

            selectedOperation = '-'
            outputElement.innerHTML = a + selectedOperation
            limitOutputLength();
        }
    }
    document.getElementById("btn_op_div").onclick = function() { 
        if (a === '' || selectedOperation || a === '-') return
        selectedOperation = '/'
        outputElement.innerHTML = a + selectedOperation
        limitOutputLength();
    }

  
    document.getElementById("btn_op_clear").onclick = function() { 
        a = '0'
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }

    document.getElementById("btn_op_sign").onclick = function() {
        if (a === '' || b !== '' || a === '-') return
        
        else {
            if (!selectedOperation) {
                if (!a.includes('-'))
                    a = '-' + a
                else
                    a = a.slice(1)
                outputElement.innerHTML = a
                limitOutputLength();
            }

            else {
                if (selectedOperation === '+') {
                    selectedOperation = '-'
                    outputElement.innerHTML = a + selectedOperation
                }
                
                else if (selectedOperation === '-') {
                    selectedOperation = '+'
                    outputElement.innerHTML = a + selectedOperation
                }
                
                else return 
            }
        }
    }

    document.getElementById("btn_op_delete").onclick = function() {
        if (b !== '') {
            b = b.slice(0, -1)
            outputElement.innerHTML = outputElement.innerHTML.slice(0, -1)
        }

        else if (selectedOperation) {
            selectedOperation = null
            outputElement.innerHTML = outputElement.innerHTML.slice(0, -1)
        }

        else if (a != '') {
            if (a.length == 1) {
                outputElement.innerHTML = 0
                a = ''
            }
            else {
                a = a.slice(0, -1)
                outputElement.innerHTML = outputElement.innerHTML.slice(0, -1)
            }
        }
    }

    document.getElementById("btn_op_square").onclick = function() {
        if ((a === ''&& b === '') || a === '-') return
        if (!selectedOperation) {
            a = ((+a) * (+a)).toString()
            outputElement.innerHTML = a
            limitOutputLength();
        }
        else {
            if (b === '') return
            outputElement.innerHTML = outputElement.innerHTML.slice(0, - b.length)
            b = ((+b) * (+b)).toString()
            outputElement.innerHTML += b
            limitOutputLength();
        }
    }
    
    document.getElementById("btn_op_square_root").onclick = function() {
        if ((a === ''&& b === '') || a === '-') return
        if (!selectedOperation) {
            if (+a > 0) {
                a = Math.sqrt((+a)).toString()
                outputElement.innerHTML = a
                limitOutputLength();
            }

            else {
                a = ''
                outputElement.innerHTML = "ошибка"
            }
        }
        else {
            if (b === '') return
            if (+b > 0) {
            outputElement.innerHTML = outputElement.innerHTML.slice(0, - b.length)
            b = Math.sqrt((+b)).toString()
            outputElement.innerHTML += b
            limitOutputLength();
            }
            else {
                b = ''
                outputElement.innerHTML = "ошибка"
            }
        }

    }

    document.getElementById("btn_op_factorial").onclick = function() {
        if ((a === '' && b === '') || a === '-') return
        if (!selectedOperation) {
            let i = 1; let value = 1;
            if (+a > 20) {
                a = ''
                outputElement.innerHTML = 'Инфинити'
            } 
            
            else {
                while (i <= (+a)) {
                    value = i * value;
                    i += 1;
                } 
                a = value.toString()
                outputElement.innerHTML = a
                limitOutputLength();
             }
        }
        else {
            if (+b > 20) {
                a = ''
                b = ''
                selectedOperation = null
                outputElement.innerHTML = 'Инфинити'
            } 
            if (b === '') return
            outputElement.innerHTML = outputElement.innerHTML.slice(0, - b.length)
            let i = 1; let value = 1;
            while (i <= (+b)) {
                value = i * value;
                i += 1;
            } 
            b = value.toString()
            outputElement.innerHTML += b
            limitOutputLength();
        }
    }

    document.getElementById("btn_op_percent").onclick = function() {
        if (!a || a === '-') return;  

        if (b === '') { 
            a = ((+a) / 100).toString(); 
            outputElement.innerHTML = a; 
            limitOutputLength(); 
        } else {
            b = ((+b) / 100 * (+a)).toString(); 
            outputElement.innerHTML += '%';  
            limitOutputLength(); 
        }
    }

    document.getElementById("btn_op_equal").onclick = function() { 
        if (a === '' || b === '' || !selectedOperation)
            return
            
        switch(selectedOperation) { 
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
        }
        
        if (expressionResult == 0 || expressionResult == "Infinity")
             a = '0'
        else
            a = expressionResult.toString()
        b = ''
        selectedOperation = null

        outputElement.innerHTML = expressionResult.toString()
        limitOutputLength();
    }  
};
```
