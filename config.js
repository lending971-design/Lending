const CONFIG = {
  profileImage: "https://i.imgur.com/6VBx3io.jpg",
  backgroundImage: "https://i.imgur.com/3ZQ3Z6F.jpg",

  whatsapp: "https://wa.me/628123456789",
  facebook: "https://facebook.com",
  telegram: "https://t.me/username"
};

document.addEventListener("DOMContentLoaded", function () {

  // BACKGROUND
  document.body.style.backgroundImage = `url('${CONFIG.backgroundImage}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";

  // PROFILE
  const profile = document.querySelector(".profile");
  if (profile) profile.src = CONFIG.profileImage;

  // SAFE REDIRECT (ANTI BLOK)
  function safeRedirect(url) {
    setTimeout(() => {
      window.location.href = url;
    }, 800);
  }

  document.getElementById("waBtn").onclick = (e) => {
    e.preventDefault();
    safeRedirect(CONFIG.whatsapp);
  };

  document.getElementById("fbBtn").onclick = (e) => {
    e.preventDefault();
    safeRedirect(CONFIG.facebook);
  };

  document.getElementById("tgBtn").onclick = (e) => {
    e.preventDefault();
    safeRedirect(CONFIG.telegram);
  };

});
