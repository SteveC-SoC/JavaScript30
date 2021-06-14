const panels = document.querySelectorAll('.panel'); //this selects all class with the name panel

function toggleOpen (){
    this.classList.toggle('open'); //this adds the class "open" to the panel
}
function toggleActive (e){
    //because different browsers use different property names, we check the property name includes "flex", this allows it to work on differnet browsers
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');//this add the class "open-active" once the toggleOpen function has ended
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
