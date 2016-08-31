require.config({
    baseUrl: "../js",
    paths: {
        jquery: "https://s3.amazonaws.com/loadthedice.com/js/jquery-1.12.0.min",
        bootstrap: "https://s3.amazonaws.com/loadthedice.com/js/bootstrap-3.3.6/js/bootstrap.min",
        update: "https://s3.amazonaws.com/loadthedice.com/js/update",
        add: "https://s3.amazonaws.com/loadthedice.com/js/add",
        check: "https://s3.amazonaws.com/loadthedice.com/js/check"
    },
    shim: {
        'bootstrap': { 'deps': ['jquery'] }
    }
});

require(["jquery", "bootstrap"], function($){
    if( (location.href).search("thankyou") != -1 ){
        require(["update"], function(up){
            up();
        })
    }
    
    if( (location.href).search("friend") != -1 ){
        require(["add"], function(ad){
            ad();
        })
    }
    
    if( (location.href).search("purl") != -1 ){
        require(["check"], function(check){
            check();
        })
    }
});