export default function NewPlayerForm() {
  return <p>I'm a form!</p>;
}

//IGNORE FOR NOW, failed attempt at form

// import { addNewPlayer } from "../API/index";
// import { useState } from "react";

// export default function NewPlayerForm(props) {
//   //   const { something, setSomething } = props;
//   //
//   const [newDogName, setNewDogName] = useState("");
//   const [newDogBreed, setNewDogBreed] = useState("");
//   const [newDogPhoto, setNewDogPhoto] = useState("");

//   async function handleSubmit(event) {
//     event.preventDefault();
//     try {
//       const response = await fetch(
//         "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players",
//         {
//           method: "POST",
//           body: JSON.stringify({ name, breed, imageUrl }),
//         }
//       );
//       const result = await response.json();

//       if (result.success) {
//         setNewDogName(newDogName);
//         setNewDogBreed(newDogBreed);
//         setNewDogPhoto(newDogPhoto);
//       }
//     } catch (error) {
//       console.error(err);
//     }
//   }
//   return (
//     <>
//       <h2>Add Player Below</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Dog Name: {""}
//           <input
//             // type="text"
//             value={name}
//             onChange={(event) => setNewDogName(event.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Dog Breed: {""}
//           <input
//             // type="text"
//             value={breed}
//             onChange={(event) => setNewDogBreed(event.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           New Dog Photo URL: {""}
//           <input
//             value={imageUrl}
//             onChange={(event) => setNewDogPhoto(event.target.value)}
//           />
//         </label>
//         <br />
//         <button>Submit</button>
//       </form>
//     </>
//   );
// }
