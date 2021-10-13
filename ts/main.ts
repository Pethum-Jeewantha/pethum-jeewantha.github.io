$(window).on('scroll',()=>{
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > +($(window).height() / 2));
    navbar.classList.toggle("sticky", window.scrollY > +($(window).height() - $('.navbar').height()));
});
