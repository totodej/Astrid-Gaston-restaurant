import {
  christmasProducts,
  iceCreams,
  pies,
  cakes,
  confectioneries,
} from "../data/products.js";

const renderMain = () => {
  const main = document.querySelector("main");

  main.innerHTML =
    '<section id="christmas"><h2>Noël</h2><div id="christmas-list"></div></section>' +
    '<section id="ice-creams"><h2>Glaces et Sorbets</h2><div id="ice-creams-list"></div></section>' +
    '<section id="pies"><h2>Tartes</h2><div id="pies-list"></div></section>' +
    '<section id="cakes"><h2>Gâteaux</h2><div id="cakes-list"></div></section>' +
    '<section id="confectioneries"><h2>Confiserie et chocolaterie</h2><div id="confectioneries-list"></div></section>' +
    '<div id="modal"><div class="modal-content"></div></div>';
};

const renderChristmas = () => {
  const christmas = document.getElementById("christmas-list");

  christmasProducts.forEach((christmasProduct) => {
    christmas.innerHTML +=
      '<div class="christmas-product"><div class="christmas-product-descriptions"><h3>' +
      christmasProduct.title +
      '</h3><p class="christmas-product-descriptions-description">' +
      christmasProduct.description +
      "</p><p>" +
      christmasProduct.price +
      "€</p></div>" +
      imageProcessing(christmasProduct.image, christmasProduct.title) +
      "</div>";
  });
};

const renderIceCreams = () => {
  const iceCreamsId = document.getElementById("ice-creams-list");

  iceCreams.forEach((iceCream) => {
    iceCreamsId.innerHTML +=
      '<div class="ice-cream-product"><div class="ice-cream-product-descriptions"><h3>' +
      iceCream.title +
      '</h3><p class="ice-cream-product-descriptions-description">' +
      iceCream.description +
      "</p><p>" +
      iceCream.price +
      "€</p></div>" +
      imageProcessing(iceCream.image, iceCream.title) +
      "</div>";
  });
};

const renderPies = () => {
  const piesId = document.getElementById("pies-list");

  pies.forEach((pie) => {
    piesId.innerHTML +=
      '<div class="pie-product"><div class="pie-product-descriptions"><h3>' +
      pie.title +
      '</h3><p class="pie-product-descriptions-description">' +
      pie.description +
      "</p><p>" +
      pie.price +
      "€</p></div>" +
      imageProcessing(pie.image, pie.title) +
      "</div>";
  });
};

const renderCakes = () => {
  const cakesId = document.getElementById("cakes-list");

  cakes.forEach((cake) => {
    cakesId.innerHTML +=
      '<div class="cake-product"><div class="cake-product-descriptions"><h3>' +
      cake.title +
      '</h3><p class="cake-product-descriptions-description">' +
      cake.description +
      "</p><p>" +
      cake.price +
      "€</p></div>" +
      imageProcessing(cake.image, cake.title) +
      "</div>";
  });
};

const renderConfectioneries = () => {
  const confectioneriesId = document.getElementById("confectioneries-list");

  confectioneries.forEach((confectionery) => {
    confectioneriesId.innerHTML +=
      '<div class="confectionery-product"><div class="confectionery-product-descriptions"><h3>' +
      confectionery.title +
      '</h3><p class="confectionery-product-descriptions-description">' +
      confectionery.description +
      "</p><p>" +
      confectionery.price +
      "€</p></div>" +
      imageProcessing(confectionery.image, confectionery.title) +
      "</div>";
  });
};

const openModal = () => {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
};

const getProduct = (theme, products) => {
  const themeProducts = document.getElementsByClassName(theme + "-product");

  for (let i = 0; i < themeProducts.length; i++) {
    let product = themeProducts[i];
    product.addEventListener("click", function () {
      const titleH3 = this.querySelector("h3").textContent;

      products.forEach((product) => {
        if (product.title === titleH3) {
          openModal();
          renderProduct(product);
        }
      });
    });
  }
};

const closeModal = () => {
  const close = document.getElementById("close");
  close.addEventListener("click", function () {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  });
};

const renderProduct = (product) => {
  const modalContent = document.getElementsByClassName("modal-content");

  modalContent[0].innerHTML =
    '<img src="../assets/PngItem_5043040.png" id="close" alt="fermer" />' +
    '<div class="product-descriptions"><h3>' +
    product.title +
    '</h3><p class="product-descriptions-description">' +
    product.description +
    '</p><p class="product-descriptions-price">' +
    product.price +
    "€</p></div>" +
    imageProcessing(product.image, product.title);

  closeModal();
};

const imageProcessing = (image, title) => {
  let variable;

  image === ""
    ? (variable = '<div class="no-image"></div>')
    : (variable =
        '<img src="../assets/images/products/' +
        image +
        '" alt="' +
        title +
        '" />');
  return variable;
};

const render = () => {
  renderMain();
  renderChristmas();
  renderIceCreams();
  renderPies();
  renderCakes();
  renderConfectioneries();
  getProduct("christmas", christmasProducts);
  getProduct("ice-cream", iceCreams);
  getProduct("pie", pies);
  getProduct("cake", cakes);
  getProduct("confectionery", confectioneries);
};

render();
