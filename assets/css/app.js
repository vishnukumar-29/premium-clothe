
//   dropdown
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
 


    // combo imgs swiper
    const images = [
      "./assets/images/webp/combo-1.png",
      "./assets/images/webp/combo-kurta-2.png",
      "./assets/images/webp/combo-kurta-3.png",
      "./assets/images/webp/combo-kurta-4.png",
      "./assets/images/webp/combo-kurta-5.png",
      "./assets/images/webp/combo-kurta-6.png"
    ];

    let currentIndex = 0;
    const currentImage = document.getElementById("currentImage");

    function updateImage(index) {
      currentImage.src = images[index];
      document.querySelectorAll("[data-index]").forEach(img => img.classList.remove("border-black"));
      document.querySelector(`[data-index="${index}"]`).classList.add("border-black");
      currentIndex = index;
    }

    document.getElementById("nextBtn").addEventListener("click", () => {
      let newIndex = (currentIndex + 1) % images.length;
      updateImage(newIndex);
    });

    document.getElementById("prevBtn").addEventListener("click", () => {
      let newIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage(newIndex);
    });

    document.querySelectorAll("[data-index]").forEach(img => {
      img.addEventListener("click", () => {
        updateImage(parseInt(img.dataset.index));
      });
    });

    
//   swiper testinomail
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




    {/* nav */}
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



//   combo card select
    const cards = document.querySelectorAll(".combo-card");
    const buyBtn1 = document.getElementById("payModalOpenBtn");

    cards.forEach(card => {
      card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("selected"));

        card.classList.add("selected");

        // Enable Buy Now button
        buyBtn1.disabled = false;
        buyBtn1.classList.remove("bg-gray-400", "cus");
        buyBtn1.classList.add("bg-black", "hover:bg-white", "hover:text-black",
          "hover:border", "hover:border-black", "hover:shadow-light");
      });
    });

//  payment modal
    const payModalOpenBtn = document.getElementById("payModalOpenBtn");
    const payModalCloseBtn = document.getElementById("payModalCloseBtn");
    const payModalWrapper = document.getElementById("payModalWrapper");
    const payModalContent = document.getElementById("payModalContent");

    payModalOpenBtn?.addEventListener("click", () => {
      payModalWrapper.classList.remove("hidden");
      document.body.classList.add("overflow-hidden"); // disable page scroll
      setTimeout(() => {
        payModalContent.classList.remove("scale-90", "opacity-0");
        payModalContent.classList.add("scale-100", "opacity-100");
      }, 50);
    });

    function closePayModal() {
      payModalContent.classList.remove("scale-100", "opacity-100");
      payModalContent.classList.add("scale-90", "opacity-0");
      setTimeout(() => {
        payModalWrapper.classList.add("hidden");
        document.body.classList.remove("overflow-hidden"); // enable page scroll
      }, 500);
    }

    // Close on button click
    payModalCloseBtn?.addEventListener("click", closePayModal);

    // Close on background click (outside content)
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
 


 {/* form modal */}
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

//   year function
    document.getElementById("year").textContent = new Date().getFullYear();



    // view all
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
