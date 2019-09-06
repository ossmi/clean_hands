

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
	