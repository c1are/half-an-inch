

//=========================================================
$(document).ready(function(){

// slider functionality
  var minValue = 0;
  var maxValue = 15;

  $('#slider').slider({ 
    min: minValue,
    max: maxValue,
    step: 1,

    slide: function(event, ui){  
      var html; 
      var sliderValue = ui.value;
      var fractionPairs = [[0,0],[1, 16], [1, 8], [3,16],[1,4],[5,16],[3,8],[7,16],[1,2],[9,16],[5,8],[11,16],[2,4],[13,16],[7,8],[15,16]];   

      if (sliderValue === 0) {
        html = '';
      } else {
        var html = '<sup>' + fractionPairs[sliderValue][0] + '</sup>&frasl;<sub>' + fractionPairs[sliderValue][1] + '</sub>';
      }

      $('#sliderValue').html(html);
      getSliderValue(sliderValue);     
    }
  }); //end of slider function

  $('#clear').on('click', function(){
      $('#sliderValue').html('');
  });

  //$('#numberMeasurement').on('keyup', function(){
  //  getSliderValue($(this).val());
  //});

}); //end of document.ready function
//========================================================


//coloured div boxs selectors
var halfBox = document.getElementsByClassName('half');
var quaterBox = document.getElementsByClassName('quarter');
var eigthBox = document.getElementsByClassName('eigth');
var thirdBox = document.getElementsByClassName('third');
var sixthBox = document.getElementsByClassName('sixth');


//slider value
var slider = document.getElementsByClassName('slider');


function getSliderValue(sliderValueGrabbed){
  var sliderdecimal = inchDecimals(sliderValueGrabbed);
  var wholeNum = getValue(userInputWholeNumber);
  var wholeNumPlusDecimal = wholeNum + sliderdecimal;

  divisionMaths(wholeNumPlusDecimal);  
};

function divisionMaths(wholeNum){

  //4 apply dividion maths
  var havled = devideFunc(wholeNum, 2);
  var quatered = devideFunc(wholeNum, 4);
  var eigthed = devideFunc(wholeNum, 8);
  var thirded = devideFunc(wholeNum, 3);
  var sixthed = devideFunc(wholeNum, 6);

  //5 separate whole number and decimal
  var wHalved = findWholeNum(havled);
  var wQuatered = findWholeNum(quatered);
  var wEigthed = findWholeNum(eigthed);
  var wThirded = findWholeNum(thirded);
  var wSixthed = findWholeNum(sixthed);

  //6 convert decimal back to fraction (ie 0.5 to 1/2)
  var decHalved = findDecimal(havled);
  var decQuatered = findDecimal(quatered);
  var decEigthed = findDecimal(eigthed);
  var decThirded = findDecimal(thirded);
  var decSixthed = findDecimal(sixthed);

  // returnFractionFromNumber(num);
  var halfFraction = returnFractionFromNumber(decHalved)
  var quaterFraction = returnFractionFromNumber(decQuatered)
  var eigthFraction = returnFractionFromNumber(decEigthed)
  var thirdFraction = returnFractionFromNumber(decThirded)
  var sixthFraction = returnFractionFromNumber(decSixthed)

  //7 set values as atrings in boxes
  $('.half').html('<p>'+wHalved+' '+'<span>'+halfFraction+'</span>'+'</p>');
  $('.quarter').html('<p>'+ wQuatered+' '+'<span>'+quaterFraction+'</span>'+'</p>');
  $('.eigth').html('<p>'+wEigthed+' '+'<span>'+eigthFraction+'</span>'+'</p>');
  $('.third').html('<p>'+wThirded+' '+'<span>'+thirdFraction+'</span>'+'</p>');
  $('.sixth').html('<p>'+wSixthed+' '+'<span>'+sixthFraction+'</span>'+'</p>');

} //end of getUserWholeNum()


//making sure result is returned as a number and a string
function getValue(input){
  console.log(input.value);
  var result = parseInt(input.value, 10);
  if (isNaN(result) ){
    return 0;
  } else {
    return result;
  }
}


//devides values
function devideFunc(inputNum, dividedByNum){  
  return inputNum / dividedByNum;
}

// user input values
var userInputWholeNumber = document.getElementById("numberMeasurement");
var slider = document.getElementById('slider');
// var sliderValue = $( '#slider' ).slider( "value" );


//takes a number and rounds down to nearesr integer (eg 12.345 to 12)
function findWholeNum(num){
  if (Math.floor(num) === 0){
    return '';
  }else{
  return Math.floor(num);
}}


//takes a number and returns just the decimal (eg 12.345 to 0.345)
function findDecimal(num){  
  return num - (Math.floor(num));
}


// converts num between 0 and 1 and returns fraction as a string
function returnFractionFromNumber(num){  
  if (num === 0){
    return ""; // 0

  } else if ( num > 0 && num <= 0.0625 ){
    return "<sup>1</sup>&frasl;<sub>16</sub>"; // 1/16

  } else if (num > 0.0625 && num <= 0.125){
    return "<sup>1</sup>&frasl;<sub>8</sub>"; // 1/8

  } else if (num > 0.125 && num <= 0.1875){
    return "<sup>3</sup>&frasl;<sub>16</sub>"; // 3/16

  } else if (num > 0.1875 && num <= 0.25){
    return "<sup>1</sup>&frasl;<sub>4</sub>"; // 1/4

  } else if (num > 0.25 && num <= 0.3125){
    return "<sup>5</sup>&frasl;<sub>16</sub>"; // 5/16

  } else if (num > 0.3125 && num <= 0.375){
    return "<sup>3</sup>&frasl;<sub>8</sub>"; // 3/8

  } else if (num > 0.375 && num <= 0.4375){
    return "<sup>7</sup>&frasl;<sub>16</sub>"; // 7/16

  } else if (num > 0.4375 && num <= 0.5){
    return "<sup>1</sup>&frasl;<sub>2</sub>"; // 1/2

  } else if (num > 0.5 && num <= 0.5625){
    return "<sup>9</sup>&frasl;<sub>16</sub>"; // 9/16

  } else if (num > 0.5625 && num <= 0.625){
    return "<sup>5</sup>&frasl;<sub>8</sub>"; // 10/16

  } else if (num > 0.625 && num <= 0.6875){
    return "<sup>11</sup>&frasl;<sub>16</sub>"; // 11/16

  } else if (num > 0.6875 && num <= 0.75){
    return "<sup>3</sup>&frasl;<sub>4</sub>"; // 3/4

  } else if (num > 0.75 && num <= 0.8125){
    return "<sup>13</sup>&frasl;<sub>16</sub>"; // 13/16

  } else if (num > 0.8125 && num <= 0.875){
    return "<sup>7</sup>&frasl;<sub>8</sub>"; // 7/8

  } else if (num > 0.875 ){
    return "<sup>15</sup>&frasl;<sub>16</sub>";} // 16/16
}

function inchDecimals(index){
  if (index === undefined){
    return 0;
  }
  var array = ["0",  0.0625,   0.125,   0.1875,  0.25,  0.3125,  0.375, 0.4375,   0.5,    0.5625, 0.625,   0.6875,   0.75,   0.8125,    0.875,  0.9375]; // check these numbers!!
// var array =[0,  1(1/16), 2 (1/8),  3(3/16), 4(1/4),5(5/16), 6(3/8),7(7/16), 8(1/5), 9(9/16), 10(5/8),11(11/16),12(3/4),13(13/16), 14(7/8),15(15/16)]

  return array[index];
};


// function convertDecimalToFraction(){
//  return (1 / 16) * sliderValue;
// }

