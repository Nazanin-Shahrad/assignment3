$(document).ready(function(){
    $.getJSON("team.json" , function(data){
        $.each(data.teammembers , function(key , val){
            $("div#team").append(
            `<h3>${val.name}</h3><br/>
             <h4>${val.title}</h4><br/>
             <p>${val.bio}`);
            
        });
        
    }).always(function(data,status,error){
        console.log("data" ,data,"status",status,"error",error);
    });
    
});