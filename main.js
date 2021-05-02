const faqCards = document.querySelectorAll(".faq-card");
const expandedContent = document.querySelectorAll(".answers");
const expandBtns = document.querySelectorAll(".fa-plus-circle");
const questions = document.querySelectorAll(".queston-area");

function openFaq() {
  for (let i = 0; i < expandedContent.length; i++) {
    expandBtns[i].addEventListener("click", function () {
      if (!expandedContent[i].classList.contains("expanded")) {
        expandedContent[i].classList.remove("answers");
        expandedContent[i].classList.add("expanded");
        questions[i].style.backgroundColor = "#ececec";
      } else {
        expandedContent[i].classList.add("answers");
        expandedContent[i].classList.toggle("expanded");
        questions[i].style.backgroundColor = "white";
      }
    });
  }
}

openFaq();
