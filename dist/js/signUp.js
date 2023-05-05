const form = document.querySelector("form"),
  nextBtn = form.querySelector(".nextBtn"),
  backBtn = form.querySelector(".backBtn"),
  allInput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", () => {
  allInput.forEach((input) => {
    if (input.value != "") {
      form.classList.add("secActive");
    } else {
      form.classList.remove("secActive");
    }
  });
});

backBtn.addEventListener("click", () => form.classList.remove("secActive"));

//Get All Value
let sendBtn = document.getElementById("submit");
let forms = document.getElementById("forms");

//Form Refresh State
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

//Now Start SendBtn
sendBtn.addEventListener("click", (e) => {
  let nama = document.getElementById("nama");
  let tanggal = document.getElementById("tgl");
  let email = document.getElementById("email");
  let nomorHp = document.getElementById("nohp");
  let kelamin = document.getElementById("jenis");
  let pekerjaan = document.getElementById("pekerjaan");
  let NIK = document.getElementById("nik");
  let penyakit1 = document.getElementById("penyakit1");
  let penyakit2 = document.getElementById("penyakit2");
  let penyakit3 = document.getElementById("penyakit3");
  let penyakit4 = document.getElementById("penyakit4");

  kelamin.checked ? (jenis = "Laki-Laki") : (jenis = "Perempuan");

  //Set Value And LocalStorage

  nama = nama.value;
  localStorage.setItem("nama", nama);

  tanggal = tanggal.value;
  localStorage.setItem("tgl", tanggal);

  email = email.value;
  localStorage.setItem("email", email);

  nomorHp = nomorHp.value;
  localStorage.setItem("nohp", nomorHp);

  kelamin = kelamin.value;
  localStorage.setItem("jenis", kelamin);

  pekerjaan = pekerjaan.value;
  localStorage.setItem("pekerjaan", pekerjaan);

  NIK = NIK.value;
  localStorage.setItem("nik", NIK);

  penyakit1 = penyakit1.value;
  localStorage.setItem("penyakit1", penyakit1);

  penyakit2 = penyakit1.value;
  localStorage.setItem("penyakit2", penyakit2);

  penyakit3 = penyakit1.value;
  localStorage.setItem("penyakit3", penyakit3);

  penyakit4 = penyakit1.value;
  localStorage.setItem("penyakit4", penyakit4);
});
