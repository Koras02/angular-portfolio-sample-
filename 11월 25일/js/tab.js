$(function(){
    //tab menu 첫번째 선택되어져 있게 
     $('#tabMenu>li').eq(0).addClass('selected');

    //boxBody안 첫번째 div 보이게 하기 
    $('#boxBody div:eq(0)').show();

    //tab 메뉴 클릭하면 
    $('#tabMenu>li').click(function(){
        // 메뉴활성화
        $('#tbaMenu>li').removeClass('selected');
        $(this).addClass('selected');

    // 해당 내용 보이기 
       $('#boxBody div').slidUp(500);
       var n = $(this).index();
       $('#boxBody div:eq('+n+')').slideDown(500);
    })

    //tab 메뉴 마우스 오버하면 메뉴 활성화하기 
    $('#tabMenu>li').mouseover(function(){~
        $(this).addClass('mouseover');
    })
    $('#tabMenu>li').mouseout(function(){
        $(this).removeClass('mouseover');
    })
})