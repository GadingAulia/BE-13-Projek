const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
  menuNav.classList.remove("menu-active");
});

const jobs = [
  {
    title: "Software Engineer",
    image: "assets/img/software-engineer.svg",
    details: "Bertanggung jawab untuk merancang, mengembangkan dan memelihara sistem dan aplikasi perangkat lunak.",
    openPositions: "2",
    link: "/detail.html",
  },

  {
    title: "Data Scientist",
    image: "assets/img/data-scientist.svg",
    details: "Bertanggung jawab untuk mengumpulkan, menganalisis, dan menafsirkan kumpulan data besar untuk membantu organisasi membuat keputusan yang lebih baik.",
    openPositions: "3",
    link: "/detail.html",
  },

  {
    title: "Project Manager",
    image: "assets/img/project-manager.svg",
    details: "Bertanggung jawab untuk merencanakan, melaksanakan dan menutup proyek tepat waktu dan sesuai anggaran.",
    openPositions: "1",
    link: "/detail.html",
  },

  {
    title: "Product Manager",
    image: "assets/img/product-manager.svg",
    details: "Bertanggung jawab untuk mengelola seluruh siklus hidup produk, mulai dari ideasi hingga pemeliharaan peluncuran dan pasca-peluncuran.",
    openPositions: "1",
    link: "/detail.html",
  },

  {
    title: "QA Tester",
    image: "assets/img/sales-representative.svg",
    details: "Melaksanakan pengujian terhadap perangkat atau emulator, membuat alur pengujian, serta membuat laporan hasil pengujian.",
    openPositions: "4",
    link: "/detail.html",
  },

  {
    title: "Operator Production",
    image: "assets/img/marketing-manager.svg",
    details: "mempertahankan mesin yang diperlukan untuk melakukan tugas khusus, memiliki pemahaman tentang standar dan peraturan industri untuk keamanan dan efisien dalam mengoperasikan mesin",
    openPositions: "1",
    link: "/detail.html",
  },

  {
    title: "DevOps",
    image: "assets/img/software-engineer.svg",
    details: "Memastikan kelancaran operasi infrastruktur teknologi informasi (IT) di perusahaan.",
    openPositions: "2",
    link: "/detail.html",
  },

  {
    title: "React JS Developer",
    image: "assets/img/data-scientist.svg",
    details: "Bertanggung jawab dalam pembuatan tampilan (user interface) dari sebuah website dengan menggunakan teknologi seperti React dan ReactDOM.",
    openPositions: "3",
    link: "/detail.html",
  },

  {
    title: "Finance & Accounting Staff",
    image: "assets/img/project-manager.svg",
    details: "memiliki tanggung jawab terhadap keuangan perusahaan. Adapun pekerjaan utama dari jabatan ini yaitu melakukan penyusunan, transaksi, dan membuat laopran keuangan perusahaan.",
    openPositions: "1",
    link: "/detail.html",
  },

  {
    title: "Accounting Staff",
    image: "assets/img/product-manager.svg",
    details:
      "Bertugas dan bertanggung jawab melakukan pencatatan serta pengklasifikasian semua transaksi sehingga dapat menghasilkan laporan keuangan yang dibutuhkan oleh perusahaan secara tepat dan akurat. Pencatatan serta pengelompokan semua transaksi ini memiliki standar aturan tersendiri.",
    openPositions: "1",
    link: "/detail.html",
  },

  {
    title: "Checker Admin",
    image: "assets/img/sales-representative.svg",
    details: "Bertugas untuk melakukan pengecekan secara detail dan menyeluruh terhadap barang keluar-masuk, hasil kerja bawahannya, barang produksi.",
    openPositions: "4",
    link: "/detail.html",
  },

  {
    title: "Shipping Admin Staff ",
    image: "assets/img/marketing-manager.svg",
    details: "Bertanggung jawab atas perencanaan, pengiriman produk serta administrasi ekspor.",
    openPositions: "1",
    link: "/detail.html",
  },
];

const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = "";

const createJobListingCards = () => {
  jobsContainer.innerHTML = "";

  jobs.forEach((job) => {
    if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      let jobCard = document.createElement("div");
      jobCard.classList.add("job");

      let image = document.createElement("img");
      image.src = job.image;

      let title = document.createElement("h3");
      title.innerHTML = job.title;
      title.classList.add("job-title");

      let details = document.createElement("div");
      details.innerHTML = job.details;
      details.classList.add("details");

      let detailsBtn = document.createElement("a");
      detailsBtn.href = job.link;
      detailsBtn.innerHTML = "More Details";
      detailsBtn.classList.add("details-btn");

      let openPositions = document.createElement("span");
      openPositions.classList.add("open-positions");

      if (job.openPositions == 1) {
        openPositions.innerHTML = `${job.openPositions} open position`;
      } else {
        openPositions.innerHTML = `${job.openPositions} open positions`;
      }

      jobCard.appendChild(image);
      jobCard.appendChild(title);
      jobCard.appendChild(details);
      jobCard.appendChild(detailsBtn);
      jobCard.appendChild(openPositions);

      jobsContainer.appendChild(jobCard);
    }
  });
};

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;

  createJobListingCards();
});
