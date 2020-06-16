$(document).ready(function(){

  
  $("#eX").on("click", function(){
              var weapon = $("#eX").html();
    var opposite = $("#oH").html();
    $("#chosen").html(weapon);
    $("#other").html(opposite);
    $("#XorO").fadeOut();
    $("#players").fadeIn();
    setTimeout ( function(){

            $("#george").fadeIn();
    }, 1000);

              });
  
  $("#oH").on("click", function(){
    var weapon = $("#oH").html();
    
    var opposite = $("#eX").html();
    $("#chosen").html(weapon);
    $("#other").html(opposite);
    $("#XorO").fadeOut();
    $("#players").fadeIn();

    setTimeout ( function(){

            $("#george").fadeIn();
    }, 1000);
    
  })
        function draws() {
var one = $("#one").html();
    var two = $("#two").html();
    var three = $("#three").html();
    var four = $("#four").html();
    var five = $("#five").html();
    var six = $("#six").html();
    var seven = $("#seven").html();
    var eight = $("#eight").html();
    var nine = $("#nine").html();


var array1 = [one, two, three, four, five, six, seven, eight, nine];
      var j = 0;
for(var i = 0; i <= array1.length; i++){
  if(array1[i] === "X"){
j++
    }else if(array1[i] === "O"){
      j++;
    }
}
if(j === array1.length){
     $("#george").fadeOut();
                $("#jon").fadeIn();
setTimeout ( function(){

                  $("#jon").fadeOut();
  }, 2000) 
setTimeout ( function(){

        $("#george").fadeIn();
  }, 3000) 
        
      $("#one").html("");
      $("#two").html("");
      $("#three").html("");
      $("#four").html("");
      $("#five").html("");
      $("#six").html("");
      $("#seven").html("");
      $("#eight").html("");
      $("#nine").html("");
        
}
        }
  
  
     /*alerts you if you lost this round*/
    
    function checkO(){
  
      var one = $("#one").html();
    var two = $("#two").html();
    var three = $("#three").html();
    var four = $("#four").html();
    var five = $("#five").html();
    var six = $("#six").html();
    var seven = $("#seven").html();
    var eight = $("#eight").html();
    var nine = $("#nine").html();

  var comp = $("#other").html();
  
if((one.includes(comp) && two.includes(comp) && three.includes(comp)) || (four.includes(comp) && five.includes(comp) && six.includes(comp) || seven.includes(comp) && eight.includes(comp) && nine.includes(comp) || one.includes(comp) && four.includes(comp) && seven.includes(comp) || two.includes(comp) && five.includes(comp) && eight.includes(comp) || three.includes(comp) && six.includes(comp) && nine.includes(comp)) || one.includes(comp) && five.includes(comp) & nine.includes(comp) || three.includes(comp) && five.includes(comp) && seven.includes(comp)){
$("#george").fadeOut();
  $("#view").fadeIn();
setTimeout ( function(){
$("#view").fadeOut();
    }, 2000) 
setTimeout ( function(){
  $("#george").fadeIn();
}, 3000)
  
  
      $("#one").html("");
      $("#two").html("");
      $("#three").html("");
      $("#four").html("");
      $("#five").html("");
      $("#six").html("");
      $("#seven").html("");
      $("#eight").html("");
      $("#nine").html("");
 
}else{
  return;
}       
  
  

    }
  
  
  $("#one").on("click", function(){
    
    var one = $("#one").html();
    var two = $("#two").html();
    var three = $("#three").html();
    var four = $("#four").html();
    var five = $("#five").html();
    var six = $("#six").html();
    var seven = $("#seven").html();
    var eight = $("#eight").html();
    var nine = $("#nine").html();
  
    
if(one.includes("X") || one.includes("O")){
  return;
}
  var tool = $("#chosen").html();
    var against = $("#other").html();
$("#one").html(tool);
      if((!two.includes("O") && !two.includes("X")) && three.includes(tool)){
        $("#two").html(against);
}else if((!three.includes("O") && !three.includes("X")) && two.includes(tool)){
        $("#three").html(against);
     }else if((!seven.includes("O") && !seven.includes("X")) && four.includes(tool)){
        $("#seven").html(against);
}else if((!four.includes("O") && !four.includes("X")) && seven.includes(tool)){
        $("#four").html(against);
      }else if(!five.includes("X") && !five.includes("O") && nine.includes(tool)){
        $("#five").html(against);
      }else if(!nine.includes("X") && !nine.includes("O") && five.includes(tool)){
        $("#nine").html(against);
      }else if(!two.includes("X") && !two.includes("O")){
        $("#two").html(against);
      }else if(!five.includes("X") && !five.includes("O")){
        $("#five").html(against);
      }else if(!six.includes("X") && !six.includes("O")){
        $("#six").html(against);
      }else if(!eight.includes("X") && !eight.includes("O")){
        $("#eight").html(against);
      }else if(!nine.includes("X") && !nine.includes("O")){
        $("#nine").html(against);
      }
    
    if((four.includes(tool) && seven.includes(tool) || two.includes(tool) && three.includes(tool)) || five.includes(tool) && nine.includes(tool)){
$("#george").fadeOut();
      $("#wins").fadeIn();
      setTimeout (function(){
$("#wins").fadeOut();
      }, 2000);
      setTimeout (function(){
        $("#george").fadeIn();
      }, 3000);
      
      
      $("#one").html("");
      $("#two").html("");
      $("#three").html("");
      $("#four").html("");
      $("#five").html("");
      $("#six").html("");
      $("#seven").html("");
      $("#eight").html("");
      $("#nine").html("");
 
}     
      
    
     draws();
  checkO();
    }) 
  

$("#two").on("click", function(){
  
  var one = $("#one").html();
    var two = $("#two").html();
    var three = $("#three").html();
    var four = $("#four").html();
    var five = $("#five").html();
    var six = $("#six").html();
    var seven = $("#seven").html();
    var eight = $("#eight").html();
    var nine = $("#nine").html();
  
  
    /*check to see if this button is available*/
  if(two.includes("X") || two.includes("O")){
  return;
}
 /*chooses where to go next for the computer*/ 
  var tool = $("#chosen").html();
    var against = $("#other").html();
$("#two").html(tool);
   if((!three.includes("O") && !three.includes("X")) && one.includes(tool)){
      $("#three").html(against);}
  else if((!one.includes("X") && !one.includes("O")) && three.includes(tool)){
        $("#one").html(against);
}else if((!eight.includes("O") && !eight.includes("X")) && five.includes(tool)){
        $("#eight").html(against);
      }else if((!five.includes("O") && !five.includes("X")) && eight.includes(tool)){
        $("#five").html(against);
      }else if(!one.includes("X") && !one.includes("O")){
        $("#one").html(against);
      }else if(!four.includes("X") && !four.includes("O")){
        $("#four").html(against);
      }else if(!six.includes("X") && !six.includes("O")){
        $("#six").html(against);
      }else if(!seven.includes("O") && !seven.includes("X")){
        $("#seven").html(against);
      }else if(!nine.includes("X") && !nine.includes("O")){
        $("#nine").html(against);
      }
  /*alerts you if you are a winner for x*/
if((one.includes(tool) && three.includes(tool)) ||(five.includes(tool) && eight.includes(tool))){
$("#george").fadeOut();
      $("#wins").fadeIn();
      setTimeout (function(){
$("#wins").fadeOut();
      }, 2000);
      setTimeout (function(){
        $("#george").fadeIn();
      }, 3000);
      
      
      $("#one").html("");
      $("#two").html("");
      $("#three").html("");
      $("#four").html("");
      $("#five").html("");
      $("#six").html("");
      $("#seven").html("");
      $("#eight").html("");
      $("#nine").html("");
 
}     

  draws();
  checkO();

    });

  $("#three").on("click", function(){
    
  var one = $("#one").html();
    var two = $("#two").html();
    var three = $("#three").html();
    var four = $("#four").html();
    var five = $("#five").html();
    var six = $("#six").html();
    var seven = $("#seven").html();
    var eight = $("#eight").html();
    var nine = $("#nine").html();
      
   
    
    
    if(three.includes("X") || three.includes("O")){
  return;
}
   
    var tool = $("#chosen").html();
    var against = $("#other").html();
    $("#three").html(tool);
    if((!one.includes("X") && !one.includes("O")) && two.includes(tool)){
     $("#one").html(against); 
    }else if((!two.includes("X") && !two.includes("O")) && one.includes(tool)){
      $("#two").html(against);
    }else if((!six.includes("X") && !six.includes("O")) && nine.includes(tool)){
      $("#six").html(against);
    }else if((!nine.includes("X") && !nine.includes("O")) && six.includes(tool)){
      $("#nine").html(against);
    }else if(!five.includes("X") && !five.includes("O") && nine.includes(tool)){
      $("#five").html(against);
    }else if(!nine.includes("X") && !nine.includes("O") && five.includes(tool)){
      $("#nine").html(against);
    }else if(!six.includes("X") && !six.includes("O")){
      $("#six").html(against);
    }else if(!five.includes("X") && !five.includes("O")){
      $("#five").html(against);
    }else if(!four.includes("X") && !four.includes("O")){
      $("#four").html(against);
    }else if(!seven.includes("X") && !seven.includes("O")){
      $("#seven").html(against);
    }else if(!eight.includes("X") && !eight.includes("O")){
      $("#eight").html(against);
    }
    
    if((one.includes(tool) && two.includes(tool) || six.includes(tool) && nine.includes(tool)) || five.includes(tool) && seven.includes(tool)){
$("#george").fadeOut();
      $("#wins").fadeIn();
      setTimeout (function(){
$("#wins").fadeOut();
      }, 2000);
      setTimeout (function(){
        $("#george").fadeIn();
      }, 3000);
      
      
      $("#one").html("");
      $("#two").html("");
      $("#three").html("");
      $("#four").html("");
      $("#five").html("");
      $("#six").html("");
      $("#seven").html("");
      $("#eight").html("");
      $("#nine").html("");
 
}     

 draws();
  checkO();
  });

$("#four").on("click", function(){

  var one = $("#one").html();
    var two = $("#two").html();
    var three = $("#three").html();
    var four = $("#four").html();
    var five = $("#five").html();
    var six = $("#six").html();
    var seven = $("#seven").html();
    var eight = $("#eight").html();
    var nine = $("#nine").html();
  
    
  if(four.includes("X") || four.includes("O")){
    return;
  }
  
  var tool = $("#chosen").html();
    var against = $("#other").html();
  $("#four").html(tool);
  if((!five.includes("X") && !five.includes("O")) && six.includes(tool)){
    $("#five").html(against)
  }else if((!seven.includes("X") && !seven.includes("O")) && one.includes(tool)){
    $("#seven").html(against);
  }else if((!one.includes("X") && !one.includes("O")) && seven.includes(tool)){
    $("#one").html(against);
  }else if((!six.includes("X") && !six.includes("O")) && five.includes(tool)){
    $("#six").html(against);
  }else if(!seven.includes("X") && !seven.includes("O")){
    $("#seven").html(against);
  }else if(!three.includes("X") && !three.includes("O")){
    $("#three").html(against);
  }else if(!two.includes("X") && !two.includes("O")){
    $("#two").html(against);
  }else if(!eight.includes("X") && !eight.includes("O")){
    $("#eight").html(against);
  }else if(!nine.includes("X") && !nine.includes("O")){
    $("#nine").html(against);
  }
  
  if((one.includes(tool) && seven.includes(tool)) || five.includes(tool) && six.includes(tool)){
$("#george").fadeOut();
      $("#wins").fadeIn();
      setTimeout (function(){
$("#wins").fadeOut();
      }, 2000);
      setTimeout (function(){
        $("#george").fadeIn();
      }, 3000);
      
      
      $("#one").html("");
      $("#two").html("");
      $("#three").html("");
      $("#four").html("");
      $("#five").html("");
      $("#six").html("");
      $("#seven").html("");
      $("#eight").html("");
      $("#nine").html("");
 
}     

 draws();
  checkO();
});

$("#five").on("click", function(){
  
  var one = $("#one").html();
    var two = $("#two").html();
    var three = $("#three").html();
    var four = $("#four").html();
    var five = $("#five").html();
    var six = $("#six").html();
    var seven = $("#seven").html();
    var eight = $("#eight").html();
    var nine = $("#nine").html();
  
  
  if(five.includes("X") || five.includes("O")){
    return;
  }
  
  var tool = $("#chosen").html();
    var against = $("#other").html();
  $("#five").html(tool);
  if((!four.includes("X") && !four.includes("O")) && six.includes(tool)){
    $("#four").html(against);
  }else if((!eight.includes("X") && !eight.includes("O")) && two.includes(tool)){
    $("#eight").html(against);
  }else if((!two.includes("X") && !two.includes("O")) && eight.includes(tool)){
    $("#two").html(against);
  }else if((!six.includes("X") && !six.includes("O")) && four.includes(tool)){
    $("#six").html(against);
  }else if((!four.includes("X") && !four.includes("O")) && six.includes(tool)){
    $("#four").html(against);
  }else if(!one.includes("X") && !one.includes("O") && nine.includes(tool)){
    $("#one").html(against);
  }else if(!nine.includes("X") && !nine.includes("O") && one.includes(tool)){
    $("#nine").html(against);
  }else if(!three.includes("X") && !three.includes("O") && seven.includes(tool)){
    $("#three").html(against);
  }else if(!seven.includes("X") && !seven.includes("O") && three.includes(tool)){
    $("#seven").html(against);
  }else if(!three.includes("X") && !three.includes("O")){
    $("#three").html(against);
  }else if(!seven.includes("X") && !seven.includes("O")){
    $("#seven").html(against);
  }else if(!nine.includes("X") && !nine.includes("O")){
    $("#nine").html(against);
  }else if(!one.includes("X") && !one.includes("O")){
    $("#one").html(against);
  }
  
  if((four.includes(tool) && six.includes(tool)) || two.includes(tool) && eight.includes(tool) || one.includes(tool) && nine.includes(tool) || three.includes(tool) && seven.includes(tool)){
$("#george").fadeOut();
      $("#wins").fadeIn();
      setTimeout (function(){
$("#wins").fadeOut();
      }, 2000);
      setTimeout (function(){
        $("#george").fadeIn();
      }, 3000);
      
      
      $("#one").html("");
      $("#two").html("");
      $("#three").html("");
      $("#four").html("");
      $("#five").html("");
      $("#six").html("");
      $("#seven").html("");
      $("#eight").html("");
      $("#nine").html("");
 
}     

 draws();
  checkO();
});

$("#six").on("click", function(){
var one = $("#one").html();
    var two = $("#two").html();
    var three = $("#three").html();
    var four = $("#four").html();
    var five = $("#five").html();
    var six = $("#six").html();
    var seven = $("#seven").html();
    var eight = $("#eight").html();
    var nine = $("#nine").html();
  
  if(six.includes("X") || six.includes("O")){
    return;
  }
  
  var tool = $("#chosen").html();
    var against = $("#other").html();
  $("#six").html(tool);
  if((!three.includes("X") && !three.includes("O")) && nine.includes(tool)){
    $("#three").html(against);
  }else if((!five.includes("X") && !five.includes("O")) && four.includes(tool)){
    $("#five").html(against);
  }else if((!nine.includes("X") && !nine.includes("O")) && three.includes(tool)){
    $("#nine").html(against);
  }else if((!four.includes("X") && !four.includes("O")) && five.includes(tool)){
    $("#four").html(against);
  }else if(!five.includes("X") && !five.includes("O")){
    $("#five").html(against);
  }else if(!one.includes("X") && !one.includes("O")){
    $("#one").html(against);
  }else if(!three.includes("X") && !three.includes("O")){
    $("#three").html(against);
  }else if(!nine.includes("X") && !nine.includes("O")){
    $("#nine").html(against);
  }else if(!two.includes("X") && !two.includes("O")){
    $("#two").html(against);
  }else if(!eight.includes("X") && !eight.includes("O")){
    $("#eight").html(against);
  }else if(!seven.includes("X") && !seven.includes("O")){
    $("#seven").html(against);
  }
  
  if((three.includes(tool) && nine.includes(tool)) || four.includes(tool) & five.includes(tool)){
$("#george").fadeOut();
      $("#wins").fadeIn();
      setTimeout (function(){
$("#wins").fadeOut();
      }, 2000);
      setTimeout (function(){
        $("#george").fadeIn();
      }, 3000);
      
      
      $("#one").html("");
      $("#two").html("");
      $("#three").html("");
      $("#four").html("");
      $("#five").html("");
      $("#six").html("");
      $("#seven").html("");
      $("#eight").html("");
      $("#nine").html("");
 
}     

   draws();
  checkO();
});

$("#seven").on("click", function(){

  var one = $("#one").html();
    var two = $("#two").html();
    var three = $("#three").html();
    var four = $("#four").html();
    var five = $("#five").html();
    var six = $("#six").html();
    var seven = $("#seven").html();
    var eight = $("#eight").html();
    var nine = $("#nine").html();
  
  
  if(seven.includes("X") || seven.includes("O")){
    return;
  }
  
  var tool = $("#chosen").html();
    var against = $("#other").html();
  $("#seven").html(tool)
  if((!four.includes("X") && !four.includes("O")) && one.includes(tool)){
    $("#four").html(against);
  }else if((!eight.includes("X") && !eight.includes("O")) && nine.includes(tool)){
    $("#eight").html(against);
  }else if((!nine.includes("X") && !nine.includes("O")) && eight.includes(tool)){
    $("#nine").html(against);
  }else if((!one.includes("X") && !one.includes("O")) && four.includes(tool)){
    $("#one").html(against);
  }else if(!three.includes("X") && !three.includes("O") && five.includes(tool)){
    $("#three").html(against);
  }else if(!five.includes("X") && !five.includes("O") && three.includes(tool)){
    $("#five").html(against);
  }
  else if(!five.includes("X") && !five.includes("O")){
    $("#five").html(against);
  }else if(!three.includes("X") && !three.includes("O")){
    $("#three").html(against);
  }else if(!one.includes("X") && !one.includes("O")){
    $("#one").html(against);
  }else if(!three.includes("X") && !three.includes("O")){
    $("#three").html(against);
  }else if(!two.includes("X") && !two.includes("O")){
    $("#two").html(against)
  }else if(!eight.includes("X") && !eight.includes("O")){
    $("#eight").html(against);
  }else if(!six.includes("X") && !six.includes("O")){
    $("#six").html(against);
  }
  
  if((eight.includes(tool) && nine.includes(tool)) || one.includes(tool) && four.includes(tool) || five.includes(tool) && three.includes(tool)){
$("#george").fadeOut();
      $("#wins").fadeIn();
      setTimeout (function(){
$("#wins").fadeOut();
      }, 2000);
      setTimeout (function(){
        $("#george").fadeIn();
      }, 3000);
      
      
      $("#one").html("");
      $("#two").html("");
      $("#three").html("");
      $("#four").html("");
      $("#five").html("");
      $("#six").html("");
      $("#seven").html("");
      $("#eight").html("");
      $("#nine").html("");
 
}    

  draws();
  checkO();
    });
  
  


$("#eight").on("click", function(){
  
  var one = $("#one").html();
    var two = $("#two").html();
    var three = $("#three").html();
    var four = $("#four").html();
    var five = $("#five").html();
    var six = $("#six").html();
    var seven = $("#seven").html();
    var eight = $("#eight").html();
    var nine = $("#nine").html();
  
  
  if(eight.includes("X") || eight.includes("O")){
    return;
  }
  
  var tool = $("#chosen").html();
    var against = $("#other").html();
  $("#eight").html(tool);
  if((!five.includes("X") && !five.includes("O")) && two.includes(tool)){
    $("#five").html(against);
  }else if((!two.includes("X") && !two.includes("O")) && five.includes(tool)){
    $("#two").html(against);
  }else if((!seven.includes("X") && !seven.includes("O")) && nine.includes(tool)){
    $("#seven").html(against);
  }else if((!nine.includes("X") && !nine.includes("O")) && seven.includes(tool)){
    $("#nine").html(against);
  }else if((!five.includes("X") && !five.includes("O"))){
    $("#five").html(against);
  }else if(!nine.includes("X") && !nine.includes("O")){
    $("#nine").html(against);
  }else if(!seven.includes("X") && !seven.includes("O")){
    $("seven").html(against);
  }else if(!four.includes("X") && !four.includes("O")){
    $("#four").html(against);
  }else if(!one.includes("X") && !one.includes("O")){
    $("#one").html(against);
  }else if(!three.includes("X") && !three.includes("O")){
    $("#three").html(against);
  }else if(!six.includes("X") && !six.includes("O")){
    $("#six").html(against);
  }
  
  if((seven.includes(tool) && nine.includes(tool)) || five.includes(tool) && two.includes(tool)){
$("#george").fadeOut();
      $("#wins").fadeIn();
      setTimeout (function(){
$("#wins").fadeOut();
      }, 2000);
      setTimeout (function(){
        $("#george").fadeIn();
      }, 3000);
      
      
      $("#one").html("");
      $("#two").html("");
      $("#three").html("");
      $("#four").html("");
      $("#five").html("");
      $("#six").html("");
      $("#seven").html("");
      $("#eight").html("");
      $("#nine").html("");
 
}     

 draws();
  checkO();
});

$("#nine").on("click", function(){

  var one = $("#one").html();
    var two = $("#two").html();
    var three = $("#three").html();
    var four = $("#four").html();
    var five = $("#five").html();
    var six = $("#six").html();
    var seven = $("#seven").html();
    var eight = $("#eight").html();
    var nine = $("#nine").html();
  
  
  if(nine.includes("X") || nine.includes("O")){
    return;
  }
  
  var tool = $("#chosen").html();
    var against = $("#other").html();
  $("#nine").html(tool);
  if((!eight.includes("X") && !eight.includes("O")) && seven.includes(tool)){
    $("#eight").html(against);
  }else if((!seven.includes("X") && !seven.includes("O")) && eight.includes(tool)){
    $("#seven").html(against);
  }else if((!six.includes("X") && !six.includes("O")) && three.includes(tool)){
    $("#six").html(against);
  }else if((!three.includes("X") && !three.includes("O")) && six.includes(tool)){
    $("#three").html(against);
  }else if(!one.includes("X") && !one.includes("O") && five.includes(tool)){
    $("#one").html(against);
  }else if(!five.includes("X") && !five.includes("O") && one.includes(tool)){
    $("#five").html(against);
  }
  else if(!five.includes("X") && !five.includes("O")){
    $("#five").html(against);
  }else if(!one.includes("X") && !one.includes("O")){
    $("#one").html(against);
  }else if(!seven.includes("X") && !seven.includes("O")){
    $("#seven").html(against);
  }else if(!three.includes("X") && !three.includes("O")){
    $("#three").html(against);
  }else if(!two.includes("X") && !two.includes("O")){
    $("#two").html(against);
  }else if(!four.includes("X") && !four.includes("O")){
    $("#four").html(against);
  }
  
  if((six.includes(tool) && three.includes(tool)) || eight.includes(tool) && seven.includes(tool) || five.includes(tool) && one.includes(tool)){
$("#george").fadeOut();
      $("#wins").fadeIn();
      setTimeout (function(){
$("#wins").fadeOut();
      }, 2000);
      setTimeout (function(){
        $("#george").fadeIn();
      }, 3000);
      
      
      $("#one").html("");
      $("#two").html("");
      $("#three").html("");
      $("#four").html("");
      $("#five").html("");
      $("#six").html("");
      $("#seven").html("");
      $("#eight").html("");
      $("#nine").html("");
 
}   

     draws();
  checkO();
});

$("#over").on("click", function(){
location.reload(true); });
});