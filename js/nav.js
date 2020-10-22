$(function(){
    var mob_menu =$('.mob_menu');
    var header =$('header');
    var fixed =$('.fixed')
    var link = $('.link');
    var m_sub_list = $('.m_sub_list');
    var m_sub_tit = $('.m_sub_tit');
    var body = $('body');
    var d_Nav_item=$('.d_Nav_item');
    var d_Sub_list=$('.d_Sub_list')


    d_Nav_item.click(function(e){
        e.preventDefault();
        d_Sub_list.fadeOut(0);
        $(this).children(d_Sub_list).fadeIn(300);
    })

    d_Sub_list.mouseleave(function(){
        setTimeout(function(){
            d_Sub_list.fadeOut(0);
        },1000)
    })

    // 메뉴 슬라이드 생성 스크립트
    mob_menu.click(function(e){
        e.preventDefault();
        // 스크롤 방지 스트립트
        header.toggleClass('mob_Nav')
        body.toggleClass('no_Scroll');

    })
    // 서브메뉴 슬라이드 생성 스크립트
    m_sub_tit.click(function(e){
        e.preventDefault();
        $(this).next(m_sub_list).slideToggle();
     })

    //  메인으로 돌아가는 버튼 show
    $(window).scroll(function(){

        if($(this).scrollTop() > 600){
            fixed.fadeIn(500);
        }
        else{fixed.fadeOut(1000)}
    })
    // 땡땡이 슬라이드 부드럽게 스트립트 
    link.smoothScroll(300);
})