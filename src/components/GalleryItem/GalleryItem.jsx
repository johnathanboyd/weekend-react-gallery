import './GalleryItem.css';
import { useState } from 'react'

function GalleryItem(props){

    const[showImage, setShowImage ] = useState( false );

    let displayImage = () =>{
        let display = <img className="image" onClick = {togglePost} src={props.image.path}></img>
          if ( showImage) {
            display = <div className="description" onClick = {togglePost}><p>{ props.image.description}</p></div>
        }
        return display
    }

    let togglePost = () =>{
        setShowImage( !showImage );
    }
    return(
        <>
          <div className="post">
            {displayImage()}  
            <button>Like</button>
            <p> people have liked this.</p>
          </div>
        </>
    )
}

export default GalleryItem