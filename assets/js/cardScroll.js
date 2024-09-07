// scroll card auto
const cardContainer = document.querySelector(".crad_flex_scroll");
let isDown = false;
let startX;
let scrollLeft;

cardContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  cardContainer.classList.add("active");
  startX = e.pageX - cardContainer.offsetLeft;
  scrollLeft = cardContainer.scrollLeft;
});

cardContainer.addEventListener("mouseleave", () => {
  isDown = false;
  cardContainer.classList.remove("active");
});

cardContainer.addEventListener("mouseup", () => {
  isDown = false;
  cardContainer.classList.remove("active");
});

cardContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - cardContainer.offsetLeft;
  const walk = (x - startX) * 2; // ความเร็วในการเลื่อน
  cardContainer.scrollLeft = scrollLeft - walk;
});

let scrollAmount = 0;
const scrollStep = 1; // ขนาดของการเลื่อนแต่ละครั้ง
const intervalTime = 30; // เวลาระหว่างการเลื่อนแต่ละครั้งในมิลลิวินาที
let autoScrollInterval;

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    scrollAmount += scrollStep;
    if (scrollAmount >= cardContainer.scrollWidth - cardContainer.clientWidth) {
      scrollAmount = 0;
    }
    cardContainer.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  }, intervalTime);
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// เริ่มการเลื่อนอัตโนมัติเมื่อโหลดหน้า
startAutoScroll();

// หยุดการเลื่อนอัตโนมัติเมื่อโฮเวอร์หรือคลิกที่การ์ด
cardContainer.addEventListener('mouseover', stopAutoScroll);
cardContainer.addEventListener('click', stopAutoScroll);

// เริ่มการเลื่อนอัตโนมัติใหม่เมื่อเลิกโฮเวอร์
cardContainer.addEventListener('mouseout', startAutoScroll);

// ---------------------------------------------------------------------




