// Stylized text generator by Ashura09: JS Script

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
    