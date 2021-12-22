zd1 = document.getElementById("zdj1");
zd2 = document.getElementById("zdj2");
zd3 = document.getElementById("zdj3");
let a=0 ,b=0,c=0;
function przy1() {
    if (a == 0) {
        zd1.style.transform = "scale(2.0)";
        zd1.style.transition = "transform 0.40s ease";
        a = 1;
    } else {
        zd1.style.transform = "scale(1)";
        zd1.style.transition = "transform 0.40s ease";
        a = 0;
    }
}
function przy2() {
    if (b == 0) {
        zd2.style.transform = "scale(2.0)";
        zd2.style.transition = "transform 0.40s ease";
        b = 1;
    } else {
        zd2.style.transform = "scale(1)";
        zd2.style.transition = "transform 0.40s ease";
        b = 0;
    }
}
function przy3() {
    if (c == 0) {
        zd3.style.transform = "scale(2.0)";
        zd3.style.transition = "transform 0.40s ease";
        c = 1;
    } else {
        zd3.style.transform = "scale(1)";
        zd3.style.transition = "transform 0.40s ease";
        c = 0;
    }
}