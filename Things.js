$(document).ready(function(){
     $.ajax({
         url:"http://localhost:9292/things",
         type:'GET',
        done:function(data){
          data.forEach(function(l){
            $("#1").append("<p><strong>" + l.title + "</strong>: " + l.description + "</p>")
          });
        }



    });
 });





