//img
(function () {
  const baseUrl = `../img/18/I became a a Masochist and Sold out my country at the Hands of this High Class Prostitute/`;
  const imgList = [];
  for (let i = 1; i <= 55; i++) {
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
