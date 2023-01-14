let insert = document.getElementById("insert");

document.addEventListener("keydown", (event) => {
  insert.innerHTML = `<div class="key"> ${event.key} <small> Key </small></div>
  <div class="keyC"> ${event.keyCode} <small> KeyCode </small></div>
  <div class="code"> ${event.code} <small> Code </small></div>`;
});
