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