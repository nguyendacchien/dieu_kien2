// function setInput(number){
//     document.getElementById('ouput').value += number
// }
// function calculator() {
//     let output = document.getElementById('output').value;
//
//     // thuc hien tin toan dung ham co san eval()
//     result = eval(output);
//
//     // gan lai ket qua len o output
//     document.getElementById('output').value = result;
// }



let check = false;

function setOutput(number) {
    if (check) {
        document.getElementById("out-put").value = number;
        check = false;
    } else {
        document.getElementById("out-put").value += number;
    }
}

function calculator() {
    check = true;
    let output = document.getElementById("out-put").value;
    document.getElementById("out-put").value = eval(output);
}

function clearOutput() {
    document.getElementById("out-put").value = '';
}

function clearNumber() {
    let output = document.getElementById("out-put").value;
    console.log(output)
}