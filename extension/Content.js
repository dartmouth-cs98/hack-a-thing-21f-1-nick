let philImages = [
    "https://president.dartmouth.edu/sites/president.prod/files/styles/slide/public/president/images/20170921_phil_hanlon_rg_02721.jpg?itok=d2PxaoE_",
    "https://upload.wikimedia.org/wikipedia/commons/6/67/Philip_J._Hanlon.jpg",
    "https://content.production.cdn.art19.com/images/af/e3/3e/9b/afe33e9b-4199-4591-9a66-7ca8eb6d56e5/0b05dad3a78f0f6516f9196328530bc0763407728e4d81e1e03c819ebfd6cb58c3c3f25a8f6eb62b3ff3d941846e57556c9835793b4535a797f993381e2d0dd3.jpeg",
    "https://president.dartmouth.edu/sites/president.prod/files/styles/profile_portrait/public/president/images/profile_20170921_phil_hanlon_rg_02721.jpg?itok=s7WCBBLL",
    "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/NzwpO5TQjzFgJYzm0RAugVz0U5s=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/QCDCWTFLEII6JLYYPFRLGYFNAM.jpg",
    "https://www.vnews.com/getattachment/261ccd2e-681e-4902-b71f-46cdf168053d/HanlonMichigan-ndb-vn-022120-ph01",
    "https://vtdigger.org/wp-content/uploads/2015/01/Dartmouth-Phil-Hanlon.jpg"
  ];

  const imgs = document.getElementsByTagName("img");
  for (let i = 0; i < imgs.length; i++) {
      const randomImg = Math.floor(Math.random() * philImages.length);
      imgs[i].src = philImages[randomImg];
  }

  const headers = document.getElementsByTagName("h2");
  for (let i = 0; i < headers.length; i++){
      headers[i].innerText = "PHIL PHIL PHIL";
  }