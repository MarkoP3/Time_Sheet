export function generateUrlPrevMonth(date) {
  return `/timesheet/${
    date.getMonth() == 0
      ? `${date.getFullYear() - 1}/12`
      : `${date.getFullYear()}/${date.getMonth()}`
  }`;
}
export function generateUrlNextMonth(date) {
  return `/timesheet/${
    date.getMonth() == 11
      ? `${date.getFullYear() + 1}/1`
      : `${date.getFullYear()}/${date.getMonth() + 2}`
  }`;
}
export function dateDiff(date1, date2) {
  return Math.ceil(Math.abs(date1 - date2) / milisecondsPerDay);
}
export function numOfWeeksFromTo(from, to) {
  return Math.ceil(dateDiff(from, to) / daysInWeek);
}
export let milisecondsPerDay = 86400000;
export let daysInWeek = 7;
export function toPreviousMondayDays(date) {
  return (date.getDay() == 0 ? daysInWeek : date.getDay()) - 1;
}
export let days = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];
export function getWeek(date) {
  var onejan = new Date(date.getFullYear(), 0, 1);
  return Math.ceil(((date - onejan) / milisecondsPerDay + onejan.getDay()) / daysInWeek);
}
export function getWeekOfDates(date1,date2)
{
  return (date1.getFullYear()==date2.getFullYear()?getWeek(date1):`${getWeek(date1)}/${getWeek(date2)}`)
}
export function generateDaysUrl(date)
{
  return `/timesheet/days/${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
}
export function nextWeek(date)
{
  return new Date(new Date(date).setDate(date.getDate() + 7));
}
export function prevWeek(date)
{
  return new Date(new Date(date).setDate(date.getDate() - 7));
}
export function getYearOfDates(date1,date2)
{
  return (date1.getFullYear()==date2.getFullYear()?date2.getFullYear():`${date1.getFullYear()}/${date2.getFullYear()}`)
}