$(function() {
   $("body").mousewheel(function(event, delta) {
      this.scrollLeft -= (delta * 5);
      //    event.preventDefault();
    });
 });