class Box extends Baseclass {
    constructor(x,y,width,height) {
      super(x,y,30,40);
        //var options = {
           // isStatic: false,
            //restitution:0.8,
           // friction:1,
           // density:1
       // }
       // this.body = Bodies.rectangle(x,y,width,height,options);
        //this.width = width;
        //this.height = height;
        //World.add(world, this.body);
      }
      
      display(){
        if ((this.body.speed)<5){
    
          super.display();
        
        }
        else{
        World.remove(world,this.body);
        
        
        
        }
        console.log(this.body.speed);
        
        
        
        //var pos =this.body.position;
        //rectMode(CENTER);
        //fill("blue");
        //rect(pos.x, pos.y, this.width, this.height);



      }
    
  
  
  }
  