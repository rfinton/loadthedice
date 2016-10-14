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

                    $('.pop-msg').html("Thanks for keeping us up-to-date.<br>Check your email for your free download link. Note: if you don't see it in you're inbox then check your spam folder.");
                  
                    /*
                    if( $('#client_type').html() == 'prospect' ){
                        $('.pop-msg').html('Thanks for keeping us up-to-date.<br>Check your email for your free download link and instructions on redeeming your chips for a $50.00 Amazon gift card.');
                    }
                    else if( $('#client_type').html() == 'current' ){
                        $('.pop-msg').html('Thanks for keeping us up-to-date.<br>Check your email for your free download link. You are now in the running for the Amazon Echo giveaway. Good luck!');
                    }
                    else{
                      $('.pop-msg').html('Thanks for keeping us up-to-date.<br>Check your email for your free download link and instructions on redeeming your chips for a $50.00 Amazon gift card.');
                    }
                    */

                }).fail(function(){

                    $('.modal-title').html('Oops!');
                    $('.pop-msg').html('Transfer stopped unexpectedly.<br>Please try again.');
                });
            }
            
            $('#updateProfile').click(function(){
                $('.modal-title').html('Updating Profile...');
                $('.pop-msg').html("<img src='http://s3.amazonaws.com/loadthedice.com/images/progress.gif'>");
            });
        });
    };
});