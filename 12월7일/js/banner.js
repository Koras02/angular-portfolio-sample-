var num = 0; //배너 이미지 전체 개수
var w = 0; //배너 이미지 가로 크기
var currentIndex = 0; //현재 보이는 배너 index값
var autoTimer; // 자동 재생 변수


$(function(){
   init();  //배너 크기 설정 
   initEvent(); //이벤트 실행
   bannerBtn(0); // 첫번째 배너버튼 활성화 
   startAutoPlay(); // 자동재생

})

//이벤트 처리 함수
function initEvent(){
    //배너 버튼에 마우스 올리면 해당 배너 슬라이드되어 보이기
    $('.banner_btn ul li a').on('mouseenter',function(){
        var i = $(this).parent().index();
        slide(i);
    });
    //배너에 마우스 올리면 자동실행 멈춤
    $('.banner_slider').on('mouseenter',function(){
        stopAutoPlay();
    })
    //배너에 마우스 내리면 자동실행
    $('.banner_slider').on('mouseleave',function(){
        startAutoPlay();
    })
}

//배너 크기 설정 함수
function init(){
    w = $('.imgBox').children('img').width();
    num = $('.imgBox').children('img').length;
    $('.imgBox').width(w*num);
}

//배너 슬라이드
function slide(n){
  if(n != currentIndex){
     var nPosition = -w * n;
     $('.imgBox').stop().animate({left:nPosition},500);
     //해당 배너 버튼 활성화
     bannerBtn(n);
     currentIndex = n;
  }
}

// 배너 버튼 활성화
function bannerBtn(n){
   $('.banner_btn ul li').eq(currentIndex).children('a').removeClass('select');
   $('.banner_btn ul li').eq(n).children('a').addClass('select');
}

// 자동 재생 
function startAutoPlay(){
    autoTimer = setInterval('nextBanner()',2000);
}
//슬라이드 넘어가는 함수 
function nextBanner(){
    var nIndex = currentIndex + 1;
    if(nIndex >= num){
        nIndex = 0;
    }
    slide(nIndex); 
}
//자동 재생 멈춤
function stopAutoplay(){
    clearInterval(autoTimer);
}