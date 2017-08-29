var button = document.getElementById('counter');


button.onclick = function(){
    //creating a request object 
    var request = new XMLhTTPRequest();
    
    // capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            
        
            if(request.readystatus === 200){
                var counter = request.response.Text;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
            
    };
    request.open('GET','http://http://vivekemani7.imad.hasura-app.io/counter',true);
    request.send(null);
 
  
};