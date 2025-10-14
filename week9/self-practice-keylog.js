// 1. เลือก Input และ Log Area
const inputField = document.getElementById('typingArea'); // ช่อง Input
const logDisplay = document.getElementById('logContainer'); // พื้นที่แสดงผล

// 2. กำหนด Event Listener สำหรับการกดปุ่ม (keydown)
inputField.addEventListener('keydown', (event) => {
    const logEntry = document.createElement('div'); // สร้าง div สำหรับแสดงผลแต่ละครั้ง
    
    // แสดงชื่อปุ่มที่ถูกกด
    logEntry.textContent = `Key Pressed: ${event.key} (Code: ${event.code})`; 

    // เงื่อนไข: ถ้ากดปุ่ม Spacebar ให้แสดงเป็นสีน้ำเงิน
    if (event.code === 'Space') { 
        logEntry.style.color = 'blue';
        logEntry.textContent += ' [Special Key]';
    } else {
        logEntry.style.color = 'gray';
    }

    logDisplay.appendChild(logEntry); // เพิ่มข้อความลงใน log display
    
    // จำกัดจำนวน log ไม่ให้ยาวเกินไป
    if (logDisplay.children.length > 10) {
        logDisplay.removeChild(logDisplay.firstChild); // ลบ log เก่าสุดออก
    }
});