// Images asset
const heroImages = {
  1: "https://drive.google.com/uc?id=1peeKDXR-mq0Q715llrb4kGr_2Uox78o4",
  2: "https://drive.google.com/uc?id=1pLGKIv_pRPXZOSiZcCI-lBdkI0I60xH0",
  3: "https://drive.google.com/uc?id=1fwFaVW4k6lXJEfwsF9Ua4emC2VqILUhJ",
  4: "https://drive.google.com/uc?id=1xcOkKbEq2mN2hCzPviWhxzPZeMm9ucdD",
  5: "https://drive.google.com/uc?id=1w6AF9hqtvjMnrCkbQoK0gustUzqW7M8Q",
  6: "https://drive.google.com/uc?id=1OYYm2o7s7qQYOlhqVfBn6z8t3Sq3z6d0",
  7: "https://drive.google.com/uc?id=13wYn4f8COmIIuhkUWM2CEsCXgZISrzgh",
  8: "https://drive.google.com/uc?id=1cfUKF8srF3_k1zwhB_B-C-FI9fRuY-_u",
  9: "https://drive.google.com/uc?id=11jJWFTVA5fFbkmQVQiyDHSSlU0unzocj",
  10: "https://drive.google.com/uc?id=15hxdi0QwRw_PRJCh7DRiJWxdaSv90EtO",
  11: "https://drive.google.com/uc?id=1p91cQIbqMRwpLGd8G9Kj8DPVSkRLu6mW",
  12: "https://drive.google.com/uc?id=1C6Y4VMnwgnkLKRY2U7mK0hZmswhJz3eY",
  13: "https://drive.google.com/uc?id=1Ws214_fljhMWDdqGv5gGIsrzlfAoYFkJ",
  14: "https://drive.google.com/uc?id=1eAXcSri0f8W1tgbxrikKdGYoyFJI_BFW",
  15: "https://drive.google.com/uc?id=1u1ZUYmVxxJVBXsjQdpgh7B_KzkfKMW8K",
  16: "https://drive.google.com/uc?id=1Pwu2d0rANXLeXxkihZm8Xa2T4xJ-lxnm",
  17: "https://drive.google.com/uc?id=1LEnHyi9ZCkWQW56afjrXavN49HZRfHvi",
  18: "https://drive.google.com/uc?id=1Xm4dz3rjVy4cHbHUwJT6exXiDUCEJqlw",
  19: "https://drive.google.com/uc?id=103sdCMIR0zhIEpPmRp3KCzUjA4YBT0Fd",
  20: "https://drive.google.com/uc?id=1lO0rj2f0PyRmqYQQpCzgbX9F4m1FVWQ6",
  22: "https://drive.google.com/uc?id=1tTyyvbe-HwrPZXcDD9l0zUZubvf4598J",
  21: "https://drive.google.com/uc?id=1wwGLaHexFP498lnpN_OZ0dK49f4pO2NM",
};

// Global variable to control the scrolling behavior
const step = 30; // For each 30px, change an image
function trackScrollPosition() {
  const y = window.scrollY;
  const label = Math.min(Math.floor(y / 30) + 1, 20);
  const imageToUse = heroImages[label];
  // Change the background image
  $('.hero-image-container').css('background-image', `url('${imageToUse}')`);
}
$(document).ready(() => {
  $(window).scroll(() => {
    trackScrollPosition();
  })
})
