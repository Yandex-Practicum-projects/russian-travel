const popupContainer = document.querySelector('.popup')
const btnAboutProject = document.querySelector('.header__about-project')
const btnClose = popupContainer.querySelector('.popup__close')
const btnOpenImage = popupContainer.querySelector('.popup__btn-image-open')
const image = popupContainer.querySelector('.popup__image')
const btnCloseImage = image.querySelector('.popup__image-close')


btnAboutProject.addEventListener('click', openPopup)
btnClose.addEventListener('click', closePopup)
btnOpenImage.addEventListener('click', OpenImage)
btnCloseImage.addEventListener('click', closeImage)

function openPopup() {
    popupContainer.classList.add('popup_opened')
}
function closePopup() {
    popupContainer.classList.remove('popup_opened')
    closeImage()
}
function closeImage() {
    btnOpenImage.classList.remove('popup__hide-object')
    image.classList.add('popup__hide-object')
}
function OpenImage() {
    btnOpenImage.classList.add('popup__hide-object')
    image.classList.remove('popup__hide-object')
}
