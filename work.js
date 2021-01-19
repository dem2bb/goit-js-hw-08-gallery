import galleryItems from "./gallery-items.js";

const ref = {
  container: document.querySelector(".js-gallery"),
  closebutton: document.querySelector(".lightbox__button"),
  modal: document.querySelector(".js-lightbox"),
  overlay: document.querySelector(".lightbox__overlay"),
  modalImg: document.querySelector(".lightbox__image"),
};

let indexCurrentImage;

const galleryCreater = (galleryItems) => {
  for (let i = 0; i < galleryItems.length; i++) {
    const text = `<li class="gallery__item">
    <a
    class="gallery__link"
    href="${galleryItems[i].original}"
    >
    <img 
    class="gallery__image"
    src="${galleryItems[i].preview}"
    data-source="${galleryItems[i].original}"
    data-index="${i}"
    alt="${galleryItems[i].description}"
    />
    </a>
    </li>
    `;
    ref.container.insertAdjacentHTML("afterbegin", text);
  }
};

galleryCreater(galleryItems);

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  ref.modal.classList.add("is-open");
  // indexCurrentImage = parseInt(event.target.dataset.index);
  ref.modalImg.src = event.target.dataset.source;
  ref.modalImg.alt = event.target.alt;
}

function closeModal() {
  ref.modal.classList.remove("is-open");
}

function closeModalKey(event) {
  if (event.code === "Escape") closeModal();
}

function closeModalWithBackdrop() {
  closeModal();
}

ref.container.addEventListener("click", openModal);
ref.closebutton.addEventListener("click", closeModal);
window.addEventListener("keydown", closeModalKey);
ref.overlay.addEventListener("click", closeModalWithBackdrop);
