// По нажатию на кнопку изменить текст самой кнопки (см. innerText).
const buttonElement = document.querySelector('button');

const btnClickHendler = (element, str = 'string param') => (event) => {
    //console.log('in btn click hendler function :>> ');    
    element.innerText = str + String(Math.round(Math.random() * 100));;
}

buttonElement.addEventListener('click', btnClickHendler(buttonElement, 'After Click Text '));

//2) Отобразить картинку. Сделать так, что бы при появлении страницы отображалсь одна картинка,
// а при наведении мышью на неё отображалась другая.

const image = document.createElement('img');
const firstImgSrc ='https://i.pinimg.com/736x/0f/fa/6f/0ffa6f61edee99509a57a6d1171948c9.jpg';
const secondImgSrc = 'https://st.depositphotos.com/1006540/2416/i/600/depositphotos_24165337-stock-photo-discoball-head.jpg';

image.setAttribute('src', firstImgSrc);
image.setAttribute('alt', 'Techno Image');
image.setAttribute('width', '200 px');
image.setAttribute('height', '200 px');

image.onmouseover = (e) => {image.setAttribute('src', secondImgSrc)};
image.onmouseout = (e) => {image.setAttribute('src', firstImgSrc)};
//image.addEventListener('mouseover', (e) => { image.setAttribute('src', secondImgSrc); });
//image.addEventListener('mouseout', (e) => { image.setAttribute('src', firstImgSrc); });

document.body.append(image);
//document.body.before(document.getElementsByTagName('h2'));

// 3) Сгенерировать заданную структуру:
// <h1>Header1</h1>
// <article>
// <h2>Header2</h2>
// <div><img src="" alt=""></div>
// <p>It is paragraph</p>
// </article>
// (привязать <div id="root"></div>)
const hTaskElement = document.createElement('h2');
hTaskElement.innerText = 'Task 3';
document.body.append(hTaskElement);

const divRoot = document.createElement('div');
divRoot.id = "root";
divRoot.setAttribute('width', '70%');
document.body.append(divRoot);

const h1Element = document.createElement('h1');
h1Element.innerText = 'Header 1';
h1Element.setAttribute('align', 'center');
divRoot.append(h1Element);

const articleElement = document.createElement('article');
divRoot.append(articleElement);

const h2Element = document.createElement('h2');
h2Element.innerText = 'Header 2';
h2Element.setAttribute('align', 'center');
articleElement.append(h2Element);

const innerDivElement = document.createElement('div');
articleElement.append(innerDivElement);

const pElement = document.createElement('p');
pElement.innerText = 'This is paragraph text';
articleElement.append(pElement);

const imageElement = document.createElement('img');
imageElement.setAttribute('src', ' ');
imageElement.setAttribute('alt', ' ');
innerDivElement.append(imageElement);

