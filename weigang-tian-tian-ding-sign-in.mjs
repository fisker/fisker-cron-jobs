#!/usr/bin/env node

import fs from 'node:fs/promises'
import util from 'node:util'
import process from 'node:process'

const LOG_FILE = new URL(`./${new Date().toISOString().slice(0,10)}.log`, import.meta.url)
const {WEIGANG_TIAN_TIAN_DING_ACCESS_TOKEN: TOKEN} = process.env

async function fetchAndLog() {
  const response = await fetch.apply(this, arguments);
  console.log(response)
  const data = await response.json()
  console.log(data)
  return data
}

async function signIn() {
  await fetchAndLog("https://ttdprod-mp.4008618618.com/mallbusiness/ums/common/toSignNow", {
    "headers": {
      "accept": "*/*",
      "authorization": `Bearer ${TOKEN}`,
      "cache-control": "no-cache",
      "content-type": "application/json",
      "pragma": "no-cache",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "source": "normal"
    },
    "referrer": "https://servicewechat.com/wx7fbe0786a008e112/devtools/page-frame.html",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  });
}

await signIn()