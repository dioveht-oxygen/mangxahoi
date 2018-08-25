/* biến */
    var chuyen_doi_hien_thi = 1; /* bằng 1 là hiển thị khi biến bằng 0 là ẩn đi */
    var thich = 0;
/* biến */



function kiem_tra_form_dang_ky() {
    var ten = document.dang_ky.ten.value.length;
    var user = document.dang_ky.user.value.length;
    var pass = document.dang_ky.pass.value.length;
    var email = document.dang_ky.email.value;
    if (ten < 2) {
        alert("Bạn chưa nhập tên");
        return false;
    }
    if (user < 6) {
        alert("Bạn nhập tên tài khoản quá ngắn");
        return false;
    }
    if (pass < 1) {
        alert("Bạn chưa nhập mật khẩu");
        return false;
    }
    var aCong = email.indexOf("@");
    var dauCham = email.lastIndexOf(".");
    if (email == "") {
        alert("Email không được để trống");
        return false;
    }
    else if ((aCong < 1) || (dauCham < aCong + 2) || (dauCham + 2 > email.length)) {
        alert("Ops. Email bạn nhập không hợp lệ");
        return false;
    }
}

function ajax( method , action){

    var xhr = new XMLHttpRequest();

// Open the connection.
    xhr.open(method, action, false);

    xhr.send('');

    return xhr.responseText;

}

function tuong_tac_thich_binh_luan(){

    chuyen_doi_hien_thi = ajax("get","/chuyen-doi");

    if (chuyen_doi_hien_thi == "1") {
        console.log(chuyen_doi_hien_thi);
        document.getElementById('thich-danh-gia').classList.remove("tuong-tac-thich");
        document.getElementById('thich-danh-gia').classList.add("thich");
    }
    else if(chuyen_doi_hien_thi == "0") {
        console.log(chuyen_doi_hien_thi);
        document.getElementById('thich-danh-gia').classList.remove("thich");
        document.getElementById('thich-danh-gia').classList.add("tuong-tac-thich");
    }
}
function tuong_tac_thich_tra_loi_binh_luan(){

    chuyen_doi_hien_thi = ajax("get","/chuyen-doi-tra-loi-binh-luan");

    if (chuyen_doi_hien_thi == "1") {
        console.log(chuyen_doi_hien_thi);
        document.getElementById('thich-danh-gia-binh-luan').classList.remove("tuong-tac-thich");
        document.getElementById('thich-danh-gia-binh-luan').classList.add("thich");
    }
    else if(chuyen_doi_hien_thi == "0") {
        console.log(chuyen_doi_hien_thi);
        document.getElementById('thich-danh-gia-binh-luan').classList.remove("thich");
        document.getElementById('thich-danh-gia-binh-luan').classList.add("tuong-tac-thich");
    }
}
function kiem_tra(){
    var du_lieu_bai_dang = ajax("get","/kiem-tra-danh-gia-bai-dang");
    var du_lieu_binh_luan = ajax("get","/kiem-tra-danh-gia-binh-luan");
    console.log("chuyển đổi bài đăng  : " + du_lieu_bai_dang);
    console.log("chuyển đổi bình luận : " + du_lieu_binh_luan);
    if( du_lieu_bai_dang == "1"){
        document.getElementById('thich-danh-gia').classList.remove("tuong-tac-thich");
        document.getElementById('thich-danh-gia').classList.add("thich");
    }
    if(du_lieu_binh_luan == "1"){
        document.getElementById('thich-danh-gia-binh-luan').classList.remove("tuong-tac-thich");
        document.getElementById('thich-danh-gia-binh-luan').classList.add("thich");
    }
}

function luot_thich(){
  var xem = ajax("get" ,"/luot-thich");
  console.log(xem);
  //document.getElementById('so_thich').innerHTML= xem;
}
function luot_thich_binh_luan(){
    var xem = ajax("get" ,"/luot-thich-binh-luan");
    console.log(xem);
    document.getElementById('so_thich_binh_luan').innerHTML= xem;
}
function hien_thi_ban_be(){
    var nd;
    nd = document.getElementById("hien-thi-ban-be").innerHTML;
    if(nd == "ẩn"){
        document.getElementById("danh_sach_ban").classList.add("hide");
        document.getElementById("hien-thi-ban-be").innerHTML = "hiển thị";
    }
    else if(nd == "hiển thị"){
        document.getElementById("danh_sach_ban").classList.remove("hide");
        document.getElementById("hien-thi-ban-be").innerHTML = "ẩn";
    }
}
function hien_thi_binh_luan(){
    var nd;
    nd = document.getElementById("hien-thi-binh-luan").innerHTML;
    if(nd == "ẩn bình luận"){
        document.getElementById("phan-binh-luan").classList.add("hide");
        document.getElementById("hien-thi-binh-luan").innerHTML = "hiển thị bình luận";
    }
    else if(nd == "hiển thị bình luận"){
        document.getElementById("phan-binh-luan").classList.remove("hide");
        document.getElementById("hien-thi-binh-luan").innerHTML = "ẩn bình luận";
    }
}

function lua_chon( the_chon){
    var the = document.getElementsByTagName('li');
    var thu_tu = 0;
    for(thu_tu ; thu_tu < 4 ; thu_tu++){
        the[thu_tu].classList.remove("chon");
    }
    var str  = the_chon.innerHTML;
    document.getElementById("tcn-thong_tin").classList.add("hide");
    document.getElementById("tcn-dang_bai").classList.add("hide");
    document.getElementById("tcn-info").classList.add("hide");
    document.getElementById("tcn-dieu_le").classList.add("hide");
    if( str == "Đăng bài"){
        document.getElementById("tcn-dang_bai").classList.remove("hide");
    }
    else if( str == "Thông tin cá nhân"){
        document.getElementById("tcn-thong_tin").classList.remove("hide");
    }
    else if( str == "Info"){
        document.getElementById("tcn-info").classList.remove("hide");
    }
    else if( str == "Điều lệ"){
        document.getElementById("tcn-dieu_le").classList.remove("hide");
    }
    the_chon.classList.add("chon");
}
function kiem_tra_nhap_ky_tu(input) {
    console.log('length: ', input.value.length);
    if (input.value.length < 3) {
        input.classList.remove("du_chu");
        input.classList.add("thieu_chu")
        console.log(input);
    }
    else {
        input.classList.remove("thieu_chu");
        input.classList.add("du_chu");
        console.log(input);
    }
}
function xetCookie(){
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        console.log(ca[i]);
        if(ca[i].indexOf("Doiveht") > 0){
            return ca[i];

        }
    }
    return ;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
var gia_tri_cookie = xetCookie();
function tach_ten_cookie(){
    var ca = ajax("get","/cookie/?gia_tri_cookie="+gia_tri_cookie+"");
    var aaa = ca.split(';');
    for(var i = 0; i <aaa.length; i++) {
        console.log( i +"="+ aaa[i]);
    }
    if(aaa[0] == 1){
        chuyen_trang('home');
    };
}
function chuyen_trang(duong_dan) {
    window.location="http://localhost:3000/"+duong_dan+"";
}

document.addEventListener("DOMContentLoaded", function() {
    tach_ten_cookie();
});



