$(document).ready(function(){
    

// ================================================
// RESPONSIVE BAR CHART
// ================================================
var barCharts = $(".bars");
var bars = $(".bar");

   if(barCharts.length > 0){
       $.each(barCharts, function(index, current){
            var bar = $(this).find(bars);
            var dataDirection = $(this).attr("data-direction");
            var barTop = $(this).offset().top;
            var dataTop = parseInt($(this).attr("data-top"));
            var barChartTop = barTop + dataTop;


            // function rises the bars when scrolled into view
                function myBarFunction(bars){
                    $.each(bars, function(barIndex, barCurrent){
                        var barRates = parseInt($(this).attr("data-percentage"));

                        if(dataDirection === "height"){
                            $(this).animate({
                                height: barRates+"%"
                            }, 2000);
                        }
                        
                        if(dataDirection === "width"){
                            $(this).animate({
                                width: barRates+"%"
                            }, 2000);
                        }

                    
                  });
                }
            
            // scroll funciton
            $(window).scroll(function(e){
                var windowHeight = $(this).height();
                var scroll = $(this).scrollTop();
                if((barChartTop - scroll) <= windowHeight){
                    myBarFunction($(bar));
                }
            });      
       });

   }





// ============================================================
// FUNCTION THAT OPENS AND CLOSES THE SIDE NAVIGATION
// ============================================================

 function sideBarNavigation(){
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
 }
 sideBarNavigation();



// ============================================================
// FUNCTION THAT STICKS SIDE  NAVIGATION ONSCROLL
// ============================================================
 function stickSideNavigation(){
    function stickSidenav(){
        var sideNavigation = $("#stickySideNavigation");
        var startPosition = $("#sideNavStickyPosition");
    
          if(startPosition.length > 0){ 
            var top = $(startPosition).offset().top;
                var element = $(window).scrollTop();
    
                    if(element >= top){
                        $(sideNavigation).addClass("stick");
                    }else{
                        $(sideNavigation).removeClass("stick");
                    }
            }
        }
    
    
        if(($(window).width() + 17) > 991){
            stickSidenav();
            $(window).scroll(function(e){
              stickSidenav();
            });
        } 
 }
 stickSideNavigation();

// ============================================================
// FUNCTION THAT STICKS TOP  NAVIGATION ONSCROLL
// ============================================================
  function topNavigation(){
    var stickyTopNavigation = $("#stickyTopNavigation");
    var stickTopNavPosition = $("#stickyTopNavPosition");

     function stickyTopNav(){
         if(stickTopNavPosition.length > 0){
        var top = $(stickTopNavPosition).offset().top;
        var element = $(window).scrollTop();
        var x = parseInt($(stickTopNavPosition).attr("data-top"));
            if(element >= (top + x) ){
                $(stickyTopNavigation).addClass("topNavSticky");
            }else{
                $(stickyTopNavigation).removeClass("topNavSticky");
            }
       }
    }

   
    if(($(window).width() + 17) < 991){
        stickyTopNav();
       $(window).scroll(function(e){
         stickyTopNav();
         
       });
    }

   
  }
  topNavigation();




  // ======================================================================
// FUNCTION THAT DISPLAYS THE DELETE BARNER ON PRODUCT DELETE PAGE
// =======================================================================
   function deleteBanner(){
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
   }
   deleteBanner();   


// ======================================================================
// FUNCTION THAT DISPLAYS THE DROP DOWNS
// =======================================================================       
   
       

       function dropdown(){
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
            });
       }
       dropdown();


// ==================================================================
// function thate slides detail image
// ===================================================================
var frameContainer = $(".swipperFrame");
var frame = $(".swipper");
var direction = $(".direction");

// mirror container
var mirrorContainer = $(".mirrorContainer");


function slider(swipperFrame, SwipperWidth, speed, count){ 
    $(swipperFrame).css({
       transition: "all "+speed+"s ease",
       transform: "translate("+(-SwipperWidth * count)+"px)"
    });
}  



function slide(Fcontainer, frames, direct){
   $.each(Fcontainer, function (index, current){
      var swipperFrames = $(this).find(frames);
      var direction = $(this).find(direct);
      var frameWidth = $($(swipperFrames).children()[0]).width();
      var marginRight = parseInt($($(swipperFrames).children()[0]).css("margin-right"));
      var width = marginRight + frameWidth;
      var button = $(direction).children();
      

          button.click(function(e){
              if($(e.target).hasClass("fa-angle-right")){
                    if(countArray[index] <= swipperFrames.length){
                        countArray[index]++;
                        slider(swipperFrames, width, 0.7, countArray[index]);
                    }
              }else if($(e.target).hasClass("fa-angle-left")){
                  if(countArray[index] > 0){
                    countArray[index]--;
                    slider(swipperFrames, width, 0.7, countArray[index]);
                  }
              }
          });
   });
}

// check if frame container exists
if(frameContainer.length > 0){
    var countArray = [];
    for(var i = 0; i < frameContainer.length; i++){
        countArray.push(0);
    }
    
    slide(frameContainer, frame, direction);
}

// check if mirror items exists
if(mirrorContainer.length > 0){
    var mirrorChildren = $(mirrorContainer).children().find(".mirror");
    var frameWidth = $($(frame).children()[0]).width();
    var marginRight = parseInt($($(frame).children()[0]).css("margin-right"));
    var width = marginRight + frameWidth;

         $($(mirrorContainer).children().find(".mirror")[0]).addClass("clicked");
        $.each(mirrorChildren, function(index, current){
            $(this).click(function(e){
                for(var i = 0; i < mirrorChildren.length; i++){
                    $(mirrorChildren).removeClass("clicked"); 
                }
                $(this).addClass("clicked");
                if($(this).hasClass("clicked")){
                    countArray[0] = index;
                    slider(frame, width, 0.7, index);
                }
            });
        });
}











// end;
});