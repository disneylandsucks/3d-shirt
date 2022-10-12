class Shirt{
    constructor(img,mod,theta){
      
      this.img = img
      this.mod = mod
      // this.pos = creatVector(x,y,z)
      this.theta = theta
    }
  render(){
    
push()
        scale (50.0)
      translate(0,height/150)
    
      rotateX(180)
      rotateY(this.theta)
      // rotateZ(theta/4)
      noStroke()
    // push()
      scale(-1,1)
      texture(this.img);
    // pop()
      model(this.mod)
pop()
  }
  update(theta) {
    this.theta = theta
    
  }
  
}
