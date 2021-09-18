function z1(){
    let name1 ="Семён";
    alert(name1);
}
function z2(){
    let god2 =2002;
    alert(god2);
}
function z3(){
    let name ="Семён";
    alert('Приветствую '+name);
}
function range(start, end){
        let arr = [];
        for (let i = start; i <= end; i++) {
            arr.push(i);

        }
        alert(arr);
}
function rangeOdd(start, end){
    let arr = [];
    for (let i = start; i <= end; i++) {
        if(i%2>0) {arr.push(i);}
    }
    alert(arr);
}

function average(a,b){
    let c=(a+b)/2;
    alert(c);
    return c;
}
function square(x){
    let y =Math.pow(x, 2);
    alert(y);
    return y;
}
function cube(nre){
    nre =Math.pow(nre,3);
    alert(nre);
    return nre;
}
function average1(a,b){
    let c=(a+b)/2;
    return c;
}
function square1(x){
    let y =Math.pow(x, 2);
    return y;
}
function cube1(nre){
    nre =Math.pow(nre,3);
    return nre;
}
function calculate(){
    let arr = [];
    for (let i = 0; i <= 9; i++) {
    let s = square1(i);
    let c = cube1(i);
    let t = average1(s,c);
        arr.push(t);
    }
    alert(arr);
    return arr;
}