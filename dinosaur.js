var start = document.getElementById('new');
var flying = true; //判斷恐龍運動
// 初始化
var dinosaurs = {
    stepx: 52,
    stepy: 0,
    x: dinosaur.offsetLeft,
    y: dinosaur.offsetTop
}
//背景
var sky = {
    x: 0
}
var count = 0; //計數
var bg = setInterval(function () {
    sky.x -= 2; //背景移動
    contaner.style.backgroundPositionX = sky.x + 'px';
    dinosaurs.stepy += 1; //加速度
    dinosaurs.y += dinosaurs.stepy;
    if (dinosaurs.stepy >= 10) { //上下跳
        dinosaurs.stepy = -10; //
        dinosaurs.y += dinosaurs.stepy;
    }
    dinosaur.style.top = dinosaurs.y + 'px';
}, 30)

start.onclick = function () { //開始
    start.style.display = 'none';
    co.innerHTML = count;
    results.innerHTML = count;
    clearInterval(bg); //清除自動飛
    dinosaurs.stepy = 0;
    setInterval(function () {
        if (flying) {
            sky.x -= 5;
            contaner.style.backgroundPositionX = sky.x + 'px'; //控制背景移动
            dinosaurs.y += dinosaurs.stepy;
            dinosaurs.x = dinosaurs.stepx;
            dinosaurs.stepy += 1;

            if (dinosaurs.y + dinosaur.offsetHeight >= 600) { //落地
                flying = false;
                mask.style.display = "block";
                success.style.display = "block";
                co.style.display = "none";
            }
            dinosaur.style.top = dinosaurs.y + 'px';
            dinosaur.style.left = dinosaurs.x + 'px';
        }
    }, 30)
    contaner.onclick = function () { //點擊
        dinosaurs.stepy = -10; //點擊一次恐龍跳
    }

    function createzz(x) { //初始化仙人掌
        var zz = {};
        zz.x = x;
        zz.uheight = 50 + Math.ceil(Math.random() * 200);
        zz.dheight = 600 - 150 - zz.uheight;
        //放置仙人掌
        var dzz = document.createElement('div');
        dzz.style.width = '100px';
        dzz.style.height = zz.dheight + 'px';
        dzz.style.position = 'absolute';
        dzz.style.left = zz.x + 'px';
        dzz.style.background = 'url(img/cactus.png) no-repeat';
        dzz.style.top = zz.uheight + 150 + 'px';
        contaner.appendChild(dzz);
        setInterval(function () { //控制仙人掌移動
            if (flying) {
                zz.x -= 5;
                dzz.style.left = zz.x + 'px';
                if (zz.x <= -100) { //仙人掌重複循環
                    zz.x = 1450;
                }
                if (zz.x >= 0 && dinosaurs.x >= zz.x + 52) { //計跳過仙人掌數
                    count++;
                    co.innerHTML = count;
                    results.innerHTML = count;
                }
                //判斷有無撞到仙人掌
                var ucheck = dinosaurs.x + 30 > zz.x && dinosaurs.x < zz.x + 52 && dinosaurs.y <= zz.uheight;
                var dcheck = dinosaurs.x + 30 > zz.x && dinosaurs.x < zz.x + 52 && dinosaurs.y + 30 >= zz.uheight + 150;

                if (dcheck) {
                    flying = false;
                    mask.style.display = "block";
                    success.style.display = "block";
                    co.style.display = "none";
                }

            }
        }, 30)
    }
    createzz(300); //第一棵仙人掌
    createzz(600); //第二
    createzz(900); //第三
    createzz(1200); //第四
    createzz(1500); //第五
}