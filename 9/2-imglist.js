//img
(function () {
  const baseUrl = `../img/9/Netorare Hitozuma/2/`;
  const imgList = [];
  for (let i = 1; i <= 111; i++) {
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
