const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controls');
const sectionBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function pageTransition(){
    // Button click active class
    for(let i = 0; i <sectionBtn.length; i++){
        sectionBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    // sections Active class
    allSections.addEventListener('click',(e) =>{
        const id = e.target.dataset.id;
        if(id){
            // remove selected from the other
            sectionBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active');

            // hide other section
            sections.forEach(section =>{
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active')
        }

    })
    // toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('dark-mode')
    })

}
pageTransition();