import Post from '../Components/Post';
import Stories from '../Components/Stories';


export default function Content(props) {
    const IMG_PATH = "./assets/img/";
    const posts = ['img1.jpg', 'img2.jpg'];

    return (
        <div class="content-column">
            <Stories />
            <div class="posts-container">
                {posts.map( img => <Post user={props.user} imgID={IMG_PATH + img} />)}
            </div>
        </div>
    );
}