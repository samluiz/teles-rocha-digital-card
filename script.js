const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.18 }
);

fadeEls.forEach((el) => observer.observe(el));

const currentYear = document.getElementById('currentYear');
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

const qrImage = document.getElementById('qrImage');
const pageUrl = window.location.href;
const qrApi = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(pageUrl)}`;

if (qrImage) {
  qrImage.src = qrApi;
}
