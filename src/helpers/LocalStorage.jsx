import React, { useState } from "react";

export function setStorage(token) {
  localStorage.setItem("token", JSON.stringify(token));
}

export function readStorage() {
  const token = JSON.parse(localStorage.getItem("token"));
  return token;
}

export function clearStorage() {
  localStorage.clear();
}
