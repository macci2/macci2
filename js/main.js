/**
 * Created by Administrator on 2016-09-04.
 */


$(document).ready(function () {

    var scene = document.getElementById('section01');
    var parallax = new Parallax(scene);


    $('#btn').on('click', function () {
        $('#gnb').addClass('on');
    });


    $('#gnb .btnon').on('click', function () {
        $('#gnb').removeClass('on');
    });


    $('.hover_img').mouseenter(function () {
        $(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '_on.png'));
    });
    $('.hover_img').mouseleave(function () {
        $(this).children('img').attr('src', $(this).children('img').attr('src').replace('_on.png', '.png'));
    });


    $('.hover_a_img,.navlist>li').mouseenter(function () {
        $(this).children().children('img').attr('src', $(this).children().children('img').attr('src').replace('.png', '_on.png'));
    });
    $('.hover_a_img,.navlist>li').mouseleave(function () {
        $(this).children().children('img').attr('src', $(this).children().children('img').attr('src').replace('_on.png', '.png'));
    });


    //scene02 pop event
    $('#section02 .MainTitle .MainBtn').on('click', function () {
        $('.sc_02_pop').fadeIn();
    });


    //scene03 pop event
    $('#section03 .character1').on('click', function () {
        $('.sc_03_pop1').fadeIn(function(){
            $('.sc_03_pop1 .chat_content ul li:nth-child(1)').addClass('on');
            $('.sc_03_pop1 .chat_txt > div:nth-child(1)').addClass('on');
        });
    });
    $('#section03 .character2').on('click', function () {
        $('.sc_03_pop2').fadeIn(function(){
            $('.sc_03_pop2 .chat_content ul li:nth-child(1)').addClass('on');
            $('.sc_03_pop2 .chat_txt > div:nth-child(1)').addClass('on');
        });
    });
    $('#section03 .character3').on('click', function () {
        $('.sc_03_pop3').fadeIn();
    });
    $('#section03 .character4').on('click', function () {
        $('.sc_03_pop4').fadeIn();
    });


    $('.pop .bg').on('click', function () {
        $('.pop').fadeOut();
        $('.chat_content ul li').removeClass('on');
        $('.chat_txt > div').removeClass('on');

    });





    // secene03 pop chat event
    $('.sc_03_pop1 .chat_txt').on('click',function(){
        if ($('.sc_03_pop1 .chat_content ul li:nth-child(5)').hasClass('on')) {//li 5번에게 on이 걸렸을 때
            $('.sc_03_pop1 .chat_content ul li:nth-child(6)').addClass('on');
            $('.sc_03_pop1 .chat_txt > div').removeClass('on');
        } else if ($('.sc_03_pop1 .chat_content ul li:nth-child(4)').hasClass('on')) {//li 4번에게 on이 걸렸을 때
            $('.sc_03_pop1 .chat_content ul li:nth-child(5)').addClass('on');
            $('.sc_03_pop1 .chat_txt > div').removeClass('on');
            $('.sc_03_pop1 .chat_txt > div:nth-child(3)').addClass('on');

        } else if ($('.sc_03_pop1 .chat_txt > div:nth-child(1)').hasClass('on')) {//li 1번에게 on이 걸렸을 때
            $('.sc_03_pop1 .chat_txt > div:nth-child(1)').addClass('on');
            $('.sc_03_pop1 .chat_content ul li:nth-child(2)').addClass('on');
            $('.sc_03_pop1 .chat_content ul li:nth-child(3)').addClass('on');
            $('.sc_03_pop1 .chat_content ul li:nth-child(4)').addClass('on');
            $('.sc_03_pop1 .chat_txt > div').removeClass('on');
            $('.sc_03_pop1 .chat_txt > div:nth-child(2)').addClass('on');
        }
    });

    $('.sc_03_pop2 .chat_txt').on('click',function(){
        if ($('.sc_03_pop2 .chat_content ul li:nth-child(5)').hasClass('on')) {//li 5번에게 on이 걸렸을 때
            $('.sc_03_pop2 .chat_content ul li:nth-child(6)').addClass('on');
            $('.sc_03_pop2 .chat_txt > div').removeClass('on');
        } else if ($('.sc_03_pop2 .chat_content ul li:nth-child(3)').hasClass('on')) {//li 4번에게 on이 걸렸을 때
            $('.sc_03_pop2 .chat_content ul li:nth-child(4)').addClass('on');
            $('.sc_03_pop2 .chat_content ul li:nth-child(5)').addClass('on');
            $('.sc_03_pop2 .chat_txt > div').removeClass('on');
            $('.sc_03_pop2 .chat_txt > div:nth-child(3)').addClass('on');

        } else if ($('.sc_03_pop2 .chat_txt > div:nth-child(1)').hasClass('on')) {//li 1번에게 on이 걸렸을 때
            $('.sc_03_pop2 .chat_txt > div:nth-child(1)').addClass('on');
            $('.sc_03_pop2 .chat_content ul li:nth-child(2)').addClass('on');
            $('.sc_03_pop2 .chat_content ul li:nth-child(3)').addClass('on');
            // $('.sc_03_pop2 .chat_content ul li:nth-child(4)').addClass('on');
            $('.sc_03_pop2 .chat_txt > div').removeClass('on');
            $('.sc_03_pop2 .chat_txt > div:nth-child(2)').addClass('on');
        }
    });

    // secene03 pop chat event
    $('.sc_03_pop4 .chat_txt').on('click',function(){
        if ($('.sc_03_pop4 .chat_content ul li:nth-child(5)').hasClass('on')) {//li 5번에게 on이 걸렸을 때
            $('.sc_03_pop4 .chat_content ul li:nth-child(6)').addClass('on');
            $('.sc_03_pop4 .chat_txt > div').removeClass('on');
        } else if ($('.sc_03_pop4 .chat_content ul li:nth-child(4)').hasClass('on')) {//li 4번에게 on이 걸렸을 때
            $('.sc_03_pop4 .chat_content ul li:nth-child(5)').addClass('on');
            $('.sc_03_pop4 .chat_txt > div').removeClass('on');
            $('.sc_03_pop4 .chat_txt > div:nth-child(3)').addClass('on');

        } else if ($('.sc_03_pop4 .chat_txt > div:nth-child(1)').hasClass('on')) {//li 1번에게 on이 걸렸을 때
            $('.sc_03_pop4 .chat_txt > div:nth-child(1)').addClass('on');
            $('.sc_03_pop4 .chat_content ul li:nth-child(2)').addClass('on');
            $('.sc_03_pop4 .chat_content ul li:nth-child(3)').addClass('on');
            $('.sc_03_pop4 .chat_content ul li:nth-child(4)').addClass('on');
            $('.sc_03_pop4 .chat_txt > div').removeClass('on');
            $('.sc_03_pop4 .chat_txt > div:nth-child(2)').addClass('on');
        }
    });





    //scene04 event
    $('#section04 .video_list_pop').on('mouseenter', function () {
        $('#section04 .video_list').addClass('on');
    });

    $('.video_list').on('mouseleave', function () {
        $('#section04 .video_list').removeClass('on');
    });


    $('#video_slides').slidesjs({
        width:1920,
        height:1080,
        play: {
            active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
            interval: 3000, // 대기시간, 1000=1초,
            effect: "slide", // 효과, slide/fade
            auto: false, // 자동시작
            pauseOnHover: false, // 마우스 오버시 멈춤
            restartDelay: 2500 // 마우스 아웃시 재동작 시간
        },
        navigation: {// 이전/다음 버튼
            active: true, // 버튼 활성화/비활성화
            effect: "slide"
        },
        pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
            active: false,
            effect: "slide"
        },
        effect: { // 효과 옵션
            fade: {
                speed: 800
            },
            slide: {
                speed: 1600
            }
        }
    });


    $('#fullpage').fullpage({

        anchors: ['Page01', 'Page02', 'Page03', 'Page04', 'Page05'],

        navigation: true,
        navigationTooltips: ['Page01', 'Page02', 'Page03', 'Page04', 'Page05'],

        afterLoad: function (anchorLink, index) {

            if ((index == 1)) {
                $('#btn').css('display', 'none');
            } else {
                $('#btn').css('display', 'block');
            }

            if ((index == 1) || (index == 4)) {
                $('.share').css('display', 'none');
            } else {
                $('.share').css('display', 'block');
            }

            if (index == 2) {
                $('#section02 .MainTitle .Title').addClass('on');
                $('#section02 .MainTitle .TitleSub').addClass('on');
                 $('#section02 .bg').fadeOut(500);
            } else {
                $('#section02 .MainTitle .Title').removeClass('on');
                $('#section03 .bg').fadeIn(100);
            }

            if (index == 3) {
                $('#section03 .bg').fadeOut(1000);
            } else {
                $('#section03 .bg').fadeIn(300);
            }

            if (index == 4) {
                $('#section04 .bg').fadeOut(500);
            } else {
                $('#section04 .bg').fadeIn(100);
            }
        }

    });

});