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
  
        <GalleryList galleries={gallery} />
      </div>
    );
}

export default App;
