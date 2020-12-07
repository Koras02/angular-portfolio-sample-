$(function(){
  
   $('.page-header').each(function(){

    var $window = $(window); //window객체를 변수에 담기
    var $header = $(this); //$('.page-header')를 변수에 담기
    var headerTop = $header.offset().top;


    $window.on('scroll',function(){
       //스크롤바의 top위치가 headerTop보다 아래로 넘어가면
        if($window.scrollTop()>headerTop){
             $header.addClass('sticky');
        }else{
             $header.removeClass('sticky');
        }
    })
      $window.trigger('scroll');
   })
})

/* 
$('selector').each(function){
    실행코드;
})
--> $('selector')를 찾은 후 $('selector')에게 실행코드를 적용한다는 
의미

*/ 