var tool = {
    tabs:function () {
        $("li","#tabs_nav").click(function () {
            $("li","#tabs_nav").removeClass("active");
            $(this).addClass("active");
            var index = $(this).index();
            $("section","#tabs_content").addClass('none').removeClass('show');
            $("section","#tabs_content").eq(index).addClass('show').removeClass('none');
            $("#recruit_model").addClass('none');
        })
    },
    callMe: function(){
        $("#callMe").click(function () {
            $("li","#tabs_nav").removeClass("active");
            $("section","#tabs_content").addClass('none').removeClass('show');
            $("#recruit_model").removeClass('none');
        })
    },
    silde: function () {
        //补充第一张图片的节点
        var firstImg = '<li style="position:absolute"><img src="../img/index/slide1.png"></li>';
        $('#ul ul').append(firstImg);
        $('#ul').width($('#ul li').length * $('#ul img').width());
        var i = 0,imgW = $('#ul img').width(),timer;
        function moveImg() {
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
    }
};
tool.tabs();
tool.callMe();
// tool.silde();
var bindEvent = {


};
