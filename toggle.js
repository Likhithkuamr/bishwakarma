const toggleBtnIcon = document.querySelector(".fa-bars");
const dropDownMenu = document.querySelector(".dmenu");

toggleBtnIcon.onclick = function () {
  dropDownMenu.classList.toggle("open");
};
