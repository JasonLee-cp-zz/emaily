const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);
const messageArray = [
  "아잉기모띠데쓰요~",
  "섹스섹스기모찌~",
  "창딲이기모찌",
  "냥이씹덕~",
  "냔ㅇ이 씹덕기모찌~",
  "하악하악",
  "후욱후욱",
  "지지배배",
  "똥똥똥",
  "우르르르를ㄹㄹ글글글글글낄끼끼끼끼끾끾",
  "크를릉크를르르르르르르릉릉릉릉릉릉릉릉릉",
  "올롤ㄹㄹ롤ㄹ로롤롤ㄹㄹㄹㄹ로로롤",
  "아부부붑ㅃ붑뿌붑부붑붑뿌부부벱뿝벱붑뻽붑베부베부벱",
];

for (let i = 0; i < 20; i++) {
  const msg = {
    to: "vhvndtprtm33@gmail.com", // Change to your recipient
    from: "u3543584@connect.hku.hk", // Change to your verified sender
    subject: `${messageArray[Math.floor(Math.random() * messageArray.length)]}`,
    text: `${messageArray[Math.floor(Math.random() * messageArray.length)]}`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
}
