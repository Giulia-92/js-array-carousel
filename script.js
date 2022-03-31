const title = ["Svezia", "Svizzera", "Gran Bretagna", "Germania", "Paradise"];
const items = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"];
const text = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sapiente accusamus soluta quasi minima amet architecto tenetur alias eaque commodi?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Exercitationem sapiente accusamus soluta quasi minima amet architecto tenetur alias eaque commodi?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sapiente accusamus soluta quasi minima amet architecto tenetur alias eaque commodi?"];
let itemTemplate = "";
let thumbTemplate = "";
for (let i = 0; i < items.length; i++) {
    let classActive = 'item';
    if (i === currentIndex) {
        classActive = "item active";
    }
    itemTemplate += `
        <div class="${classActive}">
        <img src="${items[i]}"/>
        <div class= "title">
        <h2>${title[i]}<h2>
        <p>${text[i]}</p>
        </div>
        </div>`;
}
const itemContainer = document.querySelector(".items-container");
const thubsContainer = document.querySelector(".thumbs-container");

//console.log(itemContainer);
itemContainer.innerHTML = itemTemplate;
itemContainer.innerHTML = thumbTemplate;
//let firstItem = document.querySelector(".item");
//firstItem.classList.add("active");
const next = document.querySelector('.next .fa-circle-chevron-down');
const prev = document.querySelector('.next .fa-circle-chevron-up');
next.addEventListener('click', slideDown);
prev.addEventListener('click', slideUp);
function slideDown() {
    const imgActive = document.getElementsByClassName("item.active");
    imgActive.classList.remove("active");
    const imgs = document.getElementsByClassName("item");
    currentIndex++;
    imgs[currentIndexActive].classList.add("active");

}