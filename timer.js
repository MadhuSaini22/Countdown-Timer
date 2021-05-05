function showTimer()
{
    var time="00: 01: 00";
    timer_div=document.getElementById("timer_div");
    applyCSS(timer_div);
    timer_div.innerHTML=time;
    //Main code for timer and repetitively call in 1sec
    my_timer=setInterval(function()
        {
            var hr=0; var min=0; var sec=0;
            var time_up=false;
            t=time.split(":")   //split the time(in string format) on the basis of ":"

            //Now converted hour, min and sec in integer format 
            hr=parseInt(t[0]);
            min=parseInt(t[1]);
            sec=parseInt(t[2]);
            //Apropriate conditions for Timer
            if(sec==0)
            {
                if(min>0)
                {
                    sec=59;
                    min--;
                }
                else if(hr>0)
                {
                    min=59;
                    sec=59;
                    hr--;
                }
                else
                {
                    time_up=true;
                }
            }
            else
            {
                sec--;
            }
            if(hr<10)
               hr="0"+hr;
            if(min<10)
               min="0"+min;
            if(sec<10)
               sec="0"+sec;
            time=hr+" :"+min+" :"+sec;
            if(time_up)
               time="TIME UP!!"
            timer_div=document.getElementById("timer_div");
            timer_div.innerHTML=time;
            //Terminates when time completes
            if(time_up)
                clearInterval(my_timer);
            
        }
    ,1000);

}

//Stying CountDown Timer
function applyCSS(timer_div)
{
    timer_div.style.fontSize="22px";
    timer_div.style.color="brown";
    timer_div.style.fontWeight="bold";
    timer_div.style.width="150px";
    timer_div.style.padding="10px";
    timer_div.style.textAlign="center";
    timer_div.style.border="2px solid brown";
}
