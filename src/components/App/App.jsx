import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'

function App() {

  const [ gallery, setGallery ] = useState ( [] ); 

  useEffect(() => {
    console.log('in useEffect')
    getGallery();
  }, []);

  let addLike=(image)=>{
    console.log('in addLike' );
    axios.put( '/gallery/like/' + image).then( 
      response =>{
        getGallery();
      }).catch( ( err )=> {
      console.log( err );
      alert( 'err' );
    })
  }

  let getGallery=()=>{
    console.log('in getGallery' );
    axios.get( '/gallery').then( ( response )=>{
      console.log( 'back from GET with:', response );
      setGallery( response.data );
    }).catch( ( err )=> {
      console.log( err );
      alert( 'err' );
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <div className="gallery">
        <GalleryList galleries={gallery} addLike={addLike} />
        </div>
      </div>
    );
}

export default App;
