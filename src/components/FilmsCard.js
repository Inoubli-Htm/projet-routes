import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function FilmsCard({film}) {
  return (
    <div>
        <Card style={{ width: '18rem', marginBottom:"20px", marginTop:"10px" }}>
    <Card.Img variant="top" src={film.posterUrl} height='300px' />
    <Card.Body>
      <Card.Title>{film.title}</Card.Title>
      <Card.Text>
        {film.description}
      </Card.Text>
     <Link to={`/Trailer/${film.id}`}><Button variant="primary">Watch The Trailer</Button></Link> 
    </Card.Body>
  </Card>
  </div>
  )
}

export default FilmsCard