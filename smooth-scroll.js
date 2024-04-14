document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
        
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
  