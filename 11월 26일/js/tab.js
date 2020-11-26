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
    }).mouseover(function(){ //마우스 오버하면
       $(this).addClass('mouseover');
    }).mouseout(function(){ //마우스 아웃하면
       $(this).removeClass('mouseover');   
    })

     //boxBody안의 li에 마우스 올리면 배경색 변경하기 
     $('#boxBody li').mouseover(function(){
         $(this).css('backgroundColor','#888');
     }).mouseout(function(){
         $(this).css('backgroundColor','');
     }).click(function(){
        //  window.location = $(this).attr('title');
        // 새창
        var link = $(this).attr('title');
        window.open(link);
     })


})