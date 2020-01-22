function ConversionPart1() {

    var UnsignedInt = document.getElementById("1_UnsignedInt").value;
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);
    var string= "";

    //first convert to base 10
    var value = 0;
    var i = 0;
    while (i<= UnsignedInt.length-1)
    {
      value = (value * UnsignedIntBaseFrom) + Number(UnsignedInt.charAt (i));
      i++;
    }
    //console.log (value);
    //convert to new base
    while (value != 0)
    {
      var b = value % UnsignedIntBaseTo;
      value = Math.floor(value/UnsignedIntBaseTo);
      string = "" + b + string;
      //console.log (string);
    }
    var outputValue = Number(string);


  // Show the output on the screen
  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);

}
