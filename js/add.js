define(["jquery"], function($){
    return function(){
        $('#addContact').click(function(){
            var firstname = $('input:eq(0)').val();
            var lastname = $('input:eq(1)').val();
            var email = $('input:eq(2)').val();
            var company = $('input:eq(3)').val();
            var industry = $('input:eq(4)').val();
            
            if( firstname == '' || lastname == '' || email == '' || company == '' || industry == ''){
                $('.modal-title').html('Missing Information');
                $('.pop-msg').html('Please complete all parts of the form.');
            }
            else {
                var profile = $('#profile').serialize();
                $.post('', profile).done(function(){
                    $('.modal-title').html('Contact Added!');
                    $('.pop-msg').html('Got it! They should be receiving an email from us shortly.');
                }).fail(function(){
                    $('.modal-title').html('Oops!');
                    $('.pop-msg').html('Transfer stopped unexpectedly.<br>Please try again.');
                });
            }
        });
        
        $('#referFriend button').click(function(){
            $('.modal-title').html('Saving...');
            $('.pop-msg').html("<img src='https://s3.amazonaws.com/loadthedice.com/images/progress.gif'>");
        });
    };
});
