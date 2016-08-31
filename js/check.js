define([], function(){
    return function(){
        document.getElementById('submitBtn').addEventListener('click', function(ev){
            ev.preventDefault();
            var form = document.forms[0];
            var el = form.elements;
            var query = true;
            
            for(var i=0; i<2; ++i){
                if(el[i].value == ''){
                    query = false;
                }
            }
            
            if(!query){
                alert('Please Answer Both Questions');
                return;
            }
            
            form.submit();
        });
    };
});