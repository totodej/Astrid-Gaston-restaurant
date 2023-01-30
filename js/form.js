// display modal to complete the form
const displayModal = () => {
  const workWithUs = document.getElementById("work-with-us");
  const modal = document.getElementById("modal");
  const closeX = document.getElementById("close");

  const openModal = () => {
    modal.style.display = "flex";
  };

  const closeModal = () => {
    modal.style.display = "none";
  };

  workWithUs.addEventListener("click", openModal);
  closeX.addEventListener("click", closeModal);
};

// form validation
const submitForm = () => {
  const lastnameInput = document.getElementById("lastname");
  const firstnameInput = document.getElementById("firstname");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const cityInput = document.getElementById("city");
  const countryInput = document.getElementById("country");
  const nationalityInput = document.getElementById("nationality");
  const workSelect = document.getElementById("work");
  const contractSelect = document.getElementById("contract");
  const fileInput = document.getElementById("file");
  let validate = true;

  const inputValidation = (input, name, text) => {
    if (input.value === "") {
      document.getElementById("error-" + name).innerHTML =
        "*Remplir le champ " + text;
      validate = false;
    } else {
      document.getElementById("error-" + name).innerHTML = "";
    }
  };

  const emailValidation = (input, name, text) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regex.test(input.value)) {
      document.getElementById("error-" + name).innerHTML = "";
    } else {
      document.getElementById("error-" + name).innerHTML =
        "*Remplir le champ " + text + " correctement";
      validate = false;
    }
  };

  const selectValidation = (select, name, text) => {
    if (select.value === "") {
      document.getElementById("error-" + name).innerHTML =
        "*Selectionner " + text;
      validate = false;
    } else {
      document.getElementById("error-" + name).innerHTML = "";
    }
  };

  const fileValidation = (input, name, text) => {
    let formatFile = input.value.lastIndexOf("pdf");

    if (formatFile === -1) {
      document.getElementById("error-" + name).innerHTML =
        "*Selectionner " + text;
      input.value = "";
      validate = false;
    } else {
      document.getElementById("error-" + name).innerHTML = "";
    }
  };

  inputValidation(lastnameInput, "lastname", "Nom");
  inputValidation(firstnameInput, "firstname", "Prénom");
  emailValidation(emailInput, "email", "Email");
  inputValidation(phoneInput, "phone", "Téléphone");
  inputValidation(cityInput, "city", "Ville");
  inputValidation(countryInput, "country", "Pays");
  inputValidation(nationalityInput, "nationality", "Nationalité");
  selectValidation(workSelect, "work", "le Domaine");
  selectValidation(contractSelect, "contract", "la Nature");
  fileValidation(fileInput, "file", "le fichier");

  const object = {
    lastname: lastnameInput.value,
    firstname: firstnameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    city: cityInput.value,
    country: countryInput.value,
    nationality: nationalityInput.value,
    work: workSelect.value,
    contract: contractSelect.value,
    file: fileInput.value,
  };

  localStorage.setItem("person", JSON.stringify(object));

  return validate;
};

displayModal();
