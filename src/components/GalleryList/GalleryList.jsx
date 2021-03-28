import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList(props){
    return(
        <>
          <div>
            {props.galleries.map( image=> 
            <GalleryItem image={image} key={image.id} addLike={props.addLike}/>)}
          </div>
        </>
    )
}

export default GalleryList