
setInterval(() => {
    let t = new Date();
    let a = document.getElementById("time")
    a.innerHTML = "TIME [ " +  t.getHours() + " : " + t.getMinutes() + " : " + t.getSeconds() + " : " + t.getMilliseconds() + " ]";
}, 1);