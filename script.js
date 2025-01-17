function clearForm() {
  document.getElementById("mcs").reset();
  document.getElementById("score").innerHTML = "";
  document.getElementById("day5_desc").innerHTML = "";
  document.getElementById("day4_desc").innerHTML = "";
  document.getElementById("day3_desc").innerHTML = "";
  document.getElementById("day2_desc").innerHTML = "";
  document.getElementById("day1_desc").innerHTML = "";
  document.getElementById("dayp_desc").innerHTML = "";
}

function do_calc(theForm) {

  var select = document.getElementsByName('day_p_minus_5_lubrication');
  var x1_text = select[0].options[select[0].selectedIndex].text;

  select = document.getElementsByName('day_p_minus_4_lubrication');
  var x2_text = select[0].options[select[0].selectedIndex].text;

  select = document.getElementsByName('day_p_minus_3_lubrication');
  var x3_text = select[0].options[select[0].selectedIndex].text;

  select = document.getElementsByName('day_p_minus_2_lubrication');
  var x4_text = select[0].options[select[0].selectedIndex].text;

  select = document.getElementsByName('day_p_minus_1_lubrication');
  var x5_text = select[0].options[select[0].selectedIndex].text;

  select = document.getElementsByName('day_p_lubrication');
  var x6_text = select[0].options[select[0].selectedIndex].text;

    if (x1_text == "" || x2_text == "" || x3_text == "" || x4_text == "" || x5_text == "" || x6_text == "") {
        alert("Sensation must be selected.");
        return false;
    }
  if(x1_text == "Dry") {
    var select_p5_stretch = document.getElementsByName("day_p_minus_5_stretch");
    var p5_stretch_text = select_p5_stretch[0].options[select_p5_stretch[0].selectedIndex].text;

    var select_p5 = document.getElementsByName("day_p_minus_5_consistency");
    var p5_consistency_text = select_p5[0].options[select_p5[0].selectedIndex].text
    
    var select_p5_color = document.getElementsByName("day_p_minus_5_color");
    var p5_color_text = select_p5_color[0].options[select_p5_color[0].selectedIndex].text;

    if(p5_stretch_text != "" || p5_consistency_text != "" || p5_color_text != "") {
      alert("Dry cannot be selected with anything else."); 
      reset();
    } 
  }
  
  if(x1_text == "Non-Lubricative") {
    var select_p5_stretch = document.getElementsByName("day_p_minus_5_stretch");
    var p5_stretch_text = select_p5_stretch[0].options[select_p5_stretch[0].selectedIndex].text;

    var select_p5 = document.getElementsByName("day_p_minus_5_consistency");
    var p5_consistency_text = select_p5[0].options[select_p5[0].selectedIndex].text
    
    var select_p5_color = document.getElementsByName("day_p_minus_5_color");
    var p5_color_text = select_p5_color[0].options[select_p5_color[0].selectedIndex].text;
    
    if(p5_stretch_text == "" && p5_consistency_text == "" && p5_color_text == "") {
      alert("Non-Lubricative cannot be selected by itself.");
      reset();
    }
  }


  var select_p5 = document.getElementsByName("day_p_minus_5_consistency");
  var p5_consistency_value = select_p5[0].options[select_p5[0].selectedIndex].value
  var select_p5_color = document.getElementsByName("day_p_minus_5_color");
  var p5_color_text = select_p5_color[0].options[select_p5_color[0].selectedIndex].text;
  console.log(p5_consistency_value);
  console.log(p5_color_text);
  if(p5_consistency_value == 2 && p5_color_text != "") {
    alert('Color cannot be selected with PC, 6PC, or G.');
    return false;
  }
  
  var select_p5 = document.getElementsByName("day_p_minus_5_consistency");
  var p5_consistency_text = select_p5[0].options[select_p5[0].selectedIndex].text
  var select_p5_stretch = document.getElementsByName("day_p_minus_5_stretch");
  var p5_stretch_text = select_p5_stretch[0].options[select_p5_stretch[0].selectedIndex].text;
  console.log(p5_consistency_text);
  console.log(p5_stretch_text);
  console.log(p5_consistency_text.match(/6PC/g));
  if(p5_consistency_text.match(/6PC/g) != null && p5_stretch_text != "") {
    alert('Stretch cannot be selected with 6PC.');
    return false;
  }
  
  var select_p5 = document.getElementsByName("day_p_minus_5_consistency");
  var p5_consistency_text = select_p5[0].options[select_p5[0].selectedIndex].text
  var select_p5_stretch = document.getElementsByName("day_p_minus_5_stretch");
  var p5_stretch_text = select_p5_stretch[0].options[select_p5_stretch[0].selectedIndex].text;
  console.log(p5_consistency_text);
  console.log(p5_stretch_text);
  console.log(p5_consistency_text.match(/6PC/g));
  if(p5_consistency_text == "Pasty, Cloudy (PC)" && p5_stretch_text == "Sticky (6)") {
    alert('Stretch of 6 cannot be selected with PC. Choose 6PC special consistency instead.');
    return false;
  }

    if(x2_text == "Dry") {
    var select_p4_stretch = document.getElementsByName("day_p_minus_4_stretch");
    var p4_stretch_text = select_p4_stretch[0].options[select_p4_stretch[0].selectedIndex].text;

    var select_p4 = document.getElementsByName("day_p_minus_4_consistency");
    var p4_consistency_text = select_p4[0].options[select_p4[0].selectedIndex].text
    
    var select_p4_color = document.getElementsByName("day_p_minus_4_color");
    var p4_color_text = select_p4_color[0].options[select_p4_color[0].selectedIndex].text;

    if(p4_stretch_text != "" || p4_consistency_text != "" || p4_color_text != "") {
      alert("Dry cannot be selected with anything else."); 
      reset();
    } 
  }
  
  if(x2_text == "Non-Lubricative") {
    var select_p4_stretch = document.getElementsByName("day_p_minus_4_stretch");
    var p5_stretch_text = select_p5_stretch[0].options[select_p5_stretch[0].selectedIndex].text;

    var select_p4 = document.getElementsByName("day_p_minus_4_consistency");
    var p4_consistency_text = select_p4[0].options[select_p4[0].selectedIndex].text
    
    var select_p4_color = document.getElementsByName("day_p_minus_4_color");
    var p4_color_text = select_p4_color[0].options[select_p4_color[0].selectedIndex].text;
    
    if(p4_stretch_text == "" && p4_consistency_text == "" && p4_color_text == "") {
      alert("Non-Lubricative cannot be selected by itself.");
      reset();
    }
  }


  var select_p4 = document.getElementsByName("day_p_minus_4_consistency");
  var p4_consistency_value = select_p4[0].options[select_p4[0].selectedIndex].value
  var select_p4_color = document.getElementsByName("day_p_minus_4_color");
  var p4_color_text = select_p4_color[0].options[select_p4_color[0].selectedIndex].text;
  console.log(p4_consistency_value);
  console.log(p4_color_text);
  if(p4_consistency_value == 2 && p4_color_text != "") {
    alert('Color cannot be selected with PC, 6PC, or G.');
    return false;
  }
  
  var select_p4 = document.getElementsByName("day_p_minus_4_consistency");
  var p4_consistency_text = select_p4[0].options[select_p4[0].selectedIndex].text
  var select_p4_stretch = document.getElementsByName("day_p_minus_4_stretch");
  var p4_stretch_text = select_p4_stretch[0].options[select_p4_stretch[0].selectedIndex].text;
  console.log(p4_consistency_text);
  console.log(p4_stretch_text);
  console.log(p4_consistency_text.match(/6PC/g));
  if(p4_consistency_text.match(/6PC/g) != null && p4_stretch_text != "") {
    alert('Stretch cannot be selected with 6PC.');
    return false;
  }
  
  var select_p4 = document.getElementsByName("day_p_minus_4_consistency");
  var p4_consistency_text = select_p4[0].options[select_p4[0].selectedIndex].text
  var select_p4_stretch = document.getElementsByName("day_p_minus_4_stretch");
  var p4_stretch_text = select_p4_stretch[0].options[select_p4_stretch[0].selectedIndex].text;
  console.log(p4_consistency_text);
  console.log(p4_stretch_text);
  console.log(p4_consistency_text.match(/6PC/g));
  if(p4_consistency_text == "Pasty, Cloudy (PC)" && p4_stretch_text == "Sticky (6)") {
    alert('Stretch of 6 cannot be selected with PC. Choose 6PC special consistency instead.');
    return false;
  }

    if(x3_text == "Dry") {
    var select_p3_stretch = document.getElementsByName("day_p_minus_3_stretch");
    var p3_stretch_text = select_p3_stretch[0].options[select_p3_stretch[0].selectedIndex].text;

    var select_p3 = document.getElementsByName("day_p_minus_3_consistency");
    var p3_consistency_text = select_p3[0].options[select_p3[0].selectedIndex].text
    
    var select_p3_color = document.getElementsByName("day_p_minus_3_color");
    var p3_color_text = select_p3_color[0].options[select_p3_color[0].selectedIndex].text;

    if(p3_stretch_text != "" || p3_consistency_text != "" || p3_color_text != "") {
      alert("Dry cannot be selected with anything else."); 
      reset();
    } 
  }
  
  if(x3_text == "Non-Lubricative") {
    var select_p3_stretch = document.getElementsByName("day_p_minus_3_stretch");
    var p3_stretch_text = select_p3_stretch[0].options[select_p3_stretch[0].selectedIndex].text;

    var select_p3 = document.getElementsByName("day_p_minus_3_consistency");
    var p3_consistency_text = select_p3[0].options[select_p3[0].selectedIndex].text
    
    var select_p3_color = document.getElementsByName("day_p_minus_3_color");
    var p3_color_text = select_p3_color[0].options[select_p3_color[0].selectedIndex].text;
    
    if(p3_stretch_text == "" && p3_consistency_text == "" && p3_color_text == "") {
      alert("Non-Lubricative cannot be selected by itself.");
      reset();
    }
  }


  var select_p3 = document.getElementsByName("day_p_minus_3_consistency");
  var p3_consistency_value = select_p3[0].options[select_p3[0].selectedIndex].value
  var select_p3_color = document.getElementsByName("day_p_minus_3_color");
  var p3_color_text = select_p3_color[0].options[select_p3_color[0].selectedIndex].text;
  console.log(p3_consistency_value);
  console.log(p3_color_text);
  if(p3_consistency_value == 2 && p3_color_text != "") {
    alert('Color cannot be selected with PC, 6PC, or G.');
    return false;
  }
  
  var select_p3 = document.getElementsByName("day_p_minus_3_consistency");
  var p3_consistency_text = select_p3[0].options[select_p3[0].selectedIndex].text
  var select_p3_stretch = document.getElementsByName("day_p_minus_3_stretch");
  var p3_stretch_text = select_p3_stretch[0].options[select_p3_stretch[0].selectedIndex].text;
  console.log(p3_consistency_text);
  console.log(p3_stretch_text);
  console.log(p3_consistency_text.match(/6PC/g));
  if(p3_consistency_text.match(/6PC/g) != null && p3_stretch_text != "") {
    alert('Stretch cannot be selected with 6PC.');
    return false;
  }
  
  var select_p3 = document.getElementsByName("day_p_minus_3_consistency");
  var p3_consistency_text = select_p3[0].options[select_p3[0].selectedIndex].text
  var select_p3_stretch = document.getElementsByName("day_p_minus_3_stretch");
  var p3_stretch_text = select_p3_stretch[0].options[select_p3_stretch[0].selectedIndex].text;
  console.log(p3_consistency_text);
  console.log(p3_stretch_text);
  console.log(p3_consistency_text.match(/6PC/g));
  if(p3_consistency_text == "Pasty, Cloudy (PC)" && p3_stretch_text == "Sticky (6)") {
    alert('Stretch of 6 cannot be selected with PC. Choose 6PC special consistency instead.');
    return false;
  }

    if(x4_text == "Dry") {
    var select_p2_stretch = document.getElementsByName("day_p_minus_2_stretch");
    var p2_stretch_text = select_p2_stretch[0].options[select_p2_stretch[0].selectedIndex].text;

    var select_p2 = document.getElementsByName("day_p_minus_2_consistency");
    var p2_consistency_text = select_p2[0].options[select_p2[0].selectedIndex].text
    
    var select_p2_color = document.getElementsByName("day_p_minus_2_color");
    var p2_color_text = select_p2_color[0].options[select_p2_color[0].selectedIndex].text;

    if(p2_stretch_text != "" || p2_consistency_text != "" || p2_color_text != "") {
      alert("Dry cannot be selected with anything else."); 
      reset();
    } 
  }
  
  if(x4_text == "Non-Lubricative") {
    var select_p2_stretch = document.getElementsByName("day_p_minus_2_stretch");
    var p2_stretch_text = select_p2_stretch[0].options[select_p2_stretch[0].selectedIndex].text;

    var select_p2 = document.getElementsByName("day_p_minus_2_consistency");
    var p2_consistency_text = select_p2[0].options[select_p2[0].selectedIndex].text
    
    var select_p2_color = document.getElementsByName("day_p_minus_2_color");
    var p2_color_text = select_p2_color[0].options[select_p2_color[0].selectedIndex].text;
    
    if(p2_stretch_text == "" && p2_consistency_text == "" && p2_color_text == "") {
      alert("Non-Lubricative cannot be selected by itself.");
      reset();
    }
  }


  var select_p2 = document.getElementsByName("day_p_minus_2_consistency");
  var p2_consistency_value = select_p2[0].options[select_p2[0].selectedIndex].value
  var select_p2_color = document.getElementsByName("day_p_minus_2_color");
  var p2_color_text = select_p2_color[0].options[select_p2_color[0].selectedIndex].text;
  console.log(p2_consistency_value);
  console.log(p2_color_text);
  if(p2_consistency_value == 2 && p2_color_text != "") {
    alert('Color cannot be selected with PC, 6PC, or G.');
    return false;
  }
  
  var select_p2 = document.getElementsByName("day_p_minus_2_consistency");
  var p2_consistency_text = select_p2[0].options[select_p2[0].selectedIndex].text
  var select_p2_stretch = document.getElementsByName("day_p_minus_2_stretch");
  var p2_stretch_text = select_p2_stretch[0].options[select_p2_stretch[0].selectedIndex].text;
  console.log(p2_consistency_text);
  console.log(p2_stretch_text);
  console.log(p2_consistency_text.match(/6PC/g));
  if(p2_consistency_text.match(/6PC/g) != null && p2_stretch_text != "") {
    alert('Stretch cannot be selected with 6PC.');
    return false;
  }
  
  var select_p2 = document.getElementsByName("day_p_minus_2_consistency");
  var p2_consistency_text = select_p2[0].options[select_p2[0].selectedIndex].text
  var select_p2_stretch = document.getElementsByName("day_p_minus_2_stretch");
  var p2_stretch_text = select_p2_stretch[0].options[select_p2_stretch[0].selectedIndex].text;
  console.log(p2_consistency_text);
  console.log(p2_stretch_text);
  console.log(p2_consistency_text.match(/6PC/g));
  if(p2_consistency_text == "Pasty, Cloudy (PC)" && p2_stretch_text == "Sticky (6)") {
    alert('Stretch of 6 cannot be selected with PC. Choose 6PC special consistency instead.');
    return false;
  }

    if(x5_text == "Dry") {
    var select_p1_stretch = document.getElementsByName("day_p_minus_1_stretch");
    var p1_stretch_text = select_p1_stretch[0].options[select_p1_stretch[0].selectedIndex].text;

    var select_p1 = document.getElementsByName("day_p_minus_1_consistency");
    var p1_consistency_text = select_p1[0].options[select_p1[0].selectedIndex].text
    
    var select_p1_color = document.getElementsByName("day_p_minus_1_color");
    var p1_color_text = select_p1_color[0].options[select_p1_color[0].selectedIndex].text;

    if(p1_stretch_text != "" || p1_consistency_text != "" || p1_color_text != "") {
      alert("Dry cannot be selected with anything else."); 
      reset();
    } 
  }
  
  if(x5_text == "Non-Lubricative") {
    var select_p1_stretch = document.getElementsByName("day_p_minus_1_stretch");
    var p1_stretch_text = select_p1_stretch[0].options[select_p1_stretch[0].selectedIndex].text;

    var select_p1 = document.getElementsByName("day_p_minus_1_consistency");
    var p1_consistency_text = select_p1[0].options[select_p1[0].selectedIndex].text
    
    var select_p1_color = document.getElementsByName("day_p_minus_1_color");
    var p1_color_text = select_p1_color[0].options[select_p1_color[0].selectedIndex].text;
    
    if(p1_stretch_text == "" && p1_consistency_text == "" && p1_color_text == "") {
      alert("Non-Lubricative cannot be selected by itself.");
      reset();
    }
  }


  var select_p1 = document.getElementsByName("day_p_minus_1_consistency");
  var p1_consistency_value = select_p1[0].options[select_p1[0].selectedIndex].value
  var select_p1_color = document.getElementsByName("day_p_minus_1_color");
  var p1_color_text = select_p1_color[0].options[select_p1_color[0].selectedIndex].text;
  console.log(p1_consistency_value);
  console.log(p1_color_text);
  if(p1_consistency_value == 2 && p1_color_text != "") {
    alert('Color cannot be selected with PC, 6PC, or G.');
    return false;
  }
  
  var select_p1 = document.getElementsByName("day_p_minus_1_consistency");
  var p1_consistency_text = select_p1[0].options[select_p1[0].selectedIndex].text
  var select_p1_stretch = document.getElementsByName("day_p_minus_1_stretch");
  var p1_stretch_text = select_p1_stretch[0].options[select_p1_stretch[0].selectedIndex].text;
  console.log(p1_consistency_text);
  console.log(p1_stretch_text);
  console.log(p1_consistency_text.match(/6PC/g));
  if(p1_consistency_text.match(/6PC/g) != null && p1_stretch_text != "") {
    alert('Stretch cannot be selected with 6PC.');
    return false;
  }
  
  var select_p1 = document.getElementsByName("day_p_minus_1_consistency");
  var p1_consistency_text = select_p1[0].options[select_p1[0].selectedIndex].text
  var select_p1_stretch = document.getElementsByName("day_p_minus_1_stretch");
  var p1_stretch_text = select_p1_stretch[0].options[select_p1_stretch[0].selectedIndex].text;
  console.log(p1_consistency_text);
  console.log(p1_stretch_text);
  console.log(p1_consistency_text.match(/6PC/g));
  if(p1_consistency_text == "Pasty, Cloudy (PC)" && p1_stretch_text == "Sticky (6)") {
    alert('Stretch of 6 cannot be selected with PC. Choose 6PC special consistency instead.');
    return false;
  }

    if(x6_text == "Dry") {
    var select_p_stretch = document.getElementsByName("day_p_stretch");
    var p_stretch_text = select_p_stretch[0].options[select_p_stretch[0].selectedIndex].text;

    var select_p = document.getElementsByName("day_p_consistency");
    var p_consistency_text = select_p[0].options[select_p[0].selectedIndex].text
    
    var select_p_color = document.getElementsByName("day_p_color");
    var p_color_text = select_p_color[0].options[select_p_color[0].selectedIndex].text;

    if(p_stretch_text != "" || p_consistency_text != "" || p_color_text != "") {
      alert("Dry cannot be selected with anything else."); 
      reset();
    } 
  }
  
  if(x6_text == "Non-Lubricative") {
    var select_p_stretch = document.getElementsByName("day_p_stretch");
    var p_stretch_text = select_p_stretch[0].options[select_p_stretch[0].selectedIndex].text;

    var select_p = document.getElementsByName("day_p_consistency");
    var p_consistency_text = select_p[0].options[select_p[0].selectedIndex].text
    
    var select_p_color = document.getElementsByName("day_p_color");
    var p_color_text = select_p_color[0].options[select_p_color[0].selectedIndex].text;
    
    if(p_stretch_text == "" && p_consistency_text == "" && p_color_text == "") {
      alert("Non-Lubricative cannot be selected by itself.");
      reset();
    }
  }


  var select_p = document.getElementsByName("day_p_consistency");
  var p_consistency_value = select_p[0].options[select_p[0].selectedIndex].value
  var select_p_color = document.getElementsByName("day_p_color");
  var p_color_text = select_p_color[0].options[select_p_color[0].selectedIndex].text;
  console.log(p_consistency_value);
  console.log(p_color_text);
  if(p_consistency_value == 2 && p_color_text != "") {
    alert('Color cannot be selected with PC, 6PC, or G.');
    return false;
  }
  
  var select_p = document.getElementsByName("day_p_consistency");
  var p_consistency_text = select_p[0].options[select_p[0].selectedIndex].text
  var select_p_stretch = document.getElementsByName("day_p_stretch");
  var p_stretch_text = select_p_stretch[0].options[select_p_stretch[0].selectedIndex].text;
  console.log(p_consistency_text);
  console.log(p_stretch_text);
  console.log(p_consistency_text.match(/6PC/g));
  if(p_consistency_text.match(/6PC/g) != null && p_stretch_text != "") {
    alert('Stretch cannot be selected with 6PC.');
    return false;
  }
  
  var select_p = document.getElementsByName("day_p_consistency");
  var p_consistency_text = select_p[0].options[select_p[0].selectedIndex].text
  var select_p_stretch = document.getElementsByName("day_p_stretch");
  var p_stretch_text = select_p_stretch[0].options[select_p_stretch[0].selectedIndex].text;
  console.log(p_consistency_text);
  console.log(p_stretch_text);
  console.log(p_consistency_text.match(/6PC/g));
  if(p_consistency_text == "Pasty, Cloudy (PC)" && p_stretch_text == "Sticky (6)") {
    alert('Stretch of 6 cannot be selected with PC. Choose 6PC special consistency instead.');
    return false;
  }  

  calc(theForm,true);
}
function calc(theForm,do_calc_flag = false) {
  //added this getElem. to clear score area when new choice is picked.
  document.getElementById("score").innerHTML = "";
var day5_desc_text = "";

var select = document.getElementsByName("day_p_minus_5_stretch");      
var text = select[0].options[select[0].selectedIndex].text; 
var regExp = /\(([^)]+)\)/;
var text_matches = regExp.exec(text);
if(text_matches) {
  day5_desc_text += text_matches[1];
}
select = document.getElementsByName("day_p_minus_5_consistency");      
text = select[0].options[select[0].selectedIndex].text; 
regExp = /\(([^)]+)\)/;
text_matches = regExp.exec(text);

if(text_matches) {
  day5_desc_text += text_matches[1];
}
select = document.getElementsByName("day_p_minus_5_color");      
text = select[0].options[select[0].selectedIndex].text; 
regExp = /\(([^)]+)\)/;
text_matches = regExp.exec(text);
if(text_matches) {
  day5_desc_text += text_matches[1];
}

select = document.getElementsByName("day_p_minus_5_lubrication");      
text = select[0].options[select[0].selectedIndex].text;
if (text == "Lubricative") {
  day5_desc_text += "L";
}

if (day5_desc_text == "L") {
  day5_desc_text = "10DL, 10SL, or 10WL";
}

if (day5_desc_text == "" && text == "Dry") {
 day5_desc_text = "0, 2, 2W, or 4";
}

document.getElementById("day5_desc").innerHTML = day5_desc_text;

var day4_desc_text = "";

select = document.getElementsByName("day_p_minus_4_stretch");      
text = select[0].options[select[0].selectedIndex].text; 
regExp = /\(([^)]+)\)/;
text_matches = regExp.exec(text);
if(text_matches) {
  day4_desc_text += text_matches[1];
}
select = document.getElementsByName("day_p_minus_4_consistency");      
text = select[0].options[select[0].selectedIndex].text; 
regExp = /\(([^)]+)\)/;
text_matches = regExp.exec(text);

if(text_matches) {
  day4_desc_text += text_matches[1];
}
select = document.getElementsByName("day_p_minus_4_color");      
text = select[0].options[select[0].selectedIndex].text; 
regExp = /\(([^)]+)\)/;
text_matches = regExp.exec(text);
if(text_matches) {
  day4_desc_text += text_matches[1];
}

select = document.getElementsByName("day_p_minus_4_lubrication");      
text = select[0].options[select[0].selectedIndex].text;
if (text == "Lubricative") {
  day4_desc_text += "L";
}

if (day4_desc_text == "L") {
  day4_desc_text = "10DL, 10SL, or 10WL";
}

if (day4_desc_text == "" && text == "Dry") {
 day4_desc_text = "0, 2, 2W, or 4";
}

document.getElementById("day4_desc").innerHTML = day4_desc_text;

var day3_desc_text = "";

select = document.getElementsByName("day_p_minus_3_stretch");      
text = select[0].options[select[0].selectedIndex].text; 
regExp = /\(([^)]+)\)/;
text_matches = regExp.exec(text);
if(text_matches) {
  day3_desc_text += text_matches[1];
}
select = document.getElementsByName("day_p_minus_3_consistency");      
text = select[0].options[select[0].selectedIndex].text; 
regExp = /\(([^)]+)\)/;
text_matches = regExp.exec(text);

if(text_matches) {
  day3_desc_text += text_matches[1];
}
select = document.getElementsByName("day_p_minus_3_color");      
text = select[0].options[select[0].selectedIndex].text; 
regExp = /\(([^)]+)\)/;
text_matches = regExp.exec(text);
if(text_matches) {
  day3_desc_text += text_matches[1];
}

select = document.getElementsByName("day_p_minus_3_lubrication");      
text = select[0].options[select[0].selectedIndex].text;
if (text == "Lubricative") {
  day3_desc_text += "L";
}

if (day3_desc_text == "L") {
  day3_desc_text = "10DL, 10SL, or 10WL";
}

if (day3_desc_text == "" && text == "Dry") {
 day3_desc_text = "0, 2, 2W, or 4";
}

document.getElementById("day3_desc").innerHTML = day3_desc_text;

var day2_desc_text = "";

select = document.getElementsByName("day_p_minus_2_stretch");      
text = select[0].options[select[0].selectedIndex].text; 
regExp = /\(([^)]+)\)/;
text_matches = regExp.exec(text);
if(text_matches) {
  day2_desc_text += text_matches[1];
}
select = document.getElementsByName("day_p_minus_2_consistency");      
text = select[0].options[select[0].selectedIndex].text; 
regExp = /\(([^)]+)\)/;
text_matches = regExp.exec(text);

if(text_matches) {
  day2_desc_text += text_matches[1];
}
select = document.getElementsByName("day_p_minus_2_color");      
text = select[0].options[select[0].selectedIndex].text; 
regExp = /\(([^)]+)\)/;
text_matches = regExp.exec(text);
if(text_matches) {
  day2_desc_text += text_matches[1];
}

select = document.getElementsByName("day_p_minus_2_lubrication");      
text = select[0].options[select[0].selectedIndex].text;
if (text == "Lubricative") {
  day2_desc_text += "L";
}

if (day2_desc_text == "L") {
  day2_desc_text = "10DL, 10SL, or 10WL";
}

if (day2_desc_text == "" && text == "Dry") {
 day2_desc_text = "0, 2, 2W, or 4";
}

document.getElementById("day2_desc").innerHTML = day2_desc_text;

var day1_desc_text = "";

select = document.getElementsByName("day_p_minus_1_stretch");      
text = select[0].options[select[0].selectedIndex].text; 
regExp = /\(([^)]+)\)/;
text_matches = regExp.exec(text);
if(text_matches) {
  day1_desc_text += text_matches[1];
}
select = document.getElementsByName("day_p_minus_1_consistency");      
text = select[0].options[select[0].selectedIndex].text; 
regExp = /\(([^)]+)\)/;
text_matches = regExp.exec(text);

if(text_matches) {
  day1_desc_text += text_matches[1];
}
select = document.getElementsByName("day_p_minus_1_color");      
text = select[0].options[select[0].selectedIndex].text; 
regExp = /\(([^)]+)\)/;
text_matches = regExp.exec(text);
if(text_matches) {
  day1_desc_text += text_matches[1];
}

select = document.getElementsByName("day_p_minus_1_lubrication");      
text = select[0].options[select[0].selectedIndex].text;
if (text == "Lubricative") {
  day1_desc_text += "L";
}

if (day1_desc_text == "L") {
  day1_desc_text = "10DL, 10SL, or 10WL";
}

if (day1_desc_text == "" && text == "Dry") {
 day1_desc_text = "0, 2, 2W, or 4";
}

document.getElementById("day1_desc").innerHTML = day1_desc_text;

var dayp_desc_text = "";

select = document.getElementsByName("day_p_stretch");      
text = select[0].options[select[0].selectedIndex].text; 
regExp = /\(([^)]+)\)/;
text_matches = regExp.exec(text);
if(text_matches) {
  dayp_desc_text += text_matches[1];
}
select = document.getElementsByName("day_p_consistency");      
text = select[0].options[select[0].selectedIndex].text; 
regExp = /\(([^)]+)\)/;
text_matches = regExp.exec(text);

if(text_matches) {
  dayp_desc_text += text_matches[1];
}
select = document.getElementsByName("day_p_color");      
text = select[0].options[select[0].selectedIndex].text; 
regExp = /\(([^)]+)\)/;
text_matches = regExp.exec(text);
if(text_matches) {
  dayp_desc_text += text_matches[1];
}

select = document.getElementsByName("day_p_lubrication");      
text = select[0].options[select[0].selectedIndex].text;
if (text == "Lubricative") {
  dayp_desc_text += "L";
}

if (dayp_desc_text == "L") {
  dayp_desc_text = "10DL, 10SL, or 10WL";
}

if (dayp_desc_text == "" && text == "Dry") {
 dayp_desc_text = "0, 2, 2W, or 4";
}

document.getElementById("dayp_desc").innerHTML = dayp_desc_text;

  var scoretext = "<b>Day Points = Stretch + Special Consistency + Color + Sensation and Change</b><br/><br/>";
  scoretext += "<strong> Day P-5 Points: </strong>";
  day5_stretch = document.getElementsByName('day_p_minus_5_stretch')[0].value;
  day5_consistency = document.getElementsByName('day_p_minus_5_consistency')[0].value;
  day5_color = document.getElementsByName('day_p_minus_5_color')[0].value;
  day5_lubrication = document.getElementsByName('day_p_minus_5_lubrication')[0].value;

  var show_work5 = day5_stretch + " + " + day5_consistency +  " + " + day5_color  + " + " + day5_lubrication +  " = ";
  var score5 = Number(day5_stretch) + Number(day5_consistency) + Number(day5_color) + Number(day5_lubrication);
  scoretext += show_work5;
  scoretext += score5; 

  scoretext += "<br /> <strong> Day P-4 Points: </strong>";
  day4_stretch = document.getElementsByName('day_p_minus_4_stretch')[0].value;
  day4_consistency = document.getElementsByName('day_p_minus_4_consistency')[0].value;
  day4_color = document.getElementsByName('day_p_minus_4_color')[0].value;
  day4_lubrication = document.getElementsByName('day_p_minus_4_lubrication')[0].value;
  var show_work4 = day4_stretch + " + " + day4_consistency +  " + " + day4_color  + " + " + day4_lubrication +  " = ";
  var score4 = Number(day4_stretch) + Number(day4_consistency) + Number(day4_color) + Number(day4_lubrication);
  scoretext += show_work4
  scoretext += score4;

   scoretext += "<br /><strong> Day P-3 Points: </strong>";
  day3_stretch = document.getElementsByName('day_p_minus_3_stretch')[0].value;
  day3_consistency = document.getElementsByName('day_p_minus_3_consistency')[0].value;
  day3_color = document.getElementsByName('day_p_minus_3_color')[0].value;
  day3_lubrication = document.getElementsByName('day_p_minus_3_lubrication')[0].value;
  var show_work3 = day3_stretch + " + " + day3_consistency +  " + " + day3_color  + " + " + day3_lubrication +  " = ";
  var score3 = Number(day3_stretch) + Number(day3_consistency) + Number(day3_color) + Number(day3_lubrication);
  scoretext += show_work3
  scoretext += score3; 

   scoretext += "<br /><strong> Day P-2 Points: </strong>";
  day2_stretch = document.getElementsByName('day_p_minus_2_stretch')[0].value;
  day2_consistency = document.getElementsByName('day_p_minus_2_consistency')[0].value;
  day2_color = document.getElementsByName('day_p_minus_2_color')[0].value;
  day2_lubrication = document.getElementsByName('day_p_minus_2_lubrication')[0].value;
  var show_work2 = day2_stretch + " + " + day2_consistency +  " + " + day2_color  + " + " + day2_lubrication +  " = ";
  var score2 = Number(day2_stretch) + Number(day2_consistency) + Number(day2_color) + Number(day2_lubrication);
  scoretext += show_work2
  scoretext += score2; 

   scoretext += "<br /><strong> Day P-1 Points: </strong>";
  day1_stretch = document.getElementsByName('day_p_minus_1_stretch')[0].value;
  day1_consistency = document.getElementsByName('day_p_minus_1_consistency')[0].value;
  day1_color = document.getElementsByName('day_p_minus_1_color')[0].value;
  day1_lubrication = document.getElementsByName('day_p_minus_1_lubrication')[0].value;
  var show_work1 = day1_stretch + " + " + day1_consistency +  " + " + day1_color  + " + " + day1_lubrication +  " = ";
  var score1 = Number(day1_stretch) + Number(day1_consistency) + Number(day1_color) + Number(day1_lubrication);
  scoretext += show_work1
  scoretext += score1;

   scoretext += "<br /><strong> Day P&nbsp;&nbsp;&nbsp; Points: </strong>";
  dayp_stretch = document.getElementsByName('day_p_stretch')[0].value;
  dayp_consistency = document.getElementsByName('day_p_consistency')[0].value;
  dayp_color = document.getElementsByName('day_p_color')[0].value;
  dayp_lubrication = document.getElementsByName('day_p_lubrication')[0].value;
  var show_workp = dayp_stretch + " + " + dayp_consistency +  " + " + dayp_color  + " + " + dayp_lubrication +  " = ";
  var scorep = Number(dayp_stretch) + Number(dayp_consistency) + Number(dayp_color) + Number(dayp_lubrication);
  scoretext += show_workp
  scoretext += scorep;  
  
  overall_total = score5 + score4 + score3 + score2 + score1 + scorep;
  overall_score = overall_total / 6;
  overall_score_rounded = Math.round(10*overall_score)/10;
  
  scoretext += "<br /><br /><strong> Total Points: </strong>" + overall_total + "<br /><br /><b>Mucus Cycle Score (MCS):</b> " + overall_score_rounded.toFixed(1); 
  if(overall_score == 0) {
    scoretext += " (Dry)";
  }
  else if(overall_score <= 5.6) {
    scoretext += " (Limited) ";
  }
  else if(overall_score <= 7.5) {
    scoretext += " (Intermediate Limited) ";
  }
  else if(overall_score <= 9.0) {
    scoretext += " (Intermediate Regular) ";
  }
  else {
    scoretext += " (Regular) ";
  }
  if(do_calc_flag) {
    document.getElementById("score").innerHTML = scoretext;
  }
}