$(document).ready(function(){
    //group add limit
    var maxGroup = 10;
    
    //add more fields group
    addBlock();
    addBlock();
    $(".addMore").click(addBlock());
    
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
        var from = $('body').find('.address').find('.from');
        var to = $('body').find('.address').find('.to');
        // console.log(from.find('select'));
        console.log ("FROM: " + from.find('select').val() + ' ' + from.find('input').val());
        console.log ("TO: " + to.find('select').val() + ' ' + to.find('input').val());
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

function addBlock(){
        if($('body').find('.fieldGroup').length < maxGroup){
            var fieldHTML = '<div class="jumbotron">\
            <div class="form-group fieldGroup">'
            +$(".fieldGroupCopy").html()+'</div> </div>';
            $('body').find('.jumbotron:last').after(fieldHTML);
        }else{
            alert('Maximum '+maxGroup+' groups are allowed.');
        }
    }
