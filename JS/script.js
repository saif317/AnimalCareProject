function changeColor() {
  var type = prompt("Do you like cats or dogs?");
  while (type !== "cats" && type !== "dogs")
    type = prompt("please choose either cats or dogs");

  var number = prompt("How many do you want?", 1);

  if (number != null) {
    for (i = 0; i < number; i++) {
      if (type === "dogs")
        document.getElementById("img").innerHTML +=
          '<img src="https://www.sathguru.com/wp-content/uploads/2020/07/A-Market-assessment-of-Animal-Healthcare-Industry-Landscape-of-Vaccines-and-Diagnostics-Sector-in-India-1280x671.jpg"/>';
      if (type === "cats")
        document.getElementById("img").innerHTML +=
          '<img src="https://www.aspca.org/sites/default/files/cat-care_general-cat-care_body1-right.jpg"/>';
    }
  }
}
