function generateQR() {
  let text = document.getElementById("text-input").value;

  document.getElementById("qr-box").innerHTML = "";

  if (!text.trim()) {
    alert("Please enter some text!");
    return;
  }

  new QRCode(document.getElementById("qr-box"), {
    text: text,
    width: 200,
    height: 200,
    colorDark: "#000000",   
    colorLight: "#ffffff"   
  });
}
