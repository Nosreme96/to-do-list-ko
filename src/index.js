import { home_clicked } from './event';
import { homepage, to_do_array } from './homepage';
import './styles.css';

/*const date = new Date();
console.log(date);
console.log(`${format(date, 'dd.MM.yyyy')}`);
console.log(`${format(date, 'yyyy-MM-dd').toString()}`);
console.log(`today is ${format(date, 'EEEE, MMMM yyyy')}`);
console.log(`today is  ${format(date, 'EEEE,MMMM do, yyyy hh:mm a')}`);
console.log(`Today's date: ${format(date, 'MMMM, yyyy')}`);
console.log(`Today's date: ${format(date, 'MMMM.do.')}`);
console.log(`Today's date: ${format(date, 'EEEE do HH:mm ')}`);
console.log(`${format(date, 'EEEE,MMMM do, yyyy ppppp')}`);
console.log(`${format(date, 'do  MMMM yyyy OOOO')}`);

let now = new Date();
let nextweek = addDays(now, 8);
console.log (nextweek);
*/


console.log(to_do_array, typeof to_do_array);

var clicked = 'home';
document.getElementById('content').append(homepage.main());
home_clicked();

document.getElementsByClassName('add_btn')[0].addEventListener('click', function (e) {(console.log(e));});
console.log('hello');
console.log('test');
console.log(to_do_array);

export {clicked};
