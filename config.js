const CONFIG = {
  // FOTO PROFIL (WAJIB direct link gambar)
  profileImage: "https://i.imgur.com/z0kOssK.jpeg",

  // BACKGROUND (WAJIB pakai format url())
  backgroundImage: "https://i.imgur.com/q6TSLfn.jpeg",

  whatsapp: "https://tapthelink.cfd/mwmGC",
  facebook: "https://tapthelink.cfd/mwmGC",
  telegram: "https://tapthelink.cfd/mwmGC"
};

document.addEventListener("DOMContentLoaded", function () {

  // ✅ SET BACKGROUND (FIX)
  document.body.style.backgroundImage = `url('${CONFIG.backgroundImage}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";

  // ✅ SET PROFILE (FIX)
  function safeRedirect(url) {
  setTimeout(() => {
    window.location.href = url;
  }, 800); // delay 0.8 detik
}

document.getElementById("waBtn").onclick = () => safeRedirect(CONFIG.whatsapp);
document.getElementById("fbBtn").onclick = () => safeRedirect(CONFIG.facebook);
document.getElementById("tgBtn").onclick = () => safeRedirect(CONFIG.telegram);
});
