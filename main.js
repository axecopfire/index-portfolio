// GLOBALS
var mdNumber = 0;
var closeM = " ";
var mdOverlay = document.querySelector('.md-overlay');

// HTML BUTTONS
var md1B = document.querySelector('.md1Button');
//var md2B = document.getElementById('md2Button');

// BUTTON LISTENERS
md1B.addEventListener("click", () => {mdNumber = 1; openModal();});
//md2B.addEventListener("click", () => {mdNumber = 2; openModal();});

// MODAL CONTENT
var md1 = document.querySelector(".md1c");
//var md2c = document.querySelector(".md2c");

function openModal() {
  // console.log(mdNumber);
  mdOverlay.style.display = "block";
  if(mdNumber === 1) {
    closeM = "modal-1";
    // console.log(closeM);
    md1.classList.add(closeM);
  } else if(mdNumber === 2) {
    closeM = "modal-2";
    md2.classList.add(closeM);
  } else {
    return;
  }
}

function closeModal() {
  mdOverlay.style.display = "none";
  md1.classList.remove(closeM);
}