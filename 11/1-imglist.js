//img
(function () {
  const baseUrl0 = `../img/11/Toutou To Dakudaku/0/`;
  const baseUrl1 = `../img/11/Toutou To Dakudaku/1/`;
  const baseUrl2 = `../img/11/Toutou To Dakudaku/2/`;
  const baseUrl3 = `../img/11/Toutou To Dakudaku/3/`;
  const baseUrl4 = `../img/11/Toutou To Dakudaku/4/`;
  const baseUrl5 = `../img/11/Toutou To Dakudaku/5/`;
  const baseUrl6 = `../img/11/Toutou To Dakudaku/6/`;
  const baseUrl7 = `../img/11/Toutou To Dakudaku/7/`;
  const baseUrl8 = `../img/11/Toutou To Dakudaku/8/`;

  const imgList = [];
  for (let i = 1; i <= 15; i++) {
    imgList.push(`${baseUrl0}${i}.jpg`);
  }

  for (let i = 1; i <= 39; i++) {
    imgList.push(`${baseUrl1}${i}.jpg`);
  }

  for (let i = 1; i <= 18; i++) {
    imgList.push(`${baseUrl2}${i}.jpg`);
  }

  for (let i = 1; i <= 32; i++) {
    imgList.push(`${baseUrl3}${i}.jpg`);
  }

  for (let i = 1; i <= 33; i++) {
    imgList.push(`${baseUrl4}${i}.jpg`);
  }

  for (let i = 1; i <= 36; i++) {
    imgList.push(`${baseUrl5}${i}.jpg`);
  }

  for (let i = 1; i <= 36; i++) {
    imgList.push(`${baseUrl6}${i}.jpg`);
  }

  for (let i = 1; i <= 44; i++) {
    imgList.push(`${baseUrl7}${i}.jpg`);
  }

  for (let i = 1; i <= 15; i++) {
    imgList.push(`${baseUrl8}${i}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
