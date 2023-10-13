document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("infoForm");
  const tableBody = document.getElementById("tableBody");
  const modal = document.getElementById("infoModal");
  const modalNome = document.getElementById("modalNome");
  const modalEmail = document.getElementById("modalEmail");
  const closeModalBtn = document.querySelector(".closeModalBtn");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome && email) {
      addRowToTable(nome, email);
      clearForm();
    }
  });

  function addRowToTable(nome, email) {
    const newRow = tableBody.insertRow();
    const cellNome = newRow.insertCell(0);
    const cellEmail = newRow.insertCell(1);
    const cellAcao = newRow.insertCell(2);

    cellNome.textContent = nome;
    cellEmail.textContent = email;

    const saibaMaisBtn = document.createElement("button");
    saibaMaisBtn.className = "saibaMaisBtn";
    saibaMaisBtn.textContent = "Saiba mais";
    cellAcao.appendChild(saibaMaisBtn);

    saibaMaisBtn.addEventListener("click", function () {
      showModal(nome, email);
    });
  }

  function clearForm() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
  }

  function showModal(nome, email) {
    modalNome.textContent = nome;
    modalEmail.textContent = email;
    modal.style.display = "block";
  }

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
