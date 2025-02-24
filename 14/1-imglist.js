//img
(function () {
  const baseUrl1 = `../img/14/Red Light Districtː MILF Daughter NTR/1/`;
  const baseUrl2 = `../img/14/Red Light Districtː MILF Daughter NTR/2/`;
  const baseUrl3 = `../img/14/Red Light Districtː MILF Daughter NTR/3/`;

  const imgList = [];
  for (let i = 1; i <= 40; i++) {
    imgList.push(`${baseUrl1}${i}.jpg`);
  }

  for (let i = 1; i <= 55; i++) {
    imgList.push(`${baseUrl2}${i}.jpg`);
  }

  for (let i = 1; i <= 24; i++) {
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
