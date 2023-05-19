//task1
function foo1(a,b)
{
    if(a < b )
    {
        return -1;
    }
    else if (a > b)
    {
        return 1;
    }
    else {
        return 0;
    }
}


//task2
function foo2(a)
{
    let res = 1;
    for (var i = 2;i <=a;i++)
    {
        res *=i;
    }
    return res;
}

//task3
function foo3(a, b, c) {
    let res =   100*a + 10*b + c;
    return res;
}
console.log(1,2,3)

//task4
function foo4(length,width)
{
    if  (width === undefined)
    {
        return length * length;
    }
    else
    {
        return width * length;
    }
}


//task5
function foo5(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

//task6
function foo6(min, max) {
    for (let num = min; num <= max; num++) {
        if (foo5(num)) {
            console.log(num);
        }
    }
}
//task7

function foo7 (h,min,sec){
    if (min === undefined){
        min = "00";
    }
    if (sec === undefined){
        sec = "00";
    }
    return h + ":" + min + ":" + sec;
}

//task8
function foo8(h, min, sec) {
    let res = 0;
    res += h * 3600;
    res += min * 60;
    res += sec;
    return res;
}
//task9

function foo9(sec) {
    let h = Math.floor(sec / 3600);
    let min = Math.floor((sec % 3600) / 60);
    let sec1 = sec % 60;
    return h + ":" + min + ":" + sec1;
}

//task10
function foo10(h1, min1, sec1, h2, min2, sec2) {
    let total1 = foo8(h1, min1, sec1);
    let total2 = foo8(h2, min2, sec2);
    let diff = total1 - total2;
    return foo9(diff);
}