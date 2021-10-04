$(document).ready(function(){
  /*  $.getJSON("team.json" , function(data){
        $.each(data.teammembers , function(key , val){
            $("div#team").append(
            `<h3>${val.name}</h3><br/>
             <h4>${val.title}</h4><br/>
             <p>${val.bio}<br/>`);
            
        });
        
    }).always(function(data,status,error){
        console.log("data" ,data,"status",status,"error",error);
    });
    
    */
    $.ajax({
        url:'team.json',
        dataType :'json',
        Type :'get',
        cach:false,
        success:function(data){
            $(data.teammembers).each(function(index, value){
                 $("div#team").append(
                    `<h3>${value.name}</h3><br/>
                     <h4>${value.title}</h4><br/>
                     <p>${value.bio}<br/>`);

            });
        }
        
    });
    
});