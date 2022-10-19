// HTML

let topUp = document.createElement("a");
topUp.setAttribute("name", "top");
root.append(topUp);

let header = document.createElement("header");
document.getElementById("root").append(header);

header.id = "menu";

let dateInput = document.createElement("input");
document.getElementById("menu").append(dateInput);

dateInput.type = "date";
dateInput.min = "1995-06-05";
dateInput.max = new Date();

let logo = document.createElement("img");
document.getElementById("menu").append(logo);

logo.src = "./img/nasa_logo_icon.png";
logo.style.height = "200px";
logo.style.filter = "invert(1)";
logo.style.objectFit = "cover";

let link = document.createElement("a");
document.getElementById("menu").append(link);

link.innerText = "Gallery";
link.href = "#gallery";

let heroDiv = document.createElement("div");
document.getElementById("root").append(heroDiv);

let galleryTitle = document.createElement("h2");
root.append(galleryTitle);

galleryTitle.innerText = "Gallery";
galleryTitle.id = "gallery";

// GRID

let grid = document.createElement("div");
galleryTitle.after(grid);

grid.id = "grid";


// FOOTER

let footer = document.createElement("footer");
document.getElementById("root").append(footer);

let note = document.createElement("h4");
document.querySelector("footer").append(note);

note.innerText = "© 2022 Infinity and Beyond.";

let footerLogo = document.createElement("img");
document.querySelector("footer").append(footerLogo);

footerLogo.src = "./img/NASA_Wormball_logo.svg";

const appState = {
  selectedDate: new Date(),
  dailyImages: [],
  selectedIndex: null,
};

const requestData = async () => {
  const endDateStr = appState.selectedDate.toISOString().split("T")[0];
  var startDate = appState.selectedDate;
  startDate.setDate(startDate.getDate() - 9);
  const startDateStr = startDate.toISOString().split("T")[0];
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=UkgRiB5b97SHhYV6yabVu1GEZEDXUTmaHo1zFH16&start_date=${startDateStr}&end_date=${endDateStr}`
  );
  data = await response.json();
  appState.dailyImages = data;
  appState.selectedIndex = data.length - 1;
};

const renderGallery = () => {
  grid.innerHTML = "";
  for (let i = 0; i < appState.dailyImages.length; i++) {
    if (i === appState.selectedIndex) continue;
    const dailyImage = appState.dailyImages[i];

    let gridBox = document.createElement("div");
    grid.append(gridBox);
    let linkToTop = document.createElement("a");
    gridBox.append(linkToTop);
    linkToTop.href = "#top";
    linkToTop.addEventListener("click", function () {
      appState.selectedIndex = i;
      renderHero();
      renderGallery();
    });

    let subTitle = document.createElement("div");
    gridBox.append(subTitle);
    subTitle.className = "desc";
    subTitle.innerText = dailyImage.title;

    if (dailyImage.media_type === "image") {
      let gridImage = document.createElement("img");
      linkToTop.append(gridImage);
      gridImage.setAttribute("src", dailyImage.url);
    } else if (dailyImage.media_type === "video") {
      let gridIframe = document.createElement("iframe");
      linkToTop.append(gridIframe);
      gridIframe.setAttribute(
        "src",
        `${dailyImage.url}?&autoplay=1&controls=0&mute=0&loop=1`
      );
    }
  }
};

const renderHero = () => {
  heroDiv.innerHTML = "";

  heroDiv.id = "hero";

  let title = document.createElement("h1");
  heroDiv.append(title);
  title.id = "title";
  title.innerHTML = appState.dailyImages[appState.selectedIndex].title;

  if (appState.dailyImages[appState.selectedIndex].media_type === "image") {
    let image = document.createElement("img");
    title.after(image);

    image.style.height = "100%";
    image.style.width = "100%";
    image.style.maxWidth = "1280px";
    image.style.aspectRatio = "16/9";
    image.style.borderRadius = "17px";
    image.style.boxShadow = "0px 18px 35px 1px rgb(2, 9, 27, 0.8)";
    image.style.objectFit = "cover";
    image.setAttribute("src", appState.dailyImages[appState.selectedIndex].url);
  } else {
    let iframe = document.createElement("iframe");
    title.after(iframe);

    iframe.height = "100%";
    iframe.width = "100%";
    iframe.style.maxWidth = "1280px";
    iframe.style.aspectRatio = "16/9";
    iframe.style.borderRadius = "17px";
    iframe.style.border = "none";
    iframe.style.boxShadow = "0px 18px 35px 1px rgb(2, 9, 27, 0.8)";
    iframe.setAttribute(
      "src",
      `${
        appState.dailyImages[appState.selectedIndex].url
      }?&autoplay=1&controls=0&mute=0&loop=1`
    );
  }
  let explanation = document.createElement("p");
  heroDiv.append(explanation);
  explanation.innerHTML =
    appState.dailyImages[appState.selectedIndex].explanation;
};

const start = async () => {
  let loading = document.createElement("div")
  root.appendChild(loading)
  loading.style.position = "fixed"
  loading.style.top = "0"
  loading.style.bottom = "0"
  loading.style.left = "0"
  loading.style.right = "0"
  loading.style.zIndex = "1000"
  loading.style.backgroundColor = "orangered"
  loading.innerText = "LOADING"

  await requestData();
  root.removeChild(loading)
  renderGallery();
  renderHero();
};

start();

dateInput.addEventListener("change", (e) => {
  appState.selectedDate = e.target.valueAsDate;
  start();
});
