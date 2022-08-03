
const listsContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

let lists = [];

newListForm.addEventListener('submit', e => {
    e.preventDefault();

    const listName = newListInput.value;
    if (listName == null || listName === '') return

    const list = createList(listName)

    newListInput.value = null;

    lists.push(list);
    render();
})

function createList(name) {
    return { id: Date.now().toString(), name: name, tasks: [] }
}

function render() {
    // <li class="list" id="list-2">Work</li>
    clearElement(listsContainer);

    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.dataset.listId = list.id;
        listElement.classList.add('list');
        listElement.innerText = list.name;

        listsContainer.appendChild(listElement);
    })
}


function clearElement(element) {
    // Keep removing elements off the top until there isn't one left
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

render()