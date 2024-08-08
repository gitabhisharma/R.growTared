	$(window).scroll(function() {
	    var mobile_height = $(".home_wraper").innerHeight();
	    var banner_height = $(".about_banner_slider").innerHeight();
	    var tab_height = $(".add_strip").innerHeight();
	    var total_height_lpus = banner_height + mobile_height;
	    var total_height = total_height_lpus - 87;
	    var scroll = $(window).scrollTop();
	    if (scroll >= total_height) {
	        $(".about_scrol_nav").addClass("strip_sticky");
	    } else {
	        $(".about_scrol_nav").removeClass("strip_sticky");
	    }

	    var services_height = $(".news_media_banner").innerHeight();
	    var total_height_services_plus = mobile_height + services_height;
	    var total_height_secvice = total_height_services_plus - 87;

	    var scroll = $(window).scrollTop();
	    if (scroll >= total_height_secvice - tab_height) {
	        $(".add_strip").addClass("strip_sticky");
	    } else {
	        $(".add_strip").removeClass("strip_sticky");
	    }


	    if ($(window).innerWidth() > 1681) {
	        $(".strip_sticky").css("top", 88.34);
	    }
	    if ($(window).innerWidth() < 1681) {
	        $(".strip_sticky").css("top", 83);
	    }
	    if ($(window).innerWidth() < 1281) {
	        $(".strip_sticky").css("top", 77);
	    }
	    if ($(window).innerWidth() < 992) {
	        $(".strip_sticky").css("top", 60);
	    }

	});


	$(document).ready(function() {

	    $('.count').each(function() {
	        $(this).prop('Counter', 0).animate({
	            Counter: $(this).text()
	        }, {
	            duration: 4000,
	            easing: 'swing',
	            step: function(now) {
	                $(this).text(Math.ceil(now));
	            }
	        });
	    });

	    $(".openSubMenu").click(function() {
	        if ($(this).parent().hasClass("open") == false) {
	            $(".mainLeftMenu li").removeClass("open");
	            $(this).parent().addClass("open");
	        } else {
	            $(".mainLeftMenu li").removeClass("open");
	        }
	    })

	    $('ul.dropdown-menu').find('li a').on('click', function(event) {
	        var current_val = $(this).text();
	        $('.moblile_dropdown').find('.myDropdown').html(current_val + '<span class="dropdown_down_icon fa fa-angle-down"></span>');

	        $('.dropdown-menu li a').removeClass('active');
	    });
	    $('.dropdown-menu li a').click(function() {
	        $(this).addClass('active');
	        $('.dropdown-menu li').removeClass('active');
	    });


	    $(".add_strip ul li a").on('click', function(event) {
	        var target = $(this).attr("href");

	        if ($(window).innerWidth() > 767) {
	            setTimeout(function() {
	                $('html,body').animate({
	                    scrollTop: ($(target).offset().top - 120)
	                }, 'slow');
	            }, 100)
	        }
	        if ($(window).innerWidth() < 768) {
	            setTimeout(function() {
	                $('html,body').animate({
	                    scrollTop: ($(target).offset().top - 93)
	                }, 'slow');
	            }, 100)
	        }
	    })

	    $('.about_scrol_nav ul li').on('click', function() {
	        $('.about_scrol_nav ul li.active').removeClass('active');
	        $(this).addClass('active');
	    });

	    var mySwiper = new Swiper('.oprc_slider', {
	        autoplay: {
	            delay: 5000,
	        },
	        loop: true,
	        speed: 1000,
	    });

	    $('.directors_img_div').hover(function() {
	        var aboutID = $(this).attr('data-aboutID');
	        $('.director_container').attr('style', 'display:none');
	        $('.directors_img_div img').removeClass('active');
	        $('div[data-aboutID="' + aboutID + '"] img').addClass('active');
	        $('#' + aboutID).attr('style', 'display:block');
	    });
	    $('div[data-aboutID="Pravinbhai"] img').addClass('active');
	    $('#Pravinbhai').attr('style', 'display:block');


	    $('.directors_img_div_key_management').hover(function() {
	        var aboutID = $(this).attr('data-aboutID');
	        $('.key_management_container').attr('style', 'display:none');
	        $('.directors_img_div_key_management img').removeClass('active');
	        $('div[data-aboutID="' + aboutID + '"] img').addClass('active');
	        $('#' + aboutID).attr('style', 'display:block');
	    });
	    $('div[data-aboutID="Jay"] img').addClass('active');
	    $('#Jay').attr('style', 'display:block');


	    var height = $(".parentHeaderWrapper").innerHeight();

	    if ($(window).innerWidth() > 769) {
	        $(".contentWrapper").css("margin-top", height);
	    }
	    if ($(window).innerWidth() < 992) {
	        var mobile_height = $(".parentHeaderWrapper").innerHeight();
	        $(".contentWrapper").css("margin-top", mobile_height);
	    }

	    $("#enquiry_form").validate({
	        rules: {
	            first_name: "required",
	            last_name: "required",
	            contact: {
	                required: true,
	                number: true,
	                minlength: 10,
	                maxlength: 10
	            },
	            message: {
	                required: true
	            },
	            email: {
	                required: true,
	                email: true
	            }
	        },
	        messages: {
	            first_name: "Please enter your first name",
	            last_name: "Please enter your last name",
	            contact: {
	                required: "Please enter your contact number",
	                number: "Please enter numbers only",
	                minlength: "please must be enter 10 digits",
	                maxlength: "please must be enter 10 digits"
	            },
	            message: {
	                required: "Please enter your message",
	            },
	            email: {
	                required: "Please enter your email address",
	                email: "please enter correct email address"
	            }
	        }
	    });
	    if (location.hash == "#our_speciality") {
	        $('html, body').animate({
	            scrollTop: $("#our_speciality_div").offset().top - 30
	        }, 1000);
	    }

	    var product4Swipe = new Swiper('.slider_section_4', {
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        spaceBetween: 20,
	        speed: 700,
	        keyboardControl: true,
	        onSlideChangeStart: function() {
	            $(".slider_thumbs_4 .swiper-slide").removeClass('swiper-slide-active2');
	            $(".slider_thumbs_4 .swiper-slide").each(function() {
	                var tabIndex = $(this).attr("tabindex");
	                if (tabIndex == product4Swipe.activeIndex) {
	                    $(this).addClass('swiper-slide-active2');
	                    thumbs4.slideTo(product4Swipe.activeIndex);
	                }
	            });
	            if (product4Swipe.activeIndex === 0) {
	                thumbs4.slideTo(0);
	            }
	        }
	    });
	    var thumbs4 = new Swiper('.slider_thumbs_4', {
	        spaceBetween: 10,
	        centeredSlides: false,
	        slidesPerView: 'auto',
	        touchRatio: 0.2,
	        slideToClickedSlide: true,
	        speed: 700,

	    });
	    product4Swipe.params.control = thumbs4;
	    thumbs4.params.control = product4Swipe;

	    $(".slider_thumbs_4 .swiper-slide").click(function(e) {
	        product4Swipe.slideTo($(this).attr("tabindex"));
	    });


	    var product3Swipe = new Swiper('.slider_section_3', {
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        spaceBetween: 20,
	        speed: 700,
	        keyboardControl: true,
	        onSlideChangeStart: function() {
	            $(".slider_thumbs_3 .swiper-slide").removeClass('swiper-slide-active2');
	            $(".slider_thumbs_3 .swiper-slide").each(function() {
	                var tabIndex = $(this).attr("tabindex");
	                if (tabIndex == product3Swipe.activeIndex) {
	                    $(this).addClass('swiper-slide-active2');
	                    thumbs3.slideTo(product3Swipe.activeIndex);
	                }
	            });
	            if (product3Swipe.activeIndex === 0) {
	                thumbs3.slideTo(0);
	            }
	        }
	    });
	    var thumbs3 = new Swiper('.slider_thumbs_3', {
	        spaceBetween: 10,
	        centeredSlides: false,
	        slidesPerView: 'auto',
	        touchRatio: 0.2,
	        slideToClickedSlide: true,
	        speed: 700,

	    });
	    product3Swipe.params.control = thumbs3;
	    thumbs3.params.control = product3Swipe;

	    $(".slider_thumbs_3 .swiper-slide").click(function(e) {
	        product3Swipe.slideTo($(this).attr("tabindex"));
	    });

	    var product2Swipe = new Swiper('.slider_section_2', {
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        spaceBetween: 20,
	        speed: 700,
	        keyboardControl: true,
	        onSlideChangeStart: function() {
	            $(".slider_thumbs_2 .swiper-slide").removeClass('swiper-slide-active2');
	            $(".slider_thumbs_2 .swiper-slide").each(function() {
	                var tabIndex = $(this).attr("tabindex");
	                if (tabIndex == product2Swipe.activeIndex) {
	                    $(this).addClass('swiper-slide-active2');
	                    thumbs2.slideTo(product2Swipe.activeIndex);
	                }
	            });
	            if (product2Swipe.activeIndex === 0) {
	                thumbs2.slideTo(0);
	            }
	        }
	    });
	    var thumbs2 = new Swiper('.slider_thumbs_2', {
	        spaceBetween: 10,
	        centeredSlides: false,
	        slidesPerView: 'auto',
	        touchRatio: 0.2,
	        slideToClickedSlide: true,
	        speed: 700,

	    });
	    product2Swipe.params.control = thumbs2;
	    thumbs2.params.control = product2Swipe;

	    $(".slider_thumbs_2 .swiper-slide").click(function(e) {
	        product2Swipe.slideTo($(this).attr("tabindex"));
	    });
	    /* var galleryTop = new Swiper('.slider_section_3', {
	         nextButton: '.swiper-button-next',
	         prevButton: '.swiper-button-prev',
	         spaceBetween: 20,
	         speed:700,
	         keyboardControl:true,
	     });
	     var galleryThumbs = new Swiper('.slider_thumbs_3', {
	         spaceBetween: 10,
	         centeredSlides: true,
	         slidesPerView: 'auto',
	         touchRatio: 0.2,
	         slideToClickedSlide: false,
	         speed:700,
	         
	     });
	      galleryTop.params.control = galleryThumbs;
	     galleryThumbs.params.control = galleryTop;*/

	    /* var galleryTop = new Swiper('.slider_section_2', {
	         nextButton: '.swiper-button-next',
	         prevButton: '.swiper-button-prev',
	         spaceBetween: 20,
	         speed:700,
	         keyboardControl:true,
	     });
	     var galleryThumbs = new Swiper('.slider_thumbs_2', {
	         spaceBetween: 10,
	         centeredSlides: true,
	         slidesPerView: 'auto',
	         touchRatio: 0.2,
	         slideToClickedSlide: false,
	         speed:700,
	         
	     });
	      galleryTop.params.control = galleryThumbs;
	     galleryThumbs.params.control = galleryTop;*/

	    /*var galleryTop = new Swiper('.slider_section_1', {
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        spaceBetween: 20,
	        speed:700,
	        keyboardControl:true,
	    });
	    var galleryThumbs = new Swiper('.slider_thumbs_1', {
	        spaceBetween: 10,
	        centeredSlides: true,
	        slidesPerView: 'auto',
	        touchRatio: 0.2,
	        slideToClickedSlide: false,
	        speed:700,
	        
	    });
	    galleryTop.params.control = galleryThumbs;
	    galleryThumbs.params.control = galleryTop;*/

	    var product1Swipe = new Swiper('.slider_section_1', {
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        spaceBetween: 20,
	        speed: 700,
	        keyboardControl: true,
	        onSlideChangeStart: function() {
	            $(".slider_thumbs_1 .swiper-slide").removeClass('swiper-slide-active2');
	            $(".slider_thumbs_1 .swiper-slide").each(function() {
	                var tabIndex = $(this).attr("tabindex");
	                if (tabIndex == product1Swipe.activeIndex) {
	                    $(this).addClass('swiper-slide-active2');
	                    thumbs1.slideTo(product1Swipe.activeIndex);
	                }
	            });
	            if (product1Swipe.activeIndex === 0) {
	                thumbs1.slideTo(0);
	            }
	        }
	    });
	    var thumbs1 = new Swiper('.slider_thumbs_1', {
	        spaceBetween: 10,
	        centeredSlides: false,
	        slidesPerView: 'auto',
	        touchRatio: 0.2,
	        slideToClickedSlide: true,
	        speed: 700,

	    });
	    product1Swipe.params.control = thumbs1;
	    thumbs1.params.control = product1Swipe;

	    $(".slider_thumbs_1 .swiper-slide").click(function(e) {
	        product1Swipe.slideTo($(this).attr("tabindex"));
	    });

	    $(".gallery-thumbs .swiper-slide").each(function() {
	        var tabIndex = $(this).attr("tabindex");
	        if (tabIndex == 0) {
	            $(this).addClass('swiper-slide-active2');
	        }
	    });


	    var hash = window.location.hash;

	    if (hash != "") {
	        $('#tabs li').each(function() {
	            $(this).removeClass('active in');
	        });
	        $('#tabPnael div').each(function() {
	            $(this).removeClass('active in');
	        });
	        var link = "";
	        $('#tabs li').each(function() {
	            link = $(this).find('a').attr('href');
	            if (link == hash) {
	                $(this).addClass('active in');
	            }
	        });
	        $('#tabPnael div').each(function() {
	            link = $(this).attr('id');
	            if ('#' + link == hash) {
	                $(this).addClass('active in');
	            }
	        });
	    }

	    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
	        event.preventDefault();
	        event.stopPropagation();
	        $(this).parent().siblings().removeClass('open');
	        $(this).parent().toggleClass('open');
	    });
	    $("#loading").fadeOut('slow');


	    var swiper = new Swiper('#swiper_slider_cust', {
	        pagination: '.swiper-pagination',
	        //nextButton: '.swiper-button-next',
	        //prevButton: '.swiper-button-prev',
	        slidesPerView: 4.5,
	        paginationClickable: true,
	        spaceBetween: 30,
	        slidesOffsetBefore: 105,
	        /*======332====*/
	        freeMode: true,
	        shortSwipes: false,
	        longSwipes: false,
	        simulateTouch: false,
	        breakpoints: {
	            // when window width is <= 320px
	            320: {
	                slidesPerView: 1,
	                slidesOffsetBefore: 0,
	            },
	            // when window width is <= 480px
	            400: {
	                slidesPerView: 2,
	                slidesOffsetBefore: 0,
	            },
	            // when window width is <= 640px
	            600: {
	                slidesPerView: 3,
	                slidesOffsetBefore: 0,
	            }
	        }
	    });

	    var swiper = new Swiper('#swiper_slider_quality', {
	        pagination: '.swiper-pagination',
	        slidesPerView: 1,
	        paginationClickable: true,
	        nextButton: '.next_two',
	        prevButton: '.prev_two',
	    });
	    $(".navbar-toggle").click(function() {
	        $(".mobileOverlay").toggleClass("seeOverlay");
	    })

	    $("body").on("click", ".seeOverlay", function() {
	        document.getElementById('click').click()
	    })


	    $("body").on("click", ".headerLinksWrapper .dropdown li", function() {
	        $(".headerLinksWrapper .dropdown li").removeClass("active");
	        $(this).addClass("active");
	    })

	    $('.dl-submenu li a').click(function(e) {
	        $('.dl-submenu li').removeClass('active');
	        var $parent = $(this).parent();
	        if (!$parent.hasClass('active')) {
	            $parent.addClass('active');
	        }
	        e.preventDefault();
	    });

	    var swiper = new Swiper('.product_swiper.swiper-container', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        spaceBetween: 30,
	        loop: true,
	        grabCursor: true
	    });

	    var $btn = $('.btn-menu');
	    $btn.click(function() {
	        $('body').toggleClass('show');
	    })

	    var $overlay = $('.overlay');
	    $overlay.click(function() {
	        $('body').toggleClass('show');
	    })

	    if ($(window).innerWidth() < 767) {
	        $(".caret_menu").click(function(e) {
	            e.stopPropagation();
	            e.preventDefault();
	            var _id = "." + $(this).attr("id");
	            var _hasClass = $(_id).hasClass("showmenu");

	            if (_hasClass) {
	                $(_id).removeClass("showmenu");
	            } else {
	                $(_id).addClass("showmenu");
	            }
	        });


	    }

	    // $('.banner_text').css('display','none');
	    // $('.wonder_clean_text1').css('display','block');
	    // $('.common a').click(function(){

	    // 	var data = $(this).attr('data-id');
	    // 	$('.banner_text').css('display','none');
	    // 	$('.'+data).css('display','block');
	    // });

	    $('.product_details_1').css("display", "none");
	    $('.pro_js').css("display", "none");
	    $('.open_popup_1').click(function() {
	        $('.product_details_1').fadeIn("fast");
	        $('.product_details_1').addClass("animated fadeIn produt_popup");
	        $('.pro_js').addClass("product_overlay");
	        $('.pro_js').css("display", "block");
	    });
	    $('.close').click(function() {
	        $('.product_details_1').removeClass("animated fadeOut produt_popup");
	        $('.pro_js').removeClass("product_overlay");
	        $('.pro_js').css("display", "none");
	        $('.product_details_1').fadeOut("fast");
	    });


	    $('.product_details_2').css("display", "none");
	    $('.open_popup_2').click(function() {
	        $('.product_details_2').fadeIn("fast");
	        $('.product_details_2').addClass("animated fadeIn produt_popup");
	        $('.pro_js').addClass("product_overlay");
	        $('.pro_js').css("display", "block");
	    });
	    $('.close').click(function() {
	        $('.product_details_2').removeClass('animated fadeIn produt_popup');
	        $('.pro_js').removeClass("product_overlay");
	        $('.pro_js').css("display", "none");
	        $('.product_details_2').fadeOut("fast");
	    });


	    $('.product_details_3').css("display", "none");
	    $('.open_popup_3').click(function() {
	        $('.product_details_3').fadeIn("fast");
	        $('.product_details_3').addClass("animated fadeIn produt_popup");
	        $('.pro_js').addClass("product_overlay");
	        $('.pro_js').css("display", "block");
	    });
	    $('.close').click(function() {
	        $('.product_details_3').removeClass("animated fadeOut produt_popup");
	        $('.pro_js').removeClass("product_overlay");
	        $('.pro_js').css("display", "none");
	        $('.product_details_3').fadeOut("fast");
	    });


	    $('.product_details_4').css("display", "none");
	    $('.open_popup_4').click(function() {
	        $('.product_details_4').fadeIn("fast");
	        $('.product_details_4').addClass("animated fadeIn produt_popup");
	        $('.pro_js').addClass("product_overlay");
	        $('.pro_js').css("display", "block");
	    });
	    $('.close').click(function() {
	        $('.product_details_4').removeClass("animated fadeOut produt_popup");
	        $('.pro_js').removeClass("product_overlay");
	        $('.pro_js').css("display", "none");
	        $('.product_details_4').fadeOut("fast");
	    });

	    $(window).scroll(function() {

	        var scroll = $(window).scrollTop();
	        $(".a-green").css("transform", "translateY(+" + (scroll / 12) + "px)");

	        var scroll = $(window).scrollTop();
	        $(".a-boulcup").css("transform", "translateY(-" + (scroll / 30) + "px)");

	    });

	    $('.SeeMore2').click(function() {
	        var $this = $(this);
	        $this.toggleClass('SeeMore2 Seeless');
	        if ($this.hasClass('SeeMore2')) {
	            $this.text('READ MORE');
	            $(this).html('<i class="fa fa-arrow-right"></i> READ MORE');
	        } else {
	            $this.text('VIEW LESS');
	            $(this).html('<i class="fa fa-arrow-left"></i> READ LESS');
	        }
	    });

	})

	function clicking(hash) {
	    if (hash != "") {
	        $('#tabs li').each(function() {
	            $(this).removeClass('active in');
	        });
	        $('#tabPnael div').each(function() {
	            $(this).removeClass('active in');
	        });
	        var link = "";
	        $('#tabs li').each(function() {
	            link = $(this).find('a').attr('href');
	            console.log(link);
	            if (link == hash) {
	                $(this).addClass('active in');
	            }
	        });
	        $('#tabPnael div').each(function() {
	            link = $(this).attr('id');
	            if ('#' + link == hash) {
	                $(this).addClass('active in');
	            }
	        });
	    }
	}

	if ($(window).innerWidth() > 767) {
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop();
	        $(".section-parallax").css("transform", "translateY(-" + (scroll / 2) + "px)");

	        var scroll = $(window).scrollTop();
	        if (scroll > 70) {
	            $(".parentHeaderWrapper").addClass("stickyHeader logo_small_width");
	        } else {
	            $(".parentHeaderWrapper").removeClass("stickyHeader logo_small_width");
	        }
	    })
	}

	if ($(window).innerWidth() < 768) {
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop();
	        if (scroll > 70) {
	            $(".parentHeaderWrapper").css({
	                "background": "rgba(255,255,255,1)",
	                "-webkit-box-shadow": "3px 2px 14px -1px rgba(0,0,0,0.75)",
	                "-moz-box-shadow": "3px 2px 14px -1px rgba(0,0,0,0.75)",
	                "box-shadow": "3px 2px 14px -1px rgba(0,0,0,0.75)",
	                "padding": "6px 0 3px 0"
	            });
	        } else {
	            $(".parentHeaderWrapper").css({
	                "background": "rgba(255, 255, 255, 1)",
	                "-webkit-box-shadow": "none",
	                "-moz-box-shadow": "none",
	                "box-shadow": "none",
	                "padding": "18px 0 0 0"
	            });
	        }
	    })
	}

	if ($(window).innerWidth() < 500) {
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop();
	        if (scroll > 70) {
	            $(".parentHeaderWrapper").css({
	                "background": "rgba(255,255,255,1)",
	                "-webkit-box-shadow": "3px 2px 14px -1px rgba(0,0,0,0.75)",
	                "-moz-box-shadow": "3px 2px 14px -1px rgba(0,0,0,0.75)",
	                "box-shadow": "3px 2px 14px -1px rgba(0,0,0,0.75)",
	                "padding": "6px 0 3px 0"
	            });
	        } else {
	            $(".parentHeaderWrapper").css({
	                "background": "rgba(255, 255, 255, 1)",
	                "-webkit-box-shadow": "none",
	                "-moz-box-shadow": "none",
	                "box-shadow": "none",
	                "padding": "18px 0 0 0"
	            });
	        }
	    })
	}


	var loadImg = function() {
	    $('.lazy_img').animate({
	        'opacity': 1
	    }, 500);
	    $('.img_bg').css('background', 'transparent');
	}
	wow = new WOW({
	    boxClass: 'wow',
	    animateClass: 'animated',
	    offset: 50,
	    mobile: true,
	    live: true
	})
	wow.init();


	function OpenMobileMenu() {
	    $('body').attr('style', 'overflow:hidden;');
	    $(".navbar-collapse").stop().animate({
	        "right": "0"
	    }, "slow", function() {
	        $(".mobile_close ").fadeIn();
	    });
	}

	function CloseMobileMenu() {
	    $('body').removeAttr('style');
	    $(".mobile_close ").fadeOut();
	    $(".navbar-collapse").stop().animate({
	        "right": "-100%"
	    }, "slow");
	    $(".submenu").removeClass("showmenu");
	}