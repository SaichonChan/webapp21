function f_validate(val){ // เช็คตัวเลข

    if (document.getElementById("dropdown").value == "mat_no")
    {   
        if (val.keyCode < 45 || val.keyCode > 57) {
            alert("กรุณาป้อนตัวเลขค่ะ");
            val.returnValue = false;   
            }   
    } else {
    }
          
}

function f_senddata(){
    var search_by = document.getElementById("dropdown").value;
    var search_text = document.getElementById("condition_str").value;
    console.log(search_text.length);

    if (search_by == "mat_no"){
        if (search_text.length <= 10){
            
        }else {
            alert("โปรดตรวจสอบ การค้นหาต้องเป็นตัวเลขจำนวน 10 ตัว");
            return;
        }

    }

    if (search_text == null ) {
        alert("โปรดตรวจสอบข้อมูลการค้นหาอีกครั้ง");
        document.getElementById("condition_str").value.textContent = "";
        return;
    } else {
        var queryString = "?" + search_by + "&para" + search_text;
        window.location.href = "p11specidp.html" + queryString;
        console.log(queryString);
      }
}

   

   