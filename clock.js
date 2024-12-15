let userName = prompt("Lütfen adınızı giriniz:");
if (!userName || userName.trim() === "") {
    alert("Bir isim girmediginiz icin misafir olarak devam edeceksiniz")
    userName = "Misafir";
}
document.getElementById("myName").textContent = userName;

function showTime() {
    const now = new Date();
    const days = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi"
    ];
    const dayName = days[now.getDay()];
    const time = now.toLocaleTimeString("tr-TR");

    document.getElementById("myClock").innerHTML = `${time} ${dayName}`;
}

setInterval(showTime, 1000);
showTime();