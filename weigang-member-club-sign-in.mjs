#!/usr/bin/env node

import fs from 'node:fs/promises'
import util from 'node:util'
import process from 'node:process'

const {WEIGANG_MEMBER_CLUB_ACCESS_TOKEN: TOKEN} = process.env

async function fetchAndLog() {
  const response = await fetch.apply(this, arguments);
  console.log(response)
  const data = await response.json()
  console.log(data)
  return data
}

async function getSignInActivityId() {
  const data = await fetchAndLog("https://api-member.4008618618.com/v1/mall/signAct/getCurrentSignAct", {
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

  return data.data.signAct.signActId
}

async function signIn() {
  const id = await getSignInActivityId()

  if (!id) {
    return
  }

  await fetchAndLog("https://api-member.4008618618.com/v1/mall/signAct/sign", {
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
    "body": JSON.stringify({actId: id}),
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
}

await signIn()