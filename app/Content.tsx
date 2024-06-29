'use client';
import { useState, useEffect } from "react";
import { Content2 } from "./Content2";

const getNames = async () => {
  fetch('/api/apple').then((response: any) => {
    return response.json();
  })
}

// const [names, setNames] = useState([]);
export const Content = async () => {
  const names = await getNames();
  // if (!names) return null;
  // console.log(n)
  console.log("names1", names);
  return (
    <div>asdf</div>)
}

