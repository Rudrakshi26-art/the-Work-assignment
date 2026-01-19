document.addEventListener('DOMContentLoaded', () => {
  const firstMember = document.querySelector('[data-hover-donut="true"]');
  if (!firstMember) return;

  const donut = firstMember.querySelector('.donut');

  firstMember.addEventListener('mousemove', (e) => {
    const rect = firstMember.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    donut.style.transform =
      `rotateX(${(-y / rect.height) * 12}deg) rotateY(${(x / rect.width) * 12}deg)`;
  });

  firstMember.addEventListener('mouseleave', () => {
    donut.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});
document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        tab.classList.toggle("active");
    });
});
