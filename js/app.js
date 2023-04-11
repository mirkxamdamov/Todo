let list = el("ul");
let inp = el(".inp");
let form = el("form");
let elTodoTemplete = el(".todo-templete").content;
let data = JSON.parse(localStorage.getItem("allTodo"));
let AllTodo = data? data : [];
let total = el(".total")
let onComplated = (e) => {
  AllTodo.forEach(el => {
    if (el.id - 0 === e) {
      el.isCompleted = e.target.checked
    }
  })
  localStorage.setItem("allTodo" , JSON.stringify(AllTodo));
  RenderTodo(AllTodo)
} 
let RenderTodo = (arr) => {
  total.textContent = arr.length;
  list.innerHTML = null;

  arr.forEach((item) => {
    let elTodo = elTodoTemplete.cloneNode(true);
    let elLi = elTodoTemplete.querySelector(".todo");
    let todotext = elTodo.querySelector(".span");
    elTodo.querySelector(".span").textContent = item.Text;
    let btnDelete = elTodo.querySelector(".delete");
    let btnEdit = elTodo.querySelector(".edit");
    let check = elTodo.querySelector(".check");
        if (item.isCompleted) {
      todotext.classList.add("text-decoration-line-through");
    }
    check.checked = item.isCompleted;
    elLi.dataset.id = item.id
    list.append(elTodo);
    check.addEventListener("change" , onComplated )
});
};
let ellist = (e) => {
  // console.log(e);

  if(e.target.matches(".delete")){
          let arr = [];
          

          AllTodo.forEach((todo) => {
            if (todo.id != e.target.closest(".todo").dataset.id - 0) {
              arr.push(todo);
            }
            AllTodo = arr;
            RenderTodo(arr);
            localStorage.setItem("allTodo", JSON.stringify(arr));
          });
  }
  else if (e.target.matches(".edit")) {
    AllTodo.forEach((todo) => {
      let editTodo = prompt("Edit todo", todo.Text);
      if (todo.id === e.target.closest(".todo").dataset.id - 0) {
        todo.Text = editTodo;
      }
    });
    RenderTodo(AllTodo);
    localStorage.setItem("allTodo", JSON.stringify(AllTodo));
  }
  else if (e.target.matches(".check")) {
  onComplated(e.target.closest(".todo").dataset.id - 0)
  }
} 
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
  AllTodo.push(newObj);
  localStorage.setItem("allTodo", JSON.stringify(AllTodo));


  RenderTodo(AllTodo);
});
list.addEventListener("click" , ellist)
RenderTodo(AllTodo);
