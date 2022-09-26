
$("#inputValues").change(function(){
    $("#divCards").html(" ");
    $("#answers").html(" ");
    $("#divAnswers").html(" ");
    displayCards($("#inputValues").val().split(/[ ,]+/));
})

var go = function (z) {
    var values = $("#inputValues").val()
    var ns = values.split(/[ ,]+/);
        
        if(ns.length != 4 ){
                alert("Please enter 4 values")
                location.reload();
                return;
            }
        else if(ns[0] == ns[1] || ns[1] == ns[2] || ns[2] == ns[3] || ns[0] == ns[3]){
                alert("Don't enter the same value.")
                location.reload();
                return;
            }

        for (let i=0;i<ns.length;i++){
            if (ns[i] != "1"){
                if (ns[i] != "2"){
                    if (ns[i] != "3"){
                        if (ns[i] != "4"){
                            if (ns[i] != "5"){
                                if (ns[i] != "6"){
                                    if (ns[i] != "7"){
                                        if (ns[i] != "8"){
                                            if (ns[i] != "9"){
                                                alert("Please enter values 1-9")
                                                location.reload();
                                                return;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } 
        }

        doThing(ns);
        var c;

        function doThing(arr) {
            c = c || [];
            var ops = ["+", "-", "*", "/"];
            for (i = 0; i < ops.length; i++) {
                for (j = 0; j < ops.length; j++) {
                    for (k = 0; k < ops.length; k++) {
                        var expressions = [arr[0] + ops[i] + arr[1] + ops[j] + arr[2] + ops[k] + arr[3], "(" + arr[0] + ops[i] + arr[1] + ")" + ops[j] + arr[2] + ops[k] + arr[3], arr[0] + ops[i] + "(" + arr[1] + ops[j] + arr[2] + ops[k] + arr[3] + ")", "(" + arr[0] + ops[i] + arr[1] + ops[j] + arr[2] + ")" + ops[k] + arr[3], "("+arr[0] + ops[i] + arr[1]+")" + ops[j] + "(" +arr[2] + ops[k] + arr[3]+")"];
                        expressions.forEach((e, i) => {
                            if (eval(expressions[i]) == 24) {
                                if (expressions[i] != undefined)
                                    c.push(expressions[i]);
                            }
                        })

                    } 
                }
            }
        }

        var o = [0, 1, 2, 3];
        var r = [];
                o.forEach(l=> {
                    if (new Set([i, j, k, l]).size == 4)
                        r.push([i, j, k, l]);
                })
        
        var a = r.map(e=>e.map(i=>ns[i]));

        a.forEach((e, i) =>a[i] = a[i].join());
        a = new Set(a);
        let b = Array.from(a);
        b.forEach((e, i) =>b[i] = b[i].split(",")); 
        b.forEach((e, i) =>b[i] = doThing(b[i]));
        c = new Set(c);
    
        if(c.size != 0){
            if(z!=undefined){
                    let d =  Array.from(c);
                    d.forEach((e, i) =>d[i] = d[i] + "<br/>");
                    $("#divAnswers").html(d);
                    // $("#answers").html("สามารถคำนวณได้");
                }
        }else{
            $("#answers").html("ข้อมูลชุดนี้ไม่สามารถทำให้ผลลัพธ์เท่ากับ 24 ได้");
        }
 };

$("#btnCal").click(function () {
    go("a");
})

function displayCards(values){
    values.forEach((e,i)=>{
        var a = $("#divCards").html() || "";
        a = a + '<img src="cards/' + values[i] + '.jpg" height="100px" width="80px">  </img>'
        $("#divCards").html(a);
    })
}

