export function isWeekend(date){
 const day = date.day();
  if(day === 0){
    return 'sunday'
  } else if(day === 6){
    return 'saturday'
  }
  return 'not weekend'
}