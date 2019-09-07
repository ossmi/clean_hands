

document.addEventListener("DOMContentLoaded", function() {
    var nav = document.querySelector('.nav');

    function showScrollMenu (menu) {
        var screenHeight = window.screen.height;

        window.addEventListener('scroll', function() {
            if(window.pageYOffset > screenHeight - 100) {
                menu.classList.add('active');
            } else {
                menu.classList.remove('active');
            }
        });
    };

    showScrollMenu(nav);

});


function hideContentOnClick (button, content) {
    var buttonElement = document.querySelector(button);
    if (buttonElement) {
        buttonElement.addEventListener('click', function() {
            var hiddenContent = document.querySelector(content);
            if (hiddenContent.classList.contains('active')) {
                // alert("it contains active");
                hiddenContent.classList.remove('active');
            } else {
                // alert("it does not contain active");
                hiddenContent.classList.add('active');
            }
        });
    } 
    // else {
    //     alert("Failed to find " + button)
    // }
} 

hideContentOnClick(".features__item_i", ".features__item_hidden");
hideContentOnClick(".i-2", ".hidden-1");
