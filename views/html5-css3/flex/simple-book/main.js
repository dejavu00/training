/**
 * Created by Dejavue on 2017/3/12.
 */
(function () {
    var rBtn=$("#right"),
        lBtn=$("#left"),
        r_view=$("#right-viewport"),
        l_view=$("#left-viewport"),
        l_view_li=l_view.find('li'),
        i=0;


    rBtn.click(function () {
        i++;
        if(r_view.position().top==-489){
            r_view.css({top:'163px'});
        }
        if(i==5){
            i=0;
        }
        move(-163);

    });
    lBtn.click(function () {
        i--;
        if(r_view.position().top==0){
            r_view.css({top:'-652px'});
        }
        if(i==-1){
            i=4;
        }
        move(163);

    });
    function carousel() {
        i++;
        if(r_view.position().top==-489){
            r_view.css({top:'163px'});
        }
        if(i==5){
            i=0;
        }
        move(-163);
    }
    setInterval(carousel,1000);

    function move(nu) {

        l_view_li.eq(i).addClass("active").siblings().removeClass("active");
        r_view.css({top:r_view.position().top+nu+'px'});
    }
})()
