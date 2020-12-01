$(function(){
    var menu = $('#gnb>li'); //주메뉴
    var sub = $('#gnb>li>ul'); //sub 2차 메뉴 전체
    var subMenu = $('#gnb>li>ul>li'); //sub 메뉴
    var subMenu3 = $('#gnb>li>ul>li>ul') //sub 3차 메뉴 전체 
    
    // 주메뉴에 마우스 올리면 해당 주메뉴 활성화,해당 sub메뉴 보이기
    menu.on('mouseenter keyup',function(){
        //해당 주메뉴 활성화
        menu.removeClass('over');
        $(this).addClass('over');        
        // 해당 sub메뉴 보이기
        sub.removeClass('on'); 
        $(this).find('>ul').addClass('on');
    })
    //주메뉴에 마우스 내리면 
    menu.on('mouseleave keydown',function(){
        menu.removeClass('over');
        sub.removeClass('on');
    })
    //2차 메뉴에 마우스 올리면 해당 3차 메뉴 보이기 
    subMenu.on('mouseover keyup',function(){
        // 해당 2차메뉴 활성화
        subMenu.removeClass('over');
        $(this).addClass('over');
        // 해당 3차 메뉴 보이기
        subMenu.removeClass('on');
        $(this).find('>ul').addClass('on');
    })
    // 2차 메뉴에서 마우스 내리면
    subMenu.on('mouseleave keydown',function(){
        subMenu.removeClass('over');
        subMenu3.removeCloass('on');
    })
    
})