
function ConversionPart3() {
  var floatToConvert = document.getElementById("3_Float").value;
  var nextDig;
  var inBinary= "";
  var output32BitScientificNotation;
  var int;
  var fraction;


//first divide up # into integer and decimal
for (var i=0; i<floatToConvert.length; i++)
{
  if (floatToConvert.charAt(i)== ".")
  {
     int = floatToConvert.substring (0, i);
     fraction = floatToConvert.substring (i);
  }
}

//convert int to binary
  while (int!=0)
  {
    var add = (int%2);
    var outputValue= ""+ add + outputValue;
    int = Math.floor(int/2);
  }
  console.log("not here!");

  //the following ONLY converts a decimal in base 10 to binary
  while (inBinary.length<=23)
  {
    fraction = fraction*2;
    nextDig= Math.floor (fraction);
    fraction= fraction - nextDig;
    inBinary = "" + inBinary + nextDig;
  }
  console.log("or here!");

  var mantissa;
  var exponent;
  var joinedNumber = outputValue + "."+ inBinary + "";
  for (var i= 0; i< joinedNumber.length;i++){
    if (joinedNumber.charAt(i)=="."){
      mantissa = joinedNumber.substring (0,i) + joinedNumber.substring (i+1);
      exponent = i -1;
    }
  }
  console.log("not even here!");
  exponent = exponent + 128;
  var b = exponent % 2;
  exponent = Math.floor(exponent/2);
  var finalExponent = "" + b + finalExponent;

  if (floatToConvert> 0){
  output32BitScientificNotation = ""+ mantissa + finalExponent + "0";}

  if (floatToConvert< 0){
  output32BitScientificNotation = ""+ mantissa + finalExponent + "1";}


  // Show the output on the screen
  FormatAndShowOutput([floatToConvert, output32BitScientificNotation], 3);
}


// If you dare read a comment before starting to program..
// 3434000.5 has a binary representation of
//  1101000110011000010000.1
// In NORMALIZED scientific notation (i.e. scientific notation for Base 2)
// 1.1010001100110000100001 * 2^21
// ... so mantissa is 11010001100110000100001

// For the final 32 bits.. we have
// ... so 1010001100110000100001 for mantissa (because of explicit leading 1)
// ... so for bits (0-22) 10100011001100001000010
// ... so exponent representation in +128 format is 21+128 = 149 = (bits 23-30) 10010101
// ... so final sign bit = (bit 31) 0
