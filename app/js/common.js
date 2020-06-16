$(function() {

   // Horizontal scroll
   $("body").mousewheel(function(e, delta) {
      this.scrollLeft -= (delta * 5);
      //    e.preventDefault();
    });

    // Not needed, but left commented just in case
   // //  Mobile hover = click
   // $('.gallery__project').bind('touchstart mouseenter', '.link', function (e) {
   //    $(this).addClass('gallery__project--hover');
   //    if (e.type == 'click') {
   //       e.preventDefault();
   //    }
   // });

   // $('.gallery__project').bind('mouseleave touchmove click', '.link', function (e) {
   //    $(this).removeClass('gallery__project--hover');
   // });

   // if (e.type == 'click') {
   //    // e.preventDefault ? e.preventDefault() : e.returnValue = false;
   // }

 });
