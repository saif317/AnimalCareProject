function changeColor() {
  var color1 = document.body.style.backgroundColor;
  var color2 = prompt("Please Choose a Color", "white");

  if (color2 != null) {
    document.body.style.backgroundColor = color2;
    if (
      confirm(
        "the background is now " +
          color2 +
          " click cancel to revert back to original color"
      ) === false
    )
      document.body.style.backgroundColor = color1;
  }
}
