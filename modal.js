// JavaScript to dynamically update modal content and WhatsApp link
document.querySelectorAll(".dynamic-modal").forEach((image) => {
  image.addEventListener("click", function () {
    const title = this.getAttribute("data-title");
    const description = this.getAttribute("data-description");

    // Update modal title and description
    document.getElementById("dynamicModalLabel").innerText = title;
    document.getElementById("modalDescription").innerText = description;

    // Generate WhatsApp message
    const message = `Hello, I am interested in your ${title}. Please provide more information.`;
    const phoneNumber = "3353482478"; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Set WhatsApp link dynamically
    document.getElementById("whatsappLink").href = whatsappUrl;

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById("dynamicModal"));
    modal.show();
  });
});