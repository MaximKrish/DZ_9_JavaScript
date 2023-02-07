// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

console.log('Задание 1');
console.log(`При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.`);

const inputEl = document.querySelector('#from');
const spanEl = document.querySelector('span');

inputEl.addEventListener('input', function(e) {
    spanEl.textContent = inputEl.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

console.log('Задание 2');
console.log(`'При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'.'`);

const buttonEl = document.querySelector('.messageBtn');
const messageEl = document.querySelector('.message');

buttonEl.addEventListener('click', function(e) {
    messageEl.classList.add('animate_animated', 'animate_fadeInLeftBig');
    messageEl.style.visibility = 'visible';

});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать

console.log('Задание 3');
console.log(`Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
 - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
 - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать`);

const formElm = document.querySelector('#form');
const inputElm = document.querySelectorAll('.form-control');
const btnEl = document.querySelector('.button');

btnEl.addEventListener('click', function(e) {
    inputElm.forEach(element => {
        if (element.value == '') {
            element.classList.add('error');
            element.style.backgroundColor = 'yellow';
            e.preventDefault();
        } else {
            element.classList.remove('error');
            element.removeAttribute('style');
        }
        e.preventDefault();
    });
});