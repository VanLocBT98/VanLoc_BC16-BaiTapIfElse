// bài tập 1:
document.getElementById('btnInKetQua1').onclick = function () {
    var number1_b1 = document.getElementById('soThuNhat_b1').value;
    var number2_b1 = document.getElementById('soThuHai_b1').value;
    var number3_b1 = document.getElementById('soThuBa_b1').value;
    number1_b1 = Number(number1_b1);
    number2_b1 = Number(number2_b1);
    number3_b1 = Number(number3_b1);

    var kq_b1;
    if (number1_b1 >= number2_b1 && number2_b1 >= number3_b1) {
        kq_b1 = number3_b1 + ':' + number2_b1 + ':' + number1_b1
    } else if (number1_b1 >= number2_b1 && number3_b1 > number2_b1 && number1_b1 >= number3_b1) {
        kq_b1 = number2_b1 + ':' + number3_b1 + ':' + number1_b1
    } else if (number1_b1 <= number2_b1 && number2_b1 >= number3_b1 && number1_b1 >= number3_b1) {
        kq_b1 = number3_b1 + ':' + number1_b1 + ':' + number2_b1
    } else if (number1_b1 <= number2_b1 && number2_b1 >= number3_b1 && number1_b1 < number3_b1) {
        kq_b1 = number1_b1 + ':' + number3_b1 + ':' + number2_b1
    } else if (number1_b1 <= number3_b1 && number3_b1 >= number2_b1 && number1_b1 >= number2_b1) {
        kq_b1 = number2_b1 + ':' + number1_b1 + ':' + number3_b1
    } else {
        kq_b1 = number1_b1 + ':' + number2_b1 + ':' + number3_b1

    }


    document.getElementById('ketQuaBai1').innerHTML = 'sắp xếp từ bé đến lớn : ' + kq_b1;
}



// bài tập 2 :
document.getElementById('btnInKetQua2').onclick = function () {
    var number1_b2 = document.getElementById('soThuNhat_b2').value;
    var number2_b2 = document.getElementById('soThuHai_b2').value;
    var number3_b2 = document.getElementById('soThuBa_b2').value;
    number1_b2 = Number(number1_b2);
    number2_b2 = Number(number2_b2);
    number3_b2 = Number(number3_b2);

    var kq_b2;
    if (number1_b2 >= number2_b2 && number2_b2 >= number3_b2 || number1_b2 >= number2_b2 && number1_b2 >= number3_b2) {
        kq_b2 = number1_b2
    } else if (number1_b2 < number2_b2 && number2_b2 > number3_b2) {
        kq_b2 = number2_b2
    } else {
        kq_b2 = number3_b2;
    }
    document.getElementById('ketQuaBai2').innerHTML = 'Số Lớn Nhất Là  : ' + kq_b2;
}


// bài tập 3 :
document.getElementById('btnInKetQua3').onclick = function () {
    var number1_b3 = document.getElementById('soThuNhat_b3').value;
    var number2_b3 = document.getElementById('soThuHai_b3').value;
    var number3_b3 = document.getElementById('soThuBa_b3').value;
    var kq_3;
    if (number1_b3 % 2 == 0 && number2_b3 % 2 == 0 && number3_b3 % 2 == 0) {
        kq_3 = 3
    } else if ((number1_b3 % 2 == !0 && number2_b3 % 2 == 0 && number3_b3 % 2 == 0) || (number1_b3 % 2 == 0 && number2_b3 % 2 == !0 && number3_b3 % 2 == 0) || (number1_b3 % 2 == 0 && number2_b3 % 2 == 0 && number3_b3 % 2 == !0)) {
        kq_3 = 2
    } else if ((number1_b3 % 2 == !0 && number2_b3 % 2 == !0 && number3_b3 % 2 == 0) || (number1_b3 % 2 == 0 && number2_b3 % 2 == !0 && number3_b3 % 2 == !0) || (number1_b3 % 2 == !0 && number2_b3 % 2 == 0 && number3_b3 % 2 == !0)) {
        kq_3 = 1
    } else {
        kq_3 = 0;
    }
    document.getElementById('ketQuaBai3').innerHTML = ' Có : ' + kq_3 + ' Số Chẳn';

}
// bài 4 :
document.getElementById('btnInKetQua4').onclick = function () {
    var days = document.getElementById('ngay').value;
    var morths = document.getElementById('thang').value;
    var years = document.getElementById('nam').value;
    days = Number(days);
    morths = Number(morths);
    years = Number(years);
    switch (morths) {
        case 1:
            if (days >= 1 && days < 31) {
                days = days + 1;
            } else if (days == 31) {
                days = 01;
                morths = 02
            } else {
                alert('Vui lòng nhập ngày phù hợp')
                days = xx;
            }
            break;
        case 3:
            if (days >= 1 && days < 31) {
                days = days + 1;
            } else if (days == 31) {
                days = 01;
                morths = 04
            } else {
                alert('Vui lòng nhập ngày phù hợp')
                days = xx;
            }
            break;
        case 5:
            if (days >= 1 && days < 31) {
                days = days + 1;
            } else if (days == 31) {
                days = 01;
                morths = 06
            } else {
                alert('Vui lòng nhập ngày phù hợp')
                days = xx;
            }
            break;
        case 7:
            if (days >= 1 && days < 31) {
                days = days + 1;
            } else if (days == 31) {
                days = 01;
                morths = 08
            } else {
                alert('Vui lòng nhập ngày phù hợp')
                days = xx;
            }
            break;
        case 8:
            if (days >= 1 && days < 31) {
                days = days + 1;
            } else if (days == 31) {
                days = 01;
                morths = 09
            } else {
                alert('Vui lòng nhập ngày phù hợp')
                days = xx;
            }
            break;
        case 10:
            if (days >= 1 && days < 31) {
                days = days + 1;
            } else if (days == 31) {
                days = 01;
                morths = 11
            } else {
                alert('Vui lòng nhập ngày phù hợp')
                days = xx;
            }
            break;
        case 12:
            if (days >= 1 && days < 31) {
                days = days + 1;
            } else if (days == 31) {
                days = 01;
                morths = 01
                years = years + 1;
            } else {
                alert('Vui lòng nhập ngày phù hợp')
                days = xx;
            }
            break;
        case 4:
            if (days >= 1 && days < 30) {
                days = days + 1;
            } else if (days == 30) {
                days = 01;
                morths = 05
            } else {
                alert('Vui lòng nhập ngày phù hợp')
                days = xx;
            }
            break;
        case 6:
            if (days >= 1 && days < 30) {
                days = days + 1;
            } else if (days == 30) {
                days = 01;
                morths = 07
            } else {
                alert('Vui lòng nhập ngày phù hợp')
                days = xx;
            }
            break;
        case 9:
            if (days >= 1 && days < 30) {
                days = days + 1;
            } else if (days == 30) {
                days = 01;
                morths = 10
            } else {
                alert('Vui lòng nhập ngày phù hợp')
                days = xx;
            }
            break;
        case 11:
            if (days >= 1 && days < 30) {
                days = days + 1;
            } else if (days == 30) {
                days = 01;
                morths = 12
            } else {
                alert('Vui lòng nhập ngày phù hợp')
                days = xx;
            }
            break;
        case 2:
            if ((years % 4===0 &&years%100 !==0 && years % 400 !==0)||(years%100===0 && years % 400===0)){
                if(days >= 1 && days < 29){
                days = days + 1;
                }else if (days == 29){
                    days = 01;
                    morths = 03;
                }else{
                    alert('Vui lòng nhập ngày phù hợp')
                    days = xx;
                }
            }else{
                if(days >= 1 && days < 28){
                    days = days + 1;
                    }else if (days == 28){
                        days = 01;
                        morths = 03;
                    }else{
                        alert('Vui lòng nhập ngày phù hợp')
                        days = xx;
                    }
            }
            break;
        default : alert('Vui lòng nhập tháng từ 01 đến 12 thôi :)))')
    }

    document.getElementById('ngayKetQua').value = days;
    document.getElementById('thangKetQua').value = morths
    document.getElementById('namKetQua').value = years
}
// bài 5 
var text = $("#doanVanBan");
 var txt = document.getElementById('doanVanBan')
var x = (parseInt(text.css("font-size")));
 document.getElementById('btnTangFont').onclick = function(){

        txt.style.fontSize = x++ +'px';
 }
 document.getElementById('btnGiamFont').onclick = function(){

    txt.style.fontSize = x-- +'px';
 }

 
