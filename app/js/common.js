$(function() {

   // Horizontal scroll
   $("body").mousewheel(function(e, delta) {
      this.scrollLeft -= (delta * 5);
      //    e.preventDefault();
    });

   //  Mobile hover = click
    $('.gallery__project').bind('touchstart mouseenter', '.link', function (e) {
         $(this).addClass('gallery__project--hover');
         if (e.type == 'click') {
            e.preventDefault();
            // e.preventDefault ? e.preventDefault() : e.returnValue = false;
         }
      });

   $('.gallery__project').bind('mouseleave touchmove click', '.link', function (e) {
      $(this).removeClass('gallery__project--hover');
      // e.preventDefault();

      if (e.type == 'click') {
         // e.preventDefault ? e.preventDefault() : e.returnValue = false;
      }
   });

   //  $('.gallery__project').bind('touchstart mouseenter', '.link', function (e) {
   //       $(this).addClass('gallery__project--hover');
   //    });

   // $('.gallery__project').bind('mouseleave touchmove click', '.link', function (e) {
   //    $(this).removeClass('gallery__project--hover');

   //    if (e.type == 'click') {
   //       e.preventDefault ? e.preventDefault() : e.returnValue = false;
   //    }
   // });

 });
