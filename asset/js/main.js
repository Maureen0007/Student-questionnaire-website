function result(){
   
    if (document.getElementById('correct1').checked) 
    {
        score+=5;
    }
    if (document.getElementById('correct2').checked) 
    {
        score+=5;
    }
    if (document.getElementById('correct3').checked) 
    {
        score+=5;
    }
       
    if (document.getElementById('correct4').checked) 
    {
        score+=5;
    }
    if (document.getElementById('correct5').checked) 
    {
        score+=5;
    }
    
    var total = (score/25)*100
       document.write("Your score is:"+total);
        
    
    
}
