(function(global, document) {
    // use $ for Polymer, global for window
    window.onload = console.log('Hello');
    var app = document.querySelector('#app');
    var addStringButton = app.querySelector('#addString');
    var addUserButton = app.querySelector('#addUser');
    var clearButton = app.querySelector('#clearButton');
    var userTemplate = app.querySelector('#mainContainer');
    $(addStringButton).click(function(){
        console.log("add bill");
        var newUserDialog = app.querySelector('new-string-dialog');
        newUserDialog.open();
    });
    $(addUserButton).click(function(){
        console.log("add User");
        var newUserDialog = app.querySelector('new-user-dialog');
        newUserDialog.open();
    });
    $(clearButton).click(function(){
        console.log("Clear local storage");
        localStorage.clear();
        userTemplate.ready();
    });

//    var addButton = app.querySelector('#addButton');
//    var removeButton = app.querySelector('#removeButton');
//    addButton.onclick = function(){
//        console.log('Add Button');
//        var newUserDialog = document.querySelectorAll('#app')[0].querySelectorAll('new-user-dialog')[0];
////        newUserDialog.open();
//        var box = app.querySelector('main-container').shadowRoot.querySelector('#sliding');
//        $(box).slideDown();
//    }
//    removeButton.onclick = function(){
//        console.log('Remove Button');
//        var removeUserDialog = document.querySelector('#app').querySelector('users-to-remove-dialog');
//        removeUserDialog.open();
//    }
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
        var addButton = app.querySelector('#addButton');
        var addStringButton = app.querySelector('#addString');
        var addUserButton = app.querySelector('#addUser');

        const billFunction = function(){
            var b = app.querySelector('#mainContainer');
            b.newBill();
        }

        $(addButton).click(function(){
            var box = app.querySelector('#sliding');
            $(box).slideToggle('fast');
        });
    });

   // Run right away
})(jQuery);