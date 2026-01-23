const filterButton = document.querySelectorAll(
  ".first-filter-size, .second-section-color, .third-section-marca, .fourth-section-price",
);

const filterPanels = document.querySelectorAll(".filter-panel");

filterButton.forEach((button) => {
  button.addEventListener("click", () => {
    const filterName = button.dataset.filter;
    const panelOpen = document.querySelector(
      `.filter-panel[data-panel="${filterName}"]`,
    );

    filterPanels.forEach((panel) => {
      if (panel !== panelOpen) panel.classList.remove("active");
    });
    panelOpen.classList.toggle("active");
  });
});
