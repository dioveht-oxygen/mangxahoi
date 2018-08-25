var http = require('http');
var express = require('express');
var app = express();
var mysql = require('mysql');
var ejs = require('ejs');
const bodyParser = require("body-parser");

var chuyen_doi_danh_gia_bai_bang = 0;
var chuyen_doi_danh_gia_binh_luan = 0;

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'maychu'
});

app.listen(3000);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/giaodien', express.static('giaodien'));

app.get('/home', function (req, res) {

    var user = req.query.user;
    console.log('chuẩn bị select ' + user + ' trong database ');
    conn.query(`SELECT * FROM nguoidung where  username = '${user}' `, function (err, rows, fields) {
        if (err) throw err;
        var tenhienthi = rows[0].tenhienthi;
        conn.query(`SELECT * FROM baidang where  username = '${user}' `, function (err, rows, fields) {
            if (err) throw err;
            if (rows.length == 0){
                console.log('không có trong database');
            }
            var noi_dung_bai_dang = rows[0].ndpost;
            var cacbien = {
                user : user,
                ten_nguoi_dang_nhap: tenhienthi ,
                baidang: [
                    {
                        noidung: noi_dung_bai_dang,
                    }
                ],
            };

            ejs.renderFile('Home.html', cacbien, null, function (err, str) {
                res.send(str);
            });
        });
    });
});
app.get('/dang_ky', function (req, res) {
    res.sendFile(__dirname + "/dang_ky.html");
});

app.get('/trang-ca-nhan', function (req, res) {

    var user = req.query.user;
    console.log('chuẩn bị select ' + user + ' trong database ');
    conn.query(`SELECT * FROM nguoidung where  username = '${user}' `, function (err, rows, fields) {
        if (err) throw err;
        if (rows.length == 0){
            console.log('không có trong database');
        }
        var tenhienthi = rows[0].tenhienthi;
        var tuoi = rows[0].tuoi;
        var ngaysinh = rows[0].birthday;
        var email = rows[0].email;
        var cacbien = {
            ten_nguoi_dang_nhap: tenhienthi ,
            ngay_sinh : ngaysinh,
            email : email,
            tuoi: tuoi,
        };

        ejs.renderFile('trang-ca-nhan.html', cacbien, null, function (err, str) {
            res.send(str);
        });
    });
});

app.get('/kiem-tra-danh-gia-bai-dang', function (req, res) {
    res.send(chuyen_doi_danh_gia_bai_bang.toString());
});
app.get('/kiem-tra-danh-gia-binh-luan', function (req, res) {
    res.send(chuyen_doi_danh_gia_binh_luan.toString());
});

app.post('/trang-ca-nhan', function (req, res) {

    var noi_dung_bai_dang = req.body.noi_dung;

    var str = `INSERT INTO baidang(ndpost) VALUES ('${noi_dung_bai_dang}')`;
    conn.query(str, function (err, results, fields) {
        res.send(err);
    });
});

app.get('/gui-thong-tin-nguoi-dang-nhap',function (req, res) {
    res.sendFile(__dirname + "/thong-tin-nguoi-dang-nhap.html");
});
/*
app.post('/Home/success', function (req, res) {
    var ho = req.body.ho;
    var ten = req.body.ten;
    var gt = req.body.gt;
    var ngay_sinh = req.body.ngay_sinh;
    var user = req.body.user;
    var pass = req.body.pass;
    var email = req.body.email;
    var d = new Date();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    if (month < 10) {
        month = "0" + month;
        parseInt(month);
    }
    ;
    var ngaygn = year + "-" + month + "-" + date;
    var str = `INSERT INTO nguoidung(username,pass,ho,ten,phai,birthday,email,ngaydk) VALUES ('${user}', '${pass}' , '${ho}', '${ten}' , '${gt}', '${ngay_sinh}' , '${email}' ,'${ngaygn}')`;
    conn.query(str, function (err, results, fields) {
        res.send(err);
    });
});
*/
app.get('/log-in', function (req, res) {
    res.sendFile(__dirname + "/Log-in.html");
});
// gửi coookie lên server
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/kiem-tra-cookie.html");
});
// kiểm tra cookie và trả dữ liệu
app.get('/cookie', function (req, res) {
    var gia_tri = req.query.gia_tri_cookie;
    if (gia_tri == "undefined") {
        res.redirect('/log-in');
    }
    else {
        console.log('gia tri cua token la ' + gia_tri);
        conn.query(`SELECT * FROM cookie where token = '${gia_tri}' `, function (err, rows, fields) {
            if (err) throw err;
            if (rows.length == 0) res.redirect('/log-in');
            var gia_tri_token = rows[0].token;
            var user_token = rows[0].username;
            if (gia_tri == gia_tri_token) {
                conn.query(`SELECT * FROM nguoidung where  username= '${user_token}' `, function (err, rows, fields) {
                    if (err) throw err;
                    var ten_hien_thi = rows[0].lastname + " " + rows[0].firstname;
                    var gioi_tinh = rows[0].sex;
                    var email = rows[0].email;
                    var namsinh = rows[0].birthday;
                    //res.send("1 ;" + user_token + ";"+ten_hien_thi + ";"+gioi_tinh + ";"+email + ";"+namsinh);
                    res.redirect('/gui-thong-tin-nguoi-dang-nhap');
                });
            }
        });
    }
});

/*
app.get('/Home/Seach', function (req, res) {
    var tim = req.query.Search;
    res.send("Đây là thứ bạn cần tìm :  " + tim);

    conn.query("SELECT * FROM NGUOIDUNG WHERE USERNAME = '" + tim + "'");
    conn.query(sql, function (err, results, fields) {
        if (err) throw err;
        alert(fields);
    });
});
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'maychu'
});
*/
function RandomString() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 21; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    text += "Doiveht";
    return text;
}

app.post("/Log-on", (req, res) => {
    var user = req.body.user;
    var pass = req.body.password;
    conn.query(`select * from nguoidung where username = '${user}' and pass = '${pass}'`,
        (err, rows, fields) => {
            if (err) throw err;
            var user_sql = rows[0].username;
            var pass_sql = rows[0].pass;
            var chuoi = RandomString();
            if (user == user_sql && pass == pass_sql) {
                conn.query(`SELECT * FROM nguoidung where  username= '${user}' `,
                    (err, rows, fields) => {
                        if (err) throw err;
                        console.log('chuan bi update cookie');
                    if( rows.length == 0){
                        var str = `INSERT INTO cookie(username,token) VALUES ('${user}','${chuoi}')`;
                        conn.query(str, function (err, results, fields) {
                            if (err) throw err;
                        });
                    }
                    else{
                        var str = `update cookie set username='${user_sql}',token='${chuoi}' `;
                        conn.query(str, function (err, results, fields) {

                            if(err) throw err;
                        });
                    }
                    conn.query(`SELECT * FROM nguoidung where  username= '${user}' `,
                        (err, rows, fields) => {
                            if (err) throw err;
                            var ten_user = rows[0].lastname + " " + rows[0].firstname;
                            var gioi_tinh = rows[0].sex;
                            var email = rows[0].email;
                            var namsinh = rows[0].birthday;
                            var ten_hien_thi = rows[0].tenhienthi;

                            var bien = {
                                chuoi_ngau_nhien: chuoi,
                                username: user_sql,
                                ten_nguoi_dung: ten_user,
                                gioi_tinh: gioi_tinh,
                                email: email,
                                nam_sinh: namsinh,
                                ten_hien_thi: ten_hien_thi
                            };
                            ejs.renderFile('success.html', bien, null, function (err, str) {
                                if (err) throw err;
                                res.send(str);
                            });
                            //res.redirect('/home');
                        }
                    );
                });
            }
        });
});



// xây dựng chat realtime
