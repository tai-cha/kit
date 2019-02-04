app_browser(pid);

function app_browser(_pid){
    if( System.args[_pid] ){
        $("#winc" + _pid +" #browser-frame").attr("src", System.args[_pid]);
        $("#winc" + _pid +" #browser-url").val(System.args[_pid]);
    }

    if( localStorage["kit-default-browser"] != "browser" ){
        $("#winc" + _pid +" .browser-message").show();
    }

    $("#winc" + _pid + " #browser-message-close").on("click", function(){
        $("#winc" + _pid +" .browser-message").hide();
    });

    $("#winc" + _pid + " .browser-bars").on("click", function(){
        $("#winc" + _pid +" .browser-menu").toggle();
    });

    $("#winc" + _pid +" #browser-url").keypress(function(e){
        if( e.which == 13 ){
            $("#winc" + _pid +" #browser-frame").attr("src", $("#winc" + _pid +" #browser-url").val());
        }
    });

    $("#w" + _pid).resizable({
        alsoResize: "#w"+_pid+" #browser-frame",
        minWidth: "200"
    });

    $("#winc" + _pid + " #browser-menu-bookmark").on("click", function(){
        $("#winc" + _pid +" #browser-frame").attr("src", "./app/browser/bookmark.html");
        $("#winc" + _pid +" .browser-menu").hide();
    });
}