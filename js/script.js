  // header toggle 
  const toggleBtn = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const iconHamburger = document.querySelector(".icon-hamburger");
  const iconClose = document.querySelector(".icon-close");

  toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");

      const isOpen = navLinks.classList.contains("show");

      iconHamburger.classList.toggle("hidden", isOpen);
      iconClose.classList.toggle("hidden", !isOpen);
  });


  // footer 
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('fade-up-visible');
              observer.unobserve(entry.target); // Animate only once
          }
      });
  });

  document.querySelectorAll('.fade-up').forEach(el => {
      observer.observe(el);
  });




  // scroll to top button
  const scrollBtn = document.getElementById("scrollToTopBtn");

  // Show button on scroll
  window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
          scrollBtn.classList.add("scroll-visible");
      } else {
          scrollBtn.classList.remove("scroll-visible");
      }
  });

  // Scroll to top on click
  scrollBtn.addEventListener("click", () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });



  // counter stat 
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-number');

    if (counters.length === 0) return; // Exit if no counters

    let hasAnimated = false; // Prevent multiple triggers

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const increment = Math.ceil(target / 60);

            const updateCount = () => {
                const current = +counter.innerText;

                if (current < target) {
                    counter.innerText = current + increment;
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    };

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
            animateCounters();
            hasAnimated = true;
            observer.disconnect(); // Stop observing
        }
    }, { threshold: 0.5 }); // Trigger when 50% visible

    // Observe the parent section of stats
    const statsSection = document.querySelector('.main--stats');
    if (statsSection) observer.observe(statsSection);
});


  document.addEventListener('DOMContentLoaded', () => {
  // =========================
  // TESTIMONIAL SLIDER CODE
  // =========================
  const cards = document.querySelectorAll('.main-testimonial__card');
  const nextBtn = document.querySelector('.main-testimonial__next');
  const prevBtn = document.querySelector('.main-testimonial__prev');

  let currentIndex = 0;
  let interval;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.remove('active');
      if (i === index) {
        card.classList.add('active');
      }
    });
  }

  function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }

  function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  }

  function startAutoSlide() {
    interval = setInterval(nextCard, 4000); // Auto slide every 4 seconds
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

  if (nextBtn && prevBtn && cards.length > 0) {
    nextBtn.addEventListener('click', () => {
      nextCard();
      stopAutoSlide();
      startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
      prevCard();
      stopAutoSlide();
      startAutoSlide();
    });

    // Initialize slider
    showCard(currentIndex);
    startAutoSlide();
  } else {
    console.warn("Testimonial slider elements not found in DOM!");
  }
}); // ✅ This was missing

    