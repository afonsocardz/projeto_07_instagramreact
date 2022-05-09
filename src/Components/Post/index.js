import PostActions from "./PostActions";
import PostTopBar from "./PostTopbar";

export default function Post() {
    return (
        <div class="post-container">
            <PostTopBar />
            <div class="post-image">
                <img src="./assets/img/img1.jpg" alt="" />
            </div>
            <PostActions />
        </div>
    );
}