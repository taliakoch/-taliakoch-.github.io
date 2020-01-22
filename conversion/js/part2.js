function ConversionPart2() {
    //
    var SignedDecimalInt = parseInt(document.getElementById("2_SignedInt").value);
    var outputValue = "";
    var outputValueTwosComplement = "";
    var original = SignedDecimalInt;

    while (SignedDecimalInt!=0) {
        var b = SignedDecimalInt % 2;
        SignedDecimalInt = Math.floor(SignedDecimalInt/2);
        if (b == 0)
        {
          outputValueTwosComplement= "1" + outputValueTwosComplement;
        }
        if (b == 1)
        {
          outputValueTwosComplement= "0" + outputValueTwosComplement;
        }
        outputValue = "" + b + outputValue;
      }
    while (outputValue.length< 32){
          outputValue = "0" + outputValue;
          outputValueTwosComplement = "1"+ outputValueTwosComplement;
      }

      console.log (outputValue);
      console.log (outputValueTwosComplement);

    var i = outputValueTwosComplement.length;
    while (outputValueTwosComplement.charAt (i-1)==1)
      {
        if (i!= outputValueTwosComplement.length){
        outputValueTwosComplement= outputValueTwosComplement.substring (0,i-1)+ "0" +outputValueTwosComplement.substring (i+1);
        i-=1;}

        if (i== outputValueTwosComplement.length){
        outputValueTwosComplement= outputValueTwosComplement.substring (0,i-1)+ "0";
        i-=1;}

      }
   if (outputValueTwosComplement.charAt (i-1)==0 && i!= outputValueTwosComplement.length)
   {
     outputValueTwosComplement= outputValueTwosComplement.substring (0,i-1)+ "1" +outputValueTwosComplement.substring (i+1);
   }

   if (outputValueTwosComplement.charAt (i-1)==0 && i== outputValueTwosComplement.length)
   {
     outputValueTwosComplement= outputValueTwosComplement.substring (0,i-1)+ "1";
   }







    // Show the output on the screen
    FormatAndShowOutput([outputValue, outputValueTwosComplement, original], 2);

}
