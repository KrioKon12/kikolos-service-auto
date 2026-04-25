function emailValid(email) {
  var regula = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regula.test(email);
}

function telefonValid(telefon) {
  var regula = /^[0-9]+$/;
  return regula.test(telefon);
}

function getUtilizatori() {
  return JSON.parse(localStorage.getItem("utilizatori")) || [];
}

function salveazaUtilizatori(utilizatori) {
  localStorage.setItem("utilizatori", JSON.stringify(utilizatori));
}

function creeazaCont() {
  var nume = document.getElementById("registerNume").value.trim();
  var prenume = document.getElementById("registerPrenume").value.trim();
  var email = document.getElementById("registerEmail").value.trim();
  var telefon = document.getElementById("registerTelefon").value.trim();
  var parola = document.getElementById("registerParola").value.trim();
  var confirmare = document.getElementById("registerConfirmare").value.trim();
  var mesaj = document.getElementById("registerMesaj");

  mesaj.className = "";

  if (!nume || !prenume || !email || !telefon || !parola || !confirmare) {
    mesaj.innerText = "Completează toate câmpurile.";
    mesaj.className = "mesaj-eroare";
    return;
  }

  if (!emailValid(email)) {
    mesaj.innerText = "Introdu un email valid.";
    mesaj.className = "mesaj-eroare";
    return;
  }

  if (!telefonValid(telefon)) {
    mesaj.innerText = "Numărul de telefon trebuie să conțină doar cifre.";
    mesaj.className = "mesaj-eroare";
    return;
  }

  if (parola.length < 8) {
    mesaj.innerText = "Parola trebuie să conțină minimum 8 caractere.";
    mesaj.className = "mesaj-eroare";
    return;
  }

  if (parola !== confirmare) {
    mesaj.innerText = "Confirmarea parolei nu coincide.";
    mesaj.className = "mesaj-eroare";
    return;
  }

  var utilizatori = getUtilizatori();
  var exista = utilizatori.some(function (utilizator) {
    return utilizator.email === email;
  });

  if (exista) {
    mesaj.innerText = "Acest email este deja înregistrat. Intră în cont.";
    mesaj.className = "mesaj-eroare";
    return;
  }

  var utilizatorNou = {
    nume: nume,
    prenume: prenume,
    email: email,
    telefon: telefon,
    parola: parola
  };

  utilizatori.push(utilizatorNou);
  salveazaUtilizatori(utilizatori);

  mesaj.innerText = "Cont creat cu succes! Vei fi redirecționat către pagina de login.";
  mesaj.className = "mesaj-succes";

  setTimeout(function () {
    window.location.href = "login.html";
  }, 1200);
}

function intraInCont() {
  var email = document.getElementById("loginEmail").value.trim();
  var parola = document.getElementById("loginParola").value.trim();
  var mesaj = document.getElementById("loginMesaj");

  mesaj.className = "";

  if (!email || !parola) {
    mesaj.innerText = "Completează emailul și parola.";
    mesaj.className = "mesaj-eroare";
    return;
  }

  var utilizatori = getUtilizatori();
  var utilizatorGasit = utilizatori.find(function (utilizator) {
    return utilizator.email === email && utilizator.parola === parola;
  });

  if (utilizatorGasit) {
    localStorage.setItem("logat", "da");
    localStorage.setItem("utilizatorCurent", JSON.stringify(utilizatorGasit));
    mesaj.innerText = "Autentificare reușită!";
    mesaj.className = "mesaj-succes";

    setTimeout(function () {
      window.location.href = "index.html";
    }, 700);
  } else {
    mesaj.innerText = "Emailul sau parola sunt greșite.";
    mesaj.className = "mesaj-eroare";
  }
}
