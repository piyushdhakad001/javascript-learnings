import dayjs from 'https://unpkg.com/dayjs@1.11.13/esm/index.js';
// import {isWeekend } from './weekend.js'
import {isWeekend as isSatSun} from './weekend.js'


// 15a). SOLUTION
const today = dayjs();
const fiveDaysAfter = today.add(5, 'days');
console.log(fiveDaysAfter.format('MMMM,  D'));


// 15b). SOLUTION
const oneMonthAfter = today.add(1, 'month');
console.log(oneMonthAfter.format('MMMM, D'));



// 15C). SOLUTION
const oneMonthBeforeDate = today.subtract(1, 'month');
console.log(oneMonthBeforeDate.format('MMMM D'));


// 15d). SOLUTION
const dayOfTheWeek = today;
console.log(dayOfTheWeek.format('dddd'));


// 15e). SOLLUTION BY ME
 function isWeekend(date){
 const day = date.day();
  if(day === 0){
    return 'sunday'
  } else if(day === 6){
    return 'saturday'
  }
  return 'not weekend'
}
console.log(isWeekend(dayjs('2026-05-23'))); 

// SOLLUTION BY SSD
// function isWeekend(date){
//   const day = date.format('dddd');
//   return day === 'saturday'  || day === 'sunday'
// }
// let date = dayjs();
// console.log(date.format('dddd, MMMM, D'));
// console.log(isWeekend(date));

//  date = dayjs().add(2, 'day');
//       console.log(date.format('dddd, MMMM D'));
//       console.log(isWeekend(date));

//       date = dayjs().add(4, 'day');
//       console.log(date.format('dddd, MMMM D'));
//       console.log(isWeekend(date));

//       date = dayjs().add(6, 'day');
//       console.log(date.format('dddd, MMMM D'));
//       console.log(isWeekend(date));


// 15f). SOLLUTION
console.log(isWeekend(dayjs('2026-05-23'))); 



// 15g). SOLUTION
console.log(isSatSun(dayjs('2026-05-23'))); 