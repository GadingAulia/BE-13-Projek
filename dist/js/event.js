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
    title: "Asean Data Science Axplorers",
    image: "assets/img/event1.jpg",
    details: "ASEAN DSE is a flagship programme under the ASEAN Foundation’s partnership with SAP, and it has been running for six years. ",
    link: "/evdetail.html",
  },

  {
    title: "The ASEAN Cybersecurity Skilling Programme",
    image: "https://aseanyouth.net/wp-content/uploads/2022/11/ASEAN-Cybersecurity-Skilling-Programme.png",
    details: "The ASEAN Cybersecurity Skilling Programme is a flagship programme of ASEAN Foundation, in partnership with Microsoft.",
    link: "/evdetail.html",
  },

  {
    title: "Youth and Technology ",
    image: "https://aseanyouth.net/wp-content/uploads/2022/11/YouthTech03.jpg",
    details:
      "The rapid growth of technology has contributed to bringing futuristic items and lifestyles faster than ever. However, there is a massive gap between those who are ready to embrace the change and those who are not. In addition, technology meant to help humans has been misused by those to complicate and perpetuate conflicts. ",
    link: "/evdetail.html",
  },

  {
    title: "Diversity and Inclusion in the Workplace",
    image: "https://aseanyouth.net/wp-content/uploads/2022/11/Diversity-Inclusion-Banner.jpg",
    details: "Southeast Asia is home to a complex ethnic mix of peoples, a diverse, multicultural and inclusive region.",
    link: "/evdetail.html",
  },

  {
    title: "Asean Youth Digital Forum",
    image: "https://aseanyouth.net/wp-content/uploads/2022/11/All-About-AYDF_Slide-1-e1668283741391.jpg",
    details:
      "The AYDF 2021 is a forum for youths across ASEAN and beyond to learn together of how they can benefit from the current digitalization process, as well as to share knowledge of how youths should prepare themselves in solving challenges that arise in a digital world. ",
    link: "/evdetail.html",
  },

  {
    title: "A Digalog on Gender Equality and Sustainable Development",
    image: "https://aseanyouth.net/wp-content/uploads/2022/11/Gender-Equality.jpeg",
    details: "ender-based equality is a feat which is yet to be accomplished by every continent in the world.",
    link: "/evdetail.html",
  },

  {
    title: "Entrepreneurship Basics Series",
    image: "https://aseanyouth.net/wp-content/uploads/2022/11/General-Poster-AYOEntrepBasics.jpg",
    details: "Starting your own business within a pandemic may prove as a challenge, and finding the right resources and consultants is key.",
    link: "/evdetail.html",
  },

  {
    title: "ASEAN Youth Organization (AYO) Ambassador",
    image: "https://aseanyouth.net/wp-content/uploads/2022/11/AYO-Ambassador01.jpg",
    details: "ASEAN Youth Organization (AYO) Ambassador is one of the Annual programs initiated by the ASEAN Youth Organization",
    link: "/evdetail.html",
  },

  {
    title: "Womenpreneurs for ASEAN Development",
    image: "https://aseanyouth.net/wp-content/uploads/2022/11/Womenpreneurs.jpg",
    details: "The ASEAN Youth Organization strongly believes in the importance of encouraging and supporting young people’s and in particular young women’s aspirations.",
    link: "/evdetail.html",
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

      jobCard.appendChild(image);
      jobCard.appendChild(title);
      jobCard.appendChild(details);
      jobCard.appendChild(detailsBtn);

      jobsContainer.appendChild(jobCard);
    }
  });
};

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;

  createJobListingCards();
});
