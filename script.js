const root = document.getElementById('root');
root.addEventListener('click', (ev) => {
  addactive(ev);
});
const btn = document.querySelector('#start');
const colored = document.querySelector('.colored');
const elemColor = document.querySelector('#elem-color'); elemColor.addEventListener('focus', change);
elemColor.addEventListener('change', change);
const borderColor = document.querySelector('#border-color'); borderColor.addEventListener('change', changeBorder);
const rootW = 750;
const rootH = 480;
let target;
function generate(w, h) {

    root.style.gridTemplateColumns = 'repeat(' + rootW/select.value + ', 1fr)';
    root.style.gridTemplateRows = 'repeat(' + rootH/select.value + ', 1fr)';
    root.innerHTML = '';
    let arr = new Array(w);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(h).fill('0');
    }

    let id = 1;
    let doble = 2;

    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i].indexOf('0'); j !== -1; j = arr[i].indexOf('0')) {
            fillSquare(i, j, arr);
        }
    }

    function fillSquare(row, col, arr) {
        let width = Math.ceil(Math.random() * (h / doble - 1));
        let height = Math.ceil(Math.random() * (w / doble - 1));
        for (let i = row; i < height + row; i++) {
            if (i >= arr.length) {
                height = i - row;
                break;
            }
    
            for (let j = col; j < col + width; j++) {
                if (arr[i][j] != 0 || j >= arr[0].length) {
                    width = j - col;
                    break;
                }
                arr[i][j] = id;
            }
        }
    
        let div = document.createElement('div');
        div.id = id;
        div.style.gridColumn = (row+1)  + '/' + (height + row + 1);
        div.style.gridRow = (col + 1)  + '/' +  (col + width + 1);
        let maxRGB = 255;
        if (colored.checked) {
            div.style.background = `rgb(${Math.floor(Math.random()*maxRGB)}, 
                                        ${Math.floor(Math.random()*maxRGB)}, 
                                        ${Math.floor(Math.random()*maxRGB)})`;
        }
        div.classList.add('elem');
        root.appendChild(div);
        id++;
    }
}
const select = document.querySelector('#select');

btn.addEventListener('click', () => {
    generate(rootW/select.value, rootH/select.value);
    changeBorder();
});

function addactive(ev) {
  target && target.classList.remove("active");
  target = ev.target;
  target.classList.add("active");
}

function change() {
    target.style.background = elemColor.value;
}

function changeBorder() {  [...document.querySelectorAll('.elem')].forEach(item => {
     item.style.borderColor = borderColor.value;
    });
}

generate(rootW/select.value, rootH/select.value);