import { formPopup } from './event';

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
        home.className = 'home sidebar';
        home.innerHTML = 'Home';
        const today = document.createElement('div');
        today.className = 'today sidebar';
        today.innerHTML = 'Today';
        const week = document.createElement('div');
        week.className = 'week sidebar';
        week.innerHTML = 'Week';
        const projects = document.createElement('div');
        projects.className = 'projects sidebar';
        projects.innerHTML = 'Projects';
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
        document.getElementsByClassName('fullscreen-container')[0].remove();
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
        if(obj.duedate == null)
        {
            obj.duedate = 'no due date';
            cardduedate.innerHTML = obj.duedate;
        }
        else{
            cardduedate.innerHTML = obj.duedate;
        }    
        cardduedate.className = 'card-desc';
        newcard.append(cardtitle, carddescription, cardduedate);
        document.getElementById('card-cont').append(newcard);
    }

    return {titlebar, sidebar, container, main, add_btn, remove_form, card}
})();
export {homepage}