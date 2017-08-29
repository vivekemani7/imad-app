var button = document.getElementById('counter');


button.onclick = function(){
    //creating a request object 
    var request = new XMLHttpRequest();
    
    // capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            
        
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
            
    };
    request.open('GET','http://vivekemani7.imad.hasura-app.io/counter',true);
    request.send(null);
 
  
};