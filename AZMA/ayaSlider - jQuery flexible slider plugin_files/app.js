(function($){
    $(document).ready(function() {
        
        var _SW = Sweefty();
        
         
        
        Sweefty().on.screen(function(type){
            //alert(type);
            //$('#header').slideToggle();
            //console.debug('exceuted tablet');
        }, function(){
            //alert('not screen');
        });
        
        Sweefty().on.mobile(function(type){
            //alert(type);
        },function(type){
            //alert(type);
        });
        
        
        //general tooltip options
        $(document).tooltip({
            position : 'top',
            speed : 100
        });
        
        //$('li').tooltip('hi thereeeeeeeeeee to the last xxx',{
        //    position : 'left',
        //    speed : 250,
        //    addClass : 'red'
        //});
        //
        //$('li:first').tooltip('hi thereeeeeeeeeee',{
        //    position : 'left',
        //    speed : 250,
        //    addClass : 'green'
        //});
        //
        //$('li:last').tooltip('hi thereeeeeeeeeee to the last',{
        //    position : 'left',
        //    speed : 250,
        //    addClass : 'blue'
        //});
        
        
        $(document).modal({
            speed : 500,
            position : 'bottom',
            animation : 'zoom',
            easing : 'linear',
            close:'.closeModa'
        });
        
        $('.triggerModal').modal({
            target : '#modal2',
            speed : 550,
            easing : 'easeOutBounce',
            animation : 'zoom',
            position: 'center'
        });
        
        
        
        $('.bigTitle').on('swipeRight',function(e){
            //console.debug($(this));
            //alert('righttttt');
        }).swipeRight(function(e){
            //console.debug(e);
        });
        
        $('.bigTitle').swipeLeft(function(e){
            //console.debug(e);
        });
        
        
        $('.bigTitle:first').off('swipeRight');
        
        $('.bigTitle').trigger('swipeRight');
        //$('.bigTitle:first').trigger('swipeRight');
        //$('.bigTitle').off('tap');
        //$('.bigTitle').swipeLeft(function(e){
        //    console.debug(e);
        //});
        
        //$(body).click(test);
        
        //console.debug($('.bigTitle').data);
        //$('.bigTitle').trigger('tap');
        //$('.bigTitle').off('mousedown', HiThere);

        
        
        //$('.bigTitle').off('sap');
       
        
        //$('.bigTitle').trigger('wipe');
        //$('.close').modal({speed :250,close:'.closal',animation:'top',position:'0 0',target:'#modal'});
        
        
        $('.close').click(function(){
            $('#modal').modal('view');
        });
        
        var innerDiv = $('<div style="margin:0;background:#e8e8e8;padding:1px;"></div>').hover(function(){
            $(this).css({
                opacity : 0.5,
                backgroundColor : '#cccccc'
            }).animate({
                opacity : 1
            },700);
            
        },function(){
            $(this).css({
                backgroundColor : '#e8e8e8'
            });
        });
        
        $('.grid_system p').wrapInner(innerDiv);
        
    });
    
}(jQuery));