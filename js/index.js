const first=document.querySelector("#first");
const second=document.querySelector("#second");
const third=document.querySelector("#third");
const image=document.querySelector(".targetimage img");
const contactbutton=document.querySelector(".content button");
const contactpopup=document.querySelector(".contactus");
const body=document.querySelector(".heading");
const newwindowbutton=document.querySelector(".whatwedo");

first.addEventListener("mouseenter",(e)=>{
    
    const id=e.target.id;

    first.addEventListener("click",(e)=>{

        image.setAttribute("src","./assests/slider/5.png");
    });
});

second.addEventListener("mouseenter",(e)=>{

    second.addEventListener("click",(e)=>{

        image.setAttribute("src","./assests/random/image.png");
    });
});

third.addEventListener("mouseenter",(e)=>{

    third.addEventListener("click",(e)=>{

        image.setAttribute("src","./assests/slider/4.png");
    });
});

contactbutton.addEventListener("click",(e)=>{

    contactpopup.style.opacity=1;
    body.style.opacity=0.5;
});


newwindowbutton.addEventListener("click",(e)=>{

    console.log(e.target.tagName)
    if(e.target.tagName == 'BUTTON' || e.target.tagName == 'SPAN')
    {
        window.open('https://www.fylehq.com/');
    }

    if(e.target.className == 'direct')
    {
        window.open('https://www.fylehq.com/');
    }
    
});

