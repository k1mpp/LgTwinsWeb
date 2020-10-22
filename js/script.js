$(function(){

    //scroll 

    var scrollBody =$('#wrap')
    var content = scrollBody.find('section');
    var nav_li= $('nav li');

    var winScrollTop;
    var headerHeight=$('header').height();


    var sec1Top=$('#sec01').offset().top +headerHeight;
    var sec2Top=$('#sec02').offset().top +headerHeight;
    var sec3Top=$('#sec03').offset().top +headerHeight;
    var sec4Top=$('#sec04').offset().top +headerHeight;
    var sec5Top=$('#sec05').offset().top +headerHeight;
    var sec6Top=$('#sec06').offset().top +headerHeight;
    var sec7Top=$('#sec07').offset().top +headerHeight;
    var sec8Top=$('#sec08').offset().top +headerHeight;

    console.log(sec2Top+'+'+headerHeight);

    
 var sec01_img =$('.sec01_img');
 var sec01_Timg =$('.title_img img');
 var sec02_img =$('.sec02_img');
 var sec03_img =$('.sec03_img')
 var sec04_img =$('.sec04_img')
 var sec05_img =$('.sec05_img')
 var sec06_img =$('.sec06_img')
 var sec07_img01=$('.sec07_txt')
 var sec08_img=$('.sec08_txt')


 function wrap1(){
    sec01_img.animate({'opacity':'1'},1000);
    sec01_Timg.animate({'opacity':'1','marginLeft':'30px'},1000);
 }
 
 function wrap2(){
    sec02_img.animate({'opacity':'1','marginTop':'35px'},1000);
}
function wrap3(){
    sec03_img.animate({'opacity':'1','x':'15px'},1000);
}
function wrap4(){
    sec04_img.animate({'opacity':'1','y':'20px'},1000);
}

function wrap5(){
    sec05_img.animate({'opacity':'1','x':'50px'},1000);
}

function wrap6(){
    sec06_img.transition({'opacity':'1'},1000);
}

function wrap7(){
}
function wrap8(){
    sec08_img.transition({'opacity':'1'},2000);
}

    function setProperty(){
        winScrollTop = $(window).scrollTop();
    }

    function setContent(index){
        content.removeClass('active');
        content.eq(index-1).addClass('active');

        nav_li.removeClass('active');
        nav_li.eq(index-1).addClass('active');

    }

    function init(){
        motion();
    }

    function motion() {
        setProperty();
        changeSection();
    }

    $(window).scroll(function(){
        motion();
    })

    $(window).resize(function(){
        init();
    })

    init();

    function changeSection(){
        if(winScrollTop < sec1Top){
            setContent(1);
            setTimeout(wrap1,1000);
        }

        else if(winScrollTop >= sec1Top && winScrollTop < sec2Top){
            setContent(2);
            setTimeout(wrap2,500);
        }
        else if(winScrollTop >= sec2Top && winScrollTop < sec3Top){
            setContent(3);
            wrap3();
        }
        else if(winScrollTop >= sec3Top && winScrollTop < sec4Top){
            setContent(4);
            wrap4();
        }
        else if(winScrollTop >= sec4Top && winScrollTop < sec5Top){
            setContent(5);
            wrap5();
        }
        else if(winScrollTop >= sec5Top && winScrollTop < sec6Top){
            setContent(6);
            setTimeout(wrap6,500);
        }
        else if(winScrollTop >= sec6Top && winScrollTop < sec7Top){
            setContent(7);
            wrap7();
    
        }
        else if(winScrollTop >= sec7Top && winScrollTop < sec8Top){
            setContent(8);
            wrap8();
    
        }

    }








$(function(){
   
    var slider = $('.slider>ul');
 
    slider.bxSlider({
     auto:false,//자동 여부
     pager:true,//하단 1,2,3버튼
     mode: 'horizontal',//슬라이드 나오는 방향
     autoControls:false,//play stop btn
     controls:true //좌우 버튼
    })
 
 })

});