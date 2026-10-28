// Hiệu ứng đánh máy cho dòng tagline ở hero (không thư viện, ~30 dòng)
(function () {
  var el = document.getElementById("typewriter");
  if (!el) return;

  var phrases = [
    "Tự học — mỗi ngày một chút ✍️",
    "Hiểu sâu hơn là học nhanh hơn 🧠",
    "Ghi chép hôm nay, lợi ích năm sau 🌱",
    "Blog cá nhân: nơi mình dạy lại cho chính mình 📖",
  ];

  var pi = 0, ci = 0, deleting = false;

  function tick() {
    var text = phrases[pi];
    el.textContent = text.slice(0, ci);

    var delay;
    if (!deleting) {
      ci++;
      delay = 60;
      if (ci > text.length) { deleting = true; delay = 1800; }
    } else {
      ci--;
      delay = 30;
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; delay = 400; }
    }
    setTimeout(tick, delay);
  }

  tick();
})();
