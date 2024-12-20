#!/usr/bin/env node

import fs from 'node:fs/promises'
import util from 'node:util'
import process from 'node:process'

async function fetchAndLog() {
  const response = await fetch.apply(this, arguments);
  console.log(response)
  const data = await response.text()
  console.log(data)
  return data
}

async function signIn() {
  await fetchAndLog("https://api.m.jd.com/signTask/doSignTask?g_ty=ls&g_tk=1595021830", {
  "headers": {
"content-length": "1019",
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090c11)XWEB/11529",
"content-type": "application/x-www-form-urlencoded",
"xweb_xhr": "1",
"x-rp-client": "mini_2.1.0",
"x-referer-package": "wx91d27dbf599dff74",
"wqreferer": "http://wq.jd.com/wxapp/pages/marketing/glb/glb/index",
"x-referer-page": "/pages/marketing/glb/glb/index",
"accept": "*/*",
"sec-fetch-site": "cross-site",
"sec-fetch-mode": "cors",
"sec-fetch-dest": "empty",
"referer": "https://servicewechat.com/wx91d27dbf599dff74/778/page-frame.html",
"accept-encoding": "gzip, deflate, br",
"accept-language": "zh-CN,zh;q=0.9",
"cookie": process.env.JINGDONG_COOKIES
  },
  "body": process.env.JINGDONG_SIGN_IN_BODY,
  "method": "POST"
});
;
}

await signIn()