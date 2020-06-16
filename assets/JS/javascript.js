createImage();
createAdmin();

function createImage() {
    //if(localStorage.getItem('image') === null) {
        var imageArray = [
            {imageId: 10048, src: 'img/album/10048.jpg'},
            {imageId: 10047, src: 'img/album/10047.jpg'},
            {imageId: 10046, src: 'img/album/10046.jpg'},
            {imageId: 10045, src: 'img/album/10045.jpg'},
            {imageId: 10044, src: 'img/album/10044.jpg'},
            {imageId: 10043, src: 'img/album/10043.jpg'},
            {imageId: 10042, src: 'img/album/10042.jpg'},
            {imageId: 10041, src: 'img/album/10041.jpg'},
            {imageId: 10040, src: 'img/album/10040.jpg'},
            {imageId: 10039, src: 'img/album/10039.jpg'},
            {imageId: 10038, src: 'img/album/10038.jpg'},
            {imageId: 10037, src: 'img/album/10037.jpg'},
            {imageId: 10036, src: 'img/album/10036.jpg'},
            {imageId: 10035, src: 'img/album/10035.jpg'},
            {imageId: 10034, src: 'img/album/10034.jpg'},
            {imageId: 10033, src: 'img/album/10033.jpg'},
            {imageId: 10032, src: 'img/album/10032.jpg'},
            {imageId: 10031, src: 'img/album/10031.jpg'},
            {imageId: 10030, src: 'img/album/10030.jpg'},
            {imageId: 10029, src: 'img/album/10029.jpg'},
            {imageId: 10028, src: 'img/album/10028.jpg'},
            {imageId: 10027, src: 'img/album/10027.jpg'},
            {imageId: 10026, src: 'img/album/10026.jpg'},
            {imageId: 10025, src: 'img/album/10025.jpg'},
            {imageId: 10024, src: 'img/album/10024.jpg'},
            {imageId: 10023, src: 'img/album/10023.jpg'},
            {imageId: 10022, src: 'img/album/10022.jpg'},
            {imageId: 10021, src: 'img/album/10021.jpg'},
            {imageId: 10020, src: 'img/album/10020.jpg'},
            {imageId: 10019, src: 'img/album/10019.jpg'},
            {imageId: 10018, src: 'img/album/10018.jpg'},
            {imageId: 10017, src: 'img/album/10017.jpg'},
            {imageId: 10016, src: 'img/album/10016.jpg'},
            {imageId: 10015, src: 'img/album/10015.jpg'},
            {imageId: 10014, src: 'img/album/10014.jpg'},
            {imageId: 10013, src: 'img/album/10013.jpg'},
            {imageId: 10012, src: 'img/album/10012.jpg'},
            {imageId: 10011, src: 'img/album/10011.jpg'},
            {imageId: 10010, src: 'img/album/10010.jpg'},
            {imageId: 10009, src: 'img/album/10009.jpg'},
            {imageId: 10008, src: 'img/album/10008.jpg'},
            {imageId: 10007, src: 'img/album/10007.jpg'},
            {imageId: 10006, src: 'img/album/10006.jpg'},
            {imageId: 10005, src: 'img/album/10005.jpg'},
            {imageId: 10004, src: 'img/album/10004.jpg'},
            {imageId: 10003, src: 'img/album/10003.jpg'},
            {imageId: 10002, src: 'img/album/10002.jpg'},
            {imageId: 10001, src: 'img/album/10001.jpg'},
        ];

        localStorage.setItem('image', JSON.stringify(imageArray));
    //}
}

function showImage() {
    var url = document.location.href;
    var temp = url.split('?');
    var s = '';

    var imageArray = JSON.parse(localStorage.getItem('image'));

    if(temp[1] == '' || temp[1] == undefined || temp[1].search('all') == 0) {
        if(temp[1] == '' || temp[1] == undefined) {
            temp = 'all&0';
        } else {
            temp = temp[1];
        }

        var temp2 = temp.split('&');
        var position = temp2[1];
        var pageNumber = 0, count = 0;

        for(var i = position; i < imageArray.length; i++) {
            s += '<div class="container-img__list-card" onClick="showImageFull('+ imageArray[i].imageId +')" >' +
                '<img src=" ' + imageArray[i].src + ' ">' +
                '</div>';

                count++;
                if(count == 20)
                    break;
        }

        pageNumber = Math.ceil(imageArray.length / 20);
        var link = '';

        for(var i = 1; i <= pageNumber; i++) {
            position = (i - 1) * 20;
            var a = '<a href="index.html?all&' + position + '">' + i + '</a>';
            link += '<div class="container-img__pageNumber">' + a + '</div>';
        }
        document.getElementById('container-img__pageNumber').innerHTML = link;
    } 
    document.getElementById('container-img__list').innerHTML = s;
}

function showImageFull(imageId) {
    document.getElementById('container-imgFull').style.display = 'block';
    var imageArray = JSON.parse(localStorage.getItem('image'));

    for(var i = 0; i < imageArray.length; i++) {
        if(imageArray[i].imageId == imageId) {
            document.getElementById('container-imgFull__img').src = imageArray[i].src;
            document.getElementById('container-imgFull__show').style.display = 'block';
            document.getElementById('container-imgFull').style.zIndex = '1000';
            document.getElementById('container-imgFull__show').style.zIndex = '1000';
        }
    }
}

function closeImage() {
    document.getElementById('container-imgFull').style.display = 'none';
    document.getElementById('container-imgFull').style.zIndex = '-3';
    document.getElementById('container-imgFull__show').style.display = 'none';
}

function createAdmin() {
    if(localStorage.getItem('admin') === null) {
        var adminArray = [];
        var admin = {
            username: 'hthu2505',
            password: 'hthu2505',
            fullname: 'Huỳnh Thư',
            birthday: '25-05-2000',
            dateCreate: '20-03-2020'
        };

        var admin1 = {
            username: 'bacdong',
            password: 'bacdong',
            fullname: 'Bắc Đông',
            birthday: '04-10-2000',
            dateCreate: '20-03-2020'
        };

        adminArray.push(admin);
        adminArray.push(admin1);
        // adminArray.push(admin1);
        localStorage.setItem('admin',JSON.stringify(adminArray));
    }
    
}


function showAdminLogin() {
    //var admin = JSON.parse(localStorage.getItem('admin'));
    if(localStorage.getItem('adminLogin') === null) {
        location.assign('login.html');
    }
    var admin = JSON.parse(localStorage.getItem('adminLogin'));
	document.getElementById('auth-name').innerHTML= admin.fullname +'<button title="Đăng xuất" class="button" onclick="logout();">LOGOUT</button>';
}

function logout(url) {
    localStorage.removeItem('adminLogin');
    location.assign('login.html');
}

function login() {
    var username = document.getElementById('input').value;
    var password = document.getElementById('password').value;

    var adminArray = JSON.parse(localStorage.getItem('admin'));
    for(var i = 0; i < adminArray.length; i++) {
        if(username == adminArray[i].username) {
            if(password == adminArray[i].password) {
                localStorage.setItem('adminLogin',JSON.stringify(adminArray[i]));
                location.assign('index.html');
                alert('Bạn đã đăng nhập thành công!');
                document.getElementById('error1').style.display = 'none';
                document.getElementById('error2').style.display = 'none';
                return true;
            } else {
                if(password != adminArray[i].password) {
                    document.getElementById('error2').style.display = 'block';
                    document.getElementById('error1').style.display = 'none';
                    document.getElementById('password').focus();
                    return false;
                }
            }
        } else {
            if(username != adminArray[i].username) {
                document.getElementById('error1').style.display = 'block';
                document.getElementById('error2').style.display = 'none';
                document.getElementById('input').focus();
                continue;
            }
        }
    }
}