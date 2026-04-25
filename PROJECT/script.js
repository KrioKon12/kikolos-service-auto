function trimiteFormular() {
      var nume = document.getElementById("inputNume").value.trim();
      var telefon = document.getElementById("inputTelefon").value.trim();
      var serviciu = document.getElementById("inputServiciu").value;
      var model = document.getElementById("inputModel").value.trim();
      var problema = document.getElementById("inputProblema").value.trim();
      var data = document.getElementById("inputData").value;
      var ora = document.getElementById("inputOra").value;

      if (!nume || !telefon || !serviciu || !model || !problema || !data || !ora) {
        alert("Te rugam sa completezi toate.");
        return;
      }

      var dataFormatata = new Date(data).toLocaleDateString("ro-RO", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
      var detalii = "👤 " + nume + " | 📞 " + telefon + "\n📅 " + dataFormatata + " la ora " + ora;
      document.getElementById("detaliiProgramare").innerText = "📅 " + dataFormatata + " la ora " + ora + "\n👤 " + nume;

      document.getElementById("formGrup").style.display = "none";
      var mesaj = document.getElementById("mesajConfirmare");
      mesaj.classList.add("activ");
      mesaj.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    var azi = new Date().toISOString().split("T")[0];
    document.getElementById("inputData").min = azi;

function incarcaProduse() {
  var container = document.getElementById("produseContainer");
  if (!container) return;

  fetch("produse.json")
    .then(function (raspuns) {
      return raspuns.json();
    })
    .then(function (produse) {
      afiseazaProduse(produse);
    })
    .catch(function () {
      container.innerHTML = "<p>Produsele nu au putut fi încărcate. Rulează proiectul prin Live Server.</p>";
    });
}

function afiseazaProduse(produse) {
  var container = document.getElementById("produseContainer");
  container.innerHTML = "";

  produse.forEach(function (produs) {
    var card = document.createElement("div");
    card.className = "produs-card";

    card.innerHTML = `
      <h3>${produs.nume}</h3>
      <p>${produs.descriere}</p>
      <strong>${produs.pret}</strong>
    `;

    container.appendChild(card);
  });
}

function iesireCont() {
  localStorage.removeItem("logat");
  localStorage.removeItem("utilizatorCurent");
  window.location.href = "login.html";
}

incarcaProduse();
