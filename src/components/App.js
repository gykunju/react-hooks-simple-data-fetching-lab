// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
    const [dogs, setDogs] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp=>resp.json())
        .then(data=> {
            setDogs(data)
            setLoading(false)
        })}, []);
  return (
    <div>
        {loading ? (
            <p>Loading..</p> 
        ):(
            <img src={dogs.message} alt="A random dog"/>
        )
        }
    </div>
  )
}

export default App