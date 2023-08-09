import to_do_array from "./index";

const todo = (title, description, priority, due_date, project_name) => {
    return {title, description, priority, due_date, project_name};
};
const project =  (title) => {
    return {title};
}
function createObj() {
    let title = document.getElementById('to-do-title').value;
    let description = document.getElementById('to-do-desc').value;
    let priority = document.querySelector('input[name="priority"]:checked').value;
    let duedate = document.getElementById('due-date').value;
    let project = document.getElementById('project-assign').value;
    to_do_array.push(todo(title, description, priority, duedate, project));
    console.log(to_do_array.length);
    return to_do_array[(+to_do_array.length-1)];    
}
export {todo, project, createObj};