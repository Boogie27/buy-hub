$(document).ready(function(){
    

// ================================================
// RESPONSIVE BAR CHART
// ================================================
var barChar = $(".bar-chart .bars .bar");
   
if(barChar.length > 0){
     var percentageArray = [];
     for(var i = 0; i < barChar.length; i++){
          percentageArray.push(0);
     }

     var percent = [];
     for(var i = 0; i < barChar.length; i++){
        percent.push(0);
    } 

    $.each(barChar, function(index, current){
        var percentage = parseInt($(this).attr("data-percentage"));
            $(this).animate({
               height: percentage+"%"
            }, 2000); 

            
            setInterval(addPercentage, 17);
            function addPercentage(){
                    if(percent[index] < percentage){
                        percentageArray[index]++;
                        percent[index]++;
                        $(current).attr("data-percentage", percentageArray[index])
                    }else{
                        clearInterval(addPercentage)
                    }
            }  
    });

}




// ============================================================
// FUNCTION THAT OPENS AND CLOSES THE SIDE NAVIGATION
// ============================================================

if($(window).width() < 992){
    var profileNav = $(".profile");
    var sideNavOpenButton = $("#sideNavOpenButton");
    var sideNavCloseButton = $("#sideNavCloseButton");
    var darkSkin = $(".dark-skin");

    function sideNavAction(left, visibility){
            var sideNavigation = $("#sideNavigation");
                $(sideNavigation).css({
                    visibility: visibility,
                    left: left
                });
              $(darkSkin).toggleClass("dark-skin-active");
    }

    
    $.each(profileNav, function(index, current){
        var buttonOpen =  $(this).find("#sideNavOpenButton");
        buttonOpen.click(function(){
            sideNavAction("0px", "visible");
        });
    });

    $(sideNavCloseButton).click(function(e){
        sideNavAction("-350px", "hidden",);
    });

    $(darkSkin).click(function(){
        sideNavAction("-350px", "hidden",);
    })
}

  // ======================================================================
// FUNCTION THAT DISPLAYS THE DELETE BARNER ON PRODUCT DELETE PAGE
// =======================================================================
  var prodcutItemDelete = $("#productItemDelete");
  var showSpan = $("#productItemDelete span");

      var screenWidth = $(window).width();
      if(screenWidth >= 1125){
            if(prodcutItemDelete.length > 0){
                $(prodcutItemDelete).mouseover(function(){
                    $(showSpan).show();
                });
                $(prodcutItemDelete).mouseout(function(){
                $(showSpan).hide();
                });
           }
      }
      


// ======================================================================
// FUNCTION THAT DISPLAYS THE DROP DOWNS
// =======================================================================       
     var itemContainer =  {
             parent: $(".parent"),
             productPropDown: $(".childDropDown"),
             actionButton: $(".actionButton")
         }
         $.each(itemContainer.parent, function(index, current){
              var optionButton = $(this).find(itemContainer.actionButton);
              var dropdown = $(this).find(itemContainer.productPropDown);
              function action(button, dropdown){
                 var container = $(button).parent().find(dropdown);
                    if(container){
                        $(container).show();
                    }
            }
             $(optionButton).mouseover(function(e){
                   action($(this),itemContainer.productPropDown );
             });

             $(optionButton).mouseout(function(e){
                  $(itemContainer.productPropDown).hide();
            });

             $(dropdown).mouseover(function(e){
                   $(this).show();
             });

             $(dropdown).mouseout(function(e){
                $(this).hide();
            });
             
            
         })





















// end;
});