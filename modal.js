// JavaScript to dynamically update modal content

document.querySelectorAll(".dynamic-modal").forEach((image) => {
  image.addEventListener("click", function () {
    const title = this.getAttribute("data-title");
    const description = this.getAttribute("data-description");

    document.getElementById("dynamicModalLabel").innerText = title;
    document.getElementById("modalDescription").innerText = description;

    const modal = new bootstrap.Modal(document.getElementById("dynamicModal"));
    modal.show();
  });
});
