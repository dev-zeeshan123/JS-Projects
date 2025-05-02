// Dates

let myDate = new Date()
// console.log(myDate.toString());Fri May 02 2025 05:32:44 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Fri May 02 2025
 console.log(myDate.toLocaleString());
// console.log(typeof myDate); // object type 

let myCreatedDate1 = new Date(2023, 0, 23)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
let myCreatedDate3 = new Date("2023-01-14")
let myCreatedDate4 = new Date("01-14-2023")
console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toLocaleString());
console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate1.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
/*
output
5/2/2025, 6:42:56 AM
1/23/2023, 12:00:00 AM
1/23/2023, 5:03:00 AM
1/14/2023, 12:00:00 AM
1/14/2023, 12:00:00 AM
1746168176040
1674432000000
1746168176
2025-05-02T06:42:56.040Z
5
58*/