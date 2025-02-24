//img
(function () {
  const baseUrl1 = `../img/12/Quây Quần Bên Mẹ Thằng Bạn/1/`;
  const baseUrl2 = `../img/12/Quây Quần Bên Mẹ Thằng Bạn/2/`;
  const baseUrl3 = `../img/12/Quây Quần Bên Mẹ Thằng Bạn/3/`;
  const baseUrl4 = `../img/12/Quây Quần Bên Mẹ Thằng Bạn/4/`;
  const baseUrl5 = `../img/12/Quây Quần Bên Mẹ Thằng Bạn/5/`;
  const baseUrl6 = `../img/12/Quây Quần Bên Mẹ Thằng Bạn/6/`;
  const baseUrl7 = `../img/12/Quây Quần Bên Mẹ Thằng Bạn/7/`;
  const baseUrl8 = `../img/12/Quây Quần Bên Mẹ Thằng Bạn/8/`;
  const baseUrl9 = `../img/12/Quây Quần Bên Mẹ Thằng Bạn/9/`;

  const imgList = [];
  for (let i = 1; i <= 30; i++) {
    imgList.push(`${baseUrl1}${i}.jpg`);
  }

  for (let i = 1; i <= 17; i++) {
    imgList.push(`${baseUrl2}${i}.jpg`);
  }

  for (let i = 1; i <= 17; i++) {
    imgList.push(`${baseUrl3}${i}.jpg`);
  }

  for (let i = 1; i <= 17; i++) {
    imgList.push(`${baseUrl4}${i}.jpg`);
  }

  for (let i = 1; i <= 17; i++) {
    imgList.push(`${baseUrl5}${i}.jpg`);
  }

  for (let i = 1; i <= 17; i++) {
    imgList.push(`${baseUrl6}${i}.jpg`);
  }

  for (let i = 1; i <= 17; i++) {
    imgList.push(`${baseUrl7}${i}.jpg`);
  }

  for (let i = 1; i <= 17; i++) {
    imgList.push(`${baseUrl8}${i}.jpg`);
  }

  for (let i = 1; i <= 17; i++) {
    imgList.push(`${baseUrl9}${i}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
