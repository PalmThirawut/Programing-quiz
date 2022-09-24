
var go = function () {
    var input = $("#inputValues").val(); 
    var inputSplit = input.split("");
    var openBracket;
    var closeBracket;

    function checkInputCount(){
        if(inputSplit.length > 30 ){
            alert("You overfilled!! Please enter no more than 30 characters.")
            location.reload();
            return;
        }
        for (let i=0;i<inputSplit.length;i++){
            if(inputSplit[i] != "("){
                if(inputSplit[i] != ")"){
                    alert("Please enter ( and ) only.");
                    location.reload();
                    return;
                }
            }
        }
    }

    function checkValues(){
        openBracket = [];
        closeBracket = [];
        for (let i=0;i<inputSplit.length;i++){
            if(inputSplit[i] == "("){
                if(inputSplit[i+1] != ")"){
                    openBracket.push(i+2);
                    console.log(openBracket);
                    $("#answersOpen").html("ต้องใส่วงเล็บปิดเพิ่ม "+ openBracket.length);
                    $("#divAnswersOpen").html("ตำแหน่งที่ต้องใส่วงเล็บปิดเพิ่ม "+ openBracket);
                    
                }
            }
            else if(inputSplit[i] == ")"){
                if(inputSplit[i-1] != "("){
                    closeBracket.push(i+1);
                    $("#answersClose").html("ต้องใส่วงเล็บเปิดเพิ่ม "+ closeBracket.length);
                    $("#divAnswersClose").html("ตำแหน่งที่ต้องใส่วงเล็บเปิดเพิ่ม "+ closeBracket);
                }
            }
        }
    }
    checkInputCount();
    checkValues();
}
$("#btnCal").click(function () {
    go()
})







