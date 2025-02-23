//img
(function () {
  const baseUrl = `../img/5/TomoKano Kaa-chan~ Daisuki na Ore no Hahaoya wa Aho na Shinyuu no Kanojo/1/`;
  const imgList = [];
  for (let i = 1; i <= 86; i++) {
    imgList.push(`${baseUrl}${i}.jpg`);
  }

  const baseUrl1 = `../img/5/TomoKano Kaa-chan~ Daisuki na Ore no Hahaoya wa Aho na Shinyuu no Kanojo/2/`;
  for (let i = 1; i <= 74; i++) {
    imgList.push(`${baseUrl1}${i}.jpg`);
  }

  const baseUrl2 = `../img/5/TomoKano Kaa-chan~ Daisuki na Ore no Hahaoya wa Aho na Shinyuu no Kanojo/3/`;
  for (let i = 1; i <= 89; i++) {
    imgList.push(`${baseUrl2}${i}.jpg`);
  }

  const baseUrl3 = `../img/5/TomoKano Kaa-chan~ Daisuki na Ore no Hahaoya wa Aho na Shinyuu no Kanojo/after/`;
  for (let i = 1; i <= 29; i++) {
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
