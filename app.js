const readLineSync =  require('readline-sync');
const chalk = require('chalk');
const exit = require('exit');
score = 0;

const highScore =
    [
	{
			name: 'Jeevan',
			score : 4
	}
    ]

const arr =[
  {
    q  : "who am I?? ",
    answer : "Engineer"
     
  },
  {
    q  : "Where do I work?? ",
    answer : "Mysore"
     
  },
  {
    q  : "Which is my state I'm leaving in ",
    answer : "Karnataka"
     
  },
  {
    q  : "What I love the most ",
    answer : "Computer"
    
  },
  {
    q  : "What's my Hobby ",
    answer : "Watching Youtube videos"
     
  }, 
	{
    q  : "What's my favourite food ",
    answer : "Biriyani"
     
  }, 
	{
    q  : "What's my favourite snack ",
    answer : "Samosa"
     
  }, 
	{
    q  : "Which car brand I like the most ",
    answer : "BMW"  
  }
]; 

function welcome()
{
const name = readLineSync.question(chalk.bold.green("Your name ?? "));
console.log(chalk.bold.italic.blue("welcome dear ")+ chalk.bold.italic.blueBright(name) +   chalk.bold.italic.blue(" let's see how much you know about me"));

const ext = readLineSync.question(chalk.cyan('Press "E" or "e" to exit or any other key to continue '));
 if(ext === 'E' || ext === 'e')
 {
	 console.log(chalk.magenta('You made an exit'));
	 console.log(chalk.bold.italic.cyan("Bye Dude, But try taking these questions to know about me!!"));
	 console.log(chalk.bold.greenBright.bgBlue('_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_'));
   exit();
 }
}

function qna(q , a )
{
  userAns = readLineSync.question(chalk.bold.yellowBright(q));
  		if(userAns.toUpperCase() === a.toUpperCase())
  	{
    console.log(chalk.bold.green('You are Right!! '));
    score+=1 ;
    console.log(chalk.bold.italic.blue("your score is ")+ chalk.bold.italic.green(score));
  	}
 			else
 		{
    console.log(chalk.bold.red("You are wrong"));
    console.log(chalk.green.bold('Right anser is : ')+ chalk.green.bold(a));
    console.log(chalk.bold.italic.blue("your score is ")+ chalk.bold.italic.red(score));  
    }
}
 
 function execute()
 {
     for (  i=0; i < arr.length; i++ ) 
    {
      qna(arr[i].q , arr[i].answer  )
      console.log(chalk.bold.bgGreen.black("_-_-_-_-_-_-_-_-_"));
   	}
}	 

function scores()
{
 			if(score == 0)
		{
			console.log(chalk.bold.yellow('OOPS!! Better you ask about me and then take this quiz'));
		}
			else if(score == 8)
		{
			console.log(chalk.bold.blueBright('YAY!! you are my best friend who knows everything'));
			console.log(chalk.bold.italic.blue("You're final score is "  + score));
			console.log(chalk.bold.italic.greenBright("Plese send me your name to update in  highscore list"  ));
		} 
			else
		{
 			console.log(chalk.bold.italic.cyan("Your final score is " )+ chalk.bold.italic.greenBright(score ));
			console.log(chalk.bold.cyanBright('These is the highest score till now, and if you have crossed this mark then ping me and send the screenshot of your score'));
				highScore.map((a )=>
			{
				console.log(chalk.bold.green(a.name), chalk.bold.yellow(" : ") , chalk.bold.green(a.score));
			})
			exit(); 
    }
}

welcome()
console.log(chalk.bold.greenBright.bgBlue('_-_-_-_-_-_-_-_-_-_'));
execute()
scores()
