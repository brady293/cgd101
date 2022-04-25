//卡片浮出
$(function(){
    $('.Card').mousemove(function(e){
        let theText = $(this).attr('data-text');
        $('#text').text(theText).show().css({
            left:e.clientX - 140,
            top:e.clientY + 20,
        })
    }).mouseout(function(){
        $('#text').hide();
    })
});
//faq收合
    $(document).ready(function(){
        $('.text1').hide();
        $('.controller1').click(function(){
            $('.text1').slideToggle();
        })
        $('.text2').hide();
        $('.controller2').click(function(){
            $('.text2').slideToggle();
        })
        $('.text3').hide();
        $('.controller3').click(function(){
            $('.text3').slideToggle();
        })
        $('.text4').hide();
        $('.controller4').click(function(){
            $('.text4').slideToggle();
        })
        $('.text5').hide();
        $('.controller5').click(function(){
            $('.text5').slideToggle();
        })
        $('.text6 ').hide();
        $('.controller6').click(function(){
            $('.text6').slideToggle();
        })

    })