const domain = "http://localhost:3000/";

function registerUser() {
    const xhttp = new XMLHttpRequest();
    const formData = new FormData(document.getElementById("register-form"));
    const obj = {};
    formData.forEach((value, key) => (obj[key] = value));
    const jsonData = JSON.stringify(obj);

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                location.href = "/";
            }
            else {

            }
        }
    };
    console.log(jsonData);
    xhttp.open("POST", domain + "register");
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.send(jsonData);

    return false;
}

function loginUser() {
    const xhttp = new XMLHttpRequest();
    const formData = new FormData(document.getElementById("login-form"));
    const obj = {};
    formData.forEach((value, key) => (obj[key] = value));
    const jsonData = JSON.stringify(obj);

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                location.href = '/user'
            }
            else {

            }
        }
    };
    console.log(jsonData);
    xhttp.open("POST", domain + "login");
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.send(jsonData);

    return false;
}

function createPost() {
    const xhttp = new XMLHttpRequest();
    const formData = new FormData(document.getElementById("post-form"));
    const obj = {};
    formData.forEach((value, key) => (obj[key] = value));
    const jsonData = JSON.stringify(obj);

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                location.href = "/user/post/list";
            }
            else {

            }
        }
    };
    console.log(jsonData);
    xhttp.open("POST", domain + "user/post/new");
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.send(jsonData);

    return false;
}

function deletePost(postid) {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                location.href = "/user/post/list";
            }
            else {

            }
        }
    };

    xhttp.open("DELETE", domain + "user/post/" + postid);
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.send();

    return false;
}

function likePost(postid) {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                location.href = '/user/post/other/' + postid;
            }
            else {

            }
        }
    };

    xhttp.open("POST", domain + "user/post/like/" + postid);
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.send();

    return false;
}