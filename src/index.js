import { homepage } from './homepage';
import './styles.css';
import { todo } from './objects';

var to_do_array = [];
console.log(to_do_array, typeof to_do_array);
const project_array = [];
var clicked = 'home';
console.log(homepage);
console.log(homepage.titlebar());
document.getElementById('content').append(homepage.main());
document.getElementsByClassName('add_btn')[0].addEventListener('click', function (e) {(console.log(e));});
console.log('hello');
console.log('test');
homepage.card(todo('test task', 'descriptiontestnanapakahabanamantalagadinakasyalahatsascreen', 'priority','duedatetest'));
console.log(to_do_array);
export {clicked, to_do_array};
