$(document).ready(function() {

    var para = document.location.href.split("?")[0].split("/").pop().split("#")[0];
    var menuHidenList = ['sub5.html', 'sub6.html']
    if(menuHidenList.includes(para)) {
        subMenuHide()
    }



    function subMenuShow(){
        $(".sub_menu").show()
        $("#main_sec").css("margin-left", "365px")
        $("#header").css("width", "calc(100% - 365px)");

    }

    function subMenuHide() {
        $(".sub_menu").hide()
        $("#main_sec").css("margin-left", "85px")
        $("#header").css("width", "calc(100% - 85px)");
    }



    var isMenu = true

    // 메뉴 클릭
    $(".btn_allmenu").click(function() {
        if(isMenu) {
            subMenuHide()
        }else {
            subMenuShow()
        }
        isMenu = !isMenu
    });

    // 서브 메뉴
    $(".lnb>li>a").click(function(e) {
        e.preventDefault();

        var index = $(".lnb>li>a").index(this)
        if(index == 0) {
            subMenuShow()

            $(".menu>li>a").eq(0).click();
        }else {
            subMenuHide()
        }

        $(".lnb .menu").hide();
        $(this).next().show();
        
    });

    // 서브 서브 메뉴
    $(".menu>li>a").click(function(e) {
        e.preventDefault();
        $(this).parent().parent().find('.sub_menu').hide();
        $(this).next().show();

    })


  
  
})

