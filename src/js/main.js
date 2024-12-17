import "../scss/main.scss";

function showMyAd() {
  // Play video
}
if (mraid.getState() === "loading") {
  mraid.addEventListener("ready", showMyAd);
} else {
  showMyAd();
}
