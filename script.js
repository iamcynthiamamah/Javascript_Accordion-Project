

//variable
//classList.toggle toggles between adding or removing a classList in javascript
const accordion = document.querySelectorAll('.content-container');

for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');  //toggles between adding and removing a classList
            //the content-container.active class created above here will be styled in css
        //also addition to this is the 'javascript styling link' section in the css for the active
    })
}