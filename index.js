function init(){
    back();
    setInterval(Create_enemy,3000);
    player();

}

function player(){
    var player = document.createElement("div");
    player.style.cssText="height:74px;width:44px;position:absolute;left:0px;top:300px"
    player.style.background="url(./image/game_ins/ins_enemy_2.png)";
    addToMain(player);
    function mykeydown(){
        var k = event.keyCode;
        //控制飞机上移
        if(k == 87 || k == 38){
            player.style.top = parseInt(player.style.top) - 10 +"px";
            if(parseInt(player.style.top)<0){
                player.style.top = 0;
            }
        }
        //控制飞机下移
        if(k==83 || k == 40){    
            player.style.top = parseInt(player.style.top) + 10 +"px";
                if(parseInt(player.style.top)>520){
                    player.style.top = 520;
                }
        };
        //控制飞机左移
        if(k==65 || k == 37){
            player.style.left = parseInt(player.style.left) - 10 +"px";
                if(parseInt(player.style.left)<0){
                    player.style.left = 0;
                }
        }
        //控制飞机右移
        if(k==68 || k == 39){    
            player.style.left = parseInt(player.style.left) + 20 +"px";
            if(parseInt(player.style.left)>916){
                player.style.left = 916;
            }
        }


    }
    document.onkeydown=mykeydown;
}

/**
 * 创建敌机
 */
function Create_enemy(){
    var top = Math.random()*540; 
    var enemy = document.createElement("div");
    enemy.style.cssText="height:100px;width:74px;position:absolute;left:960px;"
    enemy.style.top=top+"px";
    enemy.style.background="url(./image/game_ins/ins_enemy_3.png)"
    left_move(enemy);
    addToMain(enemy);
}

/**
* 背景移动
*/
function back(){
    var bac_gro = document.createElement("div");
    bac_gro.style.cssText="left:0px;width:960px;height:600px;position:absolute"
    bac_gro.style.background="url(./image/game_ins/ins_BG.png)"
    addToMain(bac_gro);
    var bac_gro2 = document.createElement("div");
    bac_gro2.style.cssText="left:960px;width:960px;height:600px;position:absolute"
    bac_gro2.style.background="url(./image/game_ins/ins_BG.png)"
    addToMain(bac_gro2);
    back_left_move(bac_gro);
    back_left_move(bac_gro2);
}


/**
 * 背景向左移动
 * @param {} obj 
 */
function back_left_move(obj){
    var left = parseInt(obj.style.left);
    m = setTimeout(function(){
        var style_left = left-10+"px";
        obj.style.left =style_left; 
        if(left == -960){
            obj.style.left="950px";
        }
        back_left_move(obj);
    }, 50);

}

/**
 * 元素向左移
 * @param {} obj 
 */
function left_move(obj){
    var left = parseInt(obj.style.left);
    var width = parseInt(obj.style.width);
    m = setTimeout(function(){
        var style_left = left-10+"px";
        obj.style.left =style_left; 
        if(left <= -width){
            obj.parentNode.removeChild(obj);
        }
        left_move(obj);
    }, 50);
}

/**
 * 添加元素至main Div
 * @param {} obj 
 */
function addToMain(obj){
    document.body.appendChild(obj);
    document.getElementById("main").appendChild(obj);
}

window.onload = init;