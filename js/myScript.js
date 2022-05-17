let typeSite = $('#typeSite');
let typeDesign = $('#design');
let adapatability = $('#adapt');
let price = 5000;
let date = 7;
let priceTypeSite = 0;
let priceTypeDesign = 0;
let priceAdaptability = 0;
let daysTS = 0;
let daysTD = 0;
let daysAd = 0;

typeSite.change(function(){
  
  if( $(this).val() == 1) {
     priceTypeSite = 2000;
     daysTS = 5;
  }
    
  if( $(this).val() == 2) {
     priceTypeSite = 0;
     daysTS = 0;
  }
  $('#priceEnd').text(price + priceTypeSite + priceTypeDesign + priceAdaptability);
  $('#dateEnd').text(date + daysTS + daysTD + daysAd + " дней");
});

typeDesign.change(function(){
  
  if( $(this).val() == 1) {
     priceTypeDesign = 1500;
     daysTD = 3;
  }
  if ($(this).val() == 2){
      priceTypeDesign = 3000;
      daysTD = 5;
  }
  if ($(this).val() == 3){
      priceTypeDesign = 5000;
      daysTD = 6;
  }
  $('#priceEnd').text(price + priceTypeSite + priceTypeDesign + priceAdaptability);
  $('#dateEnd').text(date + daysTS + daysTD + daysAd + " дней");
});

adapatability.change(function(){
  
  if( $(this).val() == 1) {
     priceAdaptability = 5000;
     daysAd = 2;
  }
  if( $(this).val() == 2) {
     priceAdaptability = 0;
     daysAd = 0;
  }
    
  $('#priceEnd').text(price + priceTypeSite + priceTypeDesign + priceAdaptability);
  $('#dateEnd').text(date + daysTS + daysTD + daysAd + " дней");
});
                      
$('#priceEnd').text(price);
$('#dateEnd').text(date + " дней");
                      
 


setTimeout(function() { $("#elem").show('slow'); }, 40000);
$('.btn-close').click(function(){
    $('#elem').hide('slow');
});

$('.btn-closed').click(function(){
    $('#elem').hide('slow');
});



$(document).ready(function() {
    new WOW().init();
    $("#inputTel").mask("+7(999) 999-9999");
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

