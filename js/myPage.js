/**
 * Created by Administrator on 2018/3/10 0010.
 */
$(function () {
    //定义是否动画标志
    var flag2 = true;
    var flag3 = true;
    var flag4 = true;
    var flag5 = true;
    var flag6 = true;
    // 点击next 往下播放一屏幕
    $(".next").click(function (event) {
        $.fn.fullpage.moveSectionDown();
    });
    var k = $(window).height();//获取当前屏幕高度
    $('#fullpage').fullpage({
        // 是否显示项目导航
        navigation: true,
        // 滚动速度，单位为毫秒
        scrollingSpeed: 1200,
        //回调函数滚动到第二屏后的回调函数，接收 anchorLink 和 index 两个参数，
        //anchorLink 是锚链接的名称，index 是序号，从1开始计算
        afterLoad: function (anchorLink, index) {
            if (index === 2 && flag2 === true) {
            //if (index === 2) {
                $(".next").fadeOut();
                //搜索框先慢慢到显示器中间，然后沙发这个名字慢慢显示出来
                $('.searchbox').show().animate({right: 384}, 1500, 'easeOutBack', function () {
                    //显示沙发文字
                    $('.search-words').animate({'opacity': 1}, 500, function () {
                        $('.searchbox').hide();
                        //搜索框移到右上角，同时缩小
                        $('.search-02-1').show().animate({'height': 30, 'right': 250, 'bottom': 452}, 1000);
                        //沙发图片显示并放大
                        $('.goods-441-218').show().animate({'height': 218}, 1000);
                        //同时切换文字图片
                        $('.words-02').animate({'opacity': 1}, 500, function () {
                            flag2 = false;  // 如果flag 等于true 说明 所有动画执行完毕
                        });
                        $(".next").fadeIn();
                    });
                })
            }
        },
        // 刚开始滚动屏幕就触发的回调函数 onLeave
        // 滚动前的回调函数，接收 index、nextIndex 和 direction
        // 3个参数：index 是离开的“页面”的序号，从1开始计算；nextIndex 是滚动到的“页面”的序号，
        // 从1开始计算；direction 判断往上滚动还是往下滚动，值是 up 或 down。
        onLeave: function (index, nextIndex, direction) {
            $(".next").fadeOut();
            if (index === 2 && nextIndex === 3 && flag3 === true) {
            //if (index === 2 && nextIndex === 3) {
                $(".next").fadeOut();
                $('.shirt-02').show().animate({'bottom': -(k - 250), 'width': 207, 'left': 260}, 2000, function () {
                    $('.shirt-03').show();//先显示图片
                    $(this).hide();//到达位置后再隐藏滑下来的图片
                    $('.img-01-a').animate({'opacity': 1}, 1000, function () {
                        $('.btn-01-a').animate({'opacity': 1}, 1000);
                        $(".next").fadeIn();
                        flag3 = false;
                    });
                });
                $('.cover').show();
            }

            //第三屏幕到第四屏幕过渡时，隐藏之前的沙发,同时显示斜的沙发
            if (index === 3 && nextIndex === 4 && flag4 === true) {
                $(".next").fadeOut();
                $('.shirt-03').hide();
                $('.t1f').show().animate({'bottom': -((k - 270) + 50), 'left': 260}, 2000, function () {
                    //隐藏沙发，同时显示车里的沙发
                    $(this).hide();
                    $('.t1fimg').show();
                    //然后车子右移动消失
                    $('.car').animate({'left': '150%'}, 3000, 'easeInElastic', function () {
                        //切换标题
                        $('.words-04-a').animate({'opacity': 1}, 2000);
                        //显示运单，以及运单中的文字
                        $('.note-t1').show();
                        $('.note-a').animate({'opacity': 1}, 3000);
                        $(".next").fadeIn();
                        flag4 = false;
                    })
                });
            }
            //第四屏幕到第五屏幕过渡
            if (index === 4 && nextIndex === 5 && flag5 === true) {
                $(".next").fadeOut();
                //手上移
                $('.hand-05').animate({'bottom': 0}, 2000, function () {
                    //鼠标点击图片显示
                    $('.mouse-05-a').animate({'opacity': 1});
                    //沙发落下
                    //先显示沙发，再移动
                    $('.t1f-05').show();
                    $('.t1f-05').animate({'bottom': 70}, 1000, function () {
                        //卡片上移动
                        $('.order-05').animate({'bottom': 390}, function () {
                            //标题翻转动画
                            $('.words-05').addClass('words-05-a');
                            $(".next").fadeIn();
                            flag5 = false;
                        })
                    })
                })
            }
            //第五屏幕到第六屏幕过渡时，沙发下落，盒子接住，在掉在车上
            if (index === 5 && nextIndex === 6 && flag6 === true) {
                $(".next").fadeOut();
                //沙发下移
                $('.t1f-05').animate({'bottom': -(k - 500), 'left': '40%', 'width': 65}, 1000, function () {
                    //沙发隐藏
                    $(this).hide();
                })
                //包裹左移动，接住沙发
                $('.box06').animate({'left': '38%'}, 1000, function () {
                    $(this).animate({'bottom': 40}, 500, function () {
                        $(this).hide();
                        //背景左移动
                        $('.section6').animate({'backgroundPositionX': '100%'}, 4000, function () {
                            $('.boy06').animate({"height": 305, "bottom": 116}, 1000, function () {
                                $(this).animate({'right': 500}, 500, function () {
                                    //将门显示出来
                                    $('.kaimen06').animate({'opacity': 1}, 500, function () {
                                        //然后将女孩子显示出来
                                        $('.girl').show().animate({'right': 305, 'height': 306}, 500, function () {
                                            $(this).animate({'right': 330}, 500, function () {
                                                //对话：请收货
                                                $('.shouhuo06').show();
                                                $(".next").fadeIn();
                                                flag6 = false;
                                            })
                                        });
                                    });

                                })
                            })
                        });
                        //显示光的速度
                        $('.guang06').show().animate({'left': '30%'}, 2000, 'easeOutElastic');
                        //显示地址
                        $('.addr06').show();
                    })
                })
            }
            //第六屏幕到第七屏幕
            if (index === 6 && nextIndex === 7) {
                $(".next").fadeOut();
                setTimeout(function () {
                    $('.start07').animate({'width': 120}, 500);
                    $('.haoping07 ').show();
                    $(".next").fadeIn();
                }, 1000);
            }
            //第八屏幕动画
            //if (index === 7 && nextIndex === 8) {
            //鼠标移入移出事件
            $('.box08').hover(function () {//代替移入移出事件
                $('.btn-shopping08').toggle();//显示与隐藏
            })
            //手跟随鼠标移动
            $(document).mousemove(function (event) {
                //先获取鼠标在页面中的坐标
                var x = event.pageX - $('.hand08').width() / 2;
                var y = event.pageY + 10;
                //console.log(x+y);
                //手的top值不能小于minY
                var minY = k - 449;
                if (y < minY) {
                    y = minY;
                }
                $('.hand08').css({'left': x, 'top': y});
            })
            //再来一次动画
            $('.recur08').click(function () {
                $.fn.fullpage.moveTo(1);
                //清空所有img标签的行内样式
                $('img,.move').attr('style', '');
                //标题翻转动画
                $('.words-05').removeClass('words-05-a');
                flag2 = true;
                flag3 = true;
                flag4 = true;
                flag5 = true;
                flag6 = true;
            })
            //}
        }
    });
});