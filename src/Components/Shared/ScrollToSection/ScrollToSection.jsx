const ScrollToSection = (id) => {
     const section = document.getElementById(id);
     if (section) {
          section.scrollIntoView({ behavior: "smooth" });
     }
};

export default ScrollToSection;