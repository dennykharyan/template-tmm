$(document).ready(function () {

    var flag = 0;

    $('#sidebar-collapse').on('click', function () {

        $('#user-info').toggle();

        $('#sidebar').toggleClass('active');

        if (flag == 0) {
            $('#logo-image').attr("src", "LOGO TOKO MANAMANA-02 100X100.png");
            
            flag = 1;
        }
        else if (flag == 1) {
            $('#logo-image').attr("src", "logo.png");
            
            flag = 0;
        }
    });

});