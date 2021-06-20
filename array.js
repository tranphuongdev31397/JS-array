
var btnAdd = document.querySelector('#btnAdd')
var showAr = document.querySelector('#showAr')
var btnReset = document.querySelector('#btnReset')
var btnDemSoDuong = document.querySelector('#btnDemSoDuong')
var showKQ = document.querySelector('#showKQ')
var getEle = function (id) {
    return document.getElementById(id)
}
// Hàm đếm số dương trong mảng
var demSoDuong = function (Ar) {
    var countSoDuong = 0
    for (var i1 = 0; i1 < Ar.length; i1++) {
        Ar[i1] >= 0 ? countSoDuong += 1 : countSoDuong = countSoDuong
    }
    Ar.length === 0 ? alert('Mảng chưa có giá trị, vui lòng điền vào') : ' '
    return countSoDuong
}
//Hàm tổng số dương trong mảng
var tongSoDuong = function (Ar) {
    var sumSoDuong = 0
    for (var i2 = 0; i2 < Ar.length; i2++) {
        Ar[i2] >= 0 ? sumSoDuong += Number(Ar[i2]) : sumSoDuong = sumSoDuong
    }
    Ar.length === 0 ? alert('Mảng chưa có giá trị, vui lòng điền vào') : ' '
    return sumSoDuong
}
// Hàm tìm số nhỏ nhất trong mảng
var soNhoNhat = function (Ar) {
    var minAr = Ar[0]
    for (var i3 = 1; i3 < Ar.length; i3++) {
        Ar[i3] < minAr ? minAr = Ar[i3] : minAr = minAr
    }
    Ar.length === 0 ? alert('Mảng chưa có giá trị, vui lòng điền vào') : ' '
    return minAr
}
// Hàm tìm số dương nhỏ nhất trong mảng
var soDuongNhoNhat = function (Ar) {
    var minDuongAr = 0
    for (var i4 = 0; i4 < Ar.length; i4++) {
        if ((minDuongAr == 0 || minDuongAr > Ar[i4]) && Ar[i4] >= 0) {
            minDuongAr = Ar[i4]
        }
    }
    Ar.length === 0 ? alert('Mảng chưa có giá trị, vui lòng điền vào') : ' '
    return minDuongAr
}
//Tìm số chẵn cuối cùng có trong mảng:
var soChanCuoiCung = function (Ar) {
    var mangSoChan = []
    for (var i5 = 0; i5 < Ar.length; i5++) {
        Ar[i5] % 2 == 0 ? mangSoChan.push(Ar[i5]) : mangSoChan = mangSoChan
    }
    var soChan = 0

    mangSoChan.length - 1 === -1 ? soChan = -1 : soChan = mangSoChan[mangSoChan.length - 1]
    Ar.length === 0 ? alert('Mảng chưa có giá trị, vui lòng điền vào') : ' '
    return soChan
}
//Hàm đổi vị trí trong mảng
var thayDoiViTri = function (Ar) {
    mangSauDoiCho = ''
    var viTri1 = Number(getEle('viTri1').value)
    var viTri2 = Number(getEle('viTri2').value)
    if (Ar.length === 0) {
        return alert('Mảng chưa có giá trị, vui lòng điền vào')
    } else {
        if (viTri1 < 0 || viTri2 < 0 || viTri2 > Ar.length - 1) {
            alert('Vui lòng điền số theo thứ tự của mảng')
        } else {
            var Ar1 = Ar
            var mangViTri1 = Ar1.slice(viTri1, viTri1 + 1);
            var mangViTri2 = Ar1.slice(viTri2, viTri2 + 1)
            Ar1.splice(viTri1, 1, mangViTri2)
            Ar1.splice(viTri2, 1, mangViTri1)
            return mangSauDoiCho = Ar1.join(', ')
        }
    }
}
//Hàm sắp xếp mảng
var sapXepMang = function (Ar) {
    var Ar2 = Ar
    var mangDaSapXep = Ar2.sort(function (a, b) {
        if (a > b) return 1
        if (a < b) return -1;
        return 0;
    })
    Ar.length === 0 ? alert('Mảng chưa có giá trị, vui lòng điền vào') : ' '
    return mangDaSapXep.join(', ')
}
//Hàm kiểm tra số nguyên tố 
var kiemTraSoNguyenTo = function (soKtra) {
    var soNguyenTo = true
    if (soKtra < 2) {
        return soNguyenTo = false;
    } else if (soKtra == 2) {
        return soNguyenTo = true;
    } else if (soKtra % 2 == 0) {
        return soNguyenTo = false
    }
    else {
        for (var j = 3; j < soKtra - 1; j += 2) {
            if (soKtra % j == 0) {
                return soNguyenTo = false;
            }
        }
    }
    Ar.length === 0 ? alert('Mảng chưa có giá trị, vui lòng điền vào') : ' '
    return soNguyenTo
}

//Hàm tìm số nguyên tố trong mảng
var timSoNguyenTo = function (Ar) {
    mangSoNguyenTo = [];
    Ar.length === 0 ? alert('Mảng chưa có giá trị, vui lòng điền vào') : ' '
    for (var i6 = 0; i6 < Ar.length; i6++) {
        var _soNguyenTo = kiemTraSoNguyenTo(Ar[i6])
        if (_soNguyenTo) {
            mangSoNguyenTo.push(Ar[i6])
        }
    } if (mangSoNguyenTo.length == 0) {
        mangSoNguyenTo.push(-1);
        return mangSoNguyenTo[0]
    } else {
        return mangSoNguyenTo[0]
    }
}
//Hàm tìm số nguyên trong mảng số thực
var timSoNguyen = function (mangSoThuc) {
    mangSoNguyen = []
    for (var i7 = 0; i7 < mangSoThuc.length; i7++) {
        mangSoThuc[i7] !== Number(parseInt(mangSoThuc[i7])) ? mangSoNguyen = mangSoNguyen : mangSoNguyen.push(mangSoThuc[i7])
    } if (mangSoThuc.length == 0) {
        return alert('Vui lòng điền vào mảng số thực')
    } else if (mangSoNguyen.length == 0) {
        return alert('Không có số nguyên nào trong mảng')
    }
    return mangSoNguyen.length

}
//hàm so sánh số lượng số dương và số âm
var soSanh = function (Ar) {

    var soDuong = Ar.filter(function (n) {
        return n > 0
    })
    var soAm = Ar.filter(function (m) {
        return m < 0
    })
    if (Ar.length == 0) {
        return alert('Vui lòng điền vào mảng')
    }
    else if (soDuong.length > soAm.length) {
        return alert('Số lượng số dương lớn hơn số âm')
    } else if (soDuong.length < soAm.length) {
        return alert('Số lượng số âm lớn hơn số dương')
    } else if (soDuong.length == soAm.length) {
        return alert('Số lượng số âm và số dương bằng nhau')
    }
}
//Tạo  Mảng số thực
var mangSoThuc = []
var btnAddR = getEle('btnAddR')
btnAddR.onclick = function () {
    var ipArrR = Number(document.querySelector('#ipArrR').value)
    // var ArrayShow = ''
    if (ipArrR !== Number(ipArrR) || ipArrR === " ") {
        alert('Vui lòng nhập số thực')
    } else {
        mangSoThuc.push(ipArrR)
    }
    getEle('mangSoThuc').innerHTML = 'Mảng số thực vừa nhập: ' + mangSoThuc.join(', ')
    return mangSoThuc
}



//Tạo mảng số nguyên
var Ar = []
btnAdd.onclick = function () {
    var ipAr = Number(document.querySelector('#ipAr').value)
    // var ArrayShow = ''
    if (ipAr !== Number(parseInt(ipAr)) || ipAr === ' ') {
        alert('Vui lòng nhập số nguyên')
    } else {
        Ar.push(ipAr)
    }
    var ArrShow = Ar
    ArrayShow = ArrShow.join("  ")
    showAr.innerHTML = 'Mảng số nguyên của bạn: ' + ArrayShow
    return Ar
}



//Đếm số dương trong mảng
var ketQuaB1 = function () {
    var _countSoDuong = demSoDuong(Ar)
    showKQ.innerHTML = _countSoDuong
}
btnDemSoDuong.addEventListener('click', ketQuaB1)
//Tổng số dương trong mảng
var ketQuaB2 = function () {
    var _sumSoDuong = tongSoDuong(Ar)
    getEle('showKQB2').innerHTML = _sumSoDuong
}
getEle('btnTongSoDuong').addEventListener('click', ketQuaB2)
//Số nhỏ nhất trong mảng
var ketQuaB3 = function () {
    var _minAr = soNhoNhat(Ar)
    getEle('showKQB3').innerHTML = _minAr;
}
getEle('btnSoNhoNhat').addEventListener('click', ketQuaB3)
//Số dương nhỏ nhất
var ketQuaB4 = function () {
    var _minDuongAr = soDuongNhoNhat(Ar)
    getEle('showKQB4').innerHTML = _minDuongAr;
}
getEle('btnSoDuongNhoNhat').addEventListener('click', ketQuaB4);
//Số chẵn cuối cùng
var ketQuaB5 = function () {
    var _soChanCuoiCung = soChanCuoiCung(Ar)
    getEle('showKQB5').innerHTML = _soChanCuoiCung
}
getEle('btnSoChanCuoiCung').addEventListener('click', ketQuaB5)
//Đổi chỗ vị trí trong mảng
var ketQuaB6 = function () {
    var _doiCho = thayDoiViTri(Ar)
    getEle('showKQB6').innerHTML = _doiCho
}
getEle('btnDoiCho').addEventListener('click', ketQuaB6)
//Sắp xếp mảng
var ketQuaB7 = function () {
    var _sapXep = sapXepMang(Ar)
    getEle('showKQB7').innerHTML = _sapXep
}
getEle('btnSapXep').addEventListener('click', ketQuaB7)
//Hàm tìm số nguyên tố đầu tiên trong mảng
var ketQuaB8 = function () {
    var _timSoNguyenTo = timSoNguyenTo(Ar)
    getEle('showKQB8').innerHTML = _timSoNguyenTo
}
getEle('btnSoNguyenTo').addEventListener('click', ketQuaB8)
//Tìm số nguyên trong mảng số thực
var ketQuaB9 = function () {
    var _timSoNguyen = timSoNguyen(mangSoThuc)
    getEle('showKQB9').innerHTML = 'Số nguyên có trong mảng: ' + _timSoNguyen
}

getEle('btnDemSoNguyen').addEventListener('click', ketQuaB9)
//So sánh số âm và số dương
var ketQuaB10 = function () {
    var _soSanh = soSanh(Ar)
    getEle('showKQB10') = _soSanh
}

getEle('btnSoSanh').addEventListener('click', ketQuaB10)
