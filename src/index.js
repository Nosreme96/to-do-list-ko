import { homepage } from './homepage';
import './styles.css';
import plus_icon from './plus-circle-outline.svg';

const to_do_array = [];
const project_array = [];
console.log(homepage);
console.log(homepage.titlebar());
document.getElementById('content').append(homepage.main());
document.getElementsByClassName('add_btn')[0].addEventListener('click', function (e) {(console.log(e));});
console.log('hello');
console.log('test');

export default to_do_array;
