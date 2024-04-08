import "./styles.css";
import { useState } from "react";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

export default function App() {
  const [person, setPerson] = useState({ name: "", age: 100 });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
//  BAD - Don't do this!
  // const handleIncreaseAge = () => {
  //   // mutating the current state object
  //   person.age = person.age + 1;
  //   setPerson(person);
  // };

  // GOOD - Do this!
  // updater function pattern you are working on the latest state
  const handleIncreaseAge = () => {
  setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
  // setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
};

const updateName = (newFirstName, newLastName) => {
  setPerson((prevPerson) => ({
    ...prevPerson, name: newFirstName + " " + newLastName
  }))
}
const handleFirstNameChange = (event) => {
  
  const newFirstName = event.target.value;
  console.log(newFirstName)
  setFirstName(newFirstName);
  updateName(newFirstName, lastName);
}

const handleLastNameChange = (event) => {
  const newLastName = event.target.value;
  setLastName(newLastName);
  updateName(firstName, newLastName);
}


  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>

    <input 
      type="text" 
      placeholder={'First Name'} 
      value={firstName}
      onChange={
        handleFirstNameChange
  }>
    </input>

    <input 
      type="text" 
      placeholder={'Last Name'} 
      value={lastName} 
      onChange={
        handleLastNameChange
      }>
    </input>

    </>
  );
}
