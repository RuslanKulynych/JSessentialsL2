//task 1
function mySum() {
    return 1 + 2 + 3;
}
console.log("sum numbers from 1 to 3 equals ", mySum());
//task 2
function mySum2() {
    var sum = 0;
    var i = 0;
    for (var i = 20; i <= 220; i++) {
        sum = sum + i;
    }
    console.log("sum numbers from 20 to 220 equals ", sum);
}

mySum2();
//task 3.1
console.log('task 3.1');

function myEvnum() {
    for (var i = 2; i <= 20; i += 2) {
        console.log(i);
    }
}

myEvnum();
//task 3.2
console.log('task 3.2');

function myEvnum1() {
    for (var i = 1; i <= 20; i++) {
        if (i % 2 == 1) continue;
        console.log(i);
    }
}
myEvnum1();
//task 3.3
console.log('task 3.3');

function myEOdd() {
    for (var i = 0; i < 20; i++) {
        if (i % 2) {
            console.log(i);
        }
    }
}
myEOdd();
// task 4
console.log('task 4');

function myOdd() {
    var i = 10;
    while (i <= 30) {
        if (i % 2 != 0)
            console.log(i);
        i++;
    }
}
myOdd();
//task 5
console.log('task 5');

function myBirthmonth() {
    for (var i = 1; i <= 15; i++) {
        console.log(i);

        if (i == 5)
            break;
    }
}
myBirthmonth();
//task 6
console.log('task 6');

function myBirthmonth1() {
    var i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
}
myBirthmonth1();
//task 7

function myOnehundred() {
    var input = prompt('Enter number greater than 100', '0');
    var num = parseInt(input);
    if (isNaN(num)) {
        alert('Enter number!');
        myOnehundred();
    } else {
        while (num <= 100) {
            myOnehundred();
            break;
        }
        if (num > 100) {
            alert(num);
        }
    }
}

myOnehundred();
//task 7.1
function myOnehundred1() {
    var num = 0;
    do {
        num = parseInt(prompt('Enter number greater than 100', '0'));
    }
    while (num <= 100 && typeof num !== 'string')
    alert(num);

}
myOnehundred1();
//task 8
console.log('task 8');

function myDiez() {
    var diez = '';
    for (var i = 0; i < 8; i++) {
        var a = "#"
        diez += a;
        console.log(diez);
    }
}
myDiez();
