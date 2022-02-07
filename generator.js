// Stylized text generator by Ashura09: JS Script

function darkmode()
{

    // convert button
    document.getElementById("convert").style.backgroundColor = "rgb(50,50,50)"
    document.getElementById("convert").style.color = "white"
    document.getElementById("convert").style.boxShadow = "0px 0px 0.5em gray"

    // titles
    document.getElementById("title").style.color = "white"
    document.getElementById("subtitle").style.color = "white"

    // darkmode button
    document.getElementById("darkmode").style.backgroundColor = "rgb(50,50,50)"
    document.getElementById("darkmode").style.boxShadow = "0px 0px 2em white"
    document.getElementById("darkmode").style.color = "white"

    // body
    document.body.style.backgroundColor = "rgb(25,25,25)"

    // text areas
    document.getElementById("textinput").style.backgroundColor = "rgb(50,50,50)"
    document.getElementById("output").style.backgroundColor = "rgb(50,50,50)"

    document.getElementById("textinput").style.color = "white"
    document.getElementById("output").style.color = "white"

    console.log("Dark theme!")
}

function lightmode()
{

    // convert button
    document.getElementById("convert").style.backgroundColor = ""
    document.getElementById("convert").style.color = "black"
    document.getElementById("convert").style.boxShadow = "0px 0px 0.5em gray"

    // titles
    document.getElementById("title").style.color = "black"
    document.getElementById("subtitle").style.color = "black"

    // darkmode button
    document.getElementById("darkmode").style.backgroundColor = "rgb(50,50,50)"
    document.getElementById("darkmode").style.boxShadow = "0px 0px 2em white"
    document.getElementById("darkmode").style.color = "white"

    // body
    document.body.style.backgroundColor = "rgb(244, 250, 253)"

    // text areas
    document.getElementById("textinput").style.backgroundColor = "white"
    document.getElementById("output").style.backgroundColor = "white"

    document.getElementById("textinput").style.color = "black"
    document.getElementById("output").style.color = "black"

    console.log("Dark theme!")
}

var English = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

var RegionalIndicator = [
    "🇦", "🇧", "🇨", "🇩", "🇪", "🇫", "🇬", "🇭", "🇮", "🇯", "🇰", "🇱", "🇲", "🇳", "🇴", "🇵", "🇶", "🇷", "🇸", "🇹", "🇺", "🇻", "🇼", "🇽", "🇾", "🇿"
]

function convert_RI()
{
    var textinputelement = document.getElementById("textinput")
    var outputelement = document.getElementById("output")
    var text = textinputelement.value.replaceAll(" ", "   ").replaceAll("a", "🇦 ").replaceAll("b", "🇧 ").replaceAll("c", "🇨 ").replaceAll("d", "🇩 ").replaceAll("e", "🇪 ").replaceAll("f", "🇫 ").replaceAll("g", "🇬 ").replaceAll("h", "🇭 ").replaceAll("i", "🇮 ").replaceAll("j", "🇯 ").replaceAll("k", "🇰 ").replaceAll("l", "🇱 ").replaceAll("m", "🇲 ").replaceAll("n", "🇳 ").replaceAll("o", "🇴 ").replaceAll("p", "🇵 ").replaceAll("q", "🇶 ").replaceAll("r", "🇷 ").replaceAll("s", "🇸 ").replaceAll("t", "🇹 ").replaceAll("u", "🇺 ").replaceAll("v", "🇻 ").replaceAll("w", "🇼 ").replaceAll("x", "🇽 ").replaceAll("y", "🇾 ").replaceAll("z", "🇿 ")
    outputelement.value = text
    return "success!"
}
    
