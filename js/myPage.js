/**
 * Created by Administrator on 2018/3/10 0010.
 */
$(function () {
    //�����Ƿ񶯻���־
    var flag2 = true;
    var flag3 = true;
    var flag4 = true;
    var flag5 = true;
    var flag6 = true;
    // ���next ���²���һ��Ļ
    $(".next").click(function (event) {
        $.fn.fullpage.moveSectionDown();
    });
    var k = $(window).height();//��ȡ��ǰ��Ļ�߶�
    $('#fullpage').fullpage({
        // �Ƿ���ʾ��Ŀ����
        navigation: true,
        // �����ٶȣ���λΪ����
        scrollingSpeed: 1200,
        //�ص������������ڶ�����Ļص����������� anchorLink �� index ����������
        //anchorLink ��ê���ӵ����ƣ�index ����ţ���1��ʼ����
        afterLoad: function (anchorLink, index) {
            if (index === 2 && flag2 === true) {
            //if (index === 2) {
                $(".next").fadeOut();
                //����������������ʾ���м䣬Ȼ��ɳ���������������ʾ����
                $('.searchbox').show().animate({right: 384}, 1500, 'easeOutBack', function () {
                    //��ʾɳ������
                    $('.search-words').animate({'opacity': 1}, 500, function () {
                        $('.searchbox').hide();
                        //�������Ƶ����Ͻǣ�ͬʱ��С
                        $('.search-02-1').show().animate({'height': 30, 'right': 250, 'bottom': 452}, 1000);
                        //ɳ��ͼƬ��ʾ���Ŵ�
                        $('.goods-441-218').show().animate({'height': 218}, 1000);
                        //ͬʱ�л�����ͼƬ
                        $('.words-02').animate({'opacity': 1}, 500, function () {
                            flag2 = false;  // ���flag ����true ˵�� ���ж���ִ�����
                        });
                        $(".next").fadeIn();
                    });
                })
            }
        },
        // �տ�ʼ������Ļ�ʹ����Ļص����� onLeave
        // ����ǰ�Ļص����������� index��nextIndex �� direction
        // 3��������index ���뿪�ġ�ҳ�桱����ţ���1��ʼ���㣻nextIndex �ǹ������ġ�ҳ�桱����ţ�
        // ��1��ʼ���㣻direction �ж����Ϲ����������¹�����ֵ�� up �� down��
        onLeave: function (index, nextIndex, direction) {
            $(".next").fadeOut();
            if (index === 2 && nextIndex === 3 && flag3 === true) {
            //if (index === 2 && nextIndex === 3) {
                $(".next").fadeOut();
                $('.shirt-02').show().animate({'bottom': -(k - 250), 'width': 207, 'left': 260}, 2000, function () {
                    $('.shirt-03').show();//����ʾͼƬ
                    $(this).hide();//����λ�ú������ػ�������ͼƬ
                    $('.img-01-a').animate({'opacity': 1}, 1000, function () {
                        $('.btn-01-a').animate({'opacity': 1}, 1000);
                        $(".next").fadeIn();
                        flag3 = false;
                    });
                });
                $('.cover').show();
            }

            //������Ļ��������Ļ����ʱ������֮ǰ��ɳ��,ͬʱ��ʾб��ɳ��
            if (index === 3 && nextIndex === 4 && flag4 === true) {
                $(".next").fadeOut();
                $('.shirt-03').hide();
                $('.t1f').show().animate({'bottom': -((k - 270) + 50), 'left': 260}, 2000, function () {
                    //����ɳ����ͬʱ��ʾ�����ɳ��
                    $(this).hide();
                    $('.t1fimg').show();
                    //Ȼ�������ƶ���ʧ
                    $('.car').animate({'left': '150%'}, 3000, 'easeInElastic', function () {
                        //�л�����
                        $('.words-04-a').animate({'opacity': 1}, 2000);
                        //��ʾ�˵����Լ��˵��е�����
                        $('.note-t1').show();
                        $('.note-a').animate({'opacity': 1}, 3000);
                        $(".next").fadeIn();
                        flag4 = false;
                    })
                });
            }
            //������Ļ��������Ļ����
            if (index === 4 && nextIndex === 5 && flag5 === true) {
                $(".next").fadeOut();
                //������
                $('.hand-05').animate({'bottom': 0}, 2000, function () {
                    //�����ͼƬ��ʾ
                    $('.mouse-05-a').animate({'opacity': 1});
                    //ɳ������
                    //����ʾɳ�������ƶ�
                    $('.t1f-05').show();
                    $('.t1f-05').animate({'bottom': 70}, 1000, function () {
                        //��Ƭ���ƶ�
                        $('.order-05').animate({'bottom': 390}, function () {
                            //���ⷭת����
                            $('.words-05').addClass('words-05-a');
                            $(".next").fadeIn();
                            flag5 = false;
                        })
                    })
                })
            }
            //������Ļ��������Ļ����ʱ��ɳ�����䣬���ӽ�ס���ڵ��ڳ���
            if (index === 5 && nextIndex === 6 && flag6 === true) {
                $(".next").fadeOut();
                //ɳ������
                $('.t1f-05').animate({'bottom': -(k - 500), 'left': '40%', 'width': 65}, 1000, function () {
                    //ɳ������
                    $(this).hide();
                })
                //�������ƶ�����סɳ��
                $('.box06').animate({'left': '38%'}, 1000, function () {
                    $(this).animate({'bottom': 40}, 500, function () {
                        $(this).hide();
                        //�������ƶ�
                        $('.section6').animate({'backgroundPositionX': '100%'}, 4000, function () {
                            $('.boy06').animate({"height": 305, "bottom": 116}, 1000, function () {
                                $(this).animate({'right': 500}, 500, function () {
                                    //������ʾ����
                                    $('.kaimen06').animate({'opacity': 1}, 500, function () {
                                        //Ȼ��Ů������ʾ����
                                        $('.girl').show().animate({'right': 305, 'height': 306}, 500, function () {
                                            $(this).animate({'right': 330}, 500, function () {
                                                //�Ի������ջ�
                                                $('.shouhuo06').show();
                                                $(".next").fadeIn();
                                                flag6 = false;
                                            })
                                        });
                                    });

                                })
                            })
                        });
                        //��ʾ����ٶ�
                        $('.guang06').show().animate({'left': '30%'}, 2000, 'easeOutElastic');
                        //��ʾ��ַ
                        $('.addr06').show();
                    })
                })
            }
            //������Ļ��������Ļ
            if (index === 6 && nextIndex === 7) {
                $(".next").fadeOut();
                setTimeout(function () {
                    $('.start07').animate({'width': 120}, 500);
                    $('.haoping07 ').show();
                    $(".next").fadeIn();
                }, 1000);
            }
            //�ڰ���Ļ����
            //if (index === 7 && nextIndex === 8) {
            //��������Ƴ��¼�
            $('.box08').hover(function () {//���������Ƴ��¼�
                $('.btn-shopping08').toggle();//��ʾ������
            })
            //�ָ�������ƶ�
            $(document).mousemove(function (event) {
                //�Ȼ�ȡ�����ҳ���е�����
                var x = event.pageX - $('.hand08').width() / 2;
                var y = event.pageY + 10;
                //console.log(x+y);
                //�ֵ�topֵ����С��minY
                var minY = k - 449;
                if (y < minY) {
                    y = minY;
                }
                $('.hand08').css({'left': x, 'top': y});
            })
            //����һ�ζ���
            $('.recur08').click(function () {
                $.fn.fullpage.moveTo(1);
                //�������img��ǩ��������ʽ
                $('img,.move').attr('style', '');
                //���ⷭת����
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