//img
(function () {
  const baseUrl = `../img/15/Housewife CHEATERS Schoolgirl/`;
  const imgList = [];
  for (let i = 1; i <= 26; i++) {
    const formattedNumber = String(i).padStart(3, "0"); 
    imgList.push(`${baseUrl}${formattedNumber}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
