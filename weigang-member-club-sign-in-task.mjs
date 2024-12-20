#!/usr/bin/env node

import fs from 'node:fs/promises'
import util from 'node:util'
import process from 'node:process'

const LOG_FILE = new URL(`./${new Date().toISOString().slice(0,10)}.log`, import.meta.url)
const {WEIGANG_MEMBER_CLUB_ACCESS_TOKEN: TOKEN} = process.env

async function getSignInActivity() {
  const response = await fetch("https://api-member.4008618618.com/v1/mall/signAct/getCurrentSignAct", {
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
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  });

  const data = await response.json()

  return data.data
}

async function signIn() {
  const activity = await getSignInActivity()

  const response = await fetch("https://api-member.4008618618.com/v1/mall/signAct/sign", {
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
    "body": JSON.stringify({actId: activity.signAct.signActId}),
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });

  const data = await response.json()

  return {response, activity, data}
}

console.log(await signIn())