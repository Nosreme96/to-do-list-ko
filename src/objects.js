import { to_do_array, project_array } from './homepage';

const todo = (title, description, priority, due_date, project_name, id) => {
    return {title, description, priority, due_date, project_name, id};
};
const projectEntry =  (title, count = 1) => {
    return {title, count };
}

function createObj() {
        let title = document.getElementById('to-do-title').value;
        let description = document.getElementById('to-do-desc').value;
        let priority = document.querySelector('input[name="priority"]:checked').value;
        let duedate = document.getElementById('due-date').value;
        let project = document.getElementById('project-assign').value;
        let to_do_array_test = JSON.parse(localStorage.getItem('todoarr'));
        if(to_do_array_test == null)
        {
            var to_do_array = new Array();
            to_do_array.push(todo(title, description, priority, duedate, project));
            localStorage.setItem('todoarr', JSON.stringify(to_do_array));
        }
        else
        {
         to_do_array_test.push(todo(title, description, priority, duedate, project));
         localStorage.setItem('todoarr', JSON.stringify(to_do_array_test));
         var to_do_array = to_do_array_test;
        }
        let project_array_test = JSON.parse(localStorage.getItem('projlist'));
        if(project_array_test == null)
        {
          var project_array = new Array();
        }
        else{
            var project_array = project_array_test;
        }
        let i  = project_array.findIndex(e => e.title == project);
        console.log(project, i);
        if (i === -1)
        {
          project_array.push(projectEntry(project)); 
          localStorage.setItem('projlist', JSON.stringify(project_array));  

        }
        else 
        {
            project_array[i].count++;
            localStorage.setItem('projlist', JSON.stringify(project_array));
        }
        console.log('project added', project_array);
        console.log(to_do_array);
        to_do_array[(+to_do_array.length-1)].id = (title+description).replaceAll(' ', '');
        console.log('object created and added to array',to_do_array);
        localStorage.setItem('todoarr', JSON.stringify(to_do_array));
        localStorage.setItem('projlist', JSON.stringify(project_array));
        return to_do_array[(+to_do_array.length-1)];    

    }

export {todo, projectEntry, createObj};