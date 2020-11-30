class Rope{
  constructor(body1,body2,offsetX,offsetY){
      this.offsetX=offsetX
      this.offsetY=offsetY
    var options={
          bodyA:body1,bodyB:body2,pointB:{x:this.offsetX,y:this.offsetY}
      }


   
  this.string=Constraint.create(options)
  World.add(world,this.string)
  }

display(){
  
  
  var pointA=this.string.bodyA.position
  var pointB=this.string.bodyB.position
 
  
  strokeWeight(2)
  var anchor1x =pointA.x
  var anchor1y =pointA.y
  var anchor2x =pointB.x+this.offsetX
  var anchor2y =pointB.y+this.offsetY
  line(anchor1x,anchor1y,anchor2x,anchor2y)
  
  }
}
