var textfield

function setup() {
  // put setup code here
  createCanvas(400,400);
  angleMode(DEGREES);

}
function draw() {
  background(0);

  let hr = hour();
  let mn = minute();
  let sc = second();

   fill(255);
   noStroke();
   // if(mn<10){'0'}{
   //   text(hr + ':0' + mn + ':' + sec , 200, 200);
   // }else {
   //   text(hr + ':' + mn + ':' + sec , 200, 200);
   // }
  // put drawing code here

  strokeWeight(8);
  stroke(255,100,150);
  noFill();
  let end1 = map(sc, 0, 60, 0, 360);
  arc(200,200,300,300,0,end1);

  let end2 = map(mn, 0, 60, 0, 360);
  arc(200,200,280,280,0,end2);


}
