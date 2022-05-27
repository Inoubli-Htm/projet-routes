import React, { useState } from 'react'
import { Button, FormControl, Modal } from 'react-bootstrap'

function AddFilms({addFilms}) {
    
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const [posterUrl, setPosterUrl] = useState("");
        const [rate, setRate] = useState("");
        const handelAdd=()=>{
          if(title && description && posterUrl && rate){
            addFilms({title, description, posterUrl, rate, id:Math.random()});
                    handleClose();
          }
        }
      
        return (
          <div style={{marginBottom:"20px", marginTop:"10px"}}>
            <Button variant="success" onClick={handleShow}>
              Add Movie
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Movie</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  Movie Name
                  <FormControl type='text' onChange={(e)=>setTitle(e.target.value)}/><br />
                  Movie Description
                  <FormControl type='text' onChange={(e)=>setDescription(e.target.value)}/><br />
                  Movie Poster
                  <FormControl type='text' onChange={(e)=>setPosterUrl(e.target.value)}/><br />
                  Rate
                  <FormControl type='text' onChange={(e)=>setRate(e.target.value)}/><br />

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handelAdd} >
                  Add
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
        
        }
      
      export default AddFilms