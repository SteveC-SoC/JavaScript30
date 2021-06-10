const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

    function setDate() {
        const now = new Date(); /*Date is an inbuilt object that represents a single moment in time (the current time when asked)*/
        //second hand 
        const seconds = now.getSeconds(); /*this gets the seconds in the current time*/
        const secondsDegrees = ((seconds / 60) * 360) +90; /*here we are working out the degrees to move the clock hand, and add the offset of 90 so it starts from the top*/
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        // minute hand
        const minutes = now.getMinutes();
        const minDegrees = ((minutes / 60) * 360) +90; 
        minuteHand.style.transform = `rotate(${minDegrees}deg)`;
        // hour hand
        const hours = now.getHours();
        const hourDegrees = ((hours / 12) * 360) +90; /*here we change it to 12, as there are 12 hours on a clock face*/
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }
    
    setInterval(setDate, 1000); /*this runs the setDate function every second*/