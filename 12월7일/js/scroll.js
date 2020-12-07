$(function(){
    var menu = $('#menuBox ul>li>a');
    var section = $('#contents>div');
    $('#menuBox ul>li:nth-child(1)>a').addClass('on');
    $('html,body').animate({scrollTop:0},300);

    menu.click(function(){
        //메뉴 활성화
        menu.removeClass('on');  
        $(this).addClass('on');   
        //해당 위치로 이동하기 
        var n = $(this).parent().index();
        var topPosition = section.eq(n).offset().top
        $('html,body').animate({scrollTop:topPosition},800);
         
        return false;
    })

    //스크롤 움직임에 따른 메뉴 활성화 작동
    $(window).scroll(function(){
        var sct = $(window).scrollTop(); 

        section.each(function(){
            var tg = $(this);
            var i = tg.index(); 
            if(tg.offset().top <= sct){
                menu.removeClass('on');
                menu.eq(i).addClass('on');
            }
        })
    })

})