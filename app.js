gsap.from('header',{
    y: 70,
    opacity: 0,
    ease: "power2.inOut",
    duration: 2,
    delay: 0.3,
})

gsap.from('.work1',{
    y: 70,
    opacity: 0,
    ease: "power2.inOut",
    duration: 1.2,
    delay: 1,
    scrollTrigger:{
        trigger: '.work1',
    }
})
gsap.from('.work2',{
    y: 70,
    opacity: 0,
    ease: "power2.inOut",
    duration: 1.2,
    scrollTrigger:{
        trigger: '.work2',
    }
})
gsap.from('.work3',{
    y: 70,
    opacity: 0,
    ease: "power2.inOut",
    duration: 1.2,
    scrollTrigger:{
        trigger: '.work3',
    }
})
gsap.from('.work4',{
    y: 70,
    opacity: 0,
    ease: "power2.inOut",
    duration: 1.2,
    scrollTrigger:{
        trigger: '.work4',
    }
})
gsap.from('.service',{
    y: 70,
    opacity: 0,
    ease: "power2.inOut",
    duration: 1.2,
    scrollTrigger:{
        trigger: '.service',
    }
})
gsap.from('footer',{
    opacity: 0,
    ease: "power2.inOut",
    duration: 0.8,
    delay: 0.3,
    scrollTrigger:{
        trigger: 'footer',
    }
})