class button{

constructor(){

this.button = createImg('play.png');
this.button2 = createImg('H.T.P.png');
this.back = createImg('back.png');
}      
          
display(){
         
this.button.position(620,250);
this.button2.position(500,400)        
this.back.position(420,100)
this.button.mousePressed( () => {
          
gameState=1;
this.button2.hide()
this.button.hide();
this.back.hide();

});       
         
if (gameState == 0){

this.back.hide();

}

this.button2.mousePressed(()=>{

gameState = 6;
this.button2.hide()
this.button.hide();
this.back.show();

})


this.back.mousePressed(()=>{
    
    this.back.hide();
    gameState = 0;
    this.button.show();
    this.button2.show();


})


}



}