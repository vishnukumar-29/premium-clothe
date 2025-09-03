 
    const comboCards = document.querySelectorAll(".combo-card");
    const buyBtn = document.getElementById("buyBtn");

    comboCards.forEach(card => {
      card.addEventListener("click", () => {
        // Remove selected class from all cards
        comboCards.forEach(c => c.classList.remove("selected"));

        // Add selected class to clicked card
        card.classList.add("selected");

        // Enable Buy Button
        buyBtn.disabled = false;
        buyBtn.classList.remove("bg-gray-400", "cursor-not-allowed");
        buyBtn.classList.add("bg-black", "cursor-pointer");
      });
    });
 


    const payModalOpenBtns = document.querySelectorAll(".payModalOpenBtn");
    const payModalCloseBtn = document.getElementById("payModalCloseBtn");
    const payModalWrapper = document.getElementById("payModalWrapper");
    const payModalContent = document.getElementById("payModalContent");

    // Open modal on any button click
    payModalOpenBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        payModalWrapper.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");
        setTimeout(() => {
          payModalContent.classList.remove("scale-90", "opacity-0");
          payModalContent.classList.add("scale-100", "opacity-100");
        }, 50);
      });
    });

    // Function to close modal
    function closePayModal() {
      payModalContent.classList.remove("scale-100", "opacity-100");
      payModalContent.classList.add("scale-90", "opacity-0");
      setTimeout(() => {
        payModalWrapper.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
      }, 500);
    }

    // Close on button click
    payModalCloseBtn?.addEventListener("click", closePayModal);

    // Close on outside click
    payModalWrapper.addEventListener("click", (e) => {
      if (e.target === payModalWrapper) {
        closePayModal();
      }
    });

    // Close on ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !payModalWrapper.classList.contains("hidden")) {
        closePayModal();
      }
    });
  
    const openBtns = document.querySelectorAll(".openModalBtn");
    const closeBtn = document.getElementById("closeModal");
    const modal = document.getElementById("modal");
    const body = document.body;
    const form = document.getElementById("complaintForm");

    // Open modal from any Report button
    openBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.classList.remove("hidden");
        body.classList.add("overflow-hidden");
      });
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      body.classList.remove("overflow-hidden");
    });

    // Close modal on outside click
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
        body.classList.remove("overflow-hidden");
      }
    });

    // Form validation
    form.addEventListener("submit", (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        alert("Please fill all required fields correctly.");
      } else {
        e.preventDefault(); // prevent actual reload
        alert("Complaint submitted successfully!");
        modal.classList.add("hidden");
        body.classList.remove("overflow-hidden");
        form.reset();
      }
    });
 
    // Get current year dynamically
    document.getElementById("year").textContent = new Date().getFullYear();
 
    const btn = document.getElementById("viewAllBtn");
    const extraCards = document.querySelectorAll(".extra-card");
    let shown = false;

    btn.addEventListener("click", () => {
      shown = !shown;
      extraCards.forEach(card => {
        card.classList.toggle("hidden", !shown);
      });
      btn.textContent = shown ? "View Less" : "View All";
    });




    const dropdownBtn = document.getElementById("dropdownBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const selectedFlag = document.getElementById("selectedFlag");
    const selectedText = document.getElementById("selectedText");
    const dropdownItems = document.querySelectorAll(".dropdownItem");

    // Toggle dropdown
    dropdownBtn.addEventListener("click", () => {
      dropdownMenu.classList.toggle("hidden");
    });

    // Handle selection
    dropdownItems.forEach(item => {
      item.addEventListener("click", () => {
        const flag = item.getAttribute("data-flag");
        const text = item.getAttribute("data-text");

        selectedFlag.src = flag;
        selectedText.textContent = text;

        dropdownMenu.classList.add("hidden"); // close after select
      });
    });

    // Close when clicking outside
    document.addEventListener("click", (event) => {
      if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add("hidden");
      }
    });
  




    // Thumbnails images (for arrows)
    const thumbnailImages = [
      "./assets/images/webp/combo-kurta-5.png",
      "./assets/images/webp/combo-kurta-2.png",
      "./assets/images/webp/combo-kurta-3.png",
      "./assets/images/webp/combo-kurta-4.png",
      "./assets/images/webp/combo-kurta-7.jpg",
      "./assets/images/webp/combo-kurta-6.png"
    ];

    // Model images (for clicking thumbnails)
    const modelImages = [
      "./assets/images/webp/model-1.png",
      "./assets/images/webp/model-2.png",
      "./assets/images/webp/model-3.png",
      "./assets/images/webp/model-4.png",
      "./assets/images/webp/model-5.png",
      "./assets/images/webp/model-6.png"
    ];

    let currentIndex = 0;
    const currentImage = document.getElementById("currentImage");

    // Fade transition update
    function updateImage(src) {
      currentImage.classList.add("fade-out");
      setTimeout(() => {
        currentImage.src = src;
        currentImage.classList.remove("fade-out");
      }, 300);
    }

    // Thumbnails click → show model images
    document.querySelectorAll(".thumb").forEach(img => {
      img.addEventListener("click", () => {
        let index = parseInt(img.dataset.index);
        updateImage(modelImages[index]);
        document.querySelectorAll(".thumb").forEach(t => t.classList.remove("border-black"));
        img.classList.add("border-black");
      });
    });

    // Arrows → cycle through thumbnail images
    document.getElementById("nextBtn").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % thumbnailImages.length;
      updateImage(thumbnailImages[currentIndex]);
      highlightThumb(currentIndex);
    });

    document.getElementById("prevBtn").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + thumbnailImages.length) % thumbnailImages.length;
      updateImage(thumbnailImages[currentIndex]);
      highlightThumb(currentIndex);
    });

    // Highlight active thumbnail
    function highlightThumb(index) {
      document.querySelectorAll(".thumb").forEach(t => t.classList.remove("border-black"));
      document.querySelector(`.thumb[data-index="${index}"]`).classList.add("border-black");
    }




    const swiper = new Swiper(".swiper", {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      slidesPerView: "auto", // allow multiple slides
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });




    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    const closeIcon = document.getElementById('close');
    const navLinks = document.querySelectorAll('.nav-link');

    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      hamburger.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        hamburger.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });




    const stars = document.querySelectorAll(".star");
    const ratingValue = document.getElementById("rating-value");

    stars.forEach((star, idx) => {
      star.addEventListener("click", () => {
        let value = idx + 1;
        ratingValue.textContent = value;

        // Update star colors
        stars.forEach((s, i) => {
          if (i < value) {
            s.classList.remove("text-gray-300");
            s.classList.add("text-yellow-400");
          } else {
            s.classList.remove("text-yellow-400");
            s.classList.add("text-gray-300");
          }
        });
      });
    });
