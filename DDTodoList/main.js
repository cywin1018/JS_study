// main.js

const addBtn = document.querySelector('.add-btn');
const mainForm = document.querySelector('.main-form');
let draggableTodo = null;


addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = prompt('타이틀을 입력하세요:');
    if (title) {
        const color = prompt('색상코드를 입력하세요 (예: #FFD700,  #FFB6C1, #E6E6FA):');
        const div = document.createElement('div');
        div.classList.add('todo-box');
        let num = 0;
        const headerDiv = document.createElement('div');
        headerDiv.classList.add('headerDiv');
        const h2 = document.createElement('h2');
        h2.textContent = title;
        h2.classList.add('box-title')
        h2.style.backgroundColor = color;
        div.appendChild(headerDiv);
        headerDiv.appendChild(h2);

        const p = document.createElement('p');
        p.textContent = String(num);
        headerDiv.appendChild(p);

        const form = document.createElement('form');
        form.classList.add('new-input-form');
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = '새로 만들기';
        const button = document.createElement('button');
        button.textContent = '추가';

        button.addEventListener('click', (e) => {
            e.preventDefault();
            const newDiv = document.createElement('div');
            newDiv.classList.add('todo');
            newDiv.setAttribute("draggable", "true");
            newDiv.textContent = input.value;
            input.value = '';
            const newSpan = document.createElement('span')
            newSpan.innerHTML = '&times;';
            newSpan.classList.add('close');
            div.appendChild(newDiv);
            newDiv.appendChild(newSpan);
            num++;
            p.textContent = String(num);

            newSpan.addEventListener('click', () => {
                removeTodoFromDiv(newDiv.parentElement); // Pass the parent div to the function
                num--;
                p.textContent = String(num);
            });
            // newSpan.addEventListener('click', () => {
            //     div.removeChild(newDiv);
            //     num--;
            //     p.textContent = String(num);
            // });

            newDiv.addEventListener("dragstart", dragStart);
            newDiv.addEventListener("dragend", dragEnd);
        });

        form.appendChild(input);
        form.appendChild(button);


        div.appendChild(form);

        mainForm.appendChild(div);
    }
});

function removeTodoFromDiv(todoDiv) {
    const todoElement = todoDiv.querySelector('.todo');
    if (todoElement) {
        todoDiv.removeChild(todoElement);
    }
}
function dragStart(e) {
    draggableTodo = this;
    const targetDiv = e.target.closest('.todo-box');
    const pElement = targetDiv.querySelector('h2 > p'); // Get reference to the p element in the target div
    pElement.textContent = String(Number(pElement.textContent) - 1); // Update the num value
    setTimeout(() => {
        this.style.display = 'none';
    }, 0);
}

function dragEnd(event) {
    this.style.display = 'flex';
    draggableTodo = null;
    // const todoBoxParent = this.closest('.todo-box');
    // if (todoBoxParent) {
    //     const todoElement = todoBoxParent.querySelector('.todo');
    //     if (todoElement) {
    //         todoBoxParent.removeChild(todoElement);
    //     }
    // }

}

mainForm.addEventListener("dragover", dragOver);
mainForm.addEventListener("dragenter", dragEnter);
mainForm.addEventListener("dragleave", dragLeave);
mainForm.addEventListener("drop", drop);

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.preventDefault();
    this.style.border = "2px dashed #ccc";
}

function dragLeave() {
    this.style.border = "none";
}

function drop(e) {
    this.style.border = "none";
    const targetDiv = e.target.closest('.todo-box');
    if (targetDiv) {
        targetDiv.appendChild(draggableTodo);
    }
    const pElement = targetDiv.querySelector('h2 > p'); // Get reference to the p element in the target div
    pElement.textContent = String(Number(pElement.textContent) + 1); // Update the num value
}

const searchInput = document.querySelector('.search-input');
const searchStatus = document.createElement('p'); // 추가한 부분

// 검색 상태 텍스트 스타일링
searchStatus.classList.add('search-status');
searchStatus.style.fontSize = '14px';
searchStatus.style.marginTop = '5px';

// 검색창 아래에 추가
searchInput.parentNode.insertBefore(searchStatus, searchInput.nextSibling)
console.log(searchInput.value);
searchInput.addEventListener('input', (e) => {

    e.preventDefault();
    console.log("제출")
    const searchKeyword = searchInput.value.toLowerCase();
    let hasMatch = false; // 검색 결과가 있는지 여부를 나타내는 변수
    const todos = document.querySelectorAll('.todo');
    // console.log(todos);

    todos.forEach(todo => {
        // console.log(todo.textContent);
    });

    // 검색 결과에 따라 검색 상태 텍스트 변경
    searchStatus.textContent = hasMatch ? '검색 결과 있음' : '검색 결과 없음';
    searchStatus.style.color = hasMatch ? 'green' : 'red';
});
