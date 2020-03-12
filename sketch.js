var shooter;
var bullets = [];
var aliens = [];
var difficulty = 0.001;
var score = 0;

class Alien {
constructor (_pos, _vel, _i) {
  this.pos = _pos;
  this.vel = _vel;
  this.i = _i;
  this.xdir = -1;
  this.ydir = 0;
}
show() {
  noStroke();
  fill(70, 255, 80);  
  rect(this.pos.x, this.pos.y, 40, 20);
  
  }
  
// collision () {
// var d = dist(bullets.x, bullets.y, aliens.x, aliens.y);  
//    if (d < bullets.height + aliens.height) {
//    return true; 
//    } else {
//    return false;
//    }
// }  
 
move(){
  this.pos.x = this.pos.x + this.xdir;
  this.pos.y = this.pos.y + this.ydir;
}  
  
}

 console.log(score);

class Bullet {
constructor (_pos, _vel) {
  this.pos = _pos;
  this.vel = _vel;
  this.timer = millis();
  this.radius = 3;
}
  
  show() {
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y + 10);
  }
  move() {
    this.pos.add(this.vel);
  }
  death() {
    if (millis() - this.timer > 7000) {
      bullets.shift();
    }
  }
  
}

class Shooter {
constructor (_pos, _vel) {
this.pos = _pos;
this.vel = _vel;  
   }
  
show() {
    stroke(255);
    strokeWeight(6);
    let x1 = this.pos.x + 30;
    let x2 = this.pos.x - 30;
    line(x1, this.pos.y, x2, this.pos.y);
  }  
  
move() {
  if (key == "ArrowLeft") {
   this.pos.x -= 15;
}  
  
  if (key == "ArrowRight") {
   this.pos.x += 15;
    }  
  }
}  
  
function setup() {
  createCanvas(600, 400);
  let p = createVector(width/2, height - 50);
  let v = createVector(0,-0.001);
  let t = 0.0;
  shooter = new Shooter(p, v, t);
  for (let i = 0; i < 6; i++) {
    let alienp = createVector(random(width), 50);
    let alienv = createVector(0, 0);
    aliens.push(new Alien(alienp, alienv));
   }
}

function draw() {
  background(0);
  shooter.show();
   for (let i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
    bullets[i].death();
   }
     for (let i = 0; i < aliens.length; i++) {
     aliens[i].show();
       // aliens[i].collision();
       aliens[i].move();
       if (aliens[i].pos.x > width) {
       this.xdir = -1;
       }
  }
}


function keyPressed() {
shooter.move();
   if (key == ' ') {
    let p = shooter.pos.copy().add(shooter.vel.copy());
    let v = shooter.vel.copy().normalize();
    bullets.push(new Bullet(p, v));
  }
}