export default async function fetchAllPuppies() {
  try {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players"
    );
    const result = await response.json();
    // console.log(result.data.players);
    return result.data.players;
  } catch (error) {
    console.error(error);
  }
}

//irl name this file services, thunks, etc. - this is the clearinghouse for adjusting all the API calls

const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players/${playerId}`
    );
    const result = await response.json();
    if (result.error) throw result.error;
    return result.data.player;
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};

// async function makePuppyUseful() {
//      let usefulPuppy = await fetchSinglePlayer();
//      console.log(usefulPuppy);
// }

export { fetchSinglePlayer };



//IGNORE FOR NOW, attempt at add new player
// async function addNewPlayer() {
//   try {
//     const response = await fetch(
//       "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players",
//       {
//         method: "POST",
//         body: JSON.stringify({ newDogName, newDogBreed, newDogPhoto }),
//       })
//     // console.log(result.data.players);
//     const result = await response.json
//     return result
//   } catch (error) {
//     console.error(error);
//   }
// }

// export { addNewPlayer };

