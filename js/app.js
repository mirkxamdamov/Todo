let list = el("ul");
let inp = el(".inp");
let form = el("form");
let elTodoTemplete = el(".todo-templete").content;
let data = JSON.parse(localStorage.getItem("allTodo"));
let AllTodo = data? data : [];
let total = el(".total")
let RenderTodo = (arr) => {
  total.textContent = arr.length;
  list.innerHTML = null;

  arr.forEach((item) => {
    let elTodo = elTodoTemplete.cloneNode(true);
    elTodo.querySelector(".span").textContent = item.Text;
    let btnDelete = elTodo.querySelector(".delete");
    let btnEdit = elTodo.querySelector(".edit");
    let check = elTodo.querySelector(".check");
    check.addEventListener("change", () => {
       console.log(elTodo.querySelector(".span"));
       console.log(check);
    });

    btnDelete.dataset.id = item.id;
    btnEdit.dataset.id = item.id;
    list.append(elTodo);
    btnDelete.addEventListener("click", (e) => {
      let arr = [];
      AllTodo.forEach((todo) => {
        if (todo.id !== e.target.dataset.id - 0) {
          arr.push(todo);
        }
        AllTodo = arr;
        RenderTodo(arr);
        localStorage.setItem("allTodo", JSON.stringify(arr));
    });
});
btnEdit.addEventListener("click", (e) => {
    AllTodo.forEach((todo) => {
        if (todo.id === e.target.dataset.id - 0) {
            let editTodo = prompt("Edit todo", todo.Text);
            
            todo.Text = editTodo;
        }
    });
    RenderTodo(AllTodo);
    localStorage.setItem("allTodo", JSON.stringify(arr));
});
  });
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = inp.value.trim();
  if (!inputValue) {
    alert("Input Todo");
    inp.value = null;
    return;
  }
  inp.value = null;
  let newObj = {
    id: AllTodo.at(0) ? AllTodo.at(0)?.id + 1 : 1,
    Text: inputValue,
    isCompleted: false,
  };
  RenderTodo(AllTodo);
  AllTodo.unshift(newObj);
  localStorage.setItem("allTodo", JSON.stringify(AllTodo));
  RenderTodo(AllTodo);
});
RenderTodo(AllTodo);
