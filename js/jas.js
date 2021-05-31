$(document).ready(function(){
    //$(this).addClass('cur');
    //$(this).siblings().removeClass('cur');
    //可以优化为$(this).addClass('cur').siblings().removeClass('cur')
    //为右侧导航图片添加、删除样式
    //文字数组
    var tt_day = ['11','10','9','8','7'];
    var tt_month_year = ['/May.2021','/May.2021','/July.2021','/June.2021','/August.2020'];
    var tt_tt = [
        '一人一车自家30天，15000公里，逃离人群的蒙青甘之行',
        '一面山川一处花语，寻一场南疆诗意的梦(附塔县风光、喀什人文9日行程攻略)',
        'In DaLat | 8段大叻的快乐回忆，品味越南花城的浪漫魅力',
        '和你们一起走过的大理丽江，是一张张幸福的明信片 | 闺蜜带娃自驾游',
        '【半岛铁盒】关于澳门的心动回忆 | 4天3夜美食行摄指南'
    ];
    var position = ['260','520','780','1040','1300'];
    $('.banner .nav ul li').click(function(){
        //为当前点击元素添加cur类 并移除其他兄弟元素cur类
        $(this).addClass('cur').siblings().removeClass('cur');
        //当前元素的index 控制背景图片淡入 其他兄弟元素背景图片淡出
        $('.banner .bc ul li').eq($(this).index()).fadeIn(1000).siblings().fadeOut(1000);
        //根据当前点击元素index 改变文字
        $('.banner .inner .number span').eq(0).text(tt_day[$(this).index()]);
        $('.banner .inner .number span').eq(1).text(tt_month_year[$(this).index()]);
        $('.banner .inner .tt span').text(tt_tt[$(this).index()]);
    })

    //黑色边框图标和盒子切换
    $('.banner .contain .top i').click(function(){
        $(this).addClass('cur').siblings().removeClass('cur');
    })

    //旅行专家栏轮播图控制
    $('.container .aside .traveller .bd ol li').click(function(){
        $(this).addClass('cur').siblings().removeClass('cur');
        console.log($(this).index())
        $('.container .aside .traveller .bd ul').css({'left':'-'+($(this).index()*260)+'px'});
    })
})