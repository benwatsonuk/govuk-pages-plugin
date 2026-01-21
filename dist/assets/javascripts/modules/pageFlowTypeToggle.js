export const PageFlowTypeToggle = () => {
    console.log('The type toggle is firing')
}

export const InitPageFlowTypeToggles = () => {
  PageFlowTypeToggle();
  document.querySelectorAll("[data-toggle]").forEach(el => {
    el.addEventListener("click", () => {
      el.classList.toggle("active");
    });
  });
}