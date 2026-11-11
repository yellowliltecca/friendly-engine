const cards = document.querySelectorAll(".product-card");
const viewer = document.querySelector(".viewer");
const viewerImage = viewer.querySelector("img");
const viewerTitle = viewer.querySelector(".viewer-title");
const closeViewer = viewer.querySelector(".viewer-close");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const image = card.dataset.full;
    viewerImage.src = image;
    viewerImage.alt = card.dataset.title || "Фотография обуви";
    viewerTitle.textContent = card.dataset.title || "";
    viewer.showModal();
  });
});

function hideViewer() {
  viewer.close();
  viewerImage.src = "";
  viewerTitle.textContent = "";
}

closeViewer.addEventListener("click", hideViewer);
viewer.addEventListener("click", (event) => {
  if (event.target === viewer) hideViewer();
});
viewer.addEventListener("close", () => {
  viewerImage.src = "";
  viewerTitle.textContent = "";
});
