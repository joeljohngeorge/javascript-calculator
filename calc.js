function show(val) {


    document.getElementById('display').value += val  //appending value to display on screen, clicking 7 and 8 prints 78

}

function clr() {
    document.getElementById('display').value = ""
}

function equalclk() {
    var text = document.getElementById('display').value
    var result = eval(text)   //eval function evaluates the operations in the calculator and provides end result
    document.getElementById('display').value = result
}