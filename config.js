const CONFIG = {
  // FOTO PROFIL (WAJIB direct link gambar)
  profileImage: "https://i.imgur.com/z0kOssK.jpeg",

  // BACKGROUND (WAJIB pakai format url())
  backgroundImage: "https://i.imgur.com/q6TSLfn.jpeg",

  whatsapp: "https://wa.me/628123456789",
  facebook: "https://facebook.com",
  telegram: "https://t.me/username"
};

document.addEventListener("DOMContentLoaded", function () {

  // ✅ SET BACKGROUND (FIX)
  document.body.style.backgroundImage = `url('${CONFIG.backgroundImage}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";

  // ✅ SET PROFILE (FIX)
  const profile = document.querySelector(".profile");
  if (profile) {
    profile.src = CONFIG.profileImage;
  }

  // ✅ SET BUTTON
  document.getElementById("waBtn").href = CONFIG.whatsapp;
  document.getElementById("fbBtn").href = CONFIG.facebook;
  document.getElementById("tgBtn").href = CONFIG.telegram;

});
