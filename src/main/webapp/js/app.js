(function(global, document) {
    // use $ for Polymer, global for window
    window.onload = console.log('Hello');
    var app = document.querySelector('#app');
     $(document).ready(function() {
         document.ontouchmove = function(e){
              e.preventDefault();
              
              }
     });
}(window, document));

(function($){
    $(function(){
        // Run on DOM ready
        var app = document.querySelector('#app');

        const billFunction = function(){
            var b = app.querySelector('#mainContainer');
            b.newBill();
        }
    });

   // Run right away
})(jQuery);