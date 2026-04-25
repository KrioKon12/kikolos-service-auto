function emailValid(email) {
  var regula = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regula.test(email);
}

function creeazaCont() {
  var nume = document.getElementById("signupNume").value.trim();
  var email = document.getElementById("signupEmail").value.trim();
  var parola = document.getElementById("signupParola").value.trim();
  var mesaj = document.getElementById("signupMesaj");

  if (!nume || !email || !parola) {
    mesaj.innerText = "Completează toate câmpurile.";
    return;
  }

  if (!emailValid(email)) {
    mesaj.innerText = "Introdu un email valid.";
    return;
  }

  if (parola.length < 6) {
    mesaj.innerText = "Parola trebuie să aibă minimum 6 caractere.";
    return;
  }

  var emailSalvat = localStorage.getItem("utilizatorEmail");

  if (emailSalvat === email) {
    mesaj.innerText = "Acest email este deja înregistrat. Intră în cont mai jos.";
    return;
  }

  localStorage.setItem("utilizatorNume", nume);
  localStorage.setItem("utilizatorEmail", email);
  localStorage.setItem("utilizatorParola", parola);

  mesaj.innerText = "Cont creat cu succes! Acum poți intra în cont.";
}

function intraInCont() {
  var email = document.getElementById("loginEmail").value.trim();
  var parola = document.getElementById("loginParola").value.trim();
  var mesaj = document.getElementById("loginMesaj");

  if (!email || !parola) {
    mesaj.innerText = "Completează emailul și parola.";
    return;
  }

  var emailSalvat = localStorage.getItem("utilizatorEmail");
  var parolaSalvata = localStorage.getItem("utilizatorParola");

  if (email === emailSalvat && parola === parolaSalvata) {
    localStorage.setItem("logat", "da");
    window.location.href = "index.html";
  } else {
    mesaj.innerText = "Emailul sau parola sunt greșite.";
  }
}