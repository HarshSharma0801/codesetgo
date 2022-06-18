const darkmodeBtn = document.querySelector(".darkmode")

const quote_Left = document.querySelectorAll(".quote-sign-left")
const quote_Right = document.querySelectorAll(".quote-sign-right")

//* check for OS theme
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");






//* fire window load event
window.onload = function(e){
    
    if(prefersDarkScheme.matches){

        //* if OS has dark theme then set web page to dark theme also

        darkmodeBtn.innerHTML = '<ion-icon name="sunny"></ion-icon>'
        document.body.classList.contains("light")? document.body.classList.remove("light"):""
        document.body.classList.add("dark")

        //* change the testimonials comments Quotes color
        quote_Left.forEach(el=>{
            el.src = "./assets/img/quote-sign-left - light.png"
        })
       quote_Right.forEach(el=>{
           el.src = "./assets/img/quote-sign-right - light.png"
       })
       
       //* store the theme in local storage
       localStorage.setItem("theme","dark")
       
    }
    else{

        //* if OS has light theme then set web page to light theme also
        darkmodeBtn.innerHTML = '<ion-icon name="moon"></ion-icon>'
        
        document.body.classList.contains("dark")? document.body.classList.remove("dark"):""
        document.body.classList.add("light")
        quote_Left.forEach(el=>{
            el.src = "./assets/img/quote-sign-left.png"
        })
        quote_Right.forEach(el=>{
            el.src = "./assets/img/quote-sign-right.png"
        })
        localStorage.setItem("theme","light")
    }
}

//* toggle theme using button

darkmodeBtn.addEventListener("click",(e)=>{
    if(localStorage.getItem("theme") == "dark"){

        e.currentTarget.innerHTML = '<ion-icon name="moon"></ion-icon>'

        document.body.classList.contains("dark")? document.body.classList.remove("dark"):""
        document.body.classList.add("light")

        quote_Left.forEach(el=>{
            el.src = "./assets/img/quote-sign-left.png"
        })
        quote_Right.forEach(el=>{
            el.src = "./assets/img/quote-sign-right.png"
        })
        localStorage.setItem("theme","light")
    }
    else{

        e.currentTarget.innerHTML = '<ion-icon name="sunny"></ion-icon>'

        document.body.classList.contains("light")? document.body.classList.remove("light"):""
        document.body.classList.add("dark")

        quote_Left.forEach(el=>{
            el.src = "./assets/img/quote-sign-left - light.png"
        })
        quote_Right.forEach(el=>{
            el.src = "./assets/img/quote-sign-right - light.png"
        })
        localStorage.setItem("theme","dark")
    }
})
