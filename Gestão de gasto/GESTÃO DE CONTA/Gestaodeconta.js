const formConta = document.getElementById("form-conta"),
  tabelaContas = document.getElementById("tabela-contas"),
  total = document.getElementById("total");
let saldoTotal = 0;
function adicionarRegistro(e) {
  location.reload();
  var t = JSON.parse(localStorage.getItem("values"));
  null == t && (t = []),
    t.push(e),
    localStorage.setItem("values", JSON.stringify(t));
}
function removerRegistro(
  data,
  descricao,
  entrada,
  saida,
  saldo,
  divSaldoTotal
) {
  location.reload();
  var r = JSON.parse(localStorage.getItem("values"));
  null == r && (r = []);
  var d = r.filter(
    (e) => e.data == data && e.descricao == descricao && e.entrada == entrada
  );
  console.log(d);
  d = r.indexOf(d[0]);
  r.splice(d, 1);
  localStorage.setItem("values", JSON.stringify(r));
}
var values;
function adicionarConta(data, descricao, entrada, saida, saldo, divSaldoTotal) {
  criaLinha(data, descricao, entrada, saida, saldo, divSaldoTotal),
    (lista = {
      data: data,
      descricao: descricao,
      entrada: entrada,
      saida: saida,
      saldo: saldo,
    }),
    adicionarRegistro(lista);
}
function criaLinha(data, descricao, entrada, saida, saldo, divSaldoTotal) {
  const row = document.createElement("tr"),
    tdData = document.createElement("td"),
    tdDescricao = document.createElement("td"),
    tdEntrada = document.createElement("td"),
    tdSaida = document.createElement("td"),
    tdSaldo = document.createElement("td"),
    tdExcluir = document.createElement("td"),
    imgBotaoExcluir = document.createElement("img");
  (imgBotaoExcluir.src = "Untitled.png"),
    (imgBotaoExcluir.className = "botaoXmaisclaro"),
    imgBotaoExcluir.addEventListener("click", function () {
      var confirmacao = confirm("Deseja mesmo excluir essa informação?");
      if (confirmacao == true) {
        this.parentElement.parentElement.remove();
        removerRegistro(data, descricao, entrada, saida, saldo);
      }
    });
  var dataFormatada = data.split("-").reverse().join("/");
  (tdData.textContent = dataFormatada),
    (tdDescricao.textContent = descricao),
    (tdEntrada.textContent = entrada.toFixed(2)),
    (tdSaida.textContent = saida.toFixed(2)),
    (tdSaldo.textContent = saldo.toFixed(2)),
    tdExcluir.appendChild(imgBotaoExcluir),
    row.appendChild(tdData),
    row.appendChild(tdDescricao),
    row.appendChild(tdEntrada),
    row.appendChild(tdSaida),
    row.appendChild(tdSaldo),
    row.appendChild(tdExcluir),
    tabelaContas.appendChild(row),
    (divSaldoTotal.textContent = saldoTotal.toFixed(2)),
    (saldoTotal += saldo),
    (divSaldoTotal.textContent = saldoTotal.toFixed(2));
}
void 0 === localStorage.getItem("values") &&
  localStorage.setItem("values", JSON.stringify(new Array())),
  (window.onload = function () {
    total.textContent = saldoTotal.toFixed(2);
    var e = JSON.parse(localStorage.getItem("values"));
    null != e &&
      e
        .sort((e, t) => e.data > t.data)
        .forEach((e) => {
          criaLinha(e.data, e.descricao, e.entrada, e.saida, e.saldo, total);
        });
  }),
  (values = localStorage.getItem("values")) &&
    (valuesParsed = JSON.parse(values)),
  formConta.addEventListener("submit", (event) => {
    event.preventDefault();
    var data = event.target.elements.data.value,
      descricao = event.target.elements.descricao.value,
      entrada = parseFloat(event.target.elements.entrada.value),
      saida = parseFloat(event.target.elements.saida.value),
      saldo = entrada - saida;
    adicionarConta(data, descricao, entrada, saida, saldo, total),
      formConta.reset();
    saldoTotal += saldo;
    total.textContent = saldoTotal.toFixed(2);
  }),
  document.querySelector("#sair").addEventListener("click", function () {
    window.location.href =
      "file:///home/operador/%C3%81rea%20de%20Trabalho/TESTES%20DE%20controle%20de%20gastos/gest%C3%A3o%20de%20contas/tela%20login%20contas%201/telalogin.html";
  });

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const closeBtn = document.getElementById("close-button");

  const monthsData = {
    janeiro: "Informações de Janeiro...",
    fevereiro: "Informações de Fevereiro...",
    marco: "Informações de Março...",
    abril: "Informações de Abril...",
    maio: "Informações de Maio...",
    junho: "Informações de Junho...",
    julho: "Informações de Julho...",
    agosto: "Informações de Agosto...",
    setembro: "Informações de Setembro...",
    outubro: "Informações de Outubro...",
    novembro: "Informações de Novembro...",
    dezembro: "Informações de Dezembro...",
    // Adicione as informações dos outros meses aqui
  };

  const modalButtons = document.querySelectorAll(".modal-button");

  modalButtons.forEach((button, idx) => {
    button.addEventListener("click", function () {
      const monthId = button.id;
      const monthInfo = monthsData[monthId];

      let dados = JSON.parse(localStorage.getItem("values"));
      let registros = dados.filter(
        (registro) => new Date(registro.data).getMonth() == idx
      )};

      //modalContent.textContent = `${registros}`;
      modal.style.display = "flex";
      void 0 === localStorage.getItem("values") &&
  localStorage.setItem("values", JSON.stringify(new Array())),
  (window.onload = function () {
    total.textContent = saldoTotal.toFixed(2);
    var e = JSON.parse(localStorage.getItem("values"));
    null != e &&
      e
        .sort((e, t) => e.data > t.data)
        .forEach((e) => {
          criaLinha(dm.dataModal, d.descricaoModal, em.entradaModal, sm.saidaModal, s.saldoModal);
        });
  }),
      function criaLinha(dataModal, descricaoModal, entradaModal, saidaModal, saldoModal) {
        const row = document.createElement("tr"),
          tdData = document.createElement("td"),
          tdDescricao = document.createElement("td"),
          tdEntrada = document.createElement("td"),
          tdSaida = document.createElement("td"),
          tdSaldo = document.createElement("td"),
          tdExcluir = document.createElement("td"),
          imgBotaoExcluir = document.createElement("img");
        (imgBotaoExcluir.src = "Untitled.png"),
          (imgBotaoExcluir.className = "botaoXmaisclaro"),
          imgBotaoExcluir.addEventListener("click", function () {
            var confirmacao = confirm("Deseja mesmo excluir essa informação?");
            if (confirmacao == true) {
              this.parentElement.parentElement.remove();
              removerRegistro(data, descricao, entrada, saida, saldo);
            }
          });
    });
  });
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    modalContent.style.display = "none";
    closeBtn.style.display = "none";
  });
});
