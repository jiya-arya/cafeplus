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
      if (window.scrollY > 300) {
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
  window.addEventListener('DOMContentLoaded', () => {
      const counters = document.querySelectorAll('.stat-number');

      counters.forEach(counter => {
          const updateCount = () => {
              const target = +counter.getAttribute('data-target');
              const current = +counter.innerText;
              const increment = Math.ceil(target / 60);

              if (current < target) {
                  counter.innerText = current + increment;
                  setTimeout(updateCount, 20);
              } else {
                  counter.innerText = target;
              }
          };

          updateCount();
      });
  });