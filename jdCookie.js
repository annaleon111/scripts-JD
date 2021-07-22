/*
此文件为Node.js专用。其他用户请忽略
 */
//{"lsid":"xjja8jz70xjpiypnxlmts7rkt4k9tnlq751go0nox7df5332","pwdt_id":"jd_5ddec7b9a15c1","s_key":"AAJg-Zp7ADAAwiE1Fo3toxUbkKKBg3jrsLdUZnvFwIndXFjUG9uV7wlNzSVaHms8AvMkMv9-gRo","pt_pin":"jd_5ddec7b9a15c1","lstoken":"l9lchqdx","okl_token":"re22mhgz","pt_token":"zk2m5g3i","s_pin":"jd_5ddec7b9a15c1","guid":"f65e54d6557d9aa4453f98b56f2edaa0a56cafb2b17fda62352fa440dd038394","TrackerID":"xGqxz1oRgsGFk4lvfiNySUhptZTJoH6jacnkVY8c9ss4JAie3rDttMSkgIesEhH0w5PhteqKKfvYNueRCw8GkDqe5HjxgEbv7Caohmez1iO1sN8WbRMxZ_H93Oot6EYxQpw3PhW7f8zwvy5AEW4WiQ","pt_key":"AAJg-Zp7ADAg4XT85trX328d0WVU7HUg4E0Hf7MbuMCQxpszNOYM4Nz2TLnMu7dxGjMCnK278FM","lang":"chs"}
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  '',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  '',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = process.env.JD_COOKIE.split();
  }
  console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
