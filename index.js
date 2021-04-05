const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  //for each button remove the class active from the previous element and add to the current/clicked element
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    articles.forEach((article) => {
      article.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
