var textfield

function setup() {
  // put setup code here
  noCanvas();
  textfield = createInput();

  textfield.input(newTyping);

}
function newTyping(){
  createP(textfield.value());
}
function newText(){
  createP(textfield.value());
}
function draw() {
  // put drawing code here

}
