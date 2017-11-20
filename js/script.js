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
    
    // Pallet/Parcel toggle
    $("body").on("click",".btn-toggle",function(){
        event.preventDefault();
    $(this).parents(".fieldGroup").find('.pallet').toggle();
    $(this).parents(".fieldGroup").find('.parcel').toggle();
    }); 
    
    //console output
    $(".submit").click(function(){
        $('body').find('.fieldGroup').each(function(index) {            
            var pallet = $(this).find('.pallet');
            var parcel = $(this).find('.parcel');
            var palletDisplay = pallet.css("display");
            if (palletDisplay == "none") {  
                console.log(index + ": PARCEL");                            
                parcel.each(function(){
                    var label = $( this ).find( "label" ).text();
                    var value = $( this ).find( ".form-control" ).val();
                    var units = $( this ).find( "span" ).text();
                    if(label) {
                        console.log(label + ' ' + value + ' ' + units);
                    }
                })
            } else {               
                console.log(index + ": PALLET");                            
                pallet.each(function(){
                    var label = $( this ).find( "label" ).text();
                    var value = $( this ).find( ".form-control" ).val();
                    var units = $( this ).find( "span" ).text();
                    if(label) {
                        console.log(label + ' ' + value + ' ' + units);
                    }
                })
            }
    });
});
});