
//1.Select all tabs from tab list
const pomodoroTab= document.getElementById("pomodoro");
const shortBreakTab= document.getElementById("shortBreak");
const longBreakTab= document.getElementById("longBreak");

const pomodoroContent=document.getElementById("Pomodoro-content");
const shortBreakContent=document.getElementById("Short Break-content");
const longBreakContent=document.getElementById("Long Break-content");
console.log(pomodoroTab);


//2. add click event listner to each tab
pomodoroTab.addEventListener("click",function(){
    
    shortBreakTab.classList.remove ("active");
    longBreakTab.classList.remove ("active");
    pomodoroTab.classList.add ("active");

    pomodoroContent.classList.add("active");
    shortBreakContent.classList.remove("active");
    longBreakContent.classList.remove("active");

});
shortBreakTab.addEventListener("click",function(){
    shortBreakTab.classList.add ("active");
    longBreakTab.classList.remove ("active");
    pomodoroTab.classList.remove ("active");

    pomodoroContent.classList.remove("active");
    shortBreakContent.classList.add("active");
    longBreakContent.classList.remove("active");
});
longBreakTab.addEventListener("click",function(){
    shortBreakTab.classList.remove ("active");
    longBreakTab.classList.add ("active");
    pomodoroTab.classList.remove ("active");

    pomodoroContent.classList.remove("active");
    shortBreakContent.classList.remove("active");
    longBreakContent.classList.add("active");
});


//3. remove all active tab class from tab List
//4. add active class to selected tab
//5. remove all active class to selected tab 
//6. add active class to selected tab
//timer to develop
function timer(seconds)
{
    const now=Date.now();
    const then=now+(seconds*1000);
    const timerinterval= setInterval(function(){
            const secondsleft= Math.round((then- Date.now())/1000);
            console.log(secondsleft);
            if(secondsleft< 1)
            {
                clearInterval(timerinterval);
                return;
            }
    },1000);
};

timer(5);
