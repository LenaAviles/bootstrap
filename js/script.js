$(document).ready(function(){
    //group add limit
    var maxGroup = 10;
    
    //add more fields group
    $(".addMore").click(function(){
        if($('body').find('.fieldGroup').length < maxGroup){
            var fieldHTML = '<div class="jumbotron">\
            <div class="form-group fieldGroup">'
            +$(".fieldGroupCopy").html()+'</div> </div>';
            $('body').find('.jumbotron:last').after(fieldHTML);
        }else{
            alert('Maximum '+maxGroup+' groups are allowed.');
        }
    });
    
    //remove fields group
    $("body").on("click",".remove",function(){ 
        $(this).parents(".jumbotron").remove();
    });

    $(".remove").click(function(){
        if($('body').find('.fieldGroup').length > 1){
            $('body').find('.jumbotron:last').remove();
        }});

        $("body").on("click",".btn-toggle",function(){
        $(this).parents(".fieldGroup").find('.pallet').toggle();
        $(this).parents(".fieldGroup").find('.parcel').toggle();
    });
    

});