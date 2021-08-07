class rope{
	constructor(body1,body2,pointa,pointb)
	{
		var options={
        bodyA:body1,
		bodyB:body2,
		pointB:{x:pointa,y:pointb}
    }

	//create rope constraint here
    this.body=Constraint.create(options)
	World.add(world,this.body);
	this.pointa=pointa;
	this.pointb=pointb;
	}


    //create display() here 
  display(){
	  var start=this.body.bodyA.position;
	  var end=this.body.bodyB.position;
  strokeWeight(2)
  line(start.x,start.y,end.x+this.pointa,end.y+this.pointb)
  
  }
}
