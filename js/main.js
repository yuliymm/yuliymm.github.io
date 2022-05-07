$(document).ready(function(){
    $(window).scroll(function(){
        // Всплывающий навбар вверху
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // Кнопка прокрутки вверх
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //Плавная прокрутка
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // удаление плавной прокрутки
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // Плавная прокрутка по кнопкам меню
        $('html').css("scrollBehavior", "smooth");
    });

    // Всплывающее меню
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Набор текста анимация
    var typed = new Typed(".typing", {
        strings: ["Английский язык", "Химия и биология", "Компьютерные", "Логопед"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Английский язык", "Химия и биология", "Компьютерные", "Логопед", "Почемучка"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Карусель
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});