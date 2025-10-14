// 1. เลือก element <div id="demo"> จากหน้า HTML
let el = document.getElementById("demo")

// แสดงผลข้อความภายในแบบต่าง ๆ
console.log(el.innerHTML)   // แสดง HTML ทั้งหมดใน div (รวมแท็ก)
console.log(el.innerText)   // แสดงเฉพาะข้อความที่มองเห็นบนหน้าเว็บ
console.log(el.textContent) // แสดงข้อความทั้งหมด รวมถึงที่ซ่อนอยู่ 

// 2. สร้าง <p> ใหม่ แล้วใส่เนื้อหาแบบต่างกัน
let p = document.createElement("p");
p.setAttribute("format", "italic");
p.innerHTML = "<i>Sample Italic Text</i>";   // อ่านแท็ก <i> เป็นตัวเอียงจริง

let p2 = document.createElement("p");
p2.setAttribute("format", "italic");
p2.innerText = "<i>Sample Italic Text</i>";  // แสดงแท็ก <i> เป็นข้อความเฉยๆ

let p3 = document.createElement("p");
p3.setAttribute("format", "italic");
p3.textContent = "<i>Sample Italic Text</i>"; // เหมือน innerText แต่จะอ่านข้อความที่ถูกซ่อนไว้ได้ด้วย

// 3. เพิ่ม element ทั้งสามลงใน <div id="demo">
el.appendChild(p);
el.appendChild(p2);
el.appendChild(p3);
