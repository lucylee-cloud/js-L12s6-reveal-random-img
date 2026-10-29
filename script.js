const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

// fetch imgs from Lorem Picsum API
async function getImage() {
  const res = await fetch("https://picsum.photos/v2/list?limit=100");
  const images = await res.json();
  selectRandomImage(images);
}
// select random img
const selectRandomImage = function (images) {
  const randomIndex = Math.floor(Math.random() * images.length);

  const randomImage = images[randomIndex];
  displayImage(randomImage);
};
// display selected img
const displayImage = function (randomImage) {
  const author = randomImage.author;
  const imageAddress = randomImage.download_url;
  const imageUrl = randomImage.url;

  authorSpan.innerText = author;
  img.src = imageAddress;
  img.alt = `Photo by ${author}. View original image: ${imageUrl}`;

  imgDiv.classList.remove("hide");
};
// retrieve imgs when button's clicked
button.addEventListener("click", function () {
  getImage();
});
