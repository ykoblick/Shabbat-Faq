$(document).ready(function () {

    if (window.location.hash) {
        //console.log(window.location.hash);
        var id = $(window.location.hash);
        $(id).collapse('show');

    }
});
