import React, { useState } from "react";
import axios from "axios";
import { readStorage } from "./LocalStorage";

const baseUrl = "https://ms-discord-upy5mhs63a-rj.a.run.app";

export async function postAPI(values) {
  const tokenBack = await axios
    .post(`${baseUrl}/auth/login`, values)
    .then((res) => res.data.token);
  return tokenBack;
}

export async function checkAuth() {
  const token = readStorage();
  let tokenInfo;

  if (token) {
    const tokenCheck = await axios
      .get(`${baseUrl}/auth/check`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        tokenInfo = res.data;
      });
  }

  return await tokenInfo;
}
