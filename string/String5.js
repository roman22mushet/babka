// Задание:
// Преобразуйте регистр первого символа строки из нижнего регистра в верхний.
const str = "string not starting with capital";
const result =str.replace(str.charAt(0), str.charAt(0).toUpperCase()); // тут ваш код вместо null

console.log(result); // "String not starting with capital"
