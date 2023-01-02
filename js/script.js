let a = prompt('input first number');
let b = prompt('input two number');
function maxNumber(a,b){
  if (a > b){;
    alert (a);
    }else if (a < b){
    alert (b);
    }else if(a === b)
    {alert(`${a}=${b}`)};
}
alert(maxNumber(a,b))


function revers(number){
number=prompt('input')
    if(number){
    alert(-number)
    }else{
    alert(+number)
    }
}
revers()

let number = prompt('enter your number')
let count = prompt('input count');
function three(number,count){
    for(count=3*count;;number+count){
        return number+count;
    }
}
alert(three(+number,+count));


let km = prompt('Enter kilometers')
let metric = prompt ('What unit to convert?')
function KmToM(km){
  let m=km*1000;
  if(metric==='m'){
    alert(`${m} meters in ${km} kilometer`)
  }
}
function KmToCM(km){
  let cm=km*100000;
  if(metric==='cm'){
    alert(`${cm} cm in ${km} kilometer`)
  }
}
function getMetric(metric,km,m,cm){
   metric?KmToM:KmToCM;
}
alert(getMetric(KmToM(km),KmToCM(km)))
