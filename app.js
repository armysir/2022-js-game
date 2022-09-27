const canvas= document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const score = document.querySelector(".score");


canvas.width = window.innerWidth -100;
canvas.height = window.innerHeight -100;

var anime;
var img1 = new Image();
img1.src = "dino1.png";
var img2 = new Image();
img2.src = "cactus.jpg";


var dino = {
    x:10,
    y:130,
    width:70,
    height: 70,
    draw(){
        ctx.fillStyle = "white"
        ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.drawImage(img1,this.x,this.y,this.width,this.height)
    },
   
}
dino.draw();


class Cactus{
    constructor(){
        this.x = 500;
        this.y = 150;
        this.width = 50;
        this.height =50;
    }
    draw(){
        ctx.fillStyle = "red"
        ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.drawImage(img2,this.x,this.y,this.width,this.height)
    }
}



var timer = 0;
var cactusArray =[];

function 프레임마다실행(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    anime= requestAnimationFrame(프레임마다실행)
    timer++;
    score.innerText = `${Math.round(timer/10) }`
    if(timer%200 ===0){
        var cactus = new Cactus();
        cactusArray.push(cactus);
        
        
    }

    cactusArray.forEach((a,i,o)=>    {
        if(a.x<-20){
            o.splice(i,1)
        }
        충돌하냐(dino,a);
        a.x-=2;
        a.draw();
    })
  
    if(jumpDone==true){
        dino.y -=1;
        if(dino.y===30)
        {
            jumpDone=false;
            
        }
    }
    if(jumpDone==false&&dino.y<=130){
        dino.y+=4;

    }

    
    
    dino.draw();
   
    
}

function 충돌하냐 (dino,cactus){
    if((cactus.x)-(dino.x+70)<0&&(cactus.y)-(dino.y+70)<0)
    {
        
       
        ctx.clearRect(0,0,canvas.width,canvas.height)
        cancelAnimationFrame(anime);


    }

}
프레임마다실행();
var jumpDone = false;
var jumpDone1=false;
document.addEventListener("keydown",function(e){
    if(e.code==="Space"){
        jumpDone=true;
    }
})
