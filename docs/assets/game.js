var numSquares=6;
var colors=generateRandomColors(numSquares);
var pickedColor=pickColor();
var colorDisplay =document.getElementById("colorDisplay");
var msgDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

for(var i=0;i<modeButtons.length;i++)
{
	modeButtons[i].addEventListener("click",function()
	{	
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy" ? numSquares=3 : numSquares=6;
		reset();
	});
}

function reset()
{	
	//need to genearte all new colours
	colors=generateRandomColors(numSquares);
	//pick new ramdom color from array
	pickedColor=pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent=pickedColor;
	// need to change colrs of squaress from page
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{	squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}else
		{
			squares[i].style.display="none";
		}
		
	}
	h1.style.background="steelblue";
	resetButton.textContent="New Colours";
	msgDisplay.textContent="";

}


// easyBtn.addEventListener("click",function()
// {
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares=3;
// 	colors=generateRandomColors(numSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0;i<squares.length;i++)
// 	{
// 		if(colors[i])
// 		{
// 			squares[i].style.background=colors[i];
// 		}else
// 		{
// 			squares[i].style.display="none";
// 		}
		
// 	}
// })

// hardBtn.addEventListener("click",function()
// {
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares=6;
// 	colors=generateRandomColors(numSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for(var i=0;i<squares.length;i++)
// 	{
// 			squares[i].style.background=colors[i];
// 			squares[i].style.display="block";
		
// 	}
	
// })

resetButton.addEventListener("click",function()
{
	reset();
})

colorDisplay.textContent=pickedColor;

var squares=document.querySelectorAll(".square");
for(var i=0;i<squares.length;i++)
{	// adding initial colors
	squares[i].style.background=colors[i];

	//adding quick listeners to squares
	squares[i].addEventListener("click",function()
	{
		//grab color of the clicked square
		var clickedColor = this.style.background;
		//compare color color with picked color
		if(clickedColor === pickedColor)
		{
			msgDisplay.textContent="Correct!";
			changeColors(clickedColor);
			h1.style.background=clickedColor;
			resetButton.textContent="Play Again"
		}else
		{
			this.style.background="#232323";
			msgDisplay.textContent="Try Again";
		}
	})
}
  
function changeColors(color)
{
	for(var i=0;i<colors.length;i++)
	{
		squares[i].style.background=color;
	}
}

function pickColor()
{
	var randomNumer= Math.floor(Math.random()*(colors.length));
	return colors[randomNumer];
}

function generateRandomColors(num)
{
	//make an array
	var arr=[]; 
	// add num random colors to array
	for(var i=0;i<num;i++)
	{	
		arr.push(randomColor());
		//get random color and push into array

	}
	//return array
	return arr;
}

function randomColor()
{
	// pick a "red "from 0 to 255
	var redColor= Math.floor(Math.random()*256);
	// pick a "green "from 0 to 255
	var blueColor= Math.floor(Math.random()*256);
	// pick a "blue "from 0 to 255
	var greenColor= Math.floor(Math.random()*256);

	var reqColor="rgb("+redColor+", "+greenColor+", "+blueColor+")";
	return reqColor;
}

