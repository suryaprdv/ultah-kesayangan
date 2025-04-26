let currentPage = 1;
function nextPage() {
  document.getElementById(`page${currentPage}`).classList.remove("active");
  currentPage++;
  if (document.getElementById(`page${currentPage}`)) {
    document.getElementById(`page${currentPage}`).classList.add("active");
  }
}

// Bubble efek
const bubbles = document.getElementById('bubbles');
function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.innerHTML = '💖';
  bubbles.appendChild(bubble);
  setTimeout(() => bubble.remove(), 5000);
}
setInterval(createBubble, 300);
