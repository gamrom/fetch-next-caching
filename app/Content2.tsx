'use client';
import { useState, useEffect } from "react";

export const Content2 = () => {
  const [names, setNames] = useState([]);


  useEffect(() => {
    fetch('/api/apple')
      .then(response => response.json())
      .then(data => setNames(data.names));
  }, []);

  console.log("names2", names)

  return (
    names?.map((nnn: any, index: number) => {
      return (
        <div key={index}>
          {nnn}
        </div>
      )
    }))
}

