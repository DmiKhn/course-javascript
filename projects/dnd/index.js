/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');
homeworkContainer.style.position = 'relative';

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('.draggable-div')) {
    const zone = e.target.parentNode;
    // const newItem = createDiv();
    console.log(zone);
  }
});

// function dragAndDrop(elem) {
//   let currentDrag;

//   elem.addEventListener('dragstart', (e) => {
//     currentDrag = e.target
//   })

//   elem.addEventListener('dragover', (e) => {
//     e.preventDefault();
//   })

//   elem.addEventListener('drop', (e) => {

//   })
// }

// document.addEventListener('mousemove', (e) => {
//   let currentDrag;
//   let x = e.offsetX;
//   let y = e.offsetY;

//   e.target.addEventListener('dragstart', (el) => {
//     currentDrag = el.target
//   })

//   e.target.addEventListener('dragover', (el) => {
//     el.preventDefault();
//   })

//   e.target.addEventListener('drop', (el) => {
//     e.target.style.top = `${y}px`
//     e.target.style.left = `${x}px`
//   })
//   // console.log(x, y)
// });

export function createDiv() {
  const ourDiv = document.createElement('div');
  ourDiv.classList.add('.draggable-div');
  ourDiv.draggable = true;

  const randomCol = Math.floor(Math.random() * 16777215).toString(16);
  const randomWidth = Math.floor(Math.random() * 100);
  const randomHeight = Math.floor(Math.random() * 100);
  const randomPosWidth = Math.floor(Math.random() * window.innerWidth);
  const randomPosHeight = Math.floor(Math.random() * window.innerHeight);

  ourDiv.style.background = `#${randomCol}`;
  ourDiv.style.width = `${randomWidth}px`;
  ourDiv.style.height = `${randomHeight}px`;
  ourDiv.style.top = `${randomPosWidth}px`;
  ourDiv.style.left = `${randomPosHeight}px`;
  ourDiv.style.position = 'absolute';

  return ourDiv;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});
