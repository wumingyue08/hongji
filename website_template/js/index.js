var tool = {
    init: function () {
        tool.tabs();
        tool.callMe();
        // tool.silde();
        bindEvent.initIndex();
        bindEvent.bindEvent();
        tool.compete();
    },
    tabs: function () {
        $("li", "#tabs_nav").click(function () {
            $("li", "#tabs_nav").removeClass("active");
            $(this).addClass("active");
            var index = $(this).index();
            $("section", "#tabs_content").addClass('none').removeClass('show');
            $("section", "#tabs_content").eq(index).addClass('show').removeClass('none');
            $("#recruit_model").addClass('none');
        });
        $(".range_btn").click(function () {
            $("#contact_pop_model").removeClass('none');
            $("#contact_de").addClass('rollIn');
        });
        $("#contact_pop_model").click(function () {
            $("#contact_de").removeClass('rollIn');
            $("#contact_de").addClass('hide-rollIn');
            setTimeout(function () {
                $("#contact_pop_model").addClass('none');
                $("#contact_de").removeClass('hide-rollIn');
            }, 300)
        })
    },
    callMe: function () {
        $("#callMe").click(function () {
            $("li", "#tabs_nav").removeClass("active");
            $("section", "#tabs_content").addClass('none').removeClass('show');
            $("#recruit_model").removeClass('none');
        })
    },
    silde: function () {
        //补充第一张图片的节点
        var firstImg = '<li style="position:absolute"><img src="../img/index/slide_2.jpg"></li>';
        $('#ul ul').append(firstImg);
        var i = 0,
            timer;

        function moveImg() {
            $('#ul').width($('#ul li').length * $('#ul li').width());
            var imgW = $('#ul li').width();
            if (i == $('#ul li').length) {
                $('#ul').css({
                    left: 0
                });
                i = 1;
            }
            if (i == -1) {
                i = $('#ul li').length - 2;
                $('#ul').css({
                    left: ($('#ul li').length - 1) * -1280
                });
            }
            $('#ul').stop().animate({
                left: i * -imgW
            }, 400);
            if (i == ($('#ul li').length - 1)) {
                $('#ol span').removeClass('active');
                $('#ol span').eq(0).addClass('active');
            } else {
                $('#ol span').removeClass('active');
                $('#ol span').eq(i).addClass('active');
            }
        }
        $('#ol li').click(function () {
            i = $(this).index();
            moveImg();
        });

        function autoPlay() {
            timer = setInterval(function () {
                i++;
                moveImg();
            }, 3000);
        }
        autoPlay();
    },
    //2.78 id="dom"
    compete: function () {
        var width = document.body.clientWidth;
        var height =  width / 4.78; //width / 2.78;
        if(width >1151){
            $(".dom").css('height', height + 'px');
            $(".slide_model").css('height', height + 'px');
            $(".header_img").css('height', height + 'px');
            $("img",".header_img").css('height', height + 'px');
            $(".content_bg").css('height', height*1.3125 + 'px');
        }
        
    }
};
var bindEvent = {
    initIndex: function () {
        if (document.body.clientWidth < 922) {
            $("li", "#ul").css("width", "922px");
        } else {
            $("li", "#ul").css("width", document.body.clientWidth + "px");
        }
        var width_m = $("#tabs_content").width();
        $(".range1").width(width_m + "px");
        $(".range2").width(width_m + "px");
    },
    bindEvent: function () {
        $("#next").click(function () {
            var width_m = $("#tabs_content").width();
            $(".range1").width(width_m + "px");
            $(".range2").width(width_m + "px");
            var left = $(".range1").width()
            $("#top_one").removeClass("none");
            $("#next").addClass("none");
            $("#slide").animate({
                marginLeft: (-left) + "px"
            });

        });
        $("#top_one").click(function () {
            var width_m = $("#tabs_content").width();
            $(".range2").width(width_m + "px");
            $(".range1").width(width_m + "px");
            $("#top_one").addClass("none");
            $("#next").removeClass("none");
            $("#slide").animate({
                marginLeft: "0px"
            });

        });
        $("#next_r").click(function () {
            var width_m = $("#tabs_content").width();
            $(".range1").width(width_m + "px");
            $(".range2").width(width_m + "px");
            var left = $(".range1").width()
            $("#top_one_r").removeClass("none");
            $("#next_r").addClass("none");
            $("#slide_r").animate({
                marginLeft: (-left) + "px"
            });

        });
        $("#top_one_r").click(function () {
            var width_m = $("#tabs_content").width();
            $(".range2").width(width_m + "px");
            $(".range1").width(width_m + "px");
            $("#top_one_r").addClass("none");
            $("#next_r").removeClass("none");
            $("#slide_r").animate({
                marginLeft: "0px"
            });

        });
        $(".to_call").click(function () {
            $(".cd-close").click();
            $("#callMe").click();
        })
        $(".more").click(function () {
            $(".cd-close").click();
            $("li", ".tabs_nav").eq(1).click();
        })
    }

};
window.onresize = function () {
    if (document.body.clientWidth < 922) {
        $("li", "#ul").css("width", "922px");
    } else {
        $("li", "#ul").css("width", document.body.clientWidth + "px");
    }
    var width_m = $("#tabs_content").width();
    $(".range1").width(width_m + "px");
    $(".range2").width(width_m + "px");
    tool.compete();
}
tool.init();