<script>
  // Canvas untuk salju
  const canvas = document.getElementById("snowCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  const snowflakes = [];
  for (let i = 0; i < 100; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      speedY: Math.random() * 1 + 0.5,
      speedX: Math.random() * 0.5 - 0.25
    });
      }
  function drawSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.beginPath();

    for (let flake of snowflakes) {
      ctx.moveTo(flake.x, flake.y);
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    }
    ctx.fill();

    for (let flake of snowflakes) {
      flake.y += flake.speedY;
      flake.x += flake.speedX;

      if (flake.y > canvas.height) {
        flake.y = -flake.radius;
        flake.x = Math.random() * canvas.width;
      }
    }

    requestAnimationFrame(drawSnow);
  }

  // Jalankan animasi salju
  drawSnow();

  // Animasi fade-in
  const fadeElements = document.querySelectorAll('.fade-in');

  function handleScroll() {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);
  
  const canvas = document.getElementById("starsCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  const stars = [];
  for (let i = 0; i < 80; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speedY: Math.random() * 0.3 + 0.1
    });
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.beginPath();

    for (let star of stars) {
      ctx.moveTo(star.x, star.y);
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    }
    ctx.fill();

    for (let star of stars) {
      star.y += star.speedY;
      if (star.y > canvas.height) {
        star.y = -star.radius;
        star.x = Math.random() * canvas.width;
      }
    }

    requestAnimationFrame(drawStars);
  }

  drawStars();
</script>
