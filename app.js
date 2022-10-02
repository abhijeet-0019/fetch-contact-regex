// Check for the various File API support.
let TextData;
let NumArr;
function showFile() {
    var preview = document.getElementById('show-text');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader()
    var textFile = /text.*/;

    if (file.type.match(textFile)) {
        reader.onload = function (event) {
            TextData = event.target.result;
        }
    } else {
        preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
    }
    reader.readAsText(file);
}
function extractDetails() {
    console.log("TextData---> ", TextData);
    let regex = /(^91[6-9]\d{9})|(^91\s[6-9]\d{4}\s\d{5})|(^[6-9]\d{4}\d{5}$)|(^[6-9]\d{4}\s\d{5}$)|(^0[6-9]\d{9})/gm;
    NumArr = TextData.match(regex);
    console.log(typeof (NumArr[2]));
    for (let i = 0; i < NumArr.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(NumArr[i]));
        document.getElementById('number_list').appendChild(li);
    }
}