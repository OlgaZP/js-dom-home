'use strict';

// 1.Сделать два инпута: в один вводить параметр(число), 
//во втором показывать объем шара при заданном параметре.
// Навесить валидацию на 1-й инпут.

const inputR = document.getElementById('r');
const inputV = document.getElementById('V');
inputR.oninput = e => {
    inputV.value='';
}
document.getElementById('evalV').onclick = (e) => {
    inputV.value = ((4 / 3) * Math.PI * Math.pow(document.getElementById('r').value, 3)).toFixed(4);
}

// 2.Дан элемент #elem. Реализуйте 4 функции:
const testElement = document.getElementById('elem');
//console.dir(testElement);
// - Добавьте ему класс www.
const addClassBtn = document.getElementById('addClassBtn');
//console.dir(addClassBtn);
addClassBtn.onclick = (e) => {testElement.classList.add('www');}

// - Удалите у него класс www.
const removeClassBtn = document.getElementById('removeClassBtn');
removeClassBtn.onclick = (e) => {testElement.classList.remove('www');}
// - Проверьте наличие у него класса www.
const checkClassBtn = document.getElementById('checkClassBtn');
checkClassBtn.onclick = (e) => {
    const pOutputResult = document.createElement('p');
    pOutputResult.textContent = testElement.classList.contains('www') ? 'elem-div contains www class' : 'elem-div doesn\'s contain www class';
    testElement.appendChild(pOutputResult);    
}
// - Добавьте ему класс www, если его нет и удалите - если есть.
// (https://developer.mozilla.org/ru/docs/Web/API/Element/classList)
const reverseClassBtn = document.getElementById('reverseClassBtn');
reverseClassBtn.onclick = (e) => {testElement.classList.toggle('www');}

// 3. Вставьте элементы массива объектов (id, title, description) в конец ul так, чтобы каждый на каждый объект был свой li.
const data = [
    {id: 1, title: 'KIA Sportage', description: 'Description of KIA Sportage'}, 
    {id: 2, title: 'Mersedes S-200', description: 'Description of Mersedes S-200'}, 
    {id: 3, title: 'Toyota RAV', description: 'Description of Toyota RAV'}, 
    {id: 4, title: 'WV Tiguan', description: 'Description of WV Tiguan'}, 
    {id: 5, title: 'Audi TT', description: 'Description of Audi TT'}]

const listElement = document.querySelector('ul');
data.forEach(element => {
    const listItem = document.createElement('li');
    const divData = document.createElement('div');
    divData.textContent = `${element.id} ${element.title} ${element.description}`;
    listItem.appendChild(divData);
    // Сделайте так, чтобы по нажатию на li - он подсвечивался другим цветом.
    listItem.onclick = e => {        
        listItem.classList.toggle('liPushed');
    }    
    // Сделайте так, чтобы по нажатию на кнопку внутри li эта li удалялась из разметки.
    // бонусная вторая кнопка редактирует текст li
    const divBtns = document.createElement('div');
    listItem.appendChild(divBtns);
    const removeLiBtn = document.createElement('button');
    removeLiBtn.textContent = 'X';
    removeLiBtn.onclick = e => {
        removeLiBtn.parentElement.parentElement.remove();
    }
    divBtns.appendChild(removeLiBtn);

    const editLiBtn = document.createElement('button');
    editLiBtn.textContent = '...';
    editLiBtn.onclick = e => {
        const newInfo = prompt('Input new information about car >>');
        listItem.firstChild.textContent = `${element.id} ${newInfo}`;
        //неожиданно здесь пригодились знания с последнего занятия))
        e.stopPropagation();
    }
    divBtns.appendChild(editLiBtn);

    listElement.appendChild(listItem);
});


