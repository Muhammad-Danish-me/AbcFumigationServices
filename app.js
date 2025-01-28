// Array of card data
const cards = [
  {
    image: "images/services/pest_control_main.png",
    title: "PEST CONTROL",
    fullText:
      "This is a detailed description of card 1. It has a lot of information about the topic covered by this card.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus facere consequuntur quidem, obcaecati provident quos, maxime modi praesentium, corrupti quisquam non ea eaque!",
  },
  {
    image: "images/services/cleaning_main.png",
    title: "CLEANING/SANITATION",
    fullText:
      "This is a detailed description of card 2. This card explains the topic in depth with useful details.",
  },
  {
    image: "images/services/gardening_main.png",
    title: "GARDENING",
    fullText:
      "This is a detailed description of card 3. It provides insights and information about the topic.",
  },
  {
    image: "images/services/repair.png",
    title: "REPAIR & MAINTENANCE",
    fullText:
      "This is a detailed description of card 4. It explores new ideas and useful information for the reader.",
  },
];

// Function to generate cards dynamically
function generateCards() {
  const container = document.getElementById("card-container");

  for (let i = 0; i < cards.length; i += 4) {
    const row = document.createElement("div");
    row.className = "row mt-4";

    for (let j = i; j < i + 4 && j < cards.length; j++) {
      const shortText = cards[j].fullText.substring(0, 50) + "...";

      const card = `
                <div class="col-lg-3 col-md-6 p-1">
                    <div class="card">
                        <div class="card-body text-center">
                            <img src="${cards[j].image}" alt="${cards[j].title}" class="img-fluid rounded" style="max-height: 150px;">
                            <h5 class="card-title mt-3">${cards[j].title}</h5>
                            <p class="card-text short-text">${shortText}</p>
                            <button class="btn btn-primary" onclick="showModal('${cards[j].title}', '${cards[j].fullText}')">Learn More</button>
                        </div>
                    </div>
                </div>
            `;
      row.innerHTML += card;
    }

    container.appendChild(row);
  }
}

// Function to show the modal with dynamic data
function showModal(title, description) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDescription").textContent = description;

  // Set WhatsApp contact URL
  const phoneNumber = "1234567890"; // Replace with your WhatsApp number
  const message = `Hi, I want to know more about "${title}"!`;
  document.getElementById(
    "contactUsBtn"
  ).href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Show the modal
  const modal = new bootstrap.Modal(document.getElementById("cardModal"));
  modal.show();
}

// Call the function to generate cards
generateCards();

