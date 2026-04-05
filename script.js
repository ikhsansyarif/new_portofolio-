// AMAN: nunggu DOM siap
document.addEventListener("DOMContentLoaded", function () {

  const themeToggle = document.getElementById("themeToggle");
  const typingText = document.getElementById("typing");

  // LOAD THEME
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }

  // TOGGLE
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "🌙";
    }
  });

  // TYPING
  const words = ["Frontend Developer", "UI Designer", "Freelancer"];
  let i = 0, j = 0, isDeleting = false;

  function type() {
    let word = words[i];

    typingText.textContent = isDeleting
      ? word.substring(0, j--)
      : word.substring(0, j++);

    if (!isDeleting && j === word.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }
  type();

  // SCROLL REVEAL
  function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", reveal);
});