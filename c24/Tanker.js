class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
      this.body = Bodies.rectangle(x,y,width,height,options)

      World.add(world, this.body);
      this.width = width;
      this.height = height;

    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      if(keyIsDown(85) && angle > -1.5708){
        angle -=0.05
        Matter.Body.setAngle( tanker.body, angle);
      }
      if(keyIsDown(68) && angle < 0){
        angle +=0.05
        Matter.Body.setAngle( tanker.body, angle);
      }

      launcherX = pos.x + ((this.height+100) * cos(angle))
      launcherY = pos.y - ((this.height-100) * sin(angle))


      if(keyIsDown(32)){
          Matter.Body.setPosition(canonBall.body, {x: launcherX -100 , y: launcherY +100})
      }

      if(keyIsDown(32) && angle >= -0.050){
        Matter.Body.setPosition(canonBall.body,{x:launcherX -100 ,y:launcherY})
      }

      if(keyIsDown(32) && angle <= -1.40){
        Matter.Body.setPosition(canonBall.body,{x:launcherX  ,y:launcherY + 100})
      }
      // Matter.Body.setPosition(canonBall.body,{x:launcherX,y:launcherY})

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("brown");
      rect(0,0,this.width,this.height);
      pop();
      fill("orange");
      arc(70, height-65, 90, 100, PI , TWO_PI);
      fill("#ff0000");
      rect(20,height-65,100,20);
      rect(20,height-45,100,20);
      fill("#ffffff");


    };
}
