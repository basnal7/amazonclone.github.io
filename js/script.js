$(document).ready(function(){
     
    $('.items').slick({
 infinite: true,
 slidesToShow: 7,
 slidesToScroll: 3,
 responsive: [
   {
     breakpoint: 1024,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 3,
       infinite: true
      
     }
   },
   {
     breakpoint: 600,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 2,
       infinite: true
     }
   },
   {
     breakpoint: 480,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       infinite: true
     }
   }
   
 ]
});
         });

         $(document).ready(function(){
     
            $('.craft').slick({
         infinite: true,
         slidesToShow: 6,
         slidesToScroll: 3,
         responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            
          ]
        });
                 });