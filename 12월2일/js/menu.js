$(function(){
   var menu = $('#gnb>li'); //주메뉴   
   var sub = $('#gnb>li>ul'); //sub메뉴 
   //주메뉴만 보이는 높이
   var headerMin = $('#headerWrap').height();
   //메뉴 펼처졋을때 높이
   var headerMax = headerMin + sub.innerHeight();
   var speed = 150;

    //주메뉴에 마우스 올리면 sub메뉴 펼쳐지기
    menu.on('mouseenter keyup',function(){
        // 해당 주메뉴 활성화하기
        menu.removeClass('over'); 
        $(this).addClass('over');
        // sub메뉴 보이기
        $('#headerWrap').stop().animate({height:headerMax},speed,function(){
          sub.stop().fadeIn(speed);
         });
         //해당 sub메뉴 배경색 변경하기
         sub.removeClass('on');
         $(this).find('ul').addClass('on');
    })

        // 주메뉴에 마우스 내리면
    menu.mouseleave(function(){
      menu.removeClass('over');
      sub.removeClass('on');
    })
    // gnb영역에서 벗어나면 
    $('#gnb').mouseleave(function(){
        menu.removeClass('over');
        sub.stop().fadeOut(speed,function(){
            $('#headerWrap').stop().animate({height:headerMin},speed);
        })
    })
}) 