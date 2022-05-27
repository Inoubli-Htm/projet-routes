import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'


function Trailer({films}) {
    const navigate=useNavigate();
    const { trailerId }=useParams();
    const film=films.find(film=>film.id === Number(trailerId));
  return (
      <>
    <div>
<iframe width="560" height="315" src={film.frameUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
       </div>
       <div> <Button variant='primary' onClick={()=>navigate("/")}> Return Home </Button>
    </div></>
  )
}

export default Trailer