//fix the menu to the top when I scroll
const scrollMenu = () => {
  const navPage = document.getElementById("nav-page");

  const scroll = () => {
    document.documentElement.scrollTop > 300
      ? (navPage.style.backgroundColor = "white")
      : (navPage.style.backgroundColor = "transparent");
  };

  window.onscroll = function () {
    scroll();
  };
};

if (window.matchMedia("(max-width:800px)").matches) {
  navPage.style.backgroundColor = "white";
} else {
  scrollMenu();
}
