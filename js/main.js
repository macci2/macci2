/**
 * Created by Administrator on 2016-09-04.
 */


$(document).ready(function() {

    var scene = document.getElementById('section01');
    var parallax = new Parallax(scene);


    $('#btn').on('click',function(){
       $('#gnb').addClass('on');
    });


    $('#gnb .btnon').on('click',function(){
        $('#gnb').removeClass('on');
    });


    $('.hover_img').mouseenter(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('.png','_on.png'));
    });
    $('.hover_img').mouseleave(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('_on.png','.png'));
    });


    $('.hover_a_img,.navlist>li').mouseenter(function(){
        $(this).children().children('img').attr('src',$(this).children().children('img').attr('src').replace('.png','_on.png'));
    });
    $('.hover_a_img,.navlist>li').mouseleave(function(){
        $(this).children().children('img').attr('src',$(this).children().children('img').attr('src').replace('_on.png','.png'));
    });


    //scene02 pop event
    $('#section02 .MainTitle .MainBtn').on('click',function(){
        $('.sc_02_pop').fadeIn();
    });


    //scene03 pop event
    $('#section03 .character1').on('click',function(){
        $('.sc_03_pop1').fadeIn();
    });
    $('#section03 .character2').on('click',function(){
        $('.sc_03_pop2').fadeIn();
    });






    $('.pop .bg').on('click',function(){
        $('.pop').fadeOut();
    });


    //scene04 event
    $('#section04 .video_list_pop').on('mouseenter',function(){
        $('#section04 .video_list').addClass('on');
    });

    $('.video_list').on('mouseleave',function(){
        $('#section04 .video_list').removeClass('on');
    });



    // $('#video_slides').slidesjs({
    //     width:1920,
    //     height:1080,
    //     play: {
    //         active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
    //         interval: 3000, // 대기시간, 1000=1초,
    //         effect: "slide", // 효과, slide/fade
    //         auto: false, // 자동시작
    //         pauseOnHover: false, // 마우스 오버시 멈춤
    //         restartDelay: 2500 // 마우스 아웃시 재동작 시간
    //     },
    //     navigation: {// 이전/다음 버튼
    //         active: true, // 버튼 활성화/비활성화
    //         effect: "slide"
    //     },
    //     pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
    //         active: false,
    //         effect: "slide"
    //     },
    //     effect: { // 효과 옵션
    //         fade: {
    //             speed: 800
    //         },
    //         slide: {
    //             speed: 1600
    //         }
    //     }
    // });
















    $('#fullpage').fullpage({

        anchors: ['Page01', 'Page02', 'Page03', 'Page04', 'Page05'],

        navigation: true,
        navigationTooltips: ['Page01', 'Page02', 'Page03', 'Page04', 'Page05'],

        afterLoad: function(anchorLink, index){

            if ((index == 1) || (index == 4)) {
                $('.share').css('display', 'none');
            } else {
                $('.share').css('display', 'block');
            }

            if (index == 2) {
                $('#section02 .MainTitle .Title').addClass('on');
            } else {
                $('#section02 .MainTitle .Title').removeClass('on');
            }

        }

    });



});