//img
(function () {
  const baseUrl = `../img/6/Tsuma ni Damatte Sokubaikai ni Ikun ja Nakatta/1/`;
  const imgList = [];
  for (let i = 1; i <= 46; i++) {
    imgList.push(`${baseUrl}${i}.jpg`);
  }

  const baseUrl1 = `../img/6/Tsuma ni Damatte Sokubaikai ni Ikun ja Nakatta/2/`;
  for (let i = 1; i <= 38; i++) {
    imgList.push(`${baseUrl1}${i}.jpg`);
  }

  const baseUrl2 = `../img/6/Tsuma ni Damatte Sokubaikai ni Ikun ja Nakatta/3/`;
  for (let i = 1; i <= 40; i++) {
    imgList.push(`${baseUrl2}${i}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
