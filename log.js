class Log extends Baseclass{
  constructor (x,y,height,angle) {
  super(x,y,20,height)
this.image=loadImage("spriteimage/wood2.png")
Matter.Body.setAngle(this.body,angle)

}
}