
//Задание:
//Выполните задание в соответствии с комментариями.
let name = "Герасим";
let age = 25;
let company = "NAYAX";
let position = "Frontend Developer ";
// инициализируйте переменную message
// значение должно быть создано с помощью шаблонной строки и с помощью конкатенации.
// строковое значение должно быть создано на основе значений переменных name, age, company, position
// Значение должно быть составлено по шаблону:
// Привет, меня зовут Герасим. Мне 25 лет. Я работаю на должности Frontend Developer 😀 в компании NAYAX.
let message = `Привет, меня зовут ${name}. Мне ${age} лет. Я работаю на должности ${position} в компании ${company}.`

console.log(message);

// Задание:
// Напишите преобразование строки в массив слов.
const str = 'Каждый охотник желает знать';
const arr = str.split(' '); // тут ваш код вместо null
console.log(arr); // ['Каждый', 'охотник', 'желает', 'знать']