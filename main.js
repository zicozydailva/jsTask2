//An array of objects
const data = [
  { principal: 2500, time: 1.8},
  {principal: 1000, time: 5},
  { principal: 3000, time: 1},
  { principal: 2000, time: 3}
]

function interestCalc(arr) {
  let interestData = [];
  let rate = ``;
  let interest = ``;
  
  for(let obj of arr) {
   if(obj.principal >= 2500 && obj.time > 1 && obj.time < 3) {
     obj.rate = 3
   } else if (obj.principal >= 2500 && obj.time >= 3) {
       obj.rate = 4
   } else if (obj.principal < 2500 || obj.time <= 1) {
   obj.rate = 2
  }  else {
    obj.rate = 1
  }

  interest = (obj.principal * obj.rate * obj.time) / 100;
  interestData.push({prinicpal: obj.principal, time: obj.time, rate: rate, interest: interest})
  }

  console.log(interestData);
  console.log(data);

  return interestData;
}

interestCalc(data)


