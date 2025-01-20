// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Get form data
  const fullName = document.getElementById("fullName").value;
  const service = document.getElementById("service").value;
  const phoneNumber = document.getElementById("phoneNumber").value;

  // WhatsApp phone number (your business number)
  const businessPhoneNumber = "923353482478"; // Replace with your WhatsApp number

  // Generate WhatsApp message
  const message = `Hello, my name is ${fullName}. I am interested in your ${service} service. Please contact me at ${phoneNumber}.`;

  // WhatsApp URL
  const whatsappUrl = `https://wa.me/${businessPhoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // Redirect to WhatsApp
  window.open(whatsappUrl, "_blank");
});
