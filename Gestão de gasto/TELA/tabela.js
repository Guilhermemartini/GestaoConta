const table = document.querySelector("table"),
  tbody = table.querySelector("tbody"),
  rows = tbody.querySelectorAll("tr");

localStorage.getItem("values");

var values;
function adicionarConta(e, t, a, o, n, l) {
  criaLinha(e, t, a, o, n, l),
    (lista = { data: e, descricao: t, entrada: a, saida: o, saldo: n }),
    //adicionarRegistro(lista);
}
function criaLinha(e, t, a, o, n, l) {
  const r = document.createElement("tr"),
    d = document.createElement("td"),
    i = document.createElement("td"),
    s = document.createElement("td"),
    c = document.createElement("td"),
    m = document.createElement("td"),
    u = document.createElement("td"),
    (g.className = "botaoXmaisclaro"),
  var p = e.split("-").reverse().join("/");
  (d.textContent = p),
    (i.textContent = t),
    (s.textContent = a.toFixed(2)),
    (c.textContent = o.toFixed(2)),
    (m.textContent = n.toFixed(2)),
    u.appendChild(g),
    r.appendChild(d),
    r.appendChild(i),
    r.appendChild(s),
    r.appendChild(c),
    r.appendChild(m),
    r.appendChild(u),
    tabelaContas.appendChild(r),
    (l.textContent = saldoTotal.toFixed(2)),
    (saldoTotal += n),
    (l.textContent = saldoTotal.toFixed(2));
}

void 0 === localStorage.getItem("valuesFiltered") &&
  localStorage.setItem("valuesFiltered", JSON.stringify(new Array())),
  (window.onload = function () {
    total.textContent = saldoTotal.toFixed(2);
    var e = JSON.parse(localStorage.getItem("valuesFiltered"));
    null != e &&
      e
        .sort((e, t) => e.data > t.data)
        .forEach((e) => {
          criaLinha(e.data, e.descricao, e.entrada, e.saida, e.saldo, total);
        });
  }),
  (values = localStorage.getItem("valuesFiltered")) &&
    (valuesParsed = JSON.parse(values)),
  formConta.addEventListener("submit", (e) => {
    e.preventDefault();
    var t = e.target.elements.data.value,
      a = e.target.elements.descricao.value,
      o = parseFloat(e.target.elements.entrada.value),
      n = parseFloat(e.target.elements.saida.value),
      e = o - n;
    adicionarConta(t, a, o, n, e, e), formConta.reset();
    saldoTotal += saldo;
    total.textContent = saldoTotal.toFixed(2);
  }),

const valuesFiltered = JSON.parse(localStorage.getItem("valuesFiltered"));

