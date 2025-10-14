///////////////////////////// filterAndTransform
function filterAndTransform(arr, filterFn, transformFn) {
    return arr.filter(filterFn).map(transformFn); // กรองแล้วแปลงค่า
}

const numbers = [2, 5, 8, 11, 14];
const greaterThanFive = n => n > 5; // เงื่อนไขกรอง
const triple = n => n * 3; // คูณ 3

console.log(filterAndTransform(numbers, greaterThanFive, triple)); 
// [24, 33, 42]

///////////////////////////// updateScores (map + spread)
const players = [
    { name: 'Anna', score: 60 },
    { name: 'Ben', score: 70 },
    { name: 'Chris', score: 80 }
];

const boostedPlayers = players.map(p => ({
    ...p, // คัดลอกค่าเดิม
    score: p.score + 10 // บวกคะแนน
}));

console.log('Before:', players);
console.log('After:', boostedPlayers);
// ของเดิมไม่เปลี่ยน

///////////////////////////// createFilter (Closure)
function createFilter(minValue) {
    return arr => arr.filter(num => num >= minValue); // จำค่า minValue ไว้
}

const points = [20, 45, 55, 60, 75];
const filterHigh = createFilter(50);

console.log(filterHigh(points)); // [55, 60, 75]

///////////////////////////// composeThree (Function Composition)
const addFive = x => x + 5;
const multiplyTwo = x => x * 2;
const subtractThree = x => x - 3;

function composeThree(f1, f2, f3) {
    return x => f3(f2(f1(x))); // เรียงเรียกต่อกัน
}

const transform = composeThree(addFive, multiplyTwo, subtractThree);
console.log(transform(4)); // 15


///////////////////////////// createCounter (Closure)
function createCounter(start) {
    let count = start; // เก็บค่าไว้ภายใน
    return {
        inc: () => ++count, // เพิ่ม
        dec: () => --count, // ลด
        reset: () => { count = start; return count; } // รีเซ็ต
    };
}

const counter = createCounter(5);
console.log(counter.inc()); // 6
console.log(counter.inc()); // 7
console.log(counter.dec()); // 6
counter.reset();
console.log(counter.inc()); // 6

// 🧠 เกมฝึกแนวข้อสอบจริง
function chainTwo(f1, f2) {
    return x => f2(f1(x)); // รวมฟังก์ชัน 2 ตัว
}

const times2 = n => n * 2;
const minus1 = n => n - 1;
const combo = chainTwo(times2, minus1);
console.log(combo(10)); // 19
