var squares=document.querySelectorAll(".squares");
var again=document.getElementById("again");
var player=document.getElementById("turn");
var turn=false
var val = 1
var game = true
player.textContent="Turn of Player 1(Cross)";
again.addEventListener("clicked",function(){
	again.classList.add("black");
})
for(var i=0;i<9;i++)
{
	squares[i].addEventListener("click",function(){

		if(!(this.classList.contains("cross") || this.classList.contains("circle")))
		{
			if(!turn && game)
			{
				this.classList.remove("circle");
				this.classList.add("cross");
				turn=!turn;
				player.textContent="Turn of Player 2(Circle)";
			}
			else if(game)
			{
				this.classList.remove("cross");
				this.classList.add("circle");
				player.textContent="Turn of Player 1(Cross)";
				turn=!turn;
			}
			win();
		}

	})
}
again.addEventListener("click",function(){
	turn=false;
	game=true;
	player.style.color="white";
	player.textContent="Turn of Player 1(Cross)";
	for(var i=0;i<9;i++)
	{
		squares[i].classList.remove("cross");
		squares[i].classList.remove("circle");
		squares[i].classList.remove("cwdr");
		squares[i].classList.remove("cwdl");
		squares[i].classList.remove("cwh");
		squares[i].classList.remove("cwv");
		squares[i].classList.remove("crwdr");
		squares[i].classList.remove("crwdl");
		squares[i].classList.remove("crwh");
		squares[i].classList.remove("crwv");
	}
})
function win(){
	for(var i=0;i<3;i++)
	{
		if(squares[i].classList.contains("cross") && squares[i+3].classList.contains("cross") && squares[i+6].classList.contains("cross"))
		{
			squares[i].classList.remove("cross");
			squares[i].classList.add("cwv");
			squares[i+3].classList.remove("cross");
			squares[i+3].classList.add("cwv");
			squares[i+6].classList.remove("cross");
			squares[i+6].classList.add("cwv");
			player.textContent="Player 1 wins!!";
			player.style.color="#36FF00";
			game=false
		}
		if(squares[i].classList.contains("circle") && squares[i+3].classList.contains("circle") && squares[i+6].classList.contains("circle"))
		{
			squares[i].classList.remove("circle");
			squares[i].classList.add("crwv");
			squares[i+3].classList.remove("circle");
			squares[i+3].classList.add("crwv");
			squares[i+6].classList.remove("circle");
			squares[i+6].classList.add("crwv");
			player.textContent="Player 2 wins!!";
			player.style.color="#FF0000";
			game=false
		}
	}
	for(var i=0;i<9;i+=3)
	{
		if(squares[i].classList.contains("cross") && squares[i+1].classList.contains("cross") && squares[i+2].classList.contains("cross"))
		{
			squares[i].classList.remove("cross");
			squares[i].classList.add("cwh");
			squares[i+1].classList.remove("cross");
			squares[i+1].classList.add("cwh");
			squares[i+2].classList.remove("cross");
			squares[i+2].classList.add("cwh");
			player.textContent="Player 1 wins!!";
			player.style.color="#36FF00";
			game=false
		}
		if(squares[i].classList.contains("circle") && squares[i+1].classList.contains("circle") && squares[i+2].classList.contains("circle"))
		{
			squares[i].classList.remove("circle");
			squares[i].classList.add("crwh");
			squares[i+1].classList.remove("circle");
			squares[i+1].classList.add("crwh");
			squares[i+2].classList.remove("circle");
			squares[i+2].classList.add("crwh");
			player.textContent="Player 2 wins!!";
			player.style.color="#FF0000";
			game=false
		}
	}
	if(squares[0].classList.contains("cross") && squares[4].classList.contains("cross") && squares[8].classList.contains("cross"))
	{
		squares[0].classList.remove("cross");
		squares[0].classList.add("cwdr");
		squares[4].classList.remove("cross");
		squares[4].classList.add("cwdr");
		squares[8].classList.remove("cross");
		squares[8].classList.add("cwdr");
		player.textContent="Player 1 wins!!";
		player.style.color="#36FF00";
		game=false
	}
	if(squares[6].classList.contains("cross") && squares[4].classList.contains("cross") && squares[2].classList.contains("cross"))
	{
		squares[6].classList.remove("cross");
		squares[6].classList.add("cwdl");
		squares[4].classList.remove("cross");
		squares[4].classList.add("cwdl");
		squares[2].classList.remove("cross");
		squares[2].classList.add("cwdl");
		player.textContent="Player 1 wins!!";
		player.style.color="#36FF00";
		game=false
	}
	
	if(squares[0].classList.contains("circle") && squares[4].classList.contains("circle") && squares[8].classList.contains("circle"))
	{
		squares[0].classList.remove("circle");
		squares[0].classList.add("crwdr");
		squares[4].classList.remove("circle");
		squares[4].classList.add("crwdr");
		squares[8].classList.remove("circle");
		squares[8].classList.add("crwdr");
		player.textContent="Player 2 wins!!";
		player.style.color="#FF0000";
		game=false
	}
	if(squares[6].classList.contains("circle") && squares[4].classList.contains("circle") && squares[2].classList.contains("circle"))
	{
		squares[6].classList.remove("circle");
		squares[6].classList.add("crwdl");
		squares[4].classList.remove("circle");
		squares[4].classList.add("crwdl");
		squares[2].classList.remove("circle");
		squares[2].classList.add("crwdl");
		player.textContent="Player 2 wins!!";
		player.style.color="#FF0000";
		game=false
	}
}