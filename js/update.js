define(["jquery"], function($){
    return function(){
        $('#submit').click(function(){
            
            var firstname = $('input:eq(0)').val();
            var lastname = $('input:eq(1)').val();
            var email = $('input:eq(2)').val();
            var phone = $('input:eq(3)').val();
            var company = $('input:eq(4)').val();
            var title = $('input:eq(5)').val();
            
            if( firstname == '' || lastname == '' || email == '' || phone == '' || company == '' || title == ''){
                $('.modal-title').html('Missing Information');
                $('.pop-msg').html('Please complete all parts of the form.');
            }
            else {
                var profile = $('#profile').serialize();

                $.post('', profile).done(function(){

                    $('.modal-title').html('Profile Updated!');

                    if( $('#client_type').html() == 'prospect' ){
                        $('.pop-msg').html('Thanks for keeping us up-to-date.<br>Check your email for your free download link. Thank you for participating. <br><i>Note: If you do not see it in your in-box then check your spam folder.</i>');
                    }
                    else {
                        $('.pop-msg').html('Thanks for keeping us up-to-date.<br>Check your email for your free download link. <br><i>Note: If you do not see it in your in-box then check your spam folder.</i>');
                    }

                }).fail(function(){

                    $('.modal-title').html('Oops!');
                    $('.pop-msg').html('Transfer stopped unexpectedly.<br>Please try again.');
                });
            }
            
            $('#updateProfile').click(function(){
                $('.modal-title').html('Updating Profile...');
                $('.pop-msg').html("<img src='https://s3.amazonaws.com/loadthedice.com/images/pop-msg.gif'>");
            });
        });
    };
});