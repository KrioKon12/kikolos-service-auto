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