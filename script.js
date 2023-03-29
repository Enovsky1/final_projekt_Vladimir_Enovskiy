const pswd_check = document.getElementById('pswd_check');
const pswd = document.getElementById('pswd');
const email = document.getElementsByClassName('email')[0];

function verify(){
    let pass = pswd.value;
    let pass_check = pswd_check.value;
    if (pass_check === pass) {
        pswd_check.setAttribute('style', 'background-color: green');
        pswd.setAttribute('style', 'background-color: green');
        
        setTimeout(() => {
            pswd_check.removeAttribute("style");
            pswd.removeAttribute("style");
        }, 1000)
        return true;
    } 
    else if (pass_check !== pass){
        pswd_check.setAttribute('style', 'background-color: red');
    }
    return false;
}


function submitData(){
    if( !verify()){
        alert("Passwords don't match!")
        return false;
    }
    alert("Check your mail! We've sent you your credentials!");
    clearInputs();
    return true;
}


function clearInputs(){
    pswd_check.value = '';
    pswd.value = '';
    email.value = '';
}


const stars = document.getElementsByClassName('star');
for (let star of stars) {
    star.addEventListener('mouseover', highlight);
    star.addEventListener('mouseleave', unhighlight);
    star.addEventListener('click', sendFeedback);
} 

function highlight(){
    let current = this.dataset.pos;
    for (let i = 0; i <= current; i++) {
        stars[i].setAttribute('style', 'scale:1.5')
    }
    
}

function unhighlight(){
    let current = this.dataset.pos;
    for (let i = 0; i <= current; i++) {
        stars[i].setAttribute('style', 'scale:1')
    }
}

function sendFeedback(){
    const feedback_form_box = document.getElementsByClassName('feedback-rating-box')[0];
    let thanks_box = "<div class='thanks'><h4>Thanks for your feedback!</h4></div>"
    feedback_form_box.innerHTML = thanks_box;
}