import { useEffect, useState } from "react"
import axios from 'axios'
const App = () => {

  const [jokes,setJokes]= useState([])

  useEffect(()=>{
    axios.get('/api/jokes/jokes')
    .then((res)=>{
      setJokes(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
  return (
    <div>
      <h1>Chai And Fullstack</h1>
      <p>Jokes: {jokes.length}</p>
      {
        jokes.map((joke)=>(
          <div key={joke.id}>
            <h3>Id : {joke.id}</h3>
            <h4>category : {joke.category}</h4>
            <h3>Setup : {joke.setup}</h3>
            <h3>Punchline : {joke.punchline}</h3>
            <hr/>

          </div>
        ))
      }
    </div>
  )
}

export default App