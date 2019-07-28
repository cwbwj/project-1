    $(document).ready(function(){
    accordions = $(".accordion");
    accordions.each(function(i){
        accordion = $(this);
        accordion.on("click", function(i){
            accordion = $(this);
            if(accordion.hasClass('close')){
                accordion.removeClass('close');
                accordion.addClass('open');
                
                //Change icon
                icon = accordion.find('.fas');
                icon.each(function(e){
                    icon.removeClass("fa-chevron-down");
                    icon.addClass("fa-chevron-up");
                });
            }
            else{
                accordion.addClass('close');
                accordion.removeClass('open');
                
                //Change icon
                icon = accordion.find('.fas');
                icon.each(function(e){
                    icon.removeClass("fa-chevron-up");
                    icon.addClass("fa-chevron-down");
                });

            }
        });
    });
});