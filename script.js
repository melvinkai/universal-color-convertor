const colorList = {
    "red": "FF0000",
    "blue": "0000FF",
    "green": "008000",
    "orange": "FFA500",
    "black": "000000",
    "white": "FFFFFF",
    "yellow": "FFFF00",
    "pink": "FFC0CB",
    "purple": "A020F0",
}; 

 function convertColorCode(colorName) {
    colorName = document.getElementById("color")?.value.toLowerCase().trim();
    if (colorList[colorName])
        { 
        resultOutput = `Hexadecimal Code: (#${colorList[colorName]})`;
        document.getElementById("result").innerHTML = resultOutput;
        }
        else 
        {
        alert("Please enter a valid color")
        }
}

module.exports = convertColorCode;
