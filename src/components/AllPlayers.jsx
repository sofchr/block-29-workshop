import fetchAllPuppies from "../API/index";
import { useEffect, useState } from "react";

export default function AllPlayers() {
  const [puppyData, setPuppyData] = useState([]);
  async function makePuppiesUseful() {
    let puppyArray = await fetchAllPuppies();
    setPuppyData(puppyArray);
  }
  useEffect(() => {
    makePuppiesUseful();
  }, []);

  console.log(puppyData);

  return puppyData.map((puppy) => {
    return (
      <div key={puppy.id}>
        <h4>ID: {puppy.id}</h4>
        <h4>Name: {puppy.name}</h4>
        <h4>Breed: {puppy.breed}</h4>
        <img src={puppy.imageUrl} />
      </div>
    );
  });
}
