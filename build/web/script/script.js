$(document).ready(function(){
    
    $.get("Servlet");
    
    var country = document.createElement("div");
    var population = document.createElement("div");
    var area = document.createElement("div");
    var borders = document.createElement("div");
    
    var urlBody = "http://restcountries.eu/rest/v1/alpha?codes=";
    
    $("body").append(country, population, area, borders);
    
    
    
    $("path").each(function(){
        $(this).hover(function(){
            $(this).css("fill", "#dbd9d9");
        }, function(){
            $(this).css("fill", "#c0c0c0");
        });
        $(this).click(function(){
            var urlEnd = $(this).attr("id");
            var url = urlBody + urlEnd;
            $.get(url).done(function(result){
                var obj = result[0];
                $(country).text("Country: " + obj.name);
                $(population).text("Population: " + obj.population);
                $(area).text("Area: "+obj.area);
                $(borders).text("Borders: "+obj.borders);
            });
        });
    });
    
    
    
    $.get("http://restcountries.eu/rest/v1/alpha?codes=de").done(function(result){
        //var p = $.parseJSON(result);
        
    });
});


