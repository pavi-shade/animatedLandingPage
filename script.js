let tl = gsap.timeline();
    tl.from(".bg",{
        backgroundColor:"black",
        delay:1,
        opacity:1,
        duration:1
    })
    tl.from(".logo>img , #nav_name , .heading h5, #nav i",{
        y:-100,
        opacity:0,
        duration:0.2,
        stagger:0.2
    })
    tl.from("#name,#story,#btn",{
        x:200,
        opacity:0,
        duration:0.3,
        stagger:0.3
    })
    tl.from("#icon",{
        x:-300,
        stagger:0.5
    })
    tl.from(".scroll",{
        opacity:0

    })
