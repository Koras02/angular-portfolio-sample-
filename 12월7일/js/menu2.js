$(function(){
  
   $('.page-header').each(function(){

    var $window = $(window); //window객체를 변수에 담기
    var $header = $(this); //$('.page-header')를 변수에 담기
   //$('.page-header')안에 내용물 ㅈ복제
    var $headerClone = $header.contents().clone();
    var $headerCloneBox = $('<div class="page-header-clone"></div>');

    $headerCloneBox.append($headerClone);  
   //  body에 div.page-header-clone을 맨뒤에 추가하기 
    $headerCloneBox.appendTo('body');

    var h = $header.offset().top + $header.outerHeight();

    $window.on('scroll',function(){
       //스크롤바의 top위치가 headerTop보다 아래로 내려가면
        if($window.scrollTop()>h){
             $headerCloneBox.addClass('visible');
        }else{
             $headerCloneBox.removeClass('visible');
        }
    })
      $window.trigger('scroll');
   })
})