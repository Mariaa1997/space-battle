class Ship{
    constructor(name,hull,firepower,accuracy){
        this.name=name;
        this.hull=hull;
        this.firepower=firepower;
        this.accuracy=accuracy;
    }
     attack(enemy){
            let randomNum = Math.random()
         if (randomNum <= this.accuracy) {
        
            
             console.log("direct hit"); 
             enemy.hull-=this.firepower
             document.getElementById('textoutput').innerHTML += 'AlienShip got Hit. ' + 'Name: ' + enemy.name + ' Hull : ' + enemy.hull + '<br>'
        
        }
        else {
            console.log("you missed");
            this.hull -= enemy.firepower
            document.getElementById('textoutput').innerHTML += 'AlienShip missed' + 'Hull : ' + 'Name: ' + enemy.name + ' Hull : ' + enemy.hull + '<br>'
        }

    }
    health () {
        if(this.hull <0) {
            return false
        } else {
            return true
        }
    }
}




function getRandomIntInclusive (min, max) {
    
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
  



    function decimalRandom(min, max){
    return Math.random()*(max-min) + min
    }
    
  
  

console.log("Begin");


let myShip=new Ship('USS','20','5','0.7');
console.log(myShip);



const alienShip=['AShip1','AShip2','AShip3','AShip4','AShip5','AShip6']
console.log(alienShip);

document.write('Begin' )
document.write('MyShip is loaded')
let i = 0;



const attacking = document.getElementById('attack')
attacking.addEventListener('click', mainProcess)

const continuing = document.getElementById('continue')
continuing.addEventListener('click', conTinue)

const retreating = document.getElementById('retreat')
retreating.addEventListener('click', reTreat)
console.log("My ship retreated. Gameover")

function mainProcess()
{
    const textout = document.getElementById('textoutput')


        
       
        let enemyShip=new Ship(alienShip[i],getRandomIntInclusive(3,6),getRandomIntInclusive(2,4),decimalRandom(0.6,0.8))
       
        textout.innerHTML += 'AlienShip ' + enemyShip.name + ' is loaded...' + '<br>'
        console.log("before Attack")
        console.log(myShip)
        console.log(enemyShip)

        myShip.attack(enemyShip)
        console.log("After Attack")
        console.log(myShip)
        console.log(enemyShip)


        if (enemyShip.hull > 0){
            console.log("Alien ship ", enemyShip.name, " survived")
            textout.innerHTML += 'Alien ship ' + enemyShip.name + ' survived the attack. Ready to attack My Ship.' + '<br>'
        }
        else if (enemyShip.hull <= 0){
            console.log("Alien ship ", enemyShip.name, " is destroyed")
            textout.innerHTML += 'Alien ship ' + enemyShip.name + ' destroyed.' + '<br>'
            i += 1
            if (i > 5)
            {
                textout.innerHTML += 'Alien destroyed. Gameover' + '<br>'
                document.getElementById('attack').disabled = true;
                document.getElementById('continue').disabled = true;
                document.getElementById('retreat').disabled = true;
            }
        }
        else if(myShip.hull <= 0){
            myship_is_alive = false
            console.log("My ship destroyed. Gameover")
            textout.innerHTML += 'My ship destroyed. Gameover.' + '<br>'
            document.getElementById('attack').disabled = true;
            document.getElementById('continue').disabled = true;
            document.getElementById('retreat').disabled = true;
        }


}
function reTreat(){
    myShip.hull = 0
    console.log("My ship retreated. Gameover")
    myship_retreat = true
    const textout = document.getElementById('textoutput') 
    textout.innerHTML += 'My Ship Retreated. Gameover' + '<br>'
    document.getElementById('attack').disabled = true;
    document.getElementById('continue').disabled = true;
    document.getElementById('retreat').disabled = true;

}

function conTinue(){
    console.log("My ship Continue attack")
    mainProcess()
}