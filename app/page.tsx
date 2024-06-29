import { Content } from "./Content";

// async function getNames() {
//   const res = await fetch('http://localhost:3000/api/apple')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }


export default async function Home() {
  // const names = await getNames();
  return (
    <Content />
  );
}
