/**
 * Created by Administrator on 2016-09-04.
 */


$(document).ready(function () {

    var scene = document.getElementById('section01');
    var parallax = new Parallax(scene);

    var scene = document.getElementById('sc_02_pop');
    var parallax = new Parallax(scene);

    var w_height = $(window).height();
    var w_width = $(window).width();

    // alert(height);
    // alert(width);


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


    // gnb slide event
    $('#gnb .promocontent').slidesjs({
        width:240,
        height:100,
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

    $('#gnb .Promo-controls .promo_arrow_r').on('click',function(){
        $('#gnb .promocontent .slidesjs-previous').trigger('click');
    });

    $('#gnb .Promo-controls .promo_arrow_l').on('click',function(){
        $('#gnb .promocontent .slidesjs-next').trigger('click');
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
        $('.sc_03_pop3').fadeIn(function(){
            $('.sc_03_pop3 .chat_content ul li:nth-child(1)').addClass('on');
            $('.sc_03_pop3 .chat_txt > div:nth-child(1)').addClass('on');
        });
    });
    $('#section03 .character4').on('click', function () {
        $('.sc_03_pop4').fadeIn(function(){
            $('.sc_03_pop4 .chat_content ul li:nth-child(1)').addClass('on');
            $('.sc_03_pop4 .chat_txt > div:nth-child(1)').addClass('on');
        });
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
    $('.sc_03_pop3 .chat_txt').on('click',function(){
        if ($('.sc_03_pop3 .chat_content ul li:nth-child(5)').hasClass('on')) {//li 5번에게 on이 걸렸을 때
            $('.sc_03_pop3 .chat_content ul li:nth-child(6)').addClass('on');
            $('.sc_03_pop3 .chat_txt > div').removeClass('on');
        } else if ($('.sc_03_pop3 .chat_content ul li:nth-child(4)').hasClass('on')) {//li 4번에게 on이 걸렸을 때
            $('.sc_03_pop3 .chat_content ul li:nth-child(5)').addClass('on');
            $('.sc_03_pop3 .chat_txt > div').removeClass('on');
            $('.sc_03_pop3 .chat_txt > div:nth-child(3)').addClass('on');

        } else if ($('.sc_03_pop3 .chat_txt > div:nth-child(1)').hasClass('on')) {//li 1번에게 on이 걸렸을 때
            $('.sc_03_pop3 .chat_txt > div:nth-child(1)').addClass('on');
            $('.sc_03_pop3 .chat_content ul li:nth-child(2)').addClass('on');
            $('.sc_03_pop3 .chat_content ul li:nth-child(3)').addClass('on');
            $('.sc_03_pop3 .chat_content ul li:nth-child(4)').addClass('on');
            $('.sc_03_pop3 .chat_txt > div').removeClass('on');
            $('.sc_03_pop3 .chat_txt > div:nth-child(2)').addClass('on');
        }
    });

    // secene04 pop chat event
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

   // $('#section04').vide('music/Coco_Final_Trailer'); // Non declarative initialization

   // var instance = $('#section04').data('vide'); // Get the instance
   // var video = instance.getVideoObject(); // Get the video object
   // instance.destroy(); // Destroy instance

   // $('#section04').vide({
   //   'mp4': 'music/Coco_Final_Trailer',
   //   'webm': 'music/Coco_Final_Trailer',
   //   'ogv': 'music/Coco_Final_Trailer',
   //   'poster': 'music/Coco_Final_Trailer'
   // });

   $('.play_btn_on').click(function(e){
        var video = $('#section04 video');
        var video_instance = $('#section04 video')[0];

        if (video_instance.paused == true) {
            video_instance.play();
            $('.video_player_progress img').attr('src', 'img/play_btn_off.png');
        } else {
            video_instance.pause();
            $('.video_player_progress img').attr('src', 'img/play_btn.png');
        }

        //get HTML5 video time duration
        video.on('loadedmetadata', function() {
            $('.duration').text(video[0].duration);
        });
         
        //update HTML5 video current play time
        video.on('timeupdate', function() {
            var currentPos = video[0].currentTime; //Get currenttime
            var maxduration = video[0].duration; //Get video duration
            var percentage = 100 * currentPos / maxduration; //in %
            $('.timeBar').css('width', percentage+'%');
        });
   });

   $('.video_next img').click(function(){
        var instance = $('#section04').data('vide')
        instance.destroy();

        if (instance.path == 'music/coco_final_trailer') {
            $('#section04').vide({
                'mp4': 'music/coco_trailer',
            });
        } else {
            $('#section04').vide({
                'mp4': 'music/coco_final_trailer',
            });            
        }

        var video_instance = $('#section04 video');

        //get HTML5 video time duration
        video_instance.on('loadedmetadata', function() {
            $('.duration').text(video_instance[0].duration);
        });
         
        //update HTML5 video current play time
        video_instance.on('timeupdate', function() {
            var currentPos = video_instance[0].currentTime; //Get currenttime
            var maxduration = video_instance[0].duration; //Get video duration
            var percentage = 100 * currentPos / maxduration; //in %
            $('.timeBar').css('width', percentage+'%');
        });
   });


    // $('#video_slides').slidesjs({
    //     width: $(window).width(),
    //     height: $(window).height(),
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
    //         active: true,
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

    // $('선택자').on('click',function(){
    //     $('#video_slides .slidesjs-previous').trigger('click');
    // var slide_video01 = document.getElementById('slide_video01');
    // var slide_video02 = document.getElementById('slide_video02');
    // var slide_video03 = document.getElementById('slide_video03');
    // slide_video01.pause();
    // slide_video02.pause();
    // slide_video03.pause();
    // });
    //
    // $('선택자').on('click',function(){
    //     $('#video_slides .slidesjs-next').trigger('click');
    // var slide_video01 = document.getElementById('slide_video01');
    // var slide_video02 = document.getElementById('slide_video02');
    // var slide_video03 = document.getElementById('slide_video03');
    // slide_video01.pause();
    // slide_video02.pause();
    // slide_video03.pause();
    // });
    //


    // $('#section04 .video_player_progress').on('click',function(){

    //     $(this).toggleClass('on');

    //     var slide_video01 = document.getElementById('slide_video01');
    //     var slide_video02 = document.getElementById('slide_video02');
    //     var slide_video03 = document.getElementById('slide_video03');

    //     if ($('#video_slides .slidesjs-pagination>li:nth-child(1) a').hasClass('active')){
    //         slide_video01.play();
    //     } else if ($('#video_slides .slidesjs-pagination>li:nth-child(2) a').hasClass('active')){
    //         slide_video02.play();
    //     } else if ($('#video_slides .slidesjs-pagination>li:nth-child(3) a').hasClass('active')){
    //         slide_video03.play();
    //     }

    // });









    $('#fullpage').fullpage({

        anchors: ['Page01', 'Page02', 'Page03', 'Page04', 'Page05'],

        navigation: true,
        // navigationTooltips: ['Page01', 'Page02', 'Page03', 'Page04', 'Page05'],

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
                $('#section02').vide('img/coco_background');
                $('#section02 .MainTitle .Title').addClass('on');
                $('#section02 .MainTitle .TitleSub').addClass('on');
                $('#section02 .bg').fadeOut(500);
                $('.search').keypress(function(event) {
                    if (event.which == 13) {
                        $('html,body').animate({scrollTop: $('#section03').offset().top},'slow');
                        $('#sc_02_pop').css('display', 'none');
                        setTimeout(function(){
                            $('#section03 .bg').fadeOut(1000);                            
                        }, 1500);
                    }
                });
            } else {
                $('#section02 .MainTitle .Title').removeClass('on');
                $('#section03 .bg').fadeIn(100);
            }

            if (index == 3) {
                setTimeout(function(){
                    $('#section03 .bg').fadeOut(700);
                }, 1500);
            } else {
                $('#section03 .bg').fadeIn(300);
            }

            if (index == 4) {
                setTimeout(function(){
                    $('#section04 .bg').fadeOut(700);
                    $('#section04').vide('music/coco_trailer');

                    var video_instance = $('#section04 video');

                    //get HTML5 video time duration
                    video_instance.on('loadedmetadata', function() {
                        $('.duration').text(video_instance[0].duration);
                    });
                     
                    //update HTML5 video current play time
                    video_instance.on('timeupdate', function() {
                        var currentPos = video_instance[0].currentTime; //Get currenttime
                        var maxduration = video_instance[0].duration; //Get video duration
                        var percentage = 100 * currentPos / maxduration; //in %
                        $('.timeBar').css('width', percentage+'%');
                    });

                }, 1500);
            } else {
                $('#section04 .bg').fadeIn(300);
            }

            if (index == 5) {
                setTimeout(function(){
                    $('#section05 .bg').fadeOut(700);
                }, 1500);
            } else {
                $('#section05 .bg').fadeIn(300);
            }
        }

    });

    var timeDrag = false;   /* Drag status */
    $('.progressBar').mousedown(function(e) {
        timeDrag = true;
        updatebar(e.pageX);
    });
    $(document).mouseup(function(e) {
        if(timeDrag) {
            timeDrag = false;
            updatebar(e.pageX);
        }
    });
    $(document).mousemove(function(e) {
        if(timeDrag) {
            updatebar(e.pageX);
        }
    });
     
    //update Progress Bar control
    var updatebar = function(x) {
        var video = $('#section04 video');
        var progress = $('#progressBar');
        var maxduration = video[0].duration; //Video duraiton
        var position = x - progress.offset().left; //Click pos
        var percentage = 100 * position / progress.width();
     
        //Check within range
        if(percentage > 100) {
            percentage = 100;
        }
        if(percentage < 0) {
            percentage = 0;
        }
     
        //Update progress bar and video currenttime
        $('.timeBar').css('width', percentage+'%');
        video[0].currentTime = maxduration * percentage / 100;
    };

});