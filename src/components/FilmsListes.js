import React from 'react'
import FilmsCard from './FilmsCard'

function FilmsListes({films,rate,text}) {
  return (

    <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap", width:"90%", margin:"auto" }}>
    {
     films.filter(film=>film.title.toLowerCase().includes(text.toLowerCase().trim()) && film.rate >= rate) 
     .map(film=>(
     <FilmsCard film={film} key={film.id} />))
 }
</div>
  )
}

export default FilmsListes