import { homepage } from "./homepage";
import { createObj } from "./objects";
import to_do_array from "./index";

const formPopup = (() => {

    const add_form = () =>{
        const fullscreen_cont = document.createElement('div');
        fullscreen_cont.className = 'fullscreen-container';

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
        to_do_form.append(form_label, title_label, to_do_title, desc_label, to_do_desc, due_date_label, due_date, priority_container, projass_label, project_assign, ok_btn);
        popup.append(to_do_form);
        fullscreen_cont.append(popup);
        
        return fullscreen_cont;
    }
    const submitform = () => {
     document.getElementById('form').addEventListener('submit', function (e){
      e.preventDefault();
      homepage.card(createObj());
      console.log('todo card added');
      homepage.remove_form();
    });
    }
    return {add_form, submitform};
})();

export {formPopup}