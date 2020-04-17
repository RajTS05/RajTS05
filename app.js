var list = [];
var seco =[];
var minu=[];
var highScoreSec=[];
var highScoreMin=[];
var hscore = [];
var minute = [];
var second = [];
var hcore=[];
var hore = []
var l = 0; 

var randno = Math.floor(Math.random()*20)+1;
list.push(randno);
for(i=0;i<19;i++)
{
    GenerateNo();
}
function GenerateNo()
{    var randno = Math.floor(Math.random()*20)+1;
     var c =0;
    for(var i=0;i<list.length;i++)
  {
     if(randno!=list[i])
     {
         c++;
     }

  }
  if(c==list.length)
  {
      list.push(randno);
  }
  else
  {
      GenerateNo();
  }
}

document.getElementById("container").addEventListener("click",handleClick);


if(localStorage.getItem('hscore')!=null)
{    hcore = localStorage.getItem('hscore').split(',');
     for(var o=0;o<hcore.length;o++)
    {   
        hore[o] = Number(hcore[o]);
        minute[o] = parseInt(hore[o]/60);
        second[o] = hore[o]%60;
    }
    if(hore.length==1)
    {
        document.getElementById('hscore').innerHTML= 
        "<h5>Highscore<br>"+minute[0] + ":</h5>" + "<h5>"+second[0]+"</h5><br>";
    }
    if(hore.length==2)
    {
        document.getElementById('hscore').innerHTML= 
    "<h5>Highscore<br>"+minute[0] + ":</h5>" + "<h5>"+second[0]+"</h5><br>"
    +"<h5>"+minute[1] + ":</h5>" + "<h5>"+second[1]+"</h5><br>";
    }
    if(hore.length==3)
    {
        document.getElementById('hscore').innerHTML= 
    "<h5>Highscore<br>"+minute[0] + ":</h5>" + "<h5>"+second[0]+"</h5><br>"
    +"<h5>"+minute[1] + ":</h5>" + "<h5>"+second[1]+"</h5><br>"
    +"<h5>"+minute[2] + ":</h5>" + "<h5>"+second[2]+"</h5><br>";
    }
    if(hore.length==4)
    {
        document.getElementById('hscore').innerHTML= 
    "<h5>Highscore<br>"+minute[0] + ":</h5>" + "<h5>"+second[0]+"</h5><br>"
    +"<h5>"+minute[1] + ":</h5>" + "<h5>"+second[1]+"</h5><br>"
    +"<h5>"+minute[2] + ":</h5>" + "<h5>"+second[2]+"</h5><br>"
    +"<h5>"+minute[3] + ":</h5>" + "<h5>"+second[3]+"</h5><br>";
    }
    if(hore.length>=5)
   {
    document.getElementById('hscore').innerHTML= 
    "<h5>Highscore<br>"+minute[0] + ":</h5>" + "<h5>"+second[0]+"</h5><br>"
    +"<h5>"+minute[1] + ":</h5>" + "<h5>"+second[1]+"</h5><br>"
    +"<h5>"+minute[2] + ":</h5>" + "<h5>"+second[2]+"</h5><br>"
    +"<h5>"+minute[3] + ":</h5>" + "<h5>"+second[3]+"</h5><br>"
    +"<h5>"+minute[4] + ":</h5>" + "<h5>"+second[4]+"</h5><br>";
    
   }
    
}




var sec=0,min=0;

function handleClick()
{   
    l++;
    if(l==1)
    {
var seconds = 4
    
    var countdown = setInterval(function() {
        seconds--;
        if(seconds>0)
        {
            document.getElementById("container").innerHTML = "<h3>"+seconds+"</h3>";
        }

        if (seconds ==0)
        {    sec=0; min=0;
            document.getElementById("time").style.visibility="visible";
             document.getElementById("container").innerHTML = "";
            clearInterval(countdown);
            const container = document.getElementById("container");
            for(var i=0;i<20;i++)
            {
               let cell=document.createElement("div");
               container.appendChild(cell).className="gridRows " +i;
               cell.innerHTML = "<h2>" + list[i] + "</h2>";
               cell.id="grows" + i;
               document.getElementById("grows"+i).addEventListener("click",whenClicked);
               container.style.padding='20px';
               container.style.fontSize='22px'
            };
            seconds =0;
         


        }

        }, 1000);




        var timer = setInterval(function()
        {
          if(seconds==0)
          {sec++;
            if(sec==61)
            {
                sec=0;
                min++;
            }
          document.getElementById("time").innerHTML="<h5>Timer<br>"+ min + ":</h5>" + "<h5>"+sec+"</h5>";
          }
           
          
        if(userPattern.length==40)
        {
            clearInterval(timer);
        }


        },1000);


    }
    
}

var userPattern = [];

function whenClicked()
{   
    if(Number(document.getElementById(this.id).innerText<=20))
    {
        document.getElementById(this.id).style.backgroundColor="#ffb6b6";
        userPattern.push(Number(document.getElementById(this.id).innerText));
        var no = Number(document.getElementById(this.id).innerText) + 20;
        document.getElementById(this.id).innerHTML="<h1>" + no +"</h1>";
        


        for(var j=0;j<userPattern.length;j++)
        {
           if(userPattern[j]!=gameSequence[j])
           {
            
            document.getElementById("container").innerHTML="<h4>GAME OVER<br>Restart!</h4>";
            var activeButton =  document.querySelector("body");
            activeButton.classList.add("red");
            setTimeout(function() {
              activeButton.classList.remove("red");
            }
                
               ,100);   
             userPattern=[];  
             document.getElementById("time").style.visibility="hidden";
             
           }
           else
           {
               var activeButton =  document.querySelector("body");
               activeButton.classList.add("green");
               setTimeout(function() {
                 activeButton.classList.remove("green");
                }
                 
                ,100);
          }
        }
        
   

        
        
         
        
        
        
    }

    else
    {   if(userPattern.length>=20)
        {   
            userPattern.push(Number(document.getElementById(this.id).innerText));
            document.getElementById(this.id).style.visibility="hidden";
            
        }

        


        for(var j=0;j<userPattern.length;j++)
        {
           if(userPattern[j]!=gameSequence[j])
           {
            var activeButton =  document.querySelector("body");
            activeButton.classList.add("red");
            setTimeout(function() {
              activeButton.classList.remove("red"); 
           },100)
           
           document.getElementById("container").innerHTML="<h4>GAME OVER<br>Restart!</h4>";
           document.getElementById("time").style.visibility="hidden";
           userPattern=[];
           }
             
           else
           {
            var activeButton =  document.querySelector("body");
            activeButton.classList.add("green");
            setTimeout(function() {
              activeButton.classList.remove("green");
             }
              
             ,100);
               
           }
        }


        if(userPattern.length==40)
        {
                if(localStorage.getItem('rand1234554321')==null)
                {
                    localStorage.setItem('j',0);
                    localStorage.setItem('i',0)
                    localStorage.setItem('rand1234554321',2);
                }
            
            
            
            
                
                seco.push(sec);
                var j = localStorage.getItem('j');
                localStorage.setItem('sec'+j,seco[0]);
                j++;
                localStorage.setItem('j',j);

                
                minu.push(min);
                var i = localStorage.getItem('i');
                localStorage.setItem('min'+i,minu[0]);
                i++;
                localStorage.setItem('i',i);
                
                for(var k=0;k<localStorage.getItem('j');k++)
                {
                    highScoreSec[k]=localStorage.getItem('sec'+k);
                }

                for(var k=0;k<localStorage.getItem('i');k++)
                {
                    highScoreMin[k]=localStorage.getItem('min'+k);
                }

                
                for(var k=0;k<localStorage.getItem('j');k++)
                {
                    hscore[k]=(highScoreMin[k]*60 + highScoreSec[k]);
                }
 
                for(var k=0;k<localStorage.getItem('j');k++)
                {
                    for(m=0;m<k;m++)
                    {
                       if(hscore[m]>=hscore[k])
                       {
                           var temp;
                           temp=hscore[k];
                           hscore[k]=hscore[m];
                           hscore[m]=temp;
                       }
                    }
                }
                
               

                
                var ts =sec;
                var tm =min;
                
                document.getElementById("time").innerHTML="<h5>Timer<br>"+ tm + ":</h5>" + "<h5>"+ts+"</h5>";

                document.getElementById("tl").innerHTML="<h5>Your Score-" +tm +":</h5>" +"<h5>"+ts+"</h5>";
 
                document.getElementById("container").innerHTML="<h4>Good Job<br>Restart to play</h4>";
                
                localStorage.setItem('hscore',hscore);

                hcore = localStorage.getItem('hscore').split(',');
                for(var o=0;o<hcore.length;o++)
               {   
                   hore[o] = Number(hcore[o]);
                   minute[o] = parseInt(hore[o]/60);
                   second[o] = hore[o]%60;
               }

                if(hore.length==1)
                {
                    document.getElementById('hscore').innerHTML= 
                    "<h5>Highscore<br>"+minute[0] + ":</h5>" + "<h5>"+second[0]+"</h5><br>";
                }
                if(hore.length==2)
                {
                    document.getElementById('hscore').innerHTML= 
                "<h5>Highscore<br>"+minute[0] + ":</h5>" + "<h5>"+second[0]+"</h5><br>"
                +"<h5>"+minute[1] + ":</h5>" + "<h5>"+second[1]+"</h5><br>";
                }
                if(hore.length==3)
                {
                    document.getElementById('hscore').innerHTML= 
                "<h5>Highscore<br>"+minute[0] + ":</h5>" + "<h5>"+second[0]+"</h5><br>"
                +"<h5>"+minute[1] + ":</h5>" + "<h5>"+second[1]+"</h5><br>"
                +"<h5>"+minute[2] + ":</h5>" + "<h5>"+second[2]+"</h5><br>";
                }
                if(hore.length==4)
                {
                    document.getElementById('hscore').innerHTML= 
                "<h5>Highscore<br>"+minute[0] + ":</h5>" + "<h5>"+second[0]+"</h5><br>"
                +"<h5>"+minute[1] + ":</h5>" + "<h5>"+second[1]+"</h5><br>"
                +"<h5>"+minute[2] + ":</h5>" + "<h5>"+second[2]+"</h5><br>"
                +"<h5>"+minute[3] + ":</h5>" + "<h5>"+second[3]+"</h5><br>";
                }
                if(hore.length>=5)
               {
                document.getElementById('hscore').innerHTML= 
                "<h5>Highscore<br>"+minute[0] + ":</h5>" + "<h5>"+second[0]+"</h5><br>"
                +"<h5>"+minute[1] + ":</h5>" + "<h5>"+second[1]+"</h5><br>"
                +"<h5>"+minute[2] + ":</h5>" + "<h5>"+second[2]+"</h5><br>"
                +"<h5>"+minute[3] + ":</h5>" + "<h5>"+second[3]+"</h5><br>"
                +"<h5>"+minute[4] + ":</h5>" + "<h5>"+second[4]+"</h5><br>";
                
               }


                
                
        }

        

        





        if(userPattern.length<20 && Number(document.getElementById(this.id).innerText>20) )
            {
            
                document.getElementById("container").innerHTML="<h4>GAME OVER<br>Restart!</h4>";
                var activeButton =  document.querySelector("body");
                activeButton.classList.add("red");
                setTimeout(function() {
                  activeButton.classList.remove("red");
                }
                    
                   ,100);   
                 userPattern=[];  
                 document.getElementById("time").style.visibility="hidden";
            }



    }
    

}

var gameSequence = [];
for(var j =0;j<40;j++)
{   
        gameSequence.push(j+1);
    
}



