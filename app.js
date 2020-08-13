// Sa se faca suma a doua numere

// var nr01 = 13;
// var nr02 = 27;
// var suma = nr01 + nr02;
// console.log('suma este ' + suma)

// // Se dau doua numere, sa se determine maximul intre ele

// if (nr01 > nr02) console.log('numarul mai mare este ' + nr01)
//     else console.log('numarul mai mare este ' + nr02)

// // Sa se afiseze elementele unui array

// var list=[27, 13, 4, 52, 46]
// console.log(list)

// // Gasiti cel mai mic numar din array

// var nrMic = list[0];
// for (var i = 1; i < list.length; i++) {
//     if (list[i] < nrMic) {
//         nrMic = list[i]
//     }
// }
// console.log('cel mai mic numar este ' + nrMic)

// // Afisati elementele dintr-o matrice, array de array

// var matrice = [
//     [6, 7, 4, 8],
//     [2, 1, 3, 5]
// ]

// console.log(matrice);

// Cautarea unei litere intr-un string
// Inlocuirea unei litere dintr-un string


// display in the console the numbers from 1 to 20

for (var i=1; i<=20; i++) {
    console.log(i)
}

// display in the console the odd numbers from 1 to 20

for (var j=1; j<=20; j++) {
    if (j % 2 == 0) console.log(j + ' este par')
}

// compute the sum of the elements of an array and display it in the console

var list = [27, 13, 4, 52, 46];
var suma = 0;
for (var i = 0; i < list.length; i++) {
    var x = list[i];
    suma = suma + x;
}
console.log('Suma este ' + suma);

// compute the maximum of the elements of an array and display it in the console 

var nrMare = list[0];
for (var i = 1; i < list.length; i++) {
    if (list[i] > nrMare) {
        nrMare = list[i]
    }
}
console.log('Cel mai mare numar este ' + nrMare);

// compute how many times a certain element appears in an array
var x = 2
var count = 0;
var list2 = [13, 2, 4, 2, 5, 7, 45, 38, 2, 5, 2, 65, 2, 4];

for (var i = 0; i <= list2.length; i++) {
    if (list2[i] == x) count++;
}
console.log('numarul apare de ' + count + ' ori');

// using nested for generate the following pattern
// 0 1 0 1
// 1 0 1 0
// 0 1 0 1
// 1 0 1 0

// var x = [0, 1];
// var y = [1, 0];


// for (var i=1; i<=x.length; i++) {
//     for (var j=1; j<=y.length; j++){
//         console.log(x, x);
//     }
//     console.log(y, y);
// }

