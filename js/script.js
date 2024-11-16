
function hiddenError() {
    $("#errorName").attr("style", "display:none");
    $("#errorAddress").attr("style", "display:none");
    $("#errorPhone").attr("style", "display:none");
    $("#errorProduct").attr("style", "display:none");
    $("#errorNum").attr("style", "display:none");
}
function validation() {
    
    let STT=1;
    const product=$('#inputProduct').val();
    const name = $('#inputName').val();
    const phone = $('#inputPhone').val();
    const address = $('#inputAddress').val();
    const num = $('#inputNum').val();
    const regName= /^[A-Z]+\w+/;
    const regPhone=/09(\d{8})/;
    const regNum=/\d+/
    hiddenError();

    if (name.trim() == ''||regName.test(name)==false) {
        $("#errorName").attr("style", "display:inline");
        $("#errorName").text('Nhập sai tên');
        $('#inputName').focus();
        return false;
    }  else if (phone.trim() == '' || regPhone.test(phone)==false) {
        $("#errorPhone").attr("style", "display:inline");
        $("#errorPhone").text('Vui lòng nhập lại số điện thoại');
        $('#errorPhone').focus();
        return false;
    }
    else if (address.trim() == '') {
        $("#errorAddress").attr("style", "display:inline");
        $("#errorAddress").text('Vui lòng nhập địa chỉ');
        $('#errorAddress').focus();
        return false;
    } 
    else if (num.trim() == ''|| regNum.test(num)==false) {
        $("#errorNum").attr("style", "display:inline");
        $("#errorNum").text('Vui lòng chọn số lượng');
        $('#errorNum').focus();
        return false;
    } 
    else if (product.trim() == '') {
        $("#errorProduct").attr("style", "display:inline");
        $("#errorProduct").text('Vui lòng chọn sản phẩm');
        $('#errorProduct').focus();
        return false;
    } 
    
    else {

            const newrow="<tr>"+
                        "<td>"+STT+"</td>"+
                        "<td>"+$('#inputName').val()+"</td>"+
                        "<td>"+$('#inputPhone').val()+"</td>"+
                        "<td>"+$('#inputAddress').val()+"</td>"+
                        "<td>"+$('#inputProduct').val()+"</td>"+
                        "<td>"+$('#inputNum').val()+"</td>"+
                        "<td>"+$("#inputPrice").val()+"</td>"+
            "<tr>";
            STT++;
            $("#myTable tbody").append(newrow);
            $('#myModal').modal('hide');
            
        }

}
function setPrice(){
    const product=$('#inputProduct').val();
    const num = $('#inputNum').val();
    
    if(product=='Cake Chocolate') $("#inputPrice").val(num*15+"$");
    else if(product=='Dark Chocolate') $("#inputPrice").val(num*13+"$");
    else if(product=='White Chocolate') $("#inputPrice").val(num*13+"$");
    else if(product=='Mountain Chocolate') $("#inputPrice").val(num*25+"$");
}
function thongbao(){
    alert("Thêm vào giỏ hàng thành công hãy truy cập giỏ hàng để đặt hàng.");
}
$(document).ready(function() {
    
    $("#btnDH").click(function() {
        $("#myModal").modal("show");
        $("#btnModal").on("click",validation);
    });
   $("#inputProduct").on("change",setPrice);
   $("#inputNum").on("change",setPrice);
   $(".add-to-cart").on("click",function(){
    alert("Thêm vào giỏ hàng thành công hãy truy cập giỏ hàng để đặt hàng.");
   })
});
