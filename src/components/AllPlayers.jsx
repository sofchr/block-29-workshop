import { useNavigate } from "react-router-dom";

export default function AllPlayers({ players }) {
  const navigate = useNavigate();

  return (
    <h1>
      {players.map((player) => {
        return (
          <>
            <div key={player.id}>
              <p>{player.id}</p>
              <h2>{player.name}</h2>
              <p>{player.breed}</p>

              <img src={player.imageUrl} alt={player.name} />
              <br />
              <button
                key={player.id}
                onClick={() => navigate(`players/${player.id}`)}
              >
                See Details
              </button>
            </div>

            <div>
              <h2>{player.name}</h2>
            </div>
          </>
        );
      })}
    </h1>
  );
}

// import fetchAllPuppies from "../API";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// export default function AllPlayers() {
//   const [puppyData, setPuppyData] = useState([]);

//   async function makePuppiesUseful() {
//     let puppyArray = await fetchAllPuppies();
//     setPuppyData(puppyArray);
//   }

//   useEffect(() => {
//     makePuppiesUseful();
//   }, []);
//   const navigate = useNavigate();

//   return puppyData.map((puppy) => {
//     return (
//       <div key={puppy.id}>
//         <h4>{puppy.id}</h4>
//         <h4>{puppy.name}</h4>
//         <h4>{puppy.breed}</h4>

//         <img src={puppy.imageUrl} alt={puppy.name} />
//         <button onClick={() => navigate(`/players/${playerId}`)}>
//           See Details
//         </button>
//       </div>
//     );
//   });
// }
