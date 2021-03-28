import GalleryItem from '../GalleryItem/GalleryItem'
function GalleryList(props){
    return(
        <>
          <h2>Gallery List</h2>
          <div>
            {props.galleries.map( image=> 
            <GalleryItem image={image} key={image.id}/>)}
          </div>
        </>
    )
}

export default GalleryList