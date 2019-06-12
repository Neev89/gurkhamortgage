$(document).ready(function () {
    
    // TabletopJs
    
    var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1avenfyiy8GZo05rQ6SPjETgS-C0R5ZlV4jFiW8dgbd0/pubhtml';
    
    
    function init() {
        Tabletop.init(
          {
            key: publicSpreadsheetUrl,
            callback: showInfo,
            simpleSheet: true
          }
        )
    }
    
    function showInfo(data, tabletop) {
        console.log(data,'data')
        var template_hero = Handlebars.compile($('#herobanner-template').html())
        $.each(tabletop.sheets("HeroSection").all(), function (i, cat) {
            var html = template_hero(cat);
            $("#section-banner").append(html);
        });
    }
    
    window.addEventListener('DOMContentLoaded', init)
    
    init();

    //CurrentDate
    function CurrentYear() {
        var thisYear = new Date().getFullYear()
        $("#currentYear").text(thisYear);
    }

    CurrentYear();
    
});





