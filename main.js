$(function(){

        $("a.btn").click(function() {
          var elementClick = $(this).attr("href")
          var destination = $(elementClick).offset().top;
          jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
          }, 800);
          return false;
        });
        $("a.arrow").click(function() {
            var elementClick = $(this).attr("href")
            var destination = $(elementClick).offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({
              scrollTop: destination
            }, 800);
            return false;
          });
            $('a.call-btn').click( function(event){
              event.preventDefault();
              $('#myOverlay').fadeIn(297,	function(){
                $('#myModal') 
                .css('display', 'block')
                .animate({opacity: 1}, 198);
              });
            });
          
            $('#myModal__close, #myOverlay').click( function(){
              $('#myModal').animate({opacity: 0}, 198, function(){
                $(this).css('display', 'none');
                $('#myOverlay').fadeOut(297);
              });
            });

            $(window).scroll(function() {
                $('.destinations').each(function(){
                    var imagePos = $(this).offset().top;
        
                    var topOfWindow = $(window).scrollTop();
                    if (imagePos < topOfWindow+650) {
                        $(this).addClass("fadeInLeft");
                    }
                });
            });
            $('.btn-routes').click(function (e) {
              e.preventDefault();
              $('.destinations-more').toggleClass('destinations-visible')
            });
    });