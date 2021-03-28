import './GalleryItem.css';

function GalleryItem(props){
    return(
        <>
          <div className="image">
            <img src={props.image.path}></img>
            <button>Like</button>
            <p> people have liked this.</p>
          </div>
        </>
    )
}

export default GalleryItem