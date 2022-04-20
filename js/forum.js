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