// 1. เลือก Input Fields และ Feedback Message
const form = document.querySelector('form');
const nameInput = document.getElementById('fullName');
const pinInput = document.getElementById('pinCode');
const rePinInput = document.getElementById('confirmPin');
const messageArea = document.querySelector('.feedback-message'); // พื้นที่แสดงข้อความ

// 2. Event Listener สำหรับการกดปุ่ม Submit (ปุ่มอยู่ใน form)
form.addEventListener('submit', (e) => {
  e.preventDefault(); // หยุดการส่ง Form แบบปกติ (สำคัญมาก)
 
  const name = nameInput.value.trim();
  const pin = pinInput.value.trim();
  const rePin = rePinInput.value.trim();
 
  // ตรวจสอบ: ข้อมูลว่างเปล่าหรือไม่
  if (!name || !pin || !rePin) {
    messageArea.textContent = 'กรุณากรอกข้อมูลให้ครบทุกช่อง';
    messageArea.style.color = 'red';
    return; // หยุดการทำงานถ้าข้อมูลไม่ครบ
  } 
  
  // ตรวจสอบ: รหัส Pin ตรงกันหรือไม่
  if (pin !== rePin) {
    messageArea.textContent = 'รหัส Pin ไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง';
    messageArea.style.color = 'red';
    return;
  } 
  
  // สำเร็จ
  messageArea.textContent = 'ลงทะเบียนสำเร็จ! ข้อมูลถูกต้อง';
  messageArea.style.color = 'green';
  form.reset(); // ล้างข้อมูลใน Form
});