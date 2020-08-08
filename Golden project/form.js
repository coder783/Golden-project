class Form{
    constructor(){
       this.image1 = loadImage("images/player10.png");
       this.image2 = loadImage("images/masked_player0.png");
       this.image3 = loadImage("images/car2.png");
       this.image5 = loadImage("images/rocket0.png")
       this.image6 = loadImage("images/spaceImg.jpg");
       this.image7 = loadImage("images/mars background.jpg");
       this.image8 = loadImage("images/astronaut player.png");

       player = createSprite(180, 380);
       player.addImage("boy without mask",this.image1);
       player.addImage("boy with mask", this.image2);
       player.addImage("the player's car", this.image3);
       player.addImage("player's rocket", this.image5);
       player.addImage("player as astronaut", this.image8);

       x = displayWidth/2;
       y = 550;

       this.instruction = createElement("h2", "You have been chosen to <br> get the cure of the virus <br> from mars<br>but first u need to wash your <br>hands(press h) <br>wear a mask(press m)" );
       this.instruction.style("color","yellow") ;
       this.button1 = createButton("Next");
       this.button2 = createButton("h");
       this.button2.position(this.button1.x + 50, this.button1.y);
       this.button3 = createButton("m");
       this.button2.position(70, this.button1.y);
    }
    gameStateZero(){

        background(bg_img);
            this.instruction.position(displayWidth-500, 60);
                if(gameState == 0 && keyDown("h") ){
                    this.instruction.html("Congrats You Have <br>Sanitized Your Hands");
                    }
                    if(gameState == 0 && keyDown("m") ){
                        this.instruction.html("Congrats You Wore Your<br> Mask You May Continue")
                        player.changeImage("boy with mask", this.image2);
                        gameState = 1;
                    }
       
        }

    gameStateOne(){
        this.instruction.html("Congrats You Have Taken<br> The Measures To Protect<br> Yourself.Press \"g\" to go<br> to the next level");
            if(gameState == 1 && keyDown("g")){
                gameState = 2;
                console.log("yup");
            }
        }
    
    gameStateTwo(){
        this.instruction.hide();
            image(bg_img2,  0,-displayHeight*4,displayWidth, displayHeight*5);
            player.changeImage("the player's car", this.image3);

                player.x = x;
                player.y =  y; 
                    if(keyIsDown(UP_ARROW)){
                        y = y - 50;
                    }
                camera.position.x = player.x;
                camera.position.y = player.y;

            if(y < -3250){
                gameState = 3;
                console.log("#1");
            }
        }   

     gameStateThree(){
        this.instruction.html("Congrats You Have Reached <br>Your Rocket. You Will Go<br> To Space Next.Where You <br>Will Have To  Dodge <br>Meteors (press e to continue) ");
        this.instruction.show();

            image(bg_img2,  0,-displayHeight*4,displayWidth, displayHeight*5);

                if(keyDown("e")){
                    gameState = 4;
                    y2  = 550;
                    x2 = displayWidth/2;
                }
        }
        
    gameStateFour(){
        image(this.image6, 0, -displayHeight*12, displayWidth, displayHeight*15);
        //player.debug = true;
            this.instruction.hide();
            player.changeImage("player's rocket", this.image5);
            console.log("#2");

            player.x = x2;
            player.y = y2;

            x3 = displayWidth/2;
            
            if(gameState == 4 && keyDown(UP_ARROW)){
                y2 = y2-20;
                //console.log("it works : " + y2);
    
                camera.position.x = x3;
                camera.position.y = y2;
                console.log(y2);
            }
            if(gameState == 4 && keyDown(LEFT_ARROW)){
                x2 = x2-20;
                //console.log("it works : " + y2);
    
                camera.position.x = x3;
                camera.position.y = y2;
                console.log(y2);
            }

            if(gameState == 4 && keyDown(RIGHT_ARROW)){
                x2 = x2+20;
                //console.log("it works : " + y2);
    
                camera.position.x = x3;
                camera.position.y = y2;
                console.log(y2);
            }

            if(y2 < - 9990){
                gameState = 5;
            }
        }
        
        gameStateFive(){
            console.log("it woks yay !!!");
            var x4 = 250;
            var y4 = displayHeight/2;


            player.changeImage("player as astronaut",this.image8);
            player.scale = 0.10;
            player.x = x4;


            background(this.image7);
            if(keyDown(RIGHT_ARROW)){
                x4 = x4 + 30;
            }
        }
    }

