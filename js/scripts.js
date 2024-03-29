"use strict";

function initMap() { {
        var e = {
                lat: 34.0522342,
                lng: -118.2436849
            },
            n = new google.maps.Map(document.getElementById("contact-map"), {
                center: e,
                scrollwheel: !1,
                zoom: 15
            }),
            t = "media/images/marker.png";
        new google.maps.Marker({
            map: n,
            icon: t,
            position: e,
            title: "OUR LOCATON!"
        })
    }
}

function sendmail_1() {
    var e = $("#gq-form").serialize();
    $.ajax({
        type: "POST",
        url: "sendmail.php",
        data: e + "&formname=get_quote",
        success: function(e) {
            $(".send-result").html(e)
        }
    })
}

function sendmail_2() {
    var e = $("#contact-form").serialize();
    $.ajax({
        type: "POST",
        url: "sendmail.php",
        data: e + "&formname=contact",
        success: function(e) {
            $(".send-result").html(e)
        }
    })
}
$(window).on("load", function() {
        var e = $(window).width(),
            n = 1280,
            t = 1080;
        e > 640 ? (n = 1280, t = 1080) : (n = 2e3, t = 1480), $(
            "#main-slider-1").sliderPro({
            width: 2560,
            height: n,
            fade: !0,
            arrows: !1,
            buttons: !1,
            waitForLayers: !0,
            autoplay: !0,
            autoplayDelay: 8e3,
            autoplayOnHover: "pause",
            autoScaleLayers: !1
        });
        var i = $("#main-slider-1").data("sliderPro");
        $(".main-slider-button-prev").on("click", function() {
            return i.previousSlide(), !1
        }), $(".main-slider-button-next").on("click", function() {
            return i.nextSlide(), !1
        }), $("#transbo-slider").sliderPro({
            width: 2560,
            height: t,
            fade: !0,
            arrows: !1,
            buttons: !1,
            waitForLayers: !0,
            autoplay: !1,
            autoplayDelay: 8e3,
            autoplayOnHover: "pause",
            autoScaleLayers: !1
        });
        var o = $("#transbo-slider").data("sliderPro");
        $(".slider-btn-prev").on("click", function() {
            return o.previousSlide(), !1
        }), $(".slider-btn-next").on("click", function() {
            return o.nextSlide(), !1
        }), $("#preloader").fadeOut("500", function() {
            $(this).remove()
        }), $.stellar({
            horizontalScrolling: !1,
            verticalOffset: 0
        })
    }), (new WOW).init(),
    function(e) {
        var n = e(window).width();
        e("#main-slider-1").height(n / 2 + "px"), e("#show-search").on("click",
                function() {
                    return e(
                        "#main-logo, #main-menu li, #show-search, #show-menu"
                    ).fadeOut("300", function() {
                        setTimeout(function() {
                            e(
                                    "#main-search-input, #close-search"
                                ).fadeIn(300), e("#main-search")
                                .focus(), e("#main-navbar").css(
                                    "border-bottom",
                                    "1px solid")
                        }, 400)
                    }), !1
                }), e("#close-search").on("click", function() {
                return e("#main-navbar").css("border-bottom", "none"), e(
                    "#main-search-input, #close-search").fadeOut("300",
                    function() {
                        setTimeout(function() {
                            e(
                                "#main-logo, #main-menu li, #show-search, #show-menu"
                            ).fadeIn(300)
                        }, 400)
                    }), !1
            }), e("*").is("#service-mark") && (e("#service-mark").on(
                "scrollSpy:enter", function() {
                    e("#service-mark").children(".service-mark-border-top")
                        .css("left", "0"), setTimeout(function() {
                            e("#service-mark").children(
                                ".service-mark-border-right").css(
                                "top", "0")
                        }, 300), setTimeout(function() {
                            e("#service-mark").children(
                                ".service-mark-border-bottom").css(
                                "right", "0")
                        }, 600), setTimeout(function() {
                            e("#service-mark").children(
                                ".service-mark-border-left").css(
                                "bottom", "0")
                        }, 900), setTimeout(function() {
                            e("#service-mark").addClass("service-mark")
                        }, 1200)
                }), e("#service-mark").scrollSpy()), e("*").is("#countdown") &&
            (e("#countdown").on("scrollSpy:enter", function() {
                e("#num1").animate({
                    num: 444
                }, {
                    duration: 3e3,
                    step: function(e) {
                        this.innerHTML = (e + 3).toFixed(0)
                    }
                }), e("#num2").animate({
                    num: 413
                }, {
                    duration: 3300,
                    step: function(e) {
                        this.innerHTML = (e + 3).toFixed(0)
                    }
                }), e("#num3").animate({
                    num: 139
                }, {
                    duration: 3600,
                    step: function(e) {
                        this.innerHTML = (e + 3).toFixed(0)
                    }
                }), e("#num4").animate({
                    num: 15
                }, {
                    duration: 3900,
                    step: function(e) {
                        this.innerHTML = (e + 3).toFixed(0)
                    }
                })
            }), e("#countdown").scrollSpy());
        var t = document.getElementById("aboutvideo"),
            i = e("#play-video"),
            o = e("#stop-video");
            
        i.on("click", function() {
            return t.play(), i.css("display", "none"), o.css("display",
                "block"), !1
        }), o.on("click", function() {
            return t.pause(), o.css("display", "none"), i.css("display",
                "block"), !1
        });
        var a = e("#owl-review");
        a.owlCarousel({
            items: 1,
            itemsDesktop: [1e3, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [600, 1]
        });
        var r = e("#owl-clients");
        r.owlCarousel({
            items: 4,
            itemsDesktop: [1e3, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [600, 1],
            pagination: !1
        }), e("#next-clients").on("click", function() {
            return r.trigger("owl.next"), !1
        }), e("#prev-clients").on("click", function() {
            return r.trigger("owl.prev"), !1
        }), e("#left-menu").metisMenu({
            toggle: !1
        }), e("#show-menu").on("click", function() {
            return e("#slide-menu").css("left", "0"), e(
                "#black-overlay").css("display", "block"), e(
                "#black-overlay").css("opacity", "1"), !1
        }), e("#close-menu, #black-overlay").on("click", function() {
            return e("#slide-menu").css("left", "-290px"), e(
                "#black-overlay").css("opacity", "0"), setTimeout(
                function() {
                    e("#black-overlay").css("display", "none")
                }, 300), !1
        })
    }(jQuery);