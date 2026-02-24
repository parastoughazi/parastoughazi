// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu after clicking a link (mobile)
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Year
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

// Simple lightbox for gallery
const dialog = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img");
const lbCap = document.getElementById("lightbox-cap");

document.querySelectorAll(".gallery .shot img").forEach(img => {
  img.addEventListener("click", () => {
    if (!dialog || !lbImg) return;
    lbImg.src = img.src;
    lbImg.alt = img.alt || "";
    if (lbCap) lbCap.textContent = img.alt || "";
    dialog.showModal();
  });
});

document.querySelectorAll(".lightbox-close").forEach(btn => {
  btn.addEventListener("click", () => dialog?.close());
});

dialog?.addEventListener("click", (e) => {
  // click outside image closes
  const rect = dialog.getBoundingClientRect();
  const inDialog =
    rect.top <= e.clientY && e.clientY <= rect.bottom &&
    rect.left <= e.clientX && e.clientX <= rect.right;
  if (!inDialog) dialog.close();
});
