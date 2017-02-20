/*加载*/
var load = $('#loading');
var imgPath = './images/';
var loadingPage = (function() {
    var imgSources = [
        'loading-icon.png',
        'loading.png',
        'start.png',
        'scan.png',
        'get.png',
        'close.png',
        'succeed.png',
        'again.png',
        'btn.png',
        'doupo/doupo-01.png',
        'doupo/doupo-02.png',
        'doupo/doupo-03.png',
        'doupo/doupo-04.png',
        'doupo/doupo-05.png',
        'doupo/doupo-06.png',
        'doupo/doupo-07.png',
        'doupo/doupo-08.png',
        'doupo/doupo-09.png',
        'sanli/sanli-01.png',
        'sanli/sanli-02.png',
        'sanli/sanli-03.png',
        'sanli/sanli-04.png',
        'sanli/sanli-05.png',
        'sanli/sanli-06.png',
        'sanli/sanli-07.png',
        'sanli/sanli-08.png',
        'sanli/sanli-09.png',
        'gufang/gufang-01.png',
        'gufang/gufang-02.png',
        'gufang/gufang-03.png',
        'gufang/gufang-04.png',
        'gufang/gufang-05.png',
        'gufang/gufang-06.png',
        'gufang/gufang-07.png',
        'gufang/gufang-08.png',
        'gufang/gufang-09.png',
        'fuxiao/fuxiao-01.png',
        'fuxiao/fuxiao-02.png',
        'fuxiao/fuxiao-03.png',
        'fuxiao/fuxiao-04.png',
        'fuxiao/fuxiao-05.png',
        'fuxiao/fuxiao-06.png',
        'fuxiao/fuxiao-07.png',
        'fuxiao/fuxiao-08.png',
        'fuxiao/fuxiao-09.png',
        'ready/doupo-modal.png',
        'ready/doupo.png',
        'ready/sanli-modal.png',
        'ready/sanli.png',
        'ready/gufang-modal.png',
        'ready/gufang.png',
        'ready/fuxiao-modal.png',
        'ready/fuxiao.png'
    ];
    for (var i = 0; i < imgSources.length; i++) {
        imgSources[i] = (imgPath + imgSources[i]);
    };
    var loadImage = function(path, callback) {
        var img = new Image();
        img.onload = function() {
            img.onload = null;
            callback(path);
        };
        img.src = path;
    };
    var imgLoader = function(imgs, callback) {
        var len = imgs.length,
            i = 0;
        while (imgs.length) {
            loadImage(imgs.shift(), function(path) {
                callback(path, ++i, len);
            })
        }
    };
    var rateNum = document.getElementById('loading_rate');
    var bar = document.getElementById('bar');
    var percent = 0;
    imgLoader(imgSources, function(path, curNum, total) {
        percent = curNum / total;
        rateNum.innerHTML = Math.floor(percent * 100) + '%';
        if (percent == 1) {
            setTimeout(function() {
                $('#loading').hide();
                $('#bg1').show();
            }, 500);
        }
    });
})();


var idx = 0;
var obj1 = {
    id1: 'Cont',
    id2: 'Drag',
    picture: [
        './images/doupo/doupo-01.png',
        './images/doupo/doupo-02.png',
        './images/doupo/doupo-03.png',
        './images/doupo/doupo-04.png',
        './images/doupo/doupo-05.png',
        './images/doupo/doupo-06.png',
        './images/doupo/doupo-07.png',
        './images/doupo/doupo-08.png',
        './images/doupo/doupo-09.png'
    ],
    position: [7, 3, 5, 8, 6, 2, 1, 4, 0],
    id3: 'bg2',
    id4: 'bg6'
}
var obj2 = {
    id1: 'Cont1',
    id2: 'Drag1',
    picture: [
        './images/sanli/sanli-01.png',
        './images/sanli/sanli-02.png',
        './images/sanli/sanli-03.png',
        './images/sanli/sanli-04.png',
        './images/sanli/sanli-05.png',
        './images/sanli/sanli-06.png',
        './images/sanli/sanli-07.png',
        './images/sanli/sanli-08.png',
        './images/sanli/sanli-09.png'
    ],
    position: [7, 3, 5, 8, 6, 2, 1, 4, 0],
    id3: 'bg3',
    id4: 'bg6'
}
var obj3 = {
    id1: 'Cont2',
    id2: 'Drag2',
    picture: [
        './images/gufang/gufang-01.png',
        './images/gufang/gufang-02.png',
        './images/gufang/gufang-03.png',
        './images/gufang/gufang-04.png',
        './images/gufang/gufang-05.png',
        './images/gufang/gufang-06.png',
        './images/gufang/gufang-07.png',
        './images/gufang/gufang-08.png',
        './images/gufang/gufang-09.png'
    ],
    position: [7, 3, 5, 8, 6, 2, 1, 4, 0],
    id3: 'bg4',
    id4: 'bg6'
}
var obj4 = {
    id1: 'Cont3',
    id2: 'Drag3',
    picture: [
        './images/fuxiao/fuxiao-01.png',
        './images/fuxiao/fuxiao-02.png',
        './images/fuxiao/fuxiao-03.png',
        './images/fuxiao/fuxiao-04.png',
        './images/fuxiao/fuxiao-05.png',
        './images/fuxiao/fuxiao-06.png',
        './images/fuxiao/fuxiao-07.png',
        './images/fuxiao/fuxiao-08.png',
        './images/fuxiao/fuxiao-09.png'
    ],
    position: [7, 3, 5, 8, 6, 2, 1, 4, 0],
    id3: 'bg5',
    id4: 'bg6'
}

function run() {
    var timeText = '';
    if (that == 0) {
        timeText = 'timer0';
    } else if (that == 1) {
        timeText = 'timer1';
    } else if (that == 2) {
        timeText = 'timer2';
    } else if (that == 3) {
        timeText = 'timer3';
    }
    var s = document.getElementById(timeText);
    if (s.innerHTML == 300000) {
        window.clearInterval(idx);
        $('#bg2').hide();
        $('#bg3').hide();
        $('#bg4').hide();
        $('#bg5').hide();
        $('#bg6').hide();
        $('#bg7 .box').hide();
        $('#bg7').show();
        $('#bg7 .box-failed').show();
        $('#puzzle1_img').show();
        return false;
    }
    s.innerHTML = s.innerHTML * 1 + 1;
}

$('#start_btn').click(function() {
    $('#increase').show();
    $('#bg1').hide();
});

//兑换码弹窗
$('#bg6_btn').click(function() {
    $('#bg7').show();
    $('#bg7 .box-code').show();
    // if (localStorage.getItem('code')) {
    //     $('#code').text(localStorage.getItem('code'));
    //     $('#bg7').show();
    //     $('#bg7 .box').hide();
    //     $('#bg7 .box-code').show();
    // } else {
    //     $.ajax({
    //         url: 'http://pay.manhuadao.cn/iosweb/Lottory/GetSignCode?signid=24&plateform=1',
    //         dataType: 'JSON',
    //         success: function(res) {
    //             res = JSON.parse(res);
    //             if (res.status) {
    //                 localStorage.setItem('code', res.code);
    //                 console.log(res.code)
    //                 $('#code').text(res.code);
    //                 $('#bg7').show();
    //                 $('#bg7 .box-code').show();
    //             }
    //         }
    //     })
    // }
})

/* 关闭兑换码弹窗  */
$('.close-icon').on('click', function() {
    $(this).parents('.box').hide();
    $('#bg7').hide();
})

$('.ready_p2').get(0).addEventListener('webkitAnimationEnd', function() {

    hideTan('ready'); //准备的弹窗
    $('.puzzle1_img').hide(); //原图

    idx = window.setInterval(run, 1000); //开始倒计时
});

//弹窗函数
function showTan(id) {
    document.getElementById(id).style.display = "block";
}
//关闭函数
function hideTan(id) {
    document.getElementById(id).style.display = "none";
}

//拼图函数
function puzzle(id1, id2, picture, position, id3, id4) {
    var aLi = document.getElementById(id1).getElementsByTagName('li');
    var oDrag = document.getElementById(id2);
    var aColorArr = picture;
    var aNum = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var pNum = position; //图片开始的位置
    var tNum = [];
    var cNum = [];
    var tag = false;
    var count = 0;
    var reArr = [];
    var posArr = [];
    var moveX, moveY, that, thatNum, num, pX = 0,
        pY = 0;
    var iNum = []; //移动的位置
    console.log(pNum);
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[aNum[i]].style.backgroundImage = 'url(' + aColorArr[pNum[i]] + ')';
        aLi[aNum[i]].style.backgroundSize = '100% 100%';
        aLi[i].addEventListener('touchstart', function(ev) {

            that = this.index;
            posArr.push(this.getAttribute('position').split(" "));
            oDrag.style.display = 'block';
            var w = $(this).width();
            var h = $(this).height();
            oDrag.style.left = posArr[0][0]*w + 'px';
            oDrag.style.top = posArr[0][1]*h + 'px';
            oDrag.style.backgroundImage = 'url(' + aColorArr[pNum[this.index]] + ')';
            oDrag.style.backgroundSize = '100% 100%';

        });
        aLi[i].addEventListener('touchmove', function(ev) {
            ev.preventDefault();
            var w = $(this).width();
            var h = $(this).height();
            pX = ev.touches[0].pageX;
            pY = ev.touches[0].pageY;
            moveX = ev.touches[0].pageX - w;
            moveY = ev.touches[0].pageY - h;

            console.log(moveX + "|" + moveY);
            oDrag.style.left = moveX + 'px';
            oDrag.style.top = moveY + 'px';

        });
        aLi[i].addEventListener('touchend', function(ev) {
            console.log(pX);
            var w = $(this).width();
            var h = $(this).height();
            if (pX == 0) {
                pX = 0;
                oDrag.style.display = 'none';
                posArr = [];
                return false
            }
            thatNum = pNum[that];
            iNum.push(Math.round(Math.abs(moveY / h)));
            iNum.push(Math.round(moveX / w));
            num = iNum[0] * 2 + iNum[1] + iNum[0]
            console.log('移到' + num);
            if (moveX >= 290 || moveX <= -90 || moveY >= 350 || moveY <= -90 || num >= 9 || num < 0) {
                oDrag.style.display = 'none';
                iNum = [];
                posArr = [];
                num = null;
                thatNum = null;
                return false;
            }
            aLi[that].style.backgroundImage = 'url(' + aColorArr[pNum[num]] + ')'; //当前
            aLi[num].style.backgroundImage = 'url(' + aColorArr[thatNum] + ')'; //被移到
            aLi[that].style.backgroundSize = '100% 100%';
            aLi[num].style.backgroundSize = '100% 100%';
            oDrag.style.display = 'none';
            pNum[that] = pNum[num];
            pNum[num] = thatNum;
            console.log(pNum);
            iNum = [];
            posArr = [];
            num = null;
            thatNum = null;
            pX = 0;
            for (var k = 0; k < pNum.length; k++) {
                if (pNum[k] != aNum[k]) {
                    count = 0;
                    break;
                } else {
                    count++;
                    console.log(count);
                    if (count == aNum.length - 1) {
                        tag = true;
                    }
                }
            }
            if (tag) {
                tag = false;
                var timeRate = '';
                if (id1 == 'Cont') {
                    timeRate = $('#timer0').text();
                } else if (id1 == 'Cont1') {
                    timeRate = $('#timer1').text();
                } else if (id1 == 'Cont2') {
                    timeRate = $('#timer2').text();
                } else if (id1 == 'Cont3') {
                    timeRate = $('#timer3').text();
                }
                timeRate = parseInt(timeRate);
                console.log(timeRate);
                if (timeRate < 10) {
                    $('#timeRate').text('95%');
                } else if (timeRate >= 10 && timeRate < 12) {
                    $('#timeRate').text('85%');
                } else if (timeRate >= 12 && timeRate < 15) {
                    $('#timeRate').text('80%');
                } else if (timeRate >= 15 && timeRate < 17) {
                    $('#timeRate').text('75%');
                } else if (timeRate >= 17 && timeRate < 20) {
                    $('#timeRate').text('70%');
                } else if (timeRate >= 20 && timeRate < 25) {
                    $('#timeRate').text('65%');
                } else if (timeRate >= 25) {
                    $('#timeRate').text('60%');
                }
                window.clearInterval(idx);
                setTimeout(function() {
                    $('.puzzle1_img').show();
                }, 1000);
                setTimeout(function() {
                    document.getElementById(id3).style.display = "none";
                    document.getElementById(id4).style.display = "block";
                }, 1500);
            }
        })
    }
};
puzzle(obj1.id1, obj1.id2, obj1.picture, obj1.position, obj1.id3, obj1.id4);
puzzle(obj2.id1, obj2.id2, obj2.picture, obj2.position, obj2.id3, obj2.id4);
puzzle(obj3.id1, obj3.id2, obj3.picture, obj3.position, obj3.id3, obj3.id4);
puzzle(obj4.id1, obj4.id2, obj4.picture, obj4.position, obj4.id3, obj4.id4);
//再来一次
$('#again').on('click', function() {
    playAgain();
});

function playAgain() {
    //page--;
    var timeText = '';
    var position = [7, 3, 5, 8, 6, 2, 1, 4, 0];
    if (that == 0) {
        timeText = 'timer0';
    } else if (that == 1) {
        timeText = 'timer1';
    } else if (that == 2) {
        timeText = 'timer2';
    } else if (that == 3) {
        timeText = 'timer3';
    }
    document.getElementById(timeText).innerHTML = 0;
    // hideTan('tanBg');
    if (that == 0) {
        puzzle(obj1.id1, obj1.id2, obj1.picture, position, obj1.id3, obj1.id4);
    } else if (that == 1) {
        puzzle(obj2.id1, obj2.id2, obj2.picture, position, obj2.id3, obj2.id4);
    } else if (that == 2) {
        puzzle(obj3.id1, obj3.id2, obj3.picture, position, obj3.id3, obj3.id4);
    } else if (that == 3) {
        puzzle(obj4.id1, obj4.id2, obj4.picture, position, obj4.id3, obj4.id4);
    }
};
//显示原图
$('.btn_wen').click(function() {
    $('.puzzle1_img').show();
    setTimeout(function() {
        $('.puzzle1_img').hide();
    }, 3000);
});

$('.puzzle1_img').click(function() {
    if ($(this).css('display') === 'block') {
        $('.puzzle1_img').hide();
    }
})

var oIncrease = document.getElementById('increase');
var aSel = oIncrease.getElementsByTagName('li');
var that;
for (var i = 0; i < aSel.length; i++) {
    aSel[i].index = i;
    aSel[i].onclick = function() {
        that = this.index;
        aSel[this.index].className = 'on';
        setTimeout(function() {
            oIncrease.style.display = 'none';
            document.getElementById('bg' + (that + 2)).style.display = 'block';
            document.getElementById('ready').style.display = 'block';
        }, 1000)

    }
};

var again_btn = $('.again_btn');
again_btn.on('click', function() {
    $('#increase').show();
    $('#bg6').hide();
    $('#bg7').hide();
    aSel[that].className = 'li' + (that + 1);
    playAgain();
});

//显示注意事项
$('.announcements').on('click', function() {
    $('#bg7').find('.box').hide();
    $('.box-announcements').show();
})