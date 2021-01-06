$('input[type=checkbox]').change(function(){
  //$('.title').css('color','black')
  if($('input[type=checkbox]').prop( "checked" ) == true){

    $('.title').css('color','black')
    $('div.desc-title').addClass('text-black').removeClass('text-white');
    $('body').css('background-color','#ffffff')
    $('button').addClass('btn-outline-dark').removeClass('btn-outline-light');
    $('label.form-check-label').addClass('text-black').removeClass('text-white');
    $('.icons').css({"color":"black","border":"2px solid black"});
    $('.title-ack').addClass('text-black').removeClass('text-white');
    $('.ack-page-list').css('border','2px solid black')
    $('.company').css('color','black')
    $('img.chatwork').attr('src','chatwork-b.png')
    $('img.replit').attr('src','replit.svg')

  }if($('input[type=checkbox]').prop( "checked" ) == false){
    $('.title').css('color','#48dbfb')
    $('div.desc-title').addClass('text-white').removeClass('text-black');
    $('body').css('background-color','#222f3e')
    $('button').addClass('btn-outline-light').removeClass('btn-outline-dark');
    $('label.form-check-label').addClass('text-white').removeClass('text-black');
    $('.icons').css({"color":"white","border":"2px solid white"});
    $('.title-ack').addClass('text-white').removeClass('text-black');
    $('.ack-page-list').css('border','2px solid white')
    $('.company').css('color','white')
    $('img.chatwork').attr('src','chatwork.png')
    $('img.replit').attr('src','replit.png')
  }
})

$('.btn-ack').click(function(){
    $.when($('.page-home').fadeOut(1000)).done(function(){
      $('.page-ack').fadeIn(1000)
    })
})