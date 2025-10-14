// 1. เลือก element ที่ต้องการจัดการ
const box = document.getElementById("targetBox");

// 2. Event Listener สำหรับปุ่ม 'เพิ่มเส้นขอบ'
const addButton = document.getElementById("addBorder")
addButton.addEventListener("click", () => {
    box.classList.add("highlight"); // เพิ่ม class 'highlight' เข้าไป
});

// 3. Event Listener สำหรับปุ่ม 'ลบเส้นขอบ'
const removeButton = document.getElementById("removeBorder")
removeButton.addEventListener("click", () => {
    box.classList.remove("highlight"); // ลบ class 'highlight' ออก
});

// 4. Event Listener สำหรับปุ่ม 'สลับเส้นขอบ'
const toggleButton = document.getElementById("toggleBorder");
toggleButton.addEventListener("click", () => {
    box.classList.toggle("highlight"); // สลับ: ถ้ามีให้ลบ, ถ้าไม่มีให้เพิ่ม
});