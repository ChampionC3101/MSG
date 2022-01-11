class Form
{
    constructor()
    {
        this.input = createInput("").attribute("placeholder", "Enter Your Name Here")
        this.playButton = createButton("Play");
        this.title = createElement ('h2');
        this.greeting = createElement('h2');
    }

    setElementsPosition()
    {
        this.input.position(width/2 - 110, height/2 - 80);
        this.playButton.position(width/2 - 90, height/2 - 20);
        this.title.position(120, 160);
        this.greeting.position(width/2 - 300, height/2 - 102);
    }
    
    handleMousePressed()
    {
       this.playButton.mousePressed(()=>{
           this.input.hide()
           this.playButton.hide()
           var message = `Hello ${this.input.value()}
           </br>Wait for another player to join...!!`
           this.greeting.html(message)
       });
    }

    if(playerCount = 4)
    {
        this.greeting.hide()
    }

    display()
    {
        this.setElementsPosition();
        this.handleMousePressed();

    }
}