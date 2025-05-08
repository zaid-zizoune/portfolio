      const navLinks = document.querySelectorAll('nav a');

      function setActiveLink() {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === window.location.hash) {
            link.classList.add('active');
          }
        });
      }

      window.addEventListener('load', setActiveLink);
      window.addEventListener('hashchange', setActiveLink);
      window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("nav a");
      
        let current = "";
      
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
          }
        });
      
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
          }
        });
      });