;(function($){

    var litho = {
        init:function(){
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
            this.section9Fn();
            this.section10Fn();
            this.footerFn();

        },
        headerFn:function(){
            //네비게이션
            //메인버튼(메뉴) - 2 Depth
            //서브메뉴 - 2 Depth
            var $mainBtn = $('.main-btn');
            var $sub = $('.sub');
            var $navUlLi = $('#nav>ul>li');

            //메인메뉴에 마우스 오버시 해당 서브메뉴 보여라
            $mainBtn.on({
                mouseenter:function(){
                    $(this).next().stop().show();
                }
            });
            //메인메뉴와 서브메뉴 영역(li)을 마우스가 떠나면 해당 서브메뉴 숨겨라(hide) 
            $navUlLi.on({
                mouseleave:function(){
                    $sub.stop().hide();
                }
            });
                    

            //서브-서브 메뉴 - 3 Depth
            // 서브메뉴버튼에 마우스 오버시 서브서브메뉴 보여라
            var $subBtn = $('.sub-btn');
            var $subSub = $('.sub-sub');
            var $navUlLi = $('#nav>ul>li');

                $subBtn.on({
                    mouseenter:function(){
                        $subSub.stop().hide();
                        $(this).next().stop().show();
                    }
                });

                $navUlLi.on({
                    mouseleave:function(){
                    $subSub.stop().hide();
                    }
                });


        },
        section1Fn:function(){
          
            //창높이 창너비
            //슬라이드의 너비와 높이를 창높이 창너비로 설정한다 반응형 새로고침을 눌러야 실행됨
            var $slide = $('#section1 .slide'); //로딩시 변수 설정
            var $window = $(window);            //로딩시 변수 설정

            var $winW = $(window).width(); //창너비 즉시 반환
            var $winH = $(window).height(); //창높이 즉시 반환

            //슬라이드의 너비 높이 설정 완료
            //로딩시 설정
                function resizefn(){
                    $winW   = $(window).width();
                    $winH   = $(window).height();
                    $slide.css({width:$winW, height: $winH}); //즉시 변환 너비 높이 적용 실행

                }
                
                resizefn(); //로딩시 실행
            //화면의 크기가 (너비와 높이) 1픽셀만 변경되어도 동작되는 반응형 메서드
            //  $window.resize();
            //  $window.resize(fuction(){});
            $window.resize(function(){
                //슬라이드의 너비 높이 설정 완료
                resizefn();
            });
           

        },
        section2Fn:function(){
           
        },
        section3Fn:function(){
           
        },
        section4Fn:function(){

        },
        section5Fn:function(){
            console.log('section5Fn');
        },
        section6Fn:function(){
            console.log('section6Fn');
        },
        section7Fn:function(){
            console.log('section7Fn');
        },
        section8Fn:function(){
            console.log('section8Fn');
        },
        section9Fn:function(){
            console.log('section9Fn');
        },
        section10Fn:function(){
            console.log('section10Fn');
        },
        footerFn:function(){
            console.log('footerFn');
        },


    }

    litho.init();

}) (jQuery);
