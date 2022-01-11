
class Game
{
    constructor()
    {

    }

    getState()
    {
        var getStateRef = database.ref('gameState')
        getStateRef.on("value", function(data)
        {
             gameState = data.val()
        })
    }

    update(state)
    {
        database('/').update({
            gameState: state
        })
    }

    async start()
    {
        if(gameState = 0)
        {
            player = new Player();
            var playerCuntRef = await database.ref('playerCount').once("value");
            if(playerCount.ref.exists())
            {
                playerCount = playerCountRef.val();
                player.getCount();
            }
        }
    }
    
    start()
    {
        form = new Form();
        form.display();

        player = new Player();
    }

    lock()
    {
        lock = createSprite()
        lock.addImage("locked", lock_img);

        if(player.touches(lock))
        {
            player = locked;
        }

        if(denner.touches(player))
        {
            player = locked;
        }
    }



    invisibilityCloak()
    {
        cloak = createSprite()
        cloak.addImage("innvisible", cloak_img);

        if(player.touches(cloak))
        {
            player.visibility = false;
        }
    }

    
    
    timeleft()
    {
        setInterval(invisibilityCloak)

        var timeleft = 35;
        var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
        }
        document.getElementById("progressBar").value = 35 - timeleft;
        timeleft -= 1;
        }, 1000);
        <progress value="0" max="35" id="progressBar"></progress>
    }

    speed()
    {
        speed = createSprite()
        speed.addImage("speed", speed_png);

        if(denner.touches(speed))
        {
            denner = fast;
        }
    }

    timeleft()
    {
        setInterval(speed)

        var timeleft = 30;
        var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
        }
        document.getElementById("progressBar").value = 30 - timeleft;
        timeleft -= 1;
        }, 1000);
        <progress value="0" max="30" id="progressBar"></progress>
    }

    sprites()
    {
        player1 = createSprite();
        player1.addImage("player1", player1_img);
        player2 = createSprite();
        player2.addImage("player2", player2_img);
        player3 = createSprite();
        player3.addImage("player3", player3_img);
        player4 = createSprite();
        player4.addImage("player4", player4_img);
        tree = createSprite();
        tree.addImage("tree", tree_img);
    }

    play()
    {
        form.hide();
        Player.getPlayerInfo();

        drawSprites();
    }
}