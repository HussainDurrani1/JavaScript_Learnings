import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    // This gives us CORS (Cross Origin Resource Sharing) error.
    // Meaning, you are not authorized to access the url in a different browser or port.
    // axios.get('http://localhost:3000/api/jokes')

    // Now we used proxy (vite.config.js), thats why we won't get any CORS error
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((err) => {
        console.log(err, 'There is some error getting the jokes...');
      })
  })
  return (
    <>
      <h1>Hussain Durrani Codes</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  )
}

export default App
