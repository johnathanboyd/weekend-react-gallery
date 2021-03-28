import './GalleryItem.css';

function GalleryItem(props){
    return(
        <>
          <div className="image">
            <img src={props.image.path}></img>
            <button>Like</button>
            <p>:People Have Liked This</p>
          </div>
        </>
    )
}

export default GalleryItem