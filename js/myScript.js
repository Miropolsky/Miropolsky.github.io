let typeSite = $('#typeSite');
let typeDesign = $('#design');
let adapatability = $('#adapt');
let price = 5000;
let priceTypeSite = 0;
let priceTypeDesign = 0;
let priceAdaptability = 0;

typeSite.change(function(){
  
  if( $(this).val() == 1) {
     priceTypeSite = 2000;
  }
    
  if( $(this).val() == 2) {
     priceTypeSite = 0;
  }
  $('#priceEnd').text(price + priceTypeSite + priceTypeDesign + priceAdaptability);
});

typeDesign.change(function(){
  
  if( $(this).val() == 1) {
     priceTypeDesign = 1500;
  }
  if ($(this).val() == 2){
      priceTypeDesign = 3000;
  }
  if ($(this).val() == 3){
      priceTypeDesign = 5000;
  }
  $('#priceEnd').text(price + priceTypeSite + priceTypeDesign + priceAdaptability);
});

adapatability.change(function(){
  
  if( $(this).val() == 1) {
     priceAdaptability = 5000;
  }
  if( $(this).val() == 2) {
     priceAdaptability = 0;
  }
    
  $('#priceEnd').text(price + priceTypeSite + priceTypeDesign + priceAdaptability);
  
});
                      
$('#priceEnd').text(price);
                      
                      
                 
                 
    
    
    


/*let price = 500;
let data = 3;

let calculate = {
    site: typeSite,
    design: typeDesign,
    adapt: adaptability,
    
    
    showCalculate(){
        if(calculate.site === 1){
            price += 2000;
            data += 3;
        }
        
        if (calculate.design === 1){
            price += 1500;
            data += 3;
        }
        
        if (calculate.design === 2){
            price += 3000;
            data += 5;
        }
        
        if (calculate.adapt === 1){
            price += 5000;
            data += 2;
        }
        
        priceEnd.innerHTML = price;
        
    }
};*/






setTimeout(function() { $("#elem").show('slow'); }, 10000);
$('.btn-close').click(function(){
    $('#elem').hide('slow');
});

$('.btn-closed').click(function(){
    $('#elem').hide('slow');
});



$(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
    
    
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();
        $(".section").each((i, el) => {
            if($(el).offset().top  - $("nav").outerHeight() <= scrollDistance){
                $("nav a").each((i, el) => {
                    if($(el).hasClass("active")) {
                        $(el).removeClass("active");
                    }
                });
                $('nav li:eq('+ i +')').find('a').addClass("active");
            }
        });
    });
    
    $('a[href^="#"]').click(function() {
        let valHref = $(this).attr("href");
        $('html, body').animate({scrollTop: $(valHref).offset().top - 20 + 'px'});
    });
    
    let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let observerImg = new IntersectionObserver(onphoto, options);
    let elements = $(".element-animation");
    let elementsImg = $('.apdateImg');
    
    elementsImg.each((i,el) => {
        observerImg.observe(el);
    })
    
    elements.each((i,el) => {
        observer.observe(el);
    });
});

function onEntry (entry) {
    entry.forEach(change =>{
        if (change.isIntersecting){
            change.target.classList.add('show-animation')
        }
    });
};

function onphoto(entry) {
    entry.forEach(change =>{
        if (change.isIntersecting){
            change.target.src = change.target.dataset.src;
        }
    });
};

