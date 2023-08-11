import { formPopup, sidebar_click } from './event';
import { clicked } from './index';
import { to_do_array } from './index';

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
        cards_container.append(label_div);
        container.append(cards_container, homepage.add_btn());
        return container
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
    const remove_form = () => {
        document.getElementById('fullscreen-container').remove();
    }
    function card (obj)  {
        let newcard = document.createElement('div');
        newcard.className = 'card';
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
        newcard.id = Array.from(obj.title + obj.description).join('').replaceAll(' ', '');
        let delete_icon = document.createElement('div');
        delete_icon.className = 'trash-card '+ Array.from(obj.title + obj.description).join('').replaceAll(' ', '') ;
        delete_icon.addEventListener('click', function(){
            for(let x = 0; x < to_do_array.length; x++)
            {
                if (to_do_array[x].id == delete_icon.classList[1])
                {
                    to_do_array.splice(x,1);
                }
            }
            this.parentNode.remove();
            console.log(to_do_array, 'task removed from array');

        })
        newcard.append(cardtitle, carddescription, cardduedate, delete_icon);
        document.getElementById('card-cont').append(newcard);
    }

    return {titlebar, sidebar, container, main, add_btn, remove_form, card}
})();
export {homepage, sidebar_clicked_array}