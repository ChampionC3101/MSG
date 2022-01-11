class Player
{
    constructor()
    {
       this.playerName = null;
       this.playerCount = 0;
       this.index = null;
       this.name = null;

    }

    handlePlayerControls()
    {
        if (keyIsDown(UP_ARROW) && player !== lock)
        {
                player.y - 10;
                player.update();
        }

        if (keyIsDown(DOWN_ARROW) && player !== lock)
        {
                player.y + 10;
                player.update();
        }

        if (keyIsDown(RIGHT_ARROW) && player !== lock)
        {
                player.x + 10;
                player.update();
        }

        if (keyIsDown(LEFT_ARROW) && player !== lock)
        {
                player.x - 10;
                player.update();
        }

        if (keyIsDown(UP_ARROW) && denner !== speed)
        {
                denner.y - 10;
                denner.update();
        }

        if (keyIsDown(DOWN_ARROW) && denner !== speed)
        {
                denner.y + 10;
                denner.update();
        }

        if (keyIsDown(RIGHT_ARROW) && denner !== speed)
        {
                denner.x + 10;
                denner.update();
        }

        if (keyIsDown(LEFT_ARROW) && denner !== speed)
        {
                denner.x - 10;
                denner.update();
        }

        if (keyIsDown(UP_ARROW) && denner === speed)
        {
                denner.y - 30;
                denner.update();
        }

        if (keyIsDown(DOWN_ARROW) && denner === speed)
        {
                denner.y + 30;
                denner.update();
        }

        if (keyIsDown(RIGHT_ARROW) && denner === speed)
        {
                denner.x + 30;
                denner.update();
        }

        if (keyIsDown(LEFT_ARROW) && denner === speed)
        {
                denner.x - 30;
                denner.update();
        }
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }

    updateCount()
    {
        database.ref('/').update({
            playerCount: Count
        })
    }

    static getPlayerInfo()
    {
        var playerInfoRef = dayabase.ref('players')
        playerInfoRef.on("value",(data)=>{
            playerInfo = data.val();
        })
    }
}