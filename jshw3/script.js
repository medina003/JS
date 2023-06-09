//Task1
class Car{
    constructor(manufacturer, model, year, avgKph) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.avgKph = avgKph;
    }
    showInfo(){
        console.log(this.manufacturer, this.model, this.year, this.avgKph)
    }
    countTime(km){
        if (typeof km !== "number") {
            throw new TypeError("distance is not a number");
        }
        const hours = km/this.avgKph;
        if (hours > 4){
            if (hours % 4 === 0) {
                return hours + Math.floor((hours - 1) / 4);
            }
            return hours + Math.floor(hours / 4);
        }
        return hours;
    }
}
let car1 = new Car("Mercedes","AMG",2021,100)
car1.showInfo();
console.log(car1.countTime(56))

//Task2
class Fraction {
    constructor(numerator,denominator) {
        this.numerator = numerator
        this.denominator = denominator
    }
    sum(fraction){
        if(this.denominator === fraction.denominator){
            let resNum = fraction.numerator + this.numerator
            if(resNum === fraction.denominator){ return 1}
            return resNum + '/'+  this.denominator
        }
        else {
            let resNum =  this.numerator * fraction.denominator + fraction.numerator * this.denominator
            let resDenom = this.denominator * fraction.denominator
            return resNum + '/'+  resDenom
        }
    }
    substract(fraction){
        if(this.denominator === fraction.denominator){
            let resNum = fraction.numerator - this.numerator
            if(resNum === fraction.denominator){ return 1}
            return resNum + '/'+  this.denominator
        }
        else {
            let resNum =  this.numerator * fraction.denominator - fraction.numerator * this.denominator
            let resDenom = this.denominator * fraction.denominator
            return resNum + '/'+  resDenom
        }
    }
    multi(fraction){
            let resNum = fraction.numerator * this.numerator
            let resDenom = this.denominator * fraction.denominator
            return resNum === resDenom ? 1 : resNum + '/'+  resDenom
    }
    division(fraction){
        let resNum = this.numerator * fraction.denominator;
        let resDenom = this.denominator * fraction.numerator;
        return resNum === resDenom ? 1 : resNum + '/'+  resDenom
    }
    gcd() {
        if ((typeof this.numerator !== 'number') || (typeof this.denominator !== 'number'))
            return false;
        this.numerator  = Math.abs(this.numerator );
        this.denominator  = Math.abs(this.denominator );
        while(this.denominator) {
            var t = this.denominator;
            this.denominator = this.numerator  % this.denominator;
            this.numerator  = t;
        }
        return this.numerator ;
    }
    reduction(){
        let resNum = this.numerator/this.gcd()
       let resDenom =  this.denominator/this.gcd()
        return resNum + "/" + resDenom
    }
}
let fr1 = new Fraction(3,6)
let fr2 = new Fraction(2,3)

console.log(fr1.reduction())
//Task3
class Time{
    constructor(h,m,s) {
        this.h = h
        this.m = m
        this.s = s
    }
    show(){
        return `${this.h}:${this.m}:${this.s}`
    }
    editSec(){
        //
}

}
