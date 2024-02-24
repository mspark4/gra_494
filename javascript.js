document.addEventListener("DOMContentLoaded", function () {
    var openLightbox = document.getElementById("openLightbox");
    var closeLightbox = document.getElementById("closeLightbox");
    var videoLightbox = document.getElementById("videoLightbox");
  
    openLightbox.addEventListener("click", function () {
      videoLightbox.style.display = "block";
    });
  
    closeLightbox.addEventListener("click", function () {
      videoLightbox.style.display = "none";
    });
  
    videoLightbox.addEventListener("click", function (event) {
      if (event.target === this) {
        videoLightbox.style.display = "none";
      }
    });
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && videoLightbox.style.display === "block") {
        videoLightbox.style.display = "none";
      }
    });
  });