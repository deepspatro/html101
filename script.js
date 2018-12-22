let input = document.getElementById("item");
function clickMe() {
  let li = document.createElement("li");
  let node = document.createTextNode(input.value);
  li.appendChild(node);
  document.getElementById("list").appendChild(li);
}