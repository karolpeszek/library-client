var uri = window.location.pathname.substr(1); var arr = uri.split('/'); var title = decodeURI(arr[0]); var url = ""; var bread = '<li><strong><a href=/ >Home</a></strong></li>'; var cont = 1; var lastUri = '/'; arr.forEach(function(value) { url = url + '/' + value; if (value != '') { bread += "<li><a href='" + url + "'>" + decodeURI(value) + "</a></li>"; lastUri = decodeURI(value); } cont++; }); document.getElementById("breadcrumb").innerHTML = bread;
