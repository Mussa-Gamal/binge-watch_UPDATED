var navbar = document.getElementById("navbar")
const navbarToggler = document.getElementById("navbar_toggler");
const all = document.getElementById("all");
function disableScroll() {
    navbarToggler.classList.toggle("show");

    if(navbarToggler.classList.contains("show")) {
        document.body.style.overflow = "hidden";
        all.style.filter = "blur(15px)";
        navbar.style.background = "#141519";
        navbar.style.backdropFilter = "blur(0)";
    } else {
        document.body.style.overflow = "auto";
        all.style.filter = "blur(0)";
        navbar.style.background = "rgba(0,0,0,0.6)";
        navbar.style.backdropFilter = "blur(10px)";
        navbar.style.webkitBackdropFilter = "blur(10px)";
    }
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || currentScrollPos <= 74 || navbarToggler.classList.contains("show")) {
        navbar.style.visibility = "visible";
        navbar.style.opacity = "1";
      } else {
        navbar.style.visibility = "hidden";
        navbar.style.opacity = "0";
      }

    if(currentScrollPos <= 74) {
        navbar.style.background = "#141519";
        navbar.style.backdropFilter = "blur(0)";
    } else {
        navbar.style.background = "rgba(0,0,0,0.6)";
        navbar.style.backdropFilter = "blur(10px)";
        navbar.style.webkitBackdropFilter = "blur(10px)";
    }

    prevScrollpos = currentScrollPos;
}


var typed = new Typed(".auto-typing",{
    strings : ["Adventure.^820", "Slice of Life.^820", "Action.^820", "Romance.^820", "Comedy.^820", "Psychological.^820","Sci-Fi.^820", "History.^820", "Supernatural.^820", "Magic.^820", "Drama.^820", "Fantasy.^820", "Horror.^820", "Mystery.^820", "Isekai.^820"],
    typeSpeed : 150,
    backSpeed : 150,
    delay : 200,
    loop : true
})



const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});


//   touchEvents

slider.addEventListener('touchstart', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchend', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('touchcancel', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});


const firstImageWidth = slider.querySelector(".image").offsetWidth;
const sliderChildrens = [...slider.children];
let imagePerView = Math.round(slider.offsetWidth / firstImageWidth);

sliderChildrens.slice(-imagePerView).reverse().forEach(image => {
    slider.insertAdjacentHTML("afterbegin", image.outerHTML);
})

sliderChildrens.slice(0, imagePerView).forEach(image => {
    slider.insertAdjacentHTML("beforeend", image.outerHTML);
})   




// FORM VALIDATION 



let fNameError = document.getElementById("f-name_error");
let sNameError = document.getElementById("s-name_error");
let emailError = document.getElementById("email_error");
let messageError = document.getElementById("message_error");

function validateFName() {
    let firstName = document.getElementById("f-name").value;

    if (firstName.trim() == "") {
        fNameError.innerHTML = "Please enter your First name.";
        return false;
    }
    fNameError.innerHTML = "";
    return true;
}

function validateSName() {
    let secondName = document.getElementById("s-name").value; 

    if(secondName.trim() == "") {
        sNameError.innerHTML = "Please enter your Family name.";
        return false;
    }

    sNameError.innerHTML = "";
    return true;
}

function validateEmail() {
    let email = document.getElementById("email").value;

    if(email.trim() == "") {
        emailError.innerHTML = "Please enter your E-mail address.";
        return false;
    } 
    if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        emailError.innerHTML = "Please enter a valid E-mail address.";
        return false;
    }

    emailError.innerHTML = "";
    return true;
}

function validateMessage() {
    let message = document.getElementById("message").value;

    if(message.trim() == "") {
        messageError.innerHTML = "Please write a message.";
        return false;
    }

    messageError.innerHTML = "";
    return true;
}

function validateForm() {
    if(!validateFName() || !validateSName() || !validateEmail()) {
        return false;
    }
}


AOS.init({
    duration: 1700
});


const themeToggle = document.getElementById("theme-toggle");
const darkBg = document.getElementById("dark-bg");
const lightBg = document.getElementById("light-bg");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");
const iconBg = document.getElementById("iconBg");

themeToggle.onclick = function() {
    document.body.classList.toggle("light-theme");
    lightBg.classList.toggle("show");
    lightBg.classList.toggle("animate-show");
    darkBg.classList.toggle("hide");
    moonIcon.classList.toggle("show");
    moonIcon.classList.toggle("animate-icon");
    moonIcon.classList.toggle("theme-icon-light");
    themeToggle.classList.toggle("theme-toggle-light")
    sunIcon.classList.toggle("hide");
}

if(!lightBg.classList.contains("show")) {
    darkBg.classList.toggle("animate-show");
    sunIcon.classList.toggle("animate-icon");
}




const blob = document.getElementById("blob");

document.body.onpointermove = event => {
    const {clientX, clientY} = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 3000, fill: "forwards" });
}


var loader = document.getElementById("loader");

window.addEventListener("load", function() {
    loader.style.display = "none";
})
