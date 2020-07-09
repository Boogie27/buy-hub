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
        });
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
    
    
        if(($(window).width()) > 991){
            stickSidenav();
            $(window).scroll(function(e){
              stickSidenav();
            });
        } 
 }
 stickSideNavigation();

// ========================================================================================
//  function that removes dark background and removes all asynchronous forms and popups
// ========================================================================================
function hideDarkTheme(){
     $(".dark-skin").removeClass("dark-skin-active");
     $("#modalBox").slideUp(100);

}

$(".dark-skin").click(function(){
    hideDarkTheme();
});


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

   
    if(($(window).width()) < 991){
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



function mySlideFunction(Fcontainer, frames, direct){
      var swipperFrames = $(Fcontainer).find(frames);
      var direction = $(Fcontainer).find(direct);
      var frameWidth = $($(swipperFrames).children()[0]).width();
      var marginRight = parseInt($($(swipperFrames).children()[0]).css("margin-right"));
      var width = marginRight + frameWidth;
      var button = $(direction).children();

     
          button.click(function(e){
              if($(e.target).hasClass("fa-angle-right")){
                    if(counter <= swipperFrames.length){
                        counter++;
                        if(bordered($(mirrorContainer),  counter)){
                            slider(swipperFrames, width, 0.7, counter);
                        }
                       
                    }
              }else if($(e.target).hasClass("fa-angle-left")){
                  if(counter > 0){
                    counter--;
                    if(bordered($(mirrorContainer),  counter)){
                        slider(swipperFrames, width, 0.7, counter);
                    }
                  }
              }
          });
}

// check if frame container exists
if(frameContainer.length > 0){
    var counter = 0;
    mySlideFunction(frameContainer, frame, direction);
    if(($(window).width()) <= 870 ){
         screenOnTouch(frame);     // function that swipes the detail image on touch swipe
    }
}

// function that high lights the mirror
    function bordered(parentDiv, index){
        var frameImages = $(parentDiv).children().find(".mirror");
        for(var i = 0; i < frameImages.length; i++){
            $(frameImages[i]).removeClass("clicked"); 
        }
        if($(frameImages[index]).addClass("clicked")){
            return true;
        }
       return false;
    }

// check if mirror items exists
if(mirrorContainer.length > 0){
    var mirrorChildren = $(mirrorContainer).children().find(".mirror");
    var frameWidth = $($(frame).children()[0]).width();
    var marginRight = parseInt($($(frame).children()[0]).css("margin-right"));
    var width = marginRight + frameWidth;

         $($(mirrorContainer).children().find(".mirror")[0]).addClass("clicked");
        $.each(mirrorChildren, function(index, current){
            // function that slides detail image when mirror image is clicked
            $(this).click(function(e){
               if(bordered($(mirrorContainer), index)){
                   counter = index;
                   slider(frame, width, 0.7, counter);
               }
            });
        });
}


  function screenOnTouch(itemFrame){   
                itemFrame.on("touchstart", touchStart);
                itemFrame.on("touchmove", touchMove);
                itemFrame.on("touchend", touchEnd);
  }
  

  var startPosition = 0;
  var change = 0;
  var currentPosition = 0;

  function touchStart(event){
       isDown = true;
       var  startX = event.touches[0].clientX;
       var framePosition = $(this).css("transform");
       startPosition = startX;
       if(framePosition !== "none"){
         change =  parseInt(framePosition.split(",")[4])
       }
  }

 function touchMove(event){
     if(isDown){
        var startX = event.touches[0].clientX;
        var movingPositon = startX - startPosition;
         currentPosition = movingPositon + change;
        
        $(this).css({
           transition: "none",
           transform: "translate("+(movingPositon + change )+"px)"
        });
     }
  }




function touchEnd(){
    var frameCont = $(this).children();
   var childWidth = $(frameCont[0]).width();
   var marginRight = parseInt($(frameCont[0]).css("margin-right"));
   var width = marginRight + childWidth;
   
   var actualPosition = $(this).width() + currentPosition;

   if(actualPosition < $(frameCont[0]).width()){
            animate($(this), width, frameCont.length - 1);
   }
   
   if(actualPosition > $(this).width()){
        animate($(this), width, 0);
   }
}


function animate(frame, width, count){
        $(frame).css({
            transition: "all 0.7s ease",
            transform: "translate("+(-width * count )+"px)"
        });
}



// ===========================================================
//       FUNCTION THAT OPENS AND CLOSES THE MODAL BOX
// ===========================================================

var openModalBox = $(".openModal-box");
function modalBox(){
    $(openModalBox).click(function(e){
        e.preventDefault();
           $("#modalBox").slideDown(300);
           $(".dark-skin").addClass("dark-skin-active");
    });

    // close the modal box
    $(".modalBoxCancle").click(function(e){
        e.preventDefault();
        hideDarkTheme();
    });
}
modalBox();




function loginSignForm(){
    var formContainer = $("#formContainer form");
    var formbutton = $(".formbutton");
   
    for(var i = 0; i < formContainer.length; i++){
         $(formContainer[i]).hide();
         $(formbutton[i]).removeClass("inview");
    }
    $(formContainer[0]).show();
    $(formbutton[0]).addClass("inview");


    function formInt(type){
        for(var i = 0; i < formContainer.length; i++){
            $(formContainer[i]).hide();
            $(formbutton[i]).removeClass("inview");
       }
       $(formContainer[type]).show();
       $(formbutton[type]).addClass("inview");
    }


    $.each(formbutton,function(index, current){
        $(current).click(function(e){
            formInt(index);
        });
    });

}

loginSignForm();




// end;
});