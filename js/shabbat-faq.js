$(document).ready(function () {

    //Incoming hash link display question
    if (window.location.hash) {
        //console.log(window.location.hash);
        var id = $(window.location.hash);
        $(id).collapse('show');

    }

    //Toast Options
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    //Copy to Clipboard
    var client = new ZeroClipboard($(".copy"), {
        moviePath: "/js/ZeroClipboard.swf",
        debug: true,
        forceHandCursor: true,
    });


    client.on("load", function (client) {
        client.on("complete", function (client, args) {
            toastr.success("", "Link copied to Clipboard");
        });
    });


    /*
      data-toggle="tooltip"
      data-placement="left"
      title="Copy link to clipboard"
    */


});
