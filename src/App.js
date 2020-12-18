
import { useState , useEffect } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { FormControl, InputLabel , Input } from '@material-ui/core';
import Todo from "./ToDo";
import db from "./firebase"
import firebase from "firebase";
function App() {

  const [todos , setTodos] = useState(["let's see" , "do work "]);
  // const [title , setTitle] = useState([]);

  const [input , setInput] = useState("");

  useEffect(() => {
//this code runs whemn the app loads
    db.collection('todos').orderBy('timestamp' , 'desc').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data().todo));
      setTodos(snapshot.docs.map(doc => doc.data().todo));
    })
  }, [])

  // const [titleInput , setTitleInput] = useState("");
  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo : input ,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos , input]);
  //  setTitle([...title , titleInput]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>hello my future !!</h1>
      <FormControl>
        
      {/* <InputLabel>title</InputLabel>
        <Input value={titleInput} onChange={e => {
        setTitleInput(e.target.value)
      }} /> */}

        <InputLabel>write your goal</InputLabel>
        <Input value={input} onChange={e => {
        setInput(e.target.value)
      }} />
        <Button variant="contained" color="primary" disabled={!input} onClick={addTodo}>add to target list</Button>
      </FormControl>
      
      <ul>
        {todos.map(todo => {
         return <Todo 
         text = {todo}
         />
        })}
      </ul>
    </div>
  );
}

export default App;
