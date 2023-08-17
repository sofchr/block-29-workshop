

export default async function fetchAllPuppies() {
  try {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players"
    );
    const result = await response.json();

    return result.data.players;

  } catch (error) {
    console.error(error);
  }
}