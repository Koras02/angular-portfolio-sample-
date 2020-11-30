$(function(){
    var menu = $('#gnb>li'); //주메뉴
    var sub = $('#gnb>li>ul'); //sub 메뉴

     // 주메뉴에 마우스올리면 해당 sub메뉴 보이기
   menu.mouseenter(function(){
       //해당 sub메뉴 보이기
        sub.removeClass('on');
         $(this).find('ul').addClass('on');
         //주메뉴 이미지 경로 변경하기
         imgOver();
   });

   //주메뉴에 마우스 아웃하면 
   menu.mouseover(function(){
        // sub메뉴 안보이게
        sub.removeClass('on');
        // 주메뉴 이미지 경로 변경하기
        var out = $(this).find('img').attr('src').replace('over','out');
        $(this).find('img').attr('src',out); 
   })

    //주메뉴에 마우스 올리면 주메뉴 이미지 경로 변경되는 함수 선언 
    function imgOver(){
        var over = $(this).find('img').attr('src').replace('out','over');
         $(this).find('img').attr('src',over);
    }
})
