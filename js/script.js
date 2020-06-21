

$(window).ready(function(){
     

        // onclick navigation function
          // $(".sideLink span").hover(function(event){
          //   $(".dropdown").removeClass("dropdown-active");
          //      let id = event.target.id;
          //       $("#dropdown-"+id).addClass("dropdown-active");
          // });

          // $(window).click(function(){
          //     $(".dropdown").removeClass("dropdown-active");
          // })

       

      
       
         
// ============================================================================
//                   IMAGE SLIDER ANIMATION EFFECT                           
// ============================================================================
let index = 1;
let fadeAnimate = function(n){
       $(".slideContainer").each(function(i){
             
            let items = $(this).find(".slideItem");
            let dots = $(this).find(".dot");
                 for(let x = 0; x < items.length; x++){
                  $(items[x]).css({ display: "none"});
                  $(dots[x]).removeClass("active");
                 }
                 if(index > items.length){
                  index = 1;
                }
                 
                if(n){
                  index = n;
                }
                
                 $(items[index -1]).css({display: "block"});
                 $(dots[index - 1]).addClass("active");
       });

     
     if(n === undefined){
      index++; 
     }
}
fadeAnimate(index);
setInterval(fadeAnimate, 10000);

$(".dot").click(function(event){
      let dot = event.target.getAttribute("current");
      fadeAnimate(index = dot);  
});






    //  mobile sidebar open and close function
        
     $("#sidebarOpen").click(function(event){
           $(".profile").css({
                 left: "0px",
                 transition: "all 0.3s ease"
                 
           });

           if($(this)){
                $(".profile-section").addClass("active-darkSkin");
                $("html body").css({ position: "", width: "100%"  });
           }  
     });



          function closeSideNav(transition){
                $(".profile").css({
                  left: "-600px",
                  transition: transition
              });

              if($(this)){
                  $(".profile-section").removeClass("active-darkSkin");
                  $("html body").css({  position: "static",  width: "100%" });
                  
                  $(".pageClose").hide();  //function that closes all sidebar pages width pageClose class
                  if( $(".dropdown")){
                      $(".dropdown").hide();//function that closes newest deal sub dropdown
                  }
                 
              }
              isNewOpen() //function that closes newest deal dropdown
           }

     $("#sideBarClose").click(function(event){
            if($(this)){
                closeSideNav("all 1s ease")
            } 
        });



     $(".profile-section").click(function(event){
              var items = event.target.classList.value;
              var classItems = items.split(" ");
              var exists =  $(this).hasClass(classItems[classItems.length - 1]);
                 if(exists){
                  closeSideNav("all 1s ease");
                 }
     });









     // this opens newest deal category
       function isNewOpen(){
            $("#openNewDeal").removeClass("fa-times");
            $("#openNewDeal").addClass("fa-bars");
            barState = true;
            $(".new-deal-achor").slideUp(500);
       }
     


        // function that changes the mobile newest deal navbar icon from bar to times 
        function   closeFunction(){
                $(".new-deal-achor").slideToggle(500);
                if(barState){
                  $("#openNewDeal").removeClass("fa-bars");
                  $("#openNewDeal").addClass("fa-times");
                  barState = false;
                  }else{
                      $("#openNewDeal").removeClass("fa-times");
                      $("#openNewDeal").addClass("fa-bars");
                      barState = true;
                  }
           }


           var barState = true;
    $("#openNewDeal").click(function(){
            closeFunction()
    });








    

       



  //  mobile side bar Links function
      $(".category").click(function(event){
               $(".category-Items").show();
      });


    
     // mobile side bar funciton to close  sub pages
      $(".fa-arrow-left").each(function(event){
                  $(this).click(function(i){
                         $(".pageClose").hide();
                  });
      });


// =======================================================================
  //  mobile side bar details funciton to display cart details
//=======================================================================   
          $(".display-detail-cart").click(function(event){
               if($(this)){
                   $(".display-detail-cart .sign").toggleClass("fa-angle-down")
                   $(".display-detail-cart .sign").toggleClass("fa-angle-up")
                   $("#display-detail-cart-open").slideToggle()
               }
          });



    // mobile side bar funciton to open the details page
    $(".details").click(function(event){
      $(".mobile-right-bar").show();
    });



// ==============================================================================
//                  STICKY BAR NAVIGATION FUNCTION
// =============================================================================
         function stickyNav(){
                var windowScroll = $(this).scrollTop();
                var items = $(".hot-sale");
                if(!items){
                     items.offset().top - 75;
                }else{
                  items = 50;
                }
               
                var pageHeight = $(this).height();

               if(windowScroll >= items){
                   $(".top-navigation").addClass("sticky");
               }else{
                  $(".top-navigation").removeClass("sticky");
                  $(".profile-section").removeClass("sticky-profile")
               }
         }
         stickyNav();
    // sticky navigation function
    $(window).scroll(function(event){
      stickyNav();
    });




// ============================================================================
//               FUNCTION THAT SWIPES ITEMS TO INFINITY 
// ===========================================================================

// data in an array of objects probably form the data base
var items = [{
image: "images/watch_1.png",
name: "watch",
tag: "new"
},
{
image: "images/bag_1.jpg",
name: "black bag",
tag: "recent"
},

{
image: "images/shirt_3.jpg",
name: "T-shit",
tag: "recent"
},

{
image: "images/pad_1.jpg",
name: "playstation pad",
tag: "new"
},

{
image: "images/blue_shoe.jpg",
name: "simple shoe",
tag: "recent"
},

{
image: "images/double-bag.jpg",
name: "Doouble bag",
tag: "recent"
},

{
image: "images/socom.jpg",
name: "socom 3",
tag: "new"
},

{
image: "images/green-watch.jpg",
name: "Green watch",
tag: "new"
},
{
image: "images/women_shoe.jpg",
name: "women shoe",
tag: "new"
},
{
image: "images/madden-20.jpg",
name: "Madden",
tag: "recent"
},
]


var frame = $("#swipe-frame");
var containerArray = [];

//this checks if there exist a swipper element in the page
if(frame.length > 0){

// insert all object item gotten into an array
for(var i = 0; i < items.length; i++){
containerArray.push(items[i]);
}


// take the first four items of the array
var last =  containerArray.slice(0, 4);

// take the last four items of the array
var first =  containerArray.slice(containerArray.length - 4);

// append the first four items or the array to the last part of the items array
for(var i = 0; i < last.length; i++){
containerArray.push(last[i]);
}


// append the last four items or the array to the beginning of the items array
for(var i = first.length - 1; i >= 0; i--){
containerArray.unshift(first[i]);
}



//loop from the array and asign into a div to be display on the web page
for(var i = 0; i < containerArray.length; i++){
      var imageName = containerArray[i].image;
      var name = containerArray[i].name;
      var tag = containerArray[i].tag;

      var content = `<div class="hot-sale-image" id="swipe">
                        <div class="`+tag+`">Recent</div>
                        <a href="#"> <img src="`+imageName+`" alt="bag_1"></a>
                        <ul>
                            <li>`+name+`</li>
                        </ul>
                    </div>`;
     frame.append(content);              
}


//  get the width of one of the items container
var width = $(".hot-sale-image")[0].clientWidth;

// get the possible margin-right of the div;
var marginRight = parseInt($($(".hot-sale-image")[0]).css("margin-right"));

// get the complete size of the item div
var size = width + marginRight;
var counter = 4;



// swipper animation start position;
frame.css({
  transition: "all 1s ease",
  transform: "translate("+(-size * counter)+"px)",
});


function swipper(n){
  if(n === undefined){
    counter++;
  }

  if(n){
     counter = n;
   }


    frame.css({
      transition: "all 1s ease",
      transform: "translate("+(-size * counter)+"px)",
  });
 

}
swipper();

setInterval(swipper, 7000);

frame.bind("transitionend", function(event){
  if(counter >= containerArray.length - 4){
       counter = 4;
       frame.css({
        transition: "none",
        transform: "translate("+(-size * counter)+"px)",
    });
  }else if(counter <= 0){
        counter = containerArray.length - 8;
        frame.css({
        transition: "none",
        transform: "translate("+(-size * counter)+"px)",
    });
  }
});


//  next and previous button function
var next = $(".swipe-button .next");
var prev = $(".swipe-button .prev");

next.click(function(event){
       if(counter >= containerArray.length - 4) return;
       swipper(counter += 1); 
});

prev.click(function(event){
    if(counter <= 0) return;
    swipper(counter -= 1); 
});

}//end of swipper effect..









// ================================================================
// CART SUMMARY SIDE BAR OPEN AND CLOSE FUNCTION
// ==============================================================
 var open = $("#sideBarOpen");
     if(open.length > 0){
          open.click(function(event){
              $("#itemToOpen").css({
                  right: 0,
              });
              if($(this)){
                $(".summary-section").addClass("active-darkSkin");
                $("html body").css({  width: "100%" });
              }
          })
     }


    //  close function
    function  closeSummary(){
            $("#itemToOpen").css({
                right: "-500px",
            });
            if($(this)){
            $(".summary-section").removeClass("active-darkSkin");
            $("html body").css({ width: "100%" });
            }
        }

    var close = $("#close");
    var activeSkin = $(".summary-section");
        if(close.length > 0){
            close.click(function(event){
                  if($(this)){
                    closeSummary();
                  }
            });
        }

        

     $(".summary-section").click(function(event){
        var items = event.target.classList.value;
        var classItems = items.split(" ");
        var exists =  $(this).hasClass(classItems[classItems.length - 1]);
           if(exists){
              closeSummary();
           }
});




// ==============================================================================
//                        FUNCTION THAT OPENS SHIPPING FORM
// =============================================================================
var shippingContainer = $(".billing-header span");
var itemOpen = $(".shipping-section form")
if(shippingContainer.length > 0){
shippingContainer.click(function(vent){
    console.log($(this).html($(this).html() === "open Shipping" ? "close Shipping" : "open Shipping"))
    itemOpen.slideToggle(500)
})
}



//  ========================================================================
//                 FUNCTION THAT OPENS ORDER DETAILS 
// =========================================================================
var orderContainer = $(".table-section");
if(orderContainer.length > 0){
    
    $.each(orderContainer, function(index, current){
        var orderOpen = $(current).find(".orderAction");
        if(orderOpen){
            $.each(orderOpen, function(itemIndex, itemsCurrent){
                   $(itemsCurrent).click(function(event){
                         $(itemsCurrent).toggleClass("fa-angle-right");
                         $(itemsCurrent).toggleClass("fa-angle-down");
                         var item = $(event.target).parent().parent().parent().parent().parent().parent();
                           if(item){
                                item.find(".order-mobile").slideToggle(300);
                           }
                   })
            });
        }
    });
}




//  =======================================================================
//  DYNAMIC FADE IN FUNCTION
//=========================================================================

var fadeinContainer = $(".fadeIn-container");
var fadeIn = $(".fadeIn");

   if(fadeinContainer.length > 0){
    var indexx = 0;
    var heightArray = [];
    function fadeInOut(){
        $.each(fadeinContainer, function(index, value){
              var fadeInChildren = $(value).children();   
                       if(fadeInChildren.length > 0){
                              for(var i = 0; i < fadeInChildren.length; i++){  
                                $(fadeInChildren[i]).css({
                                    visibility: "hidden",
                                    opacity: 0,
                                    height: 0
                                });                          
                          } 
                          
                          
                              if(indexx > fadeInChildren.length - 1){
                                indexx = 0;
                            }


                           
                            $(fadeInChildren[indexx]).css({
                              visibility: "visible",
                              opacity: 1,
                              height: "400px"
                          });  

                       }
                       
        });
            indexx++;
      }

      fadeInOut();
      setInterval(fadeInOut, 5000);
   }

// END OF DYNAMIC FADEIN FUNCTION





//   ==============================================================
//             FUNCTION THAT SLIDE ELEMENT TOP THE TOP ONSCROLL
// ================================================================
var myScrollContainer = $(".myScroll");
var myScrollItems = $(".myScrollItem");

function myScroll(){
  var windowScroll = $(this).scrollTop();
  var windowHeight = $(this).height();
  var top = 0;
  var duration = 0;
    $.each(myScrollContainer, function(index, current){ 
        var startPoint = parseInt($(current).attr("data-top"));
        var dataDelay =  $(current).attr("data-delay");
        var dataAction = $(current).attr("data-action");
        
         if(!isNaN(startPoint)){
             top = startPoint;
         }else{
             top = 0;
         }
        
         if(dataDelay){
            duration = dataDelay;
         }else{
            duration = 0.5+"s";
         }

          if(myScrollItems.length > 0){
               var innerItems = $(current).find(myScrollItems);
                if(innerItems.length > 0){
                    $.each(innerItems, function(itemIndex, itenCurrent){
                          var itemsTop = $(itenCurrent).offset().top - top;
                          var z = itemsTop - windowScroll;
                         
                          if(windowHeight - 125 >= z){
                                if(dataAction === "fade"){
                                            $(itenCurrent).css({
                                                opacity: 1,
                                                transition: "all "+duration+" ease"
                                            });
                                        }
                              
                                if(dataAction === "slide"){
                                        $(itenCurrent).css({
                                            bottom: 0,
                                            opacity: 1,
                                            transition: "all "+duration+" ease"
                                        });
                                }
                           }
                    });
                }
          }
    })
}




function slideItems(){
    var dataAction = $(myScrollItems).attr("data-action");
   $.each(myScrollContainer, function(index, current){
          if($(current).attr("data-action") === "slide"){
                 if($(current).attr("data-bottom") && $(current).attr("data-bottom") != "" && $(current).attr("data-bottom") !== isNaN()){
                       var getButtom = parseInt($(current).attr("data-bottom"));
                }
                var items =  $(current).find(myScrollItems);
                for(var i = 0; i < items.length; i++){
                          $(items[i]).css({
                              position: "relative",
                              opacity: 0,
                              bottom: -getButtom+"px"
                          });
                } 
          }
   });
}

if(myScrollContainer.length > 0){
slideItems();
myScroll();
$(window).scroll(function(){
    myScroll();
})         
}




// ====================================================================
//                       SIGNUP AND LOGIN FUNCTION
// ====================================================================
var formActionButton = $(".form-action-button");
var signupForm = $(".signup-section");
var signupCancle = $(".signup-section .fa-times");
var darkSkinContainer = $(".activeSkin-container");

var loginForm = $(".login-section");
var loginCancle = $(".login-section .fa-times");

var changePassword = $(".change-password-section");
var changePasswordCancle = $(".change-password-section .fa-times");


if(formActionButton.length > 0){
        
        function openForm(value){
            var type;
                closeSideNav()
                $(darkSkinContainer).addClass("active-darkSkin");
                if(value == "signup-form"){
                      type = signupForm;
                }else if(value === "login-form"){
                      type = loginForm;
                }else if(value === "changePassword-form"){
                      type = changePassword;
                }
                    $(type).css({
                        visibility: "visible",
                        transition: "all 0.5s ease",
                        transform: "scale(1)",
                        opacity: 1
                    }); 
        }

        $.each(formActionButton, function(index, current){
            $(current).click(function(event){
                var dataType = $(event.target).attr("data-type");
                    if(dataType){
                         if(dataType === "signup-form"){
                            openForm(dataType)
                         }
                         if(dataType === "login-form"){
                            openForm(dataType)
                        }
                        if(dataType === "changePassword-form"){
                            openForm(dataType)
                        }
                    }
            });
    }); 


// FUNCTION THAT CLOSES LOGIN AND SIGNUP FORM WHEN CLICKED TIMES BUTTON
    function closeSignUp(value){
        var closeType;
                if(value == "closeSignup"){
                    closeType = signupForm;
                }else if(value === "closeLogin"){
                        closeType = loginForm;
                }else if(value === "closeChangePassword"){
                        closeType = changePassword;
                }
                $(darkSkinContainer).removeClass("active-darkSkin");
                $(closeType).css({
                    visibility: "collapse",
                    transition: "all 0.5s ease",
                    transform: "scale(0)",
                    opacity: 0
                });
    }
            if(signupCancle){
                $(signupCancle).click(function(event){
                    var type = $(event.target).attr("id")
                    closeSignUp(type);
                });
            }

            if(loginCancle){
                $(loginCancle).click(function(event){
                    var type = $(event.target).attr("id")
                closeSignUp(type);
                });

            if(changePasswordCancle){
                $(changePasswordCancle).click(function(event){
                    var type = $(event.target).attr("id")
                closeSignUp(type);
                });
            }
        }



            $(window).click(function(event){
                var active = $(event.target).hasClass("active-darkSkin");
                    if(active){
                        $(darkSkinContainer).removeClass("active-darkSkin");
                        $(darkSkinContainer).children().css({
                                visibility: "collapse",
                                transition: "all 0.5s ease",
                                transform: "scale(0)",
                                opacity: 0
                            });
                    }
            })
        }

        


 (function(){

        // DETAIL PAGE JAVASCRIPT CODES
// ======================================================================================
                    // FREQUENTLY BOUGHT ITEMS SLIDER FUNCTION
// ======================================================================================
    var sliderFrame = $(".sliderFrame");
    if(sliderFrame.length > 0){
            var sliderItem = $(".slider");
            var actionLeft = $(".action .fa-angle-left");
            var actionRight = $(".action .fa-angle-right");
            var index = 0;
                sliderFrame.each(function(event){

                function slider(n){
                    for(var i = 0; i < sliderItem.length; i++){
                        $(sliderItem[i]).css({display: "none"});
                    }
                    if(n >= sliderItem.length){
                        index = 0;
                    }
                    if(n < 0 ){
                        index = sliderItem.length - 1 ;
                    }
                    $(sliderItem[index]).css({display: "block"});
                    }
                    slider(index);
                    
                    actionRight.click(function(event){
                        slider(index += 1);
                    });

                    actionLeft.click(function(event){
                        slider(index -= 1);
                    });
        });

}








//********************************************************************************** //
//            FUNCTION THE HANDLES THE DETAIL MAIN IMAGE DYNAMIC SWIPER             //
//*********************************************************************************//
//first , get the items as object from the database



var itemsArray = [
{
id: 1,
imageName:"image-detail-1.jpg, detail-image-6-back.jpg",
name: "black native",
price: 20000
},

{
id: 2,
imageName: "image-detail-2.jpg, image-detail-2.jpg, image-detail-red-back.jpg",
name: "red native",
price: 30000
},

{
id: 3,
imageName: "image-detail-3.jpg, image-detail-white-back.jpg",
name: "white native",
price: 45000
},

{
id: 4,
imageName: "image-detail-6.jpg, image-detail-blue-back.jpg",
name: "blue native",
price: 15000
},

{
id: 5,
imageName: "image-detail-5.jpg",
name: "black native",
price: 10000
},
{
id: 1,
imageName:"image-detail-1.jpg, detail-image-6-back.jpg",
name: "black native",
price: 20000
},

{
id: 2,
imageName: "image-detail-2.jpg, image-detail-2.jpg, image-detail-red-back.jpg",
name: "red native",
price: 30000
},

{
id: 3,
imageName: "image-detail-3.jpg, image-detail-white-back.jpg",
name: "white native",
price: 45000
},

{
id: 4,
imageName: "image-detail-6.jpg, image-detail-blue-back.jpg",
name: "blue native",
price: 15000
},

{
id: 5,
imageName: "image-detail-5.jpg",
name: "black native",
price: 10000
}

]



//  function that makes the  carousel images
    var swipeContainer = $(".swiper-container");
    if(swipeContainer.length > 0){
        var detailFrame = $(".detail-slide-frame");
        var carouselDiv = $(".detail-sub-image .subImage-frame");
        var mainDiv = $(".main-detail-image");
        var  swipeItems = $(".swiper-track");
        var  mainInnerImages = $(".main-detail-image .detailImages");
        var mainImageMirrorDiv = $(".detail-thumb-container .row");



        function acrouselImages(items){
        for(var i = 0; i < items.length; i++){
        var image = items[i].imageName.split(",")[0].trim();
        var carouselImages = `   <div class="sub-image">
                                        <img src="images/`+image+`" alt="`+image+`">
                                </div>`;
            carouselDiv.append(carouselImages);  
        }
        }

        acrouselImages(itemsArray);





        //function that display the main detail image
        function mainDetailImage(n){
        mainDiv.html("");
        var firstItem = itemsArray[n].imageName.split(",");
        for(var i = 0; i < firstItem.length; i++){
        var image =  firstItem[i].trim();
        var items = `<div class="detailImages">
                        <img src="images/`+image+`" alt="`+image+`">
                    </div>`;
            mainDiv.append(items);
        }  
        }




        //function the displays the mirror images on the detail side bar section
        function mainImageMirror(n){
            mainImageMirrorDiv.html("");
            var items = itemsArray[n].imageName;
            if(items){
                var imageNameArray = items.split(",");
                for(var i = 0; i < imageNameArray.length; i++){
                    var image = imageNameArray[i].trim();

                var mirror = `<div class="col-lg-4 col-md-4 col-sm-3 col-4 detail-thumb">
                                    <div class="detail-thumb-image">
                                        <img src="images/`+image+`" alt="`+image+`">
                                    </div>
                            </div>`;
                    mainImageMirrorDiv.append(mirror);
                }
            }

        }





        //function that initializes all function from the beginning
        function init(){
            var index = 0;
                mainDetailImage(index);
                var item = carouselDiv.children();
                   $(item[index]).find(".sub-image").addClass("active-image");
                    mainImageMirror(index)

            }
            init()  //funciton that initializes all  function from the beginning



            var next = $(".direction .fa-angle-right");
            var prev = $(".direction .fa-angle-left");
             var itemSize = $(mainDiv.children()[0]).width() + parseInt($(mainDiv.children()[0]).css("margin-right"));

            //   function that swipes main image
            function swipper(a, b){
                mainDiv.css({
                transition: b,
                transform: "translate("+(-itemSize * a)+"px)"
                });
            }
            swipper(counter, value);


            // main next button function
            next.click(function(event){
                if(counter < mainDiv.children().length - 1){
                    counter++;
                    swipper(counter, "all 1s ease");
                    activeCarousel(carousel.children(), counter);
                }
            });

            //    main previous button function
            prev.click(function(event){
                if(counter > 0){
                    counter--;
                    swipper(counter, "all 1s ease");
                    activeCarousel(carousel.children(), counter);
                }
            });


           




        var mainFirstItem = swipeItems.children()[0];
        var counter = 0, initialPosition = 0, isMoving = false, isDown = false, value = "none", change;
        var itemsWidth = 0, itemsMarginRight = 0, totalWidth = 0;
        var itemsPositionArray = [];
        var counterArray = [];

        for(var i = 0; i < swipeItems.length; i++){
            swipeItems[i].id = i;
            itemsPositionArray.push(0);
            counterArray.push(0);
        }

        var itemsPosition = 0;

        function mouseStart(event){
                isDown = true;
                itemsWidth = $(event.target).parent().width();
                itemsMarginRight = parseInt($(event.target).parent().css("margin-right"));
                totalWidth = itemsWidth + itemsMarginRight;

                initialPosition = ($(window).width() < 876) ? event.touches[0].clientX : event.pageX;
                var framePosition = $(this).css("transform");
                    if(framePosition !== "none"){
                    var position = parseInt(framePosition.split(",")[4].trim());
                    var index = $(this).attr("id");

                    itemsPositionArray[index] = position;

                    } 
        }


        function mouseMove(event){
                var index = $(this).attr("id");
                var movingPosition;

                if(isDown){
                    movingPosition = ($(window).width() < 876) ? event.touches[0].clientX : event.pageX;
                    change = movingPosition - initialPosition;
                    $(this).css({
                        transition: "none",
                        transform: "translate("+( itemsPositionArray[index] + change)+"px)",
                    });
                    isMoving = true; 
                }
        }

       

        function touchSwiper(item, count, duration){
                var itemWidth =$($(item).children()[0]).width();
                var itemMarginRight = parseInt($($(item).children()[0]).css("margin-right"));
                var size = itemWidth + itemMarginRight;
                    $(item).css({
                        transition: duration,
                        transform: "translate("+(-size * count)+"px)",
                    });
        }

       function mouseUp(event){
                var childWidth = $($(this).children()[0]).width();
                var parentWidth = $(this).parent().width();
                var index = $(this).attr("id");
                var returnWidth;
                isDown = false;
                if(isMoving){ 
                     returnWidth = $(this).width() +( itemsPositionArray[index] + change);
                    if($(this).children().width() < 100 && returnWidth < parentWidth){
                        touchSwiper($(this), $(this).children().length - 3, "all 0.5s ease");
                    }


            if(change < -totalWidth/5){
                    if(counterArray[index] == $(this).children().length - 1){
                        touchSwiper($(this), counterArray[index], "all 0.5s ease");
                    }else{
                        if($(this).children().width() > 100){
                        counterArray[index]++;
                        touchSwiper($(this), counterArray[index], "all 0.5s ease");
                    
                        activeCarousel(carousel.children(), counterArray[index]) ; 
                   }
                }

            }else if(change > totalWidth/5){
                if(counterArray[index] <= 0){
                        touchSwiper($(this), counterArray[index], "all 0.5s ease");
                    }else{
                        if($(this).children().width() > 100){
                            counterArray[index]--;
                            touchSwiper($(this), counterArray[index], "all 0.5s ease");
                            activeCarousel(carousel.children(), counterArray[index]) ;
                       }
                }
            }else{
                touchSwiper($(this), counterArray[index], "all 1s ease");
            }
            isMoving = false;  
        }
}

 

// checks and get if there are swipers
if(swipeContainer.length > 0){
    var swipeContainerFrame = [];
        for(var i = 0; i < swipeContainer.length; i++){
            swipeContainerFrame.push(0);
        }
    
    $.each(swipeContainer, function(index,current){
      var  imageTrack = $(current).find(swipeItems);
        if($(window).width() < 876){
            if(imageTrack){
                imageTrack.on("touchstart", mouseStart);
                imageTrack.on("touchmove", mouseMove);
                imageTrack.on("touchend", mouseUp);
            }
        }

        var directions = $(current).find(".swipper-direction");   
            if(directions.length > 0){
                var directAngles = $(directions).children();
                var itemsWidth = $(imageTrack).children()[0]
                var   parent = $(imageTrack).parent().width()
                var itemSize = $(itemsWidth).width() + parseInt($(itemsWidth).css("margin-right"))
                   

                if(directAngles.length > 0){
                      $.each(directAngles, function(directIndex, directCurrent){
                         if($(directCurrent).hasClass("fa-angle-right")){
                             $(directCurrent).click(function(event){
                                swipeContainerFrame[index] = imageTrack.width() - (counterArray[index]  * itemSize );
                                 if(parent <= swipeContainerFrame[index]){
                                        counterArray[index]++;
                                        touchSwiper(imageTrack, counterArray[index], "all 0.5s ease");
                                 }
                             });
                         }else if($(directCurrent).hasClass("fa-angle-left")){
                                $(directCurrent).click(function(event){
                                    if(counterArray[index] > 0){
                                        counterArray[index]--;
                                        touchSwiper(imageTrack, counterArray[index], "all 0.5s ease"); 
                                    } 
                            });
                         }
                     });
                }
                imageTrack.on("transitionend", function(event){
                           swipeContainerFrame[index] = imageTrack.width() - (counterArray[index]  * itemSize );
                           if(parent >=  swipeContainerFrame[index]){
                                 touchSwiper(imageTrack, counterArray[index], "all 0.2s ease"); 
                           }
                });
            }

    });
}  







        //this funciton highlights a red border to the click carousel image
        $.each(carouselDiv.children(), function(index, value){
            item = carouselDiv.children();

            $(value).click(function(event){
            counter = 0;
            for(var i = 0; i < counterArray.length; i++){
                 counterArray[i] = 0;
            }
            for(var i = 0; i < item.length; i++){
                 $(item[i]).removeClass("active-image");
            }
            $(this).addClass("active-image");

            mainDetailImage(index);
            mainImageMirror(index);
            swipper(counter, value = "none");
            itemThumMirror(mainImageMirrorDiv.children());
            carouselFunction(mainImageMirrorDiv.children()); //function that creates carousel when clicked
            activeCarousel(carousel.children());
            carouselClick(carousel.children())
            activeCarousel(carousel.children())  

        });


        });
        itemThumMirror(mainImageMirrorDiv.children())




        //function that selects the mirror images
        function itemThumMirror(n){
            $(n).click(function(event){
            var index = $(this).index();
                counter = $(this).index();
                swipper(index, "all 1s ease");
                activeCarousel(carousel.children(), index);
            });
        }





        //function that creates carousel
        var carousel = $(".detail-body .carousel");
        var carouselItems = mainImageMirrorDiv.children();
        function carouselFunction(n){
            carousel.html("");
            for(var i = 0; i < n.length; i++){
                var items = `<span></span>`;
                   carousel.append(items);
            }
            activeCarousel(carousel.children())
        }

        carouselFunction(carouselItems)



            //function that activates the active carousel
            function activeCarousel(n,b){
            var index = 0;
                if(b){
                    index = b;
                }
                for(var i = 0; i < n.length; i++){
                    $(n[i]).removeClass("active-detail-image");
                    }
                    $(n[index]).addClass("active-detail-image");
                }



            //carosel click function
            var carouselClickItems = carousel.children();
            function carouselClick(n){
                $(n).click(function(event){
                    var index = $(this).index();
                        swipper(index, "all 1s ease");
                        activeCarousel($(n), index);
                        counter = index;
                });
            }
            carouselClick(carouselClickItems)


        }


//**********************************************************************************//
//                          END                                                    //
//*********************************************************************************//



        var view = $(".customer-viewed-body");
            if(view.length > 0){
                var viewFrame = $(".viewed-container");
                var viewNext = $(".view .fa-angle-right");
                var viewPrev = $(".view .fa-angle-left");
                var viewWidth = $(viewFrame.children()[0]).width() + parseInt($(viewFrame.children()[0]).css("margin-right"));
                var viewCounter = 0;
                function viewSwiper(a, b, c){
                viewFrame.css({
                transition: c,
                transform: "translate("+(-a * b)+"px)",
            });
        }

        // viewNext.click(function(event){
        // if(viewFrame.width() - (viewWidth * viewCounter) > view.width()){
        //     viewCounter++;
        //     viewSwiper(viewWidth,viewCounter, "all 1s ease" );
        //     viewPrev.css("display", "block")
        // }else{
        //    viewNext.css("display", "none")
        // }
        // });

        // viewPrev.click(function(event){
        // if(viewCounter >= 1){
        //     viewCounter--;
        //     viewSwiper(viewWidth,viewCounter, "all 1s ease" );
        //     viewNext.css("display", "block")
        // }else{
        //     viewPrev.css("display", "none")
        // }
        // });

        // if(viewCounter <= 0){
        //     viewPrev.css("display", "none")
        // }


    }

        })()
         // end of document ready function
        });



     


      
      