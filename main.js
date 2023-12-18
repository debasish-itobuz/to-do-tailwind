const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");
const todo = [];

function task() {
  output.innerHTML = "";
  for (let i = 0; i < todo.length; i++) {
    output.innerHTML += `
    <div class="flex gap-3 w-full justify-between">
      <p>${todo[i].val} </p>
      <button onclick="delTask('${i}')">DELETE</button>
    </div>`;
  }
}

function add() {
  const val = input.value.trim();
  if (todo.find((data) => data.val === val)) alert("todo already exists...");
  else if (val === "") alert("empty task...");
  else {
    todo.push({
      val: val,
      date: new Date().toLocaleDateString(),
    });
    task();
  }
  input.value = "";
}

function delTask(i) {
  todo.splice(i, 1);
  task();
}

btn.addEventListener("click", add);

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") add();
});
