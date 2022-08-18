function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background('#D8CBA9');
    translate(200,200);
    
    backgroundLayout();
    
    baseStructure();
  }
  
  function backgroundLayout(){
    fill('#BCAF9F');
    stroke('#8B8575');
    rect(-180,-180,360,360);
    stroke('#AA9F89');
    strokeWeight(0.4);
    for(i=0; i<=100; i++)
    {
      line(-200,-200+4*i,200,-200+4*i);
      line(-200+4*i,-200, -200+4*i,200);
    }  
  }
  
  function baseStructure(){
    noFill();
    stroke('#6B402D');
    rect(-90,-90,180,180);
    strokeWeight(0.6);
    stroke('#CF6055');
    for(i=0; i<=45; i++)
    {
      line(0,0,-90,-90+i*4);
      line(0,0,90,-90+i*4);
      line(0,0,-90+i*4,-90);
      line(0,0,-90+i*4,90);
    }
    stroke('#B04243');
    for(i=0; i<=45; i++)
    {
      line(-180,0,-90,-90+i*4);
      line(180,0,90,-90+i*4);
      line(0,-180, -90+i*4, -90);
      line(0,180,-90+i*4, 90);
    }  
    stroke('#293740');
    for(i=0; i<=45; i++)
    {
      line(-90+i*4,-90,-90,90-i*4);
      line(90-i*4,90,90,-90+i*4);
    }  
    stroke('#97392F');
    for(i=0; i<=45; i++)
    {
      line(90-i*4,-90,90,90-4*i);
      line(-90+i*4,90,-90,-90+4*i);
    }    
  }