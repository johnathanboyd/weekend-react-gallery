import GalleryItem from '../GalleryItem/GalleryItem'
function GalleryList(props){
    return(
        <div>
            {props.galleries.map( image=> <GalleryItem />)}
        </div>
    )
}

export default GalleryList