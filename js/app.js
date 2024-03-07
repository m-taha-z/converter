let Receipt = prompt(
  "چه ارزی را می خوای به ریال تبدیل کنی (D:Dollar,L:Lear,P:Pound,B:Bitcoin,S:Shiba)"
);
let m = Number(prompt(" چقدر " + Receipt + " داری "));
function conversion(n) {
  return m * n;
}
switch (Receipt) {
  case "D":
    let D = prompt("قیمت دلار =");
    alert(conversion(D));
    break;
  case "L":
    let L = prompt("قیمت لیر =");
    alert(conversion(L));
    break;
  case "P":
    let P = prompt("قیمت پوند =");
    alert(conversion(P));
    break;
  case "B":
    let B = prompt("قیمت بیت کویین =");
    alert(conversion(P));
    break;
  case "S":
    let S = prompt("قیمت شیبا =");
    alert(conversion(S));
    break;
  default:
}











//این کد مال طاهااست
//این کد مال طاهااست