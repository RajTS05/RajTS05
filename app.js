var list = [];
var seco =[];
var minu=[];
var highScoreSec=[];
var highScoreMin=[];
var userPattern = [];
var hscore = [];
var minute = [];
var second = [];
var hcore=[];
var hore = []
var l = 0; 
var n=0;
var level=0;
var tom2 = new Audio("sounds/Merged/2.mp3");
var h=[];

//Generating & placing numbers randomly from 1 to 20.
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


var ee=0,mm=0,hh=0;


   
document.getElementById("e").addEventListener("click",function(){
    if(ee==0)
    {
        mm++;
        hh++;
        hscore=[];
        level=1;
        l=0;
        document.getElementById("m").style.opacity="0.3";
        document.getElementById("h").style.opacity="0.3";
        document.getElementById("container").innerHTML="<h6>Click to Play</h6>";
        tom2.pause();
        tom2.currentTime=0;
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
    }
   
});
document.getElementById("m").addEventListener("click",function(){


    if(mm==0)
    {
        ee++;
        hh++;
        document.getElementById("e").style.opacity="0.3";
        document.getElementById("h").style.opacity="0.3";
        level=2;
        hscore=[];
        hore=[];
        l=0;
        document.getElementById("container").innerHTML="<h6>Click to Play</h6>";
        tom2.pause();
        tom2.currentTime=0;
        
        if(localStorage.getItem('hlcore')!=null)
        {    hcore = localStorage.getItem('hlcore').split(',');
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
    }


   

});
document.getElementById("h").addEventListener("click",function(){


    if(hh==0)
    {
        mm++;
        ee++
        level=3;
    l=0;
    document.getElementById("container").innerHTML="<h6>Click to Play</h6>";
    tom2.pause(); 
    tom2.currentTime=0;
    document.getElementById("e").style.opacity="0.3";
    document.getElementById("m").style.opacity="0.3";
    level=3;
    hscore=[];
    hore=[];
    l=0;
    document.getElementById("container").innerHTML="<h6>Click to Play</h6>";
    tom2.pause();
    tom2.currentTime=0;
    
    if(localStorage.getItem('hmcore')!=null)
    {    hcore = localStorage.getItem('hmcore').split(',');
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
    }

    
});






 








    










var sec=0,min=0;

function handleClick()
{    
      
            
           if(level==1)
            {
                l++;
                if(l==1)
                {   
                    var tom1 = new Audio("sounds/Cut/1.mp3");
                    tom1.play();
                    var seconds = 4
                    var countdown = setInterval(function() 
                    {
                     seconds--;
                     if(seconds>0)
                      {
                        document.getElementById("container").innerHTML = "<h3>"+seconds+"</h3>";
                      }
            
                      if (seconds ==0)
                      {   
                        sec=0; min=0;
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
                        n++;
            
            
                      }
            
                      
                      if(n==1)
                       {
                        tom2.play();
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

           if(level==2)
            {
                l++;
                if(l==1)
                {
                    var tom1 = new Audio("sounds/Cut/1.mp3");
                    tom1.play();
                    var seconds = 4
                    var countdown = setInterval(function() 
                    {
                     seconds--;
                     if(seconds>0)
                      {
                        document.getElementById("container").innerHTML = "<h3>"+seconds+"</h3>";
                      }
            
                      if (seconds ==0)
                      {   
                        sec=0; min=0;
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
                        n++;
            
            
                      }
            
                      
                      if(n==1)
                       {
                        tom2.play();
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
                       
                      
                    if(userPattern.length==60)
                    {
                        clearInterval(timer);
                    }
                 
            
                    },1000);
                
                    
            
            
                }
                             
            }

           if(level==3)
            {
                l++;
                if(l==1)
                {
                    var tom1 = new Audio("sounds/Cut/1.mp3");
                    tom1.play();
                    var seconds = 4
                    var countdown = setInterval(function() 
                    {
                     seconds--;
                     if(seconds>0)
                      {
                        document.getElementById("container").innerHTML = "<h3>"+seconds+"</h3>";
                      }
            
                      if (seconds ==0)
                      {   
                        sec=0; min=0;
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
                        n++;
            
            
                      }
            
                      
                      if(n==1)
                       {
                        
                        tom2.play();
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
                       
                      
                    if(userPattern.length==80)
                    {
                        clearInterval(timer);
                    }
                 
            
                    },1000);
                
                    
            
            
                }
                         
            }










    
   
    
}



function whenClicked()
{   
     
   if(level==1)
   {
      if(Number(document.getElementById(this.id).innerText<=20))
        {   
           var y = Number(document.getElementById(this.id).innerText);
           if(y<5)
             {   
              var z =5-y;
              document.getElementById(this.id).style.backgroundColor= "rgb(255,255,"+51*z+")";
             }
            else if(y>=5&&y<11)
            {
             if(y==5)
             {
                document.getElementById(this.id).style.backgroundColor= "rgb(255,215,0)";
             }
             if(y==6)
             {
                document.getElementById(this.id).style.backgroundColor= "rgb(255,165,0)";
             }
             if(y==7)
             {
                document.getElementById(this.id).style.backgroundColor= "rgb(255,140,0)";
             }
             if(y==8)
             {
                document.getElementById(this.id).style.backgroundColor= "rgb(255,127,80)";
             }
             if(y==9)
             {
                document.getElementById(this.id).style.backgroundColor= "rgb(255,99,71)";
             }
             if(y==10)
             {
                document.getElementById(this.id).style.backgroundColor= "rgb(255,69,0)";
             }
            }
           else if(y>=11&&y<=20)
            {   
            var m=   256 - 16*(y-10);

            document.getElementById(this.id).style.backgroundColor= "rgb("+m+",0,0)";
            }
      
            document.getElementById(this.id).classList.add("grid");
 
        
            userPattern.push(Number(document.getElementById(this.id).innerText));
            var no = Number(document.getElementById(this.id).innerText) + 20;
            document.getElementById(this.id).innerHTML="<h2>" + no +"</h2>";
        


            for(var j=0;j<userPattern.length;j++)
           {
              if(userPattern[j]!=gameSequence[j])
               {
            
                document.getElementById("container").innerHTML="<h4>GAME OVER<br>Restart!</h4>";
                var tom3  = new Audio("sounds/Cut/2.mp3");
                tom3.play();
                var activeButton =  document.querySelector("body");
                activeButton.classList.add("red");
                setTimeout(function() 
                {
                activeButton.classList.remove("red");
                },100); 
                
                 
                userPattern=[];  
                document.getElementById("time").style.visibility="hidden";
             
                }
              else
               {
                 var activeButton =  document.querySelector("body");
                 activeButton.classList.add("green");
                 setTimeout(function() 
                 {
                 activeButton.classList.remove("green");
                 },100);
               } 
                
          
            }
        }




     else
      {   
        if(userPattern.length>=20 && userPattern.length<=40)
        {   
            userPattern.push(Number(document.getElementById(this.id).innerText));
            document.getElementById(this.id).style.visibility="hidden";
            console.log(this.id);
            
        }

        for(var j=0;j<userPattern.length;j++)
        {
           if(userPattern[j]!=gameSequence[j])
           {
             var activeButton =  document.querySelector("body");
             activeButton.classList.add("red");
             setTimeout(function() 
              {
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
              setTimeout(function() 
              {
              activeButton.classList.remove("green");
              }
              
              ,100);
               
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
                    hscore[k]=Number(highScoreMin[k])*60 + Number(highScoreSec[k]);
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
    }

}
     var p=0;
     var m=0;
        if(level==2)
            { 
                
                
                for(i=0;i<60;i++)
                {
                    gameSequence[i]=i+1;
                    
                    
                }
             
   


                if(Number(document.getElementById(this.id).innerText)<=20)
                {   p++;
                    var y = Number(document.getElementById(this.id).innerText);
                    if(y<5)
                    {   
                        var z =5-y;
                        document.getElementById(this.id).style.backgroundColor= "rgb(255,255,"+51*z+")";
                    }
                    else if(y>=5&&y<11)
                    {
                         if(y==5)
                         {
                            document.getElementById(this.id).style.backgroundColor= "rgb(255,215,0)";
                         }
                         if(y==6)
                         {
                            document.getElementById(this.id).style.backgroundColor= "rgb(255,165,0)";
                         }
                         if(y==7)
                         {
                            document.getElementById(this.id).style.backgroundColor= "rgb(255,140,0)";
                         }
                         if(y==8)
                         {
                            document.getElementById(this.id).style.backgroundColor= "rgb(255,127,80)";
                         }
                         if(y==9)
                         {
                            document.getElementById(this.id).style.backgroundColor= "rgb(255,99,71)";
                         }
                         if(y==10)
                         {
                            document.getElementById(this.id).style.backgroundColor= "rgb(255,69,0)";
                         }
                    }
                    else if(y>=11&&y<=20)
                    {   
                        var m=   256 - 16*(y-10);
            
                        document.getElementById(this.id).style.backgroundColor= "rgb("+m+",0,0)";
                    }
                  
                    document.getElementById(this.id).classList.add("grid");
             
                    
                    userPattern.push(Number(document.getElementById(this.id).innerText));
                    var no = Number(document.getElementById(this.id).innerText) + 20;
                    document.getElementById(this.id).innerHTML="<h2>" + no +"</h2>";
                    
            
            
                    for(var j=0;j<userPattern.length;j++)
                    {
                       if(userPattern[j]!=gameSequence[j])
                       {
                        
                        document.getElementById("container").innerHTML="<h4>GAME OVER<br>Restart!</h4>";
                        var tom3  = new Audio("sounds/Cut/2.mp3");
                        tom3.play();
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
                {   if(Number(document.getElementById(this.id).innerText)>20&& Number(document.getElementById(this.id).innerText)<=40&&p==0 )
                    {   p++;
                        userPattern.push(Number(document.getElementById(this.id).innerText));
                        var x =Number(document.getElementById(this.id).innerText) + 20;
                        console.log(x);
                        m++;
                        document.getElementById(this.id).innerHTML= "<h2>"+ x + "</h2>"; 
                        
                    }
            
                    
            
            
                    for(var j=0;j<userPattern.length;j++)
                    {
                       if(userPattern[j]!=gameSequence[j])
                       {
                         var activeButton =  document.querySelector("body");
                         activeButton.classList.add("red");
                         setTimeout(function() 
                          {
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
                          setTimeout(function() 
                          {
                          activeButton.classList.remove("green");
                          }
                          
                          ,100);
                           
                        }
                    }


                             
                    if(Number(document.getElementById(this.id).innerText)>40 && Number(document.getElementById(this.id).innerText) <=60&&p==0)
                    {
                       userPattern.push(Number(document.getElementById(this.id).innerText));
                       document.getElementById(this.id).style.visibility="hidden";

                                      
                      for(var j=0;j<userPattern.length;j++)
                     {
                       if(userPattern[j]!=gameSequence[j])
                       {
                         var activeButton =  document.querySelector("body");
                         activeButton.classList.add("red");
                         setTimeout(function() 
                          {
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
                          setTimeout(function() 
                          {
                          activeButton.classList.remove("green");
                          }
                          
                          ,100);
                           
                        }
                     }







                    }




            
                    if(userPattern.length<40&&userPattern.length>20&&Number(document.getElementById(this.id).innerText)>40&m==0) 

                     {
                        var activeButton =  document.querySelector("body");
                        activeButton.classList.add("red");
                        setTimeout(function() 
                         {
                         activeButton.classList.remove("red"); 
                         },100)
                      
                         document.getElementById("container").innerHTML="<h4>GAME OVER<br>Restart!</h4>";
                         document.getElementById("time").style.visibility="hidden";
                         userPattern=[];

                     }







                    if(userPattern.length==60)
                    {
                            if(localStorage.getItem('rand12345543')==null)
                            {
                                localStorage.setItem('q',0);
                                localStorage.setItem('w',0)
                                localStorage.setItem('rand1234554321',2);
                            }
                        
                        
                        
                        
                            
                            seco.push(sec);
                            var q = localStorage.getItem('q');
                            localStorage.setItem('sec'+q,seco[0]);
                            q++;
                            localStorage.setItem('q',q);
            
                            
                            minu.push(min);
                            var w = localStorage.getItem('w');
                            localStorage.setItem('min'+w,minu[0]);
                            w++;
                            localStorage.setItem('w',w);
                            
                            for(var k=0;k<localStorage.getItem('q');k++)
                            {
                                highScoreSec[k]=localStorage.getItem('sec'+k);
                            }
            
                            for(var k=0;k<localStorage.getItem('w');k++)
                            {
                                highScoreMin[k]=localStorage.getItem('min'+k);
                            }
            
                            
                            for(var k=0;k<localStorage.getItem('q');k++)
                            {
                                hscore[k]=Number(highScoreMin[k])*60 + Number(highScoreSec[k]);
                            }
             
                            for(var k=0;k<localStorage.getItem('q');k++)
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
                            
                            localStorage.setItem('hlcore',hscore);
            
                            hcore = localStorage.getItem('hlcore').split(',');
                            for(var o=0;o<hcore.length;o++)
                           {   
                               hore[o] = Number(hcore[o]);
                               minute[o] = parseInt(hore[o]/60);
                               second[o] = hore[o]%60;
                               console.log(second[0]);
                               console.log(minute[o]);
                               console.log(hore[0]);
                               
                               
                               
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
            
                    
            
                    
            
            
            
            
            
                   
            
            
                }


            }



            var v=0,c=0;
            if(level==3)
            {   console.log(userPattern);
                console.log(gameSequence);
                

                for(i=0;i<80;i++)
                {
                    gameSequence[i]=i+1;
                    
                    
                }
             
   


                if(Number(document.getElementById(this.id).innerText)<=20)
                {   v++;
                    var y = Number(document.getElementById(this.id).innerText);
                    if(y<5)
                    {   
                        var z =5-y;
                        document.getElementById(this.id).style.backgroundColor= "rgb(255,255,"+51*z+")";
                    }
                    else if(y>=5&&y<11)
                    {
                         if(y==5)
                         {
                            document.getElementById(this.id).style.backgroundColor= "rgb(255,215,0)";
                         }
                         if(y==6)
                         {
                            document.getElementById(this.id).style.backgroundColor= "rgb(255,165,0)";
                         }
                         if(y==7)
                         {
                            document.getElementById(this.id).style.backgroundColor= "rgb(255,140,0)";
                         }
                         if(y==8)
                         {
                            document.getElementById(this.id).style.backgroundColor= "rgb(255,127,80)";
                         }
                         if(y==9)
                         {
                            document.getElementById(this.id).style.backgroundColor= "rgb(255,99,71)";
                         }
                         if(y==10)
                         {
                            document.getElementById(this.id).style.backgroundColor= "rgb(255,69,0)";
                         }
                    }
                    else if(y>=11&&y<=20)
                    {   
                        var m=   256 - 16*(y-10);
            
                        document.getElementById(this.id).style.backgroundColor= "rgb("+m+",0,0)";
                    }
                  
                    document.getElementById(this.id).classList.add("grid");
             
                    
                    userPattern.push(Number(document.getElementById(this.id).innerText));
                    var no = Number(document.getElementById(this.id).innerText) + 20;
                    document.getElementById(this.id).innerHTML="<h2>" + no +"</h2>";
                    
            
            
                    for(var j=0;j<userPattern.length;j++)
                    {
                       if(userPattern[j]!=gameSequence[j])
                       {
                        
                        document.getElementById("container").innerHTML="<h4>GAME OVER<br>Restart!</h4>";
                        var tom3  = new Audio("sounds/Cut/2.mp3");
                        tom3.play();
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
                {   if(Number(document.getElementById(this.id).innerText)>20&& Number(document.getElementById(this.id).innerText)<=40&&v==0 )
                    {   v++;
                        console.log("20 to 40");
                        
                        userPattern.push(Number(document.getElementById(this.id).innerText));
                        var x =Number(document.getElementById(this.id).innerText) + 20;
                        console.log(x);
                        c++;
                        document.getElementById(this.id).innerHTML= "<h2>"+ x + "</h2>"; 
                        
                    }
            
                    
            
            
                    for(var j=0;j<userPattern.length;j++)
                    {
                       if(userPattern[j]!=gameSequence[j])
                       {
                         var activeButton =  document.querySelector("body");
                         activeButton.classList.add("red");
                         setTimeout(function() 
                          {
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
                          setTimeout(function() 
                          {
                          activeButton.classList.remove("green");
                          }
                          
                          ,100);
                           
                        }
                    }

                  var b=0;
                             
                    if(Number(document.getElementById(this.id).innerText)>40 && Number(document.getElementById(this.id).innerText)<=60&&v==0)
                    {  console.log("40 to 60");
                       b++;
                       userPattern.push(Number(document.getElementById(this.id).innerText));
                       var g=Number(document.getElementById(this.id).innerText) + 20;
                       document.getElementById(this.id).innerHTML="<h2>"+g+"</h2>";
                       v++;
                        c++;              
                      for(var j=0;j<userPattern.length;j++)
                     {
                       if(userPattern[j]!=gameSequence[j])
                       {
                         var activeButton =  document.querySelector("body");
                         activeButton.classList.add("red");
                         setTimeout(function() 
                          {
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
                          setTimeout(function() 
                          {
                          activeButton.classList.remove("green");
                          }
                          
                          ,100);
                           
                        }
                     }







                    }




            
                    if(userPattern.length<40&&userPattern.length>20&&Number(document.getElementById(this.id).innerText)>40&c==0) 

                     {  
                     
                        var activeButton =  document.querySelector("body");
                        activeButton.classList.add("red");
                        setTimeout(function() 
                         {
                         activeButton.classList.remove("red"); 
                         },100)
                      
                         document.getElementById("container").innerHTML="<h4>GAME OVER<br>Restart!</h4>";
                         document.getElementById("time").style.visibility="hidden";
                         userPattern=[];

                     }






                              
                    if(Number(document.getElementById(this.id).innerText)>60 && Number(document.getElementById(this.id).innerText) <=80&&v==0&&b==0)
                      { 
                      
                        userPattern.push(Number(document.getElementById(this.id).innerText));
                        document.getElementById(this.id).style.visibility="hidden";
                        v++;
                                       
                       for(var j=0;j<userPattern.length;j++)
                      {
                        if(userPattern[j]!=gameSequence[j])
                        {
                          var activeButton =  document.querySelector("body");
                          activeButton.classList.add("red");
                          setTimeout(function() 
                           {
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
                           setTimeout(function() 
                           {
                           activeButton.classList.remove("green");
                           }
                           
                           ,100);
                            
                         }
                        }
                      }






                    if(userPattern.length==80)
                    {
                            if(localStorage.getItem('rand123455497987')==null)
                            {
                                localStorage.setItem('t',0);
                                localStorage.setItem('h',0)
                                localStorage.setItem('rand1234554321',2);
                            }
                        
                        
                        
                        
                            
                            seco.push(sec);
                            var t = localStorage.getItem('t');
                            localStorage.setItem('sec'+t,seco[0]);
                            t++;
                            localStorage.setItem('t',t);
            
                            
                            minu.push(min);
                            var h = localStorage.getItem('h');
                            localStorage.setItem('min'+h,minu[0]);
                            h++;
                            localStorage.setItem('h',h);
                            
                            for(var k=0;k<localStorage.getItem('t');k++)
                            {
                                highScoreSec[k]=localStorage.getItem('sec'+k);
                            }
            
                            for(var k=0;k<localStorage.getItem('h');k++)
                            {
                                highScoreMin[k]=localStorage.getItem('min'+k);
                            }
            
                            
                            for(var k=0;k<localStorage.getItem('t');k++)
                            {
                                hscore[k]=Number(highScoreMin[k])*60 + Number(highScoreSec[k]);
                            }
             
                            for(var k=0;k<localStorage.getItem('t');k++)
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
                            
                            localStorage.setItem('hmcore',hscore);
            
                            hcore = localStorage.getItem('hmcore').split(',');
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
            
                    
            
                    
            
            
            
            
            
                   
            
            
                }

            }


        
   

        
        
         
        
        
        
    }


        


      


        

        







    














   
    



var gameSequence = [];
for(var j =0;j<40;j++)
{   
        gameSequence.push(j+1);
    
}





