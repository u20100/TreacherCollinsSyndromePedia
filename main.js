let headIcon = document.getElementById("headicon");
let myListNav = document.getElementById("headlist");

headIcon.onclick = () => {
  let headerWidth = document.querySelector("header .logo").clientWidth * -1;
  let x = document.body.clientWidth;
  myListNav.style.width = `${x}px`;
  myListNav.style.setProperty("width", `${x}`, "important");
  myListNav.style.setProperty(
    "transform",
    `translateX(${headerWidth}px)`,
    "important"
  );
  document.getElementById("headlist").classList.toggle("non-display");
  document.getElementById("headlist").classList.toggle("block-display");
};

//when click on Diagnosis  drop down
document.getElementById("icon-dia").onclick = () => {
  document.getElementById("diag-list").classList.toggle("non1-display");
  document.getElementById("diag-list").classList.toggle("block1-display");
  document.getElementById("icon-dia").classList.toggle("unhovered");

  document.getElementById("icon-dia").classList.toggle("hovered");

  if (
    document.getElementById("diag-list").classList.contains("block1-display")
  ) {
    if (
      document
        .getElementById("tretman-list")
        .classList.contains("block1-display")
    ) {
      document.getElementById("icon-tretman").click();
    }
    if (
      document
        .getElementById("clincal-list")
        .classList.contains("block1-display")
    ) {
      document.getElementById("icon-clinical").click();
    }
  }
};

/*preson child hood*/

document.getElementById("icon-clinic").onclick = () => {
  document
    .getElementById("clinic-aspect-list")
    .classList.toggle("non1-display");
  document
    .getElementById("clinic-aspect-list")
    .classList.toggle("block1-display");
};

//------------------------------click clininical features  drop down
document.getElementById("icon-clinical").onclick = () => {
  document.getElementById("clincal-list").classList.toggle("non1-display");
  document.getElementById("clincal-list").classList.toggle("block1-display");

  document.getElementById("icon-clinical").classList.toggle("unhovered");

  document.getElementById("icon-clinical").classList.toggle("hovered"); //to hide the other lists

  if (
    document.getElementById("clincal-list").classList.contains("block1-display")
  ) {
    if (
      document
        .getElementById("tretman-list")
        .classList.contains("block1-display")
    ) {
      document.getElementById("icon-tretman").click();
    }
    if (
      document.getElementById("diag-list").classList.contains("block1-display")
    ) {
      document.getElementById("icon-dia").click();
    }
  }
};
//------------------------------treatment drop down
document.getElementById("icon-tretman").onclick = () => {
  document.getElementById("tretman-list").classList.toggle("non1-display");
  document.getElementById("tretman-list").classList.toggle("block1-display");
  document.getElementById("icon-tretman").classList.toggle("unhovered");

  document.getElementById("icon-tretman").classList.toggle("hovered");

  //to hide the other lists

  if (
    document.getElementById("tretman-list").classList.contains("block1-display")
  ) {
    if (
      document
        .getElementById("clincal-list")
        .classList.contains("block1-display")
    ) {
      document.getElementById("icon-clinical").click();
    }
    if (
      document.getElementById("diag-list").classList.contains("block1-display")
    ) {
      document.getElementById("icon-dia").click();
    }
  }
};

//******************************** */
