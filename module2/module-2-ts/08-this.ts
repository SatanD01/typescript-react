// this в объекте очевидно понятен для TS

const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    }
}


// когда мы передаем this для какого либо элемента надо его конкретизировать для чего именно мы его передаем. в нашем случае мы передаем его кнопке
function myClickHandler(this: HTMLButtonElement, event: Event) {
    this.disabled = true
}

// <button onClick="myClickHandler">Click me!</button>