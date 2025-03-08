// code for about
var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
var menu = document.getElementById("menubar");
function openmenu(){
    menu.style.right="0";
}
function closemenu(){
    menu.style.right="-200px";
}
function closehome(){
    menu.style.right="-200px";
}
function closeabout(){
    menu.style.right="-200px";
}
function closeservice(){
    menu.style.right="-200px";
}
function closeportfolio(){
    menu.style.right="-200px";
}
function closecontact(){
    menu.style.right="-200px";
}



  const scriptURL = 'https://script.google.com/macros/s/AKfycbwrHks8rkPxm_Dcil0lEZKLaT9Ucnykg5jEqYaAxYm6EP_1u141fInKu6PZoGVOhrz8_Q/exec'
  const form = document.forms['submit-to-google-sheet']
const mag =document.getElementById("msg");
  
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "meassage sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },1000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


