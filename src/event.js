import { homepage } from "./homepage";
import { createObj } from "./objects";
import { clicked} from "./index";
const { isBefore, addDays, format } = require("date-fns");

const formPopup = (() => {

    const add_form = () =>{
        const fullscreen_cont = document.createElement('div');
        fullscreen_cont.id = 'fullscreen-container';

        const popup = document.createElement('div');
        popup.id = 'popup';
        const to_do_form = document.createElement('form');
        to_do_form.id = 'form';
        to_do_form.action = '';
        to_do_form.name = 'addform';
        //to_do_form.addEventListener('submit', function addNewBook(){
          //  e.preventDefault();
        const form_label = document.createElement('h1');
        form_label.innerHTML = 'Add a to-do';
        form_label.className = 'form-header';

        const title_label = document.createElement('label');
        title_label.innerHTML = 'Title:';
        title_label.className = 'form-label';
        title_label.for = 'to-do-title';;
        const to_do_title = document.createElement('input');
        to_do_title.type = 'text';
        to_do_title.id = 'to-do-title';
        to_do_title.minLength = '2';
        to_do_title.maxLength = '30';
        to_do_title.placeholder = 'Add a title...';
        to_do_title.required = true;
  
        const desc_label = document.createElement('label');
        desc_label.innerHTML = 'Description:';
        desc_label.className = 'form-label';
        desc_label.for = 'to-do-desc';
        const to_do_desc = document.createElement('textarea');
        to_do_desc.className = 'textarea';
        to_do_desc.rows = '4';
        to_do_desc.cols = '30';
        to_do_desc.id = 'to-do-desc';
        to_do_desc.minLength = '10';
        to_do_desc.maxLength = '200';
        to_do_desc.placeholder = 'Add a short description...';
        to_do_desc.required = true;

        const due_date_label = document.createElement('label');
        due_date_label.innerHTML = 'Due date:';
        due_date_label.for = 'due-date';
        due_date_label.className = 'form-label'
        const due_date = document.createElement('input');
        due_date.type = 'date';
        due_date.id = 'due-date';

        const priority_container = document.createElement('div');
        priority_container.className = 'priority-container';
        const priority_label = document.createElement('label');
        priority_label.innerHTML = 'Priority:';
        priority_label.className = 'form-label';
        const priority1 = document.createElement('input');
        priority1.type = 'radio';
        priority1.id = 'low';
        priority1.name = 'priority';
        priority1.value = 'low';
        const priority1_label = document.createElement('label');
        priority1_label.for = 'low';
        priority1_label.innerHTML = 'Low';
        priority1_label.className = 'radio-label';
        const priority2 = document.createElement('input');
        priority2.type = 'radio';
        priority2.id = 'medium';
        priority2.name = 'priority';
        priority2.value = 'medium';
        priority2.checked = 'checked';
        const priority2_label = document.createElement('label');
        priority2_label.for = 'medium';
        priority2_label.innerHTML = 'Medium';
        priority2_label.className = 'radio-label';
        const priority3 = document.createElement('input');
        priority3.type = 'radio';
        priority3.id = 'high';
        priority3.name = 'priority';
        priority3.value = 'high';
        const priority3_label = document.createElement('label');
        priority3_label.for = 'high';
        priority3_label.innerHTML = 'High';
        priority3_label.className = 'radio-label';
        priority_container.append(priority_label, priority1,priority1_label,priority2,priority2_label,priority3,priority3_label);

        const project_assign = document.createElement('input');
        project_assign.type = 'text';
        project_assign.id = 'project-assign';
        project_assign.placeholder = 'Assign to a project';
        project_assign.required = true;
        const projass_label = document.createElement('label');
        projass_label.innerHTML = 'Project Name:';
        projass_label.className = 'form-label';
        projass_label.for = 'project-assign';
        const ok_btn = document.createElement('button');
        ok_btn.value = 'Confirm';
        ok_btn.type = 'submit';   
        ok_btn.className = 'submit';     
        ok_btn.innerHTML = 'Confirm';
        const close_btn = document.createElement('div');
        close_btn.className = 'close';
        close_btn.innerHTML = 'X';
        close_btn.addEventListener('click', function(){
          document.getElementById('fullscreen-container').remove();
        })
        
        to_do_form.append(form_label, title_label, to_do_title, desc_label, to_do_desc, due_date_label, due_date, priority_container, projass_label, project_assign, ok_btn, close_btn);
        popup.append(to_do_form);
        fullscreen_cont.append(popup);
        
        return fullscreen_cont;
    }
    const submitform = () => {
     document.getElementById('form').addEventListener('submit', function (e){
      e.preventDefault();
      if (clicked == 'home')
      {
        homepage.addCard(homepage.card(createObj()));
      }
      else if (clicked == 'projects')
      { 
        let pname = createObj().project_name;
        console.log(pname);
      //  let project_array = JSON.parse(localStorage.getItem('projlist'));
        let i  = project_array.findIndex(e => e.title == pname)
        console.log(i);
        if (i === (project_array.length-1) && project_array[i].count<2)
        {
          homepage.addCard(homepage.project_card(project_array[(project_array.length-1)]));
        }
      }
      else{
        createObj();
      }
      console.log('todo card added');
      homepage.remove_form();
    });
    }
    const submitFormEdit = () => {
      document.getElementById('formedit').addEventListener('submit', function (e){
        e.preventDefault();
        let to_do_array = JSON.parse(localStorage.getItem('todoarr'));
        let i = to_do_array.findIndex(e => e.id == document.getElementById('formedit').className);
        let title = document.getElementById('to-do-title').value;
        let description = document.getElementById('to-do-desc').value;
        to_do_array[i].title = document.getElementById('to-do-title').value;
        to_do_array[i].description = document.getElementById('to-do-desc').value;
        to_do_array[i].priority = document.querySelector('input[name="priority"]:checked').value;
        to_do_array[i].due_date = document.getElementById('due-date').value;
        to_do_array[i].project_name = document.getElementById('project-assign').value;
        to_do_array[i].id = (title+description).replaceAll(' ', '');
        localStorage.setItem('todoarr', JSON.stringify(to_do_array));
        homepage.remove_form();
        console.log(to_do_array);
        homepage.reloadscreen();
      })

    };
    const formEdit = (task) => {
      const fullscreen_cont = document.createElement('div');
        fullscreen_cont.id = 'fullscreen-container';

        const popup = document.createElement('div');
        popup.id = 'popup';
        const to_do_form = document.createElement('form');
        to_do_form.id = 'formedit';
        to_do_form.className = (task.title + task.description).replaceAll(' ','');
        to_do_form.action = '';
        to_do_form.name = 'addform';
        const form_label = document.createElement('h1');
        form_label.innerHTML = 'Edit a to-do';
        form_label.className = 'form-header';

        const title_label = document.createElement('label');
        title_label.innerHTML = 'Title:';
        title_label.className = 'form-label';
        title_label.for = 'to-do-title';;
        const to_do_title = document.createElement('input');
        to_do_title.type = 'text';
        to_do_title.id = 'to-do-title';
        to_do_title.minLength = '2';
        to_do_title.maxLength = '30';
//        to_do_title.placeholder = 'Add a title...';
        to_do_title.required = true;
        to_do_title.value = task.title;
  
        const desc_label = document.createElement('label');
        desc_label.innerHTML = 'Description:';
        desc_label.className = 'form-label';
        desc_label.for = 'to-do-desc';
        const to_do_desc = document.createElement('textarea');
        to_do_desc.className = 'textarea';
        to_do_desc.rows = '4';
        to_do_desc.cols = '30';
        to_do_desc.id = 'to-do-desc';
        to_do_desc.minLength = '10';
        to_do_desc.maxLength = '200';
 //       to_do_desc.placeholder = 'Add a short description...';
        to_do_desc.required = true;
        to_do_desc.value = task.description;

        const due_date_label = document.createElement('label');
        due_date_label.innerHTML = 'Due date:';
        due_date_label.for = 'due-date';
        due_date_label.className = 'form-label'
        const due_date = document.createElement('input');
        due_date.type = 'date';
        due_date.id = 'due-date';
        due_date.value = task.due_date;

        const priority_container = document.createElement('div');
        priority_container.className = 'priority-container';
        const priority_label = document.createElement('label');
        priority_label.innerHTML = 'Priority:';
        priority_label.className = 'form-label';
        const priority1 = document.createElement('input');
        priority1.type = 'radio';
        priority1.id = 'low';
        priority1.name = 'priority';
        priority1.value = 'low';
        const priority1_label = document.createElement('label');
        priority1_label.for = 'low';
        priority1_label.innerHTML = 'Low';
        priority1_label.className = 'radio-label';
        const priority2 = document.createElement('input');
        priority2.type = 'radio';
        priority2.id = 'medium';
        priority2.name = 'priority';
        priority2.value = 'medium';
        priority2.checked = 'checked';
        const priority2_label = document.createElement('label');
        priority2_label.for = 'medium';
        priority2_label.innerHTML = 'Medium';
        priority2_label.className = 'radio-label';
        const priority3 = document.createElement('input');
        priority3.type = 'radio';
        priority3.id = 'high';
        priority3.name = 'priority';
        priority3.value = 'high';
        const priority3_label = document.createElement('label');
        priority3_label.for = 'high';
        priority3_label.innerHTML = 'High';
        priority3_label.className = 'radio-label';
        priority_container.append(priority_label, priority1,priority1_label,priority2,priority2_label,priority3,priority3_label);

        const project_assign = document.createElement('input');
        project_assign.type = 'text';
        project_assign.id = 'project-assign';
        project_assign.placeholder = 'Assign to a project';
        project_assign.required = true;
        project_assign.value = task.project_name;
        const projass_label = document.createElement('label');
        projass_label.innerHTML = 'Project Name:';
        projass_label.className = 'form-label';
        projass_label.for = 'project-assign';
        const ok_btn = document.createElement('button');
        ok_btn.value = 'Confirm';
        ok_btn.type = 'submit';   
        ok_btn.className = 'submit';     
        ok_btn.innerHTML = 'Confirm';
        const close_btn = document.createElement('div');
        close_btn.className = 'close';
        close_btn.innerHTML = 'X';
        close_btn.addEventListener('click', function(){
          document.getElementById('fullscreen-container').remove();
        })
        
        to_do_form.append(form_label, title_label, to_do_title, desc_label, to_do_desc, due_date_label, due_date, priority_container, projass_label, project_assign, ok_btn, close_btn);
        popup.append(to_do_form);
        fullscreen_cont.append(popup);
        
        
        return fullscreen_cont;
    }
    return {add_form, submitform, formEdit, submitFormEdit};
})();
function sidebar_click (sidebars){
  sidebars.addEventListener('click', function(){
       
        document.getElementsByClassName(clicked)[0].classList.remove('clicked');
        clicked = sidebars.id;
        document.getElementById(clicked).classList.add('clicked');
        console.log("changed highlighted sidebar element");
     if(clicked == 'home')
     {
      home_clicked();
     }
     else if (clicked == 'projects')
     {
      projects_clicked();
     }
     else if (clicked == 'today')
     {
      today_clicked();
     }   
     else if (clicked == 'week')
     {
      week_clicked();
     }
    }
)
};

function home_clicked(){
  homepage.remove_container();
  let to_do_array = JSON.parse(localStorage.getItem('todoarr'));
  console.log(to_do_array);
  for (let items of to_do_array)
  {
    homepage.addCard(homepage.card(items));
  }
  console.log('home clicked and printed cards');
}

function projects_clicked(){
homepage.remove_container();
let project_array = JSON.parse(localStorage.getItem('projlist'));
for (let items of project_array)
{
 
  homepage.addCard(homepage.project_card(items));
  console.log('added project card');
}
};

function today_clicked () {
  homepage.remove_container();
  let today_limit = addDays(new Date(), 1);
  console.log(today_limit);
  let to_do_array = JSON.parse(localStorage.getItem('todoarr'));
  for(let items of to_do_array)
  {
    let taskdate = new Date(items.due_date);
    console.log(taskdate);
    if(isBefore(taskdate, today_limit))
    {
      homepage.addCard(homepage.card(items));
    }
  }
};

function week_clicked () {
  homepage.remove_container();
  let today_limit = addDays(new Date(), 8);
  console.log(today_limit);
  let to_do_array = JSON.parse(localStorage.getItem('todoarr'));
  for(let items of to_do_array)
  {
    let taskdate = new Date(items.due_date);
    console.log(taskdate);
    if(isBefore(taskdate, today_limit))
    {
      homepage.addCard(homepage.card(items));
    }
  }
}

export {formPopup, sidebar_click, home_clicked, projects_clicked, today_clicked, week_clicked}