// theme
(function () {
  const theme1 = {
    name: "TomoKano Kaa-chan~ Daisuki na Ore no Hahaoya wa Aho na Shinyuu no Kanojo~ - 1,2,3,4 and after",
    theme: `img/5/TomoKano Kaa-chan~ Daisuki na Ore no Hahaoya wa Aho na Shinyuu no Kanojo/after/29.jpg`,
  };

  const container = document.createElement("div");
  container.classList.add(
    "col-12",
    "col-md-6",
    "col-lg-4",
    "comic-wrapper",
    "card"
  );
  const title = document.createElement("h3");
  title.classList.add("card-title", "text-center");
  title.textContent = theme1.name;

  const img = document.createElement("img");
  img.classList.add("card-img");
  img.src = theme1.theme;
  img.alt = theme1.name;

  container.appendChild(img);
  container.appendChild(title);

  document.getElementById("list-comic").appendChild(container);

  container.addEventListener("click", function () {
    window.location.href = "5/1.html";
  });
})();
