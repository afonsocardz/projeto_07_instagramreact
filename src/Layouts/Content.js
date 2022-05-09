import Post from '../Components/Post';
import Stories from '../Components/Stories';


export default function Content() {
    return (
        <div class="content-column">
            <Stories />
            <div class="posts-container">
                <Post />
            </div>
        </div>
    );
}