const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  /*suffix is what we added on to the end of the data attribute*/
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach(input => input.addEventListener('change', handleUpdate)); //this triggers after the mouse click, and the value has changed
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); // this triggers everytime the mouse moves on it

