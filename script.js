//Динамическая типизация

/*

// To String

//1
console.log(String(null));
console.log(typeof(String(10)));

//2 Конкатенация

console.log(typeof(5+'')); //При сложении со строкой всё равно получается строка

let num = 5;

console.log("https://vk.com/catalog/" + num); 

let fontSize = 26 + 'px';

// To Number

//1

console.log(typeof(Number('4')));

//2 Унарный плюс

console.log(typeof(+'5'));

//3

console.log(typeof(parseInt('15px', 10)));

let ans = +prompt('Hello','');  

//To Boolean

//1

let switcher = null; // В логическом контексте null = false

if (switcher) {
    console.log('Working');
}

switcher = 1; // В логическом контексте 1 = true

if (switcher) {
    console.log('Working');
}

//2

console.log(typeof(Boolean('4')));

//3

console.log(typeof(!!"4444"));

*/

//Задачи на понимание основ

//1

/*

let x = 5;
console.log(x++); //Постфиксная форма.Перед увеличение возваращает нам неизменённое значение т.е. 5
console.log(++x); //Префиксная форма. Возвращает изменённое значение

*/

//2

// [] + false - null + true
//console.log([] + false); // false
//console.log([] + false - null); // NaN
//console.log([] + false - null + true); // NaN 

//3

/*

let y = 1;

let x = y = 2;

alert(x);

*/

//4

//console.log([] + 1 + 2); // '12' 

//5

//alert("1"[0]); // 1
//alert(typeof("1"[0])); // type - string

//6

//console.log(2 && 1 && null && 0 && undefined); //Выведет null т.к. оператор И (&&) остановится на нём т.к. null ложный

//7

//console.log(!!(1 && 2) === (1 && 2) ); //false т.к. !! превращают выражение в булиновое.

//8

//alert(null || 2 && 3 || 4); //3 Не останавливается на 2 т.к. у оператора И(&&) выше приоритет.

//9

/*

let a = [1, 2, 3],
    b = [1, 2, 3];

    console.log(a == b); //falsre т.к. это разные массивы, пускай и содержат идентичные данные.


*/

//10

//alert(+"Infinity"); 
//alert(typeof(+"Infinity")); // type - number

//11

//console.log("Aa" > "b");

//12

//console.log(0 || "" || 2 || undefined || true || false); // 2 Т.к. оператор ИЛИ(||) останавливается на правде, где 2 в логическом значении == true