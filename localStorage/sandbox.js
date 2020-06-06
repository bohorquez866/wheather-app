//store data in local Storage
localStorage.setItem('name', 'Goil');
localStorage.setItem('age', 800);
localStorage.removeItem('Nationality:', 'Bnko');
console.table(localStorage);

//get data from Local Storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
//Stringify

const todos = [
    { text: 'Play Mario Kart', author: 'Jesus' },
    { text: 'Play Zelda', author: 'Dann' },
    { text: 'Play Minecraft', author: 'Kate' }
]

console.log(JSON.stringify(todos));
localStorage.setItem('todos', JSON.stringify(todos))


const stored = localStorage.getItem('todos');
console.log(stored);
console.log(JSON.parse(stored));