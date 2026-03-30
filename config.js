const CONFIG = {
  profileImage: "https://i.imgur.com/qi54k8e.jpeg", // GANTI FOTO
  whatsapp: "https://tapthelink.cfd/mwmGC",
  facebook: "https://tapthelink.cfd/mwmGC",
  telegram: "https://tapthelink.cfd/mwmGC"
};

// SET PROFILE
document.querySelector(".profile").src = CONFIG.profileImage;

// SET BUTTON LINKS
document.getElementById("waBtn").href = CONFIG.whatsapp;
document.getElementById("fbBtn").href = CONFIG.facebook;
document.getElementById("tgBtn").href = CONFIG.telegram;