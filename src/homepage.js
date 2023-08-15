import { formPopup, sidebar_click, home_clicked, today_clicked, week_clicked, projects_clicked } from './event';
import { clicked } from './index';



var sidebar_clicked_array;
const homepage = (() =>
{
    const main = () => {
        const main = document.createElement('div');
        main.className = 'main';
        main.append(homepage.titlebar(), homepage.sidebar(), homepage.container());
        return main;
    }
    const titlebar = () =>
    {
        const header = document.createElement('div');
        header.className = 'header';
        const title = document.createElement('div');
        title.className = 'title';
        title.innerHTML = '#TO-DO-KO';
        header.append(title);
        return header;
    }
    const sidebar = () => {
        const side_container = document.createElement('div');
        side_container.className = 'side-cont';
        const home = document.createElement('div');
        home.className = 'home sidebar clicked';
        home.innerHTML = 'Home';
        home.id = 'home';
        const today = document.createElement('div');
        today.className = 'today sidebar';
        today.innerHTML = 'Today';
        today.id = 'today';
        const week = document.createElement('div');
        week.className = 'week sidebar';
        week.innerHTML = 'Week';
        week.id = 'week';
        const projects = document.createElement('div');
        projects.className = 'projects sidebar';
        projects.innerHTML = 'Projects';
        projects.id = 'projects';
        
        sidebar_clicked_array = [home, today, week, projects];
        for(let elements of sidebar_clicked_array){
            sidebar_click(elements);
        }
        console.log(sidebar_clicked_array);
        side_container.append(home, today, week, projects);
        return side_container;
        
    }
    const container = () => {
        const container = document.createElement('div');
        container.className = 'container';
        const cards_container = document.createElement('div');
        cards_container.id = 'card-cont';
        if (clicked != 'projects'){
            cards_container.append(homepage.label_div());
        }
        container.append(cards_container, homepage.add_btn());
        return container

    }
    const label_div = () => {
        const label_div = document.createElement('div');
        label_div.className = 'card-labels';
        const titles = document.createElement('div');
        titles.className = 'card-label';
        titles.innerHTML = 'To-dos'
        const descs = document.createElement('div');
        descs.className = 'card-label';
        descs.innerHTML = 'Description';
        const duedates = document.createElement('div');
        duedates.className = 'card-label';
        duedates.innerHTML = 'Due';
        label_div.append(titles,descs,duedates);
        return label_div;
    }
    const add_btn = () => {
        const add_container = document.createElement('div');
        add_container.className = 'add_container';
        const add_btn = document.createElement('button');
        add_btn.className = 'add_btn';
        add_btn.addEventListener('click', function(){
            console.log('button clicked');
            document.getElementById('content').append(formPopup.add_form());
            formPopup.submitform();
        });
        const add_img = document.createElement('img');
        add_img.className = 'add_img';
        add_img.src = '../src/plus-circle-outline.svg';
        const add_text = document.createElement('div');
        add_text.className = 'add_text';
        add_text.innerHTML = 'Add to-do';
        add_btn.append(add_img);
        add_container.append(add_btn, add_text);
        return add_container;
    }
    function addCard(carditem){
        document.getElementById('card-cont').append(carditem);
    }
    const remove_form = () => {
        document.getElementById('fullscreen-container').remove();
    }
    function card (obj)  {
        let newcard = document.createElement('div');
        let to_do_array = JSON.parse(localStorage.getItem('todoarr'));
        newcard.className = 'card ' +obj.id ;
        newcard.addEventListener('click', function () {
            console.log('edit card');
            let to_do_array = JSON.parse(localStorage.getItem('todoarr'));
            let i = to_do_array.findIndex(task => task.id == newcard.classList[1]);
            console.log(i);
            console.log(to_do_array[i]);
            document.getElementById('content').append(formPopup.formEdit(to_do_array[i]));
            formPopup.submitFormEdit();
        })
        if (obj.priority == 'low')
        {
            newcard.classList.add('low');
        }
        else if (obj.priority == 'medium')
        {
            newcard.classList.add('medium');
        }
        else if (obj.priority == 'high')
        {
            newcard.classList.add('high');
        }
        let cardtitle = document.createElement('div');
        cardtitle.innerHTML = obj.title;
        cardtitle.className = 'card-title';
        let carddescription = document.createElement('div');
        carddescription.innerHTML = obj.description;
        carddescription.className = 'card-desc';
        let cardduedate = document.createElement("div");
        if(obj.due_date == '')
        {
            obj.due_date = 'no due date';
            cardduedate.innerHTML = obj.due_date;
        }
        else{
            cardduedate.innerHTML = obj.due_date;
        }    
        cardduedate.className = 'card-due';
        console.log(obj.title);
        newcard.id = (obj.title + obj.description).replaceAll(' ', '');
        let delete_icon = document.createElement('div');
        let classTrash = 'trash-card '+ (obj.title + obj.description).replaceAll(' ', '') + ' '+ obj.project_name.replaceAll(' ', '') ;
        delete_icon.className = classTrash;
        delete_icon.addEventListener('click', function(){
            for(let x = 0; x < to_do_array.length; x++)
            {
                if (to_do_array[x].id == delete_icon.classList[1])
                {
                    to_do_array.splice(x,1);
                    localStorage.setItem('todoarr', JSON.stringify(to_do_array));
                }
            }
            let project_array = JSON.parse(localStorage.getItem('projlist'));
            let i = project_array.findIndex(e => e.title.replaceAll(' ', '') == delete_icon.classList[2]);
            project_array[i].count--;
            if(project_array[i].count < 1)
            {
                project_array.splice(i, 1);
                localStorage.setItem('projlist', JSON.stringify(project_array));
            }
            
            console.log(JSON.parse(localStorage.getItem('projlist')));
            document.getElementsByClassName(classTrash)[0].parentNode.remove();
            console.log(to_do_array, 'task removed from array');
            homepage.reloadscreen();
        })
        newcard.append(cardtitle, carddescription, cardduedate, delete_icon);
        //document.getElementById('card-cont').append(newcard);
        console.log(newcard);
        return  newcard;
    }
    function reloadscreen (){
        if (clicked == 'home')
            {
                home_clicked();
            }
            else if (clicked == 'today')
            {
                today_clicked();
            }
            else if (clicked == 'week')
            {
                week_clicked();
            }
            else if (clicked == 'projects')
            {
                projects_clicked();
            }

    }

    function project_card(proj){
        let proj_card = document.createElement('div');
        proj_card.className = proj.title + ' proj-card';
        proj_card.innerHTML = `Project: ${proj.title} - ${proj.count} task/s`;
        proj_card.addEventListener('click', function(){
            let to_do_array = JSON.parse(localStorage.getItem('todoarr'));
            let projTodos =  to_do_array.filter((item) => item.project_name == proj.title);
            console.log(projTodos);
            for(let tasks of projTodos){
                proj_card.append(homepage.card(tasks));
                console.log('added task to card');
            }
        })
        return proj_card;
    }
    function remove_container () {
        console.log(document.getElementsByClassName('container')[0]);
        document.getElementsByClassName('container')[0].remove();
        console.log('removed container');
        document.getElementsByClassName('main')[0].append(homepage.container());
        console.log('added container and add btn');
    }

    return {titlebar, sidebar, container, label_div, addCard, main, add_btn, remove_form, card, remove_container, project_card, reloadscreen}
})();
export {homepage, sidebar_clicked_array}