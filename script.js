document.addEventListener("DOMContentLoaded",()=>{
const modal = document.getElementById("modal")
const modalImg = document.getElementById("modal-img")
const caption = document.getElementById("caption");

const gallery = document.getElementById("gallery")
const images = document.querySelectorAll(".gallery img")

fetch('./images.json')
.then(res=>res.json())
.then(data=>{
    console.log(data)
    data.images.forEach(imgName=>{
        const div = document.createElement("div");
        div.className="gallery-item";

        const img = document.createElement("img");
        img.src = `./Img/${imgName}`;
        img.alt = imgName;

        img.addEventListener('click',()=>{
        modal.style.display="block";
        modalImg.src = img.src;
        caption.textContent = img.alt
    });

    div.appendChild(img);
    gallery.appendChild(div)
    });
});

const closeButton = document.querySelector(".close")
closeButton.addEventListener('click',()=>{
    modal.style.display ='none'
})
modal.addEventListener('click',(e)=>{
    if(e.target===modal){
        modal.style.display ='none'
    }
})

const gridButton = document.getElementById("gridButton")
const masonryButton = document.getElementById("masonryButton")
function switchToGrid(){
    gallery.className = "gallery";
    gallery.querySelectorAll("div").forEach(item=>{
        item.className="gallery-item"
    })
}
function switchToMasonry(){
    gallery.className="masonry";
    gallery.querySelectorAll("div").forEach(item=>{
        item.className = "masonry-item"
    })
}

gridButton.addEventListener("click",switchToGrid)
masonryButton.addEventListener("click",switchToMasonry)

})