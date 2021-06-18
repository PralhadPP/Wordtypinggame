const msg = document.querySelector('.msg');
	const guess = document.querySelector('input');
	const btn = document.querySelector('.btn');
	const Scoredis = document.getElementById('score');
	let score = 0;
	let play=false;
	let newWords = "";
	let randwords = "";
	let sWords=['grapes','lime','lemon','cherry','blueberry','banana','apple','watermelon','Coconut','Orange','Pineapple','Mango','Guava','Apricots','Almond','BlackCurrant','CustardApple','DragonFruit','Fig','Jackfruit','Nut','Peach','Pear','Pista','Pomegranate','Plum','muskmelon','kiwi','Strawberry','Dates','sugarcane','cashew','Olive','Blackberry','Starfruit','SweetLime']



	var count= 21;
	setInterval(function timecount(){
		count--;


		if(count >=0 && play==true){

			id= document.getElementById("time");
			id.innerHTML = `Time:  ${count}`;
		}
		if ( count === 0) {
			id.innerHTML = "game over";

		}
		if ( count === -1) {
			window.location.reload();

		}
		

	}, 1000);

	
	const createNewWords = () =>{
		let ranNum = Math.floor(Math.random() * sWords.length);
		//console.log(ranNum);
		let newTempSwords = sWords[ranNum];
		//console.log(newTempSwords.split(""));
		return newTempSwords;

	}

	const scrambleWords = (arr) => {
		for(let i = arr.length-1; i>0;i--){
			let temp = arr[i];
			//console.log(temp);
			let j =Math.floor(Math.random()*(i+1));
			//console.log(i);
			//console.log(j);

			arr[i] = arr[j];
			arr[j] = temp;
		}

		return arr;

	}

	btn.addEventListener('click', function() {
		if(!play){
			play= true;
			btn.innerHTML = "Guess";
			guess.classList.toggle('hidden');
			newWords=createNewWords();
			randWords = scrambleWords(newWords.split("")).join("");
			//console.log(randWords.join(""));
			msg.innerHTML = `Guess (Fruits) :   ${randWords}`;
		}else{
			let tempWord =guess.value;
			if(tempWord  ===newWords){
				//console.log('correct');
				score++;
				count=21;
				play= false;
				msg.innerHTML = `Great You Guess Correct.it is ${newWords}`;
				btn.innerHTML = " Lets Try NEXT ";
				guess.classList.toggle('hidden');
				guess.value="";
			}else{
				console.log('incorrect');
				msg.innerHTML = `Sorry Its incorrect. Please Try Again ${randWords}`;
				guess.value="";
			}
			Scoredis.innerHTML = `Score: ${score}`;
		}
		
	})