//img
(function () {
  const baseUrl1 = `../img/16/My Ex-Lovers Kid Is My Sons Friend/1/`;
  const baseUrl2 = `../img/16/My Ex-Lovers Kid Is My Sons Friend/2/`;
  const baseUrl3 = `../img/16/My Ex-Lovers Kid Is My Sons Friend/3/`;

  const imgList = [];
  for (let i = 0; i <= 66; i++) {
    imgList.push(`${baseUrl1}${i}.jpg`);
  }

  for (let i = 0; i <= 68; i++) {
    imgList.push(`${baseUrl2}${i}.jpg`);
  }

  for (let i = 0; i <= 64; i++) {
    imgList.push(`${baseUrl3}${i}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
