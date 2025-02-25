//img
(function () {
  const baseUrl = `../img/20/The Virgin Tutor And The Wealthy Whore/`;
  const imgList = [];
  for (let i = 1; i <= 82; i++) {
    imgList.push(`${baseUrl}${i}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
