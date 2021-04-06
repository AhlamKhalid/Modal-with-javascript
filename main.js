// elements
const itemImg = document.getElementById("item-img");
const closeBtn = document.getElementById("close-btn");
const blurContainer = document.getElementById("blur-container");
const modalContainer = document.getElementById("modal-container");

// function
const closeModal = () => {
  blurContainer.classList.remove("blur");
  modalContainer.classList.remove("show");
};

// TODO: click item image
itemImg.addEventListener("click", () => {
  blurContainer.classList.add("blur");
  modalContainer.classList.add("show");
});

// TODO: click close
closeBtn.addEventListener("click", () => {
  closeModal();
});

// TODO: click outside modal
modalContainer.addEventListener("click", (event) => {
  if (event.target.id === "modal-container") {
    closeModal();
  }
});
