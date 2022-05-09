import PostActions from "./PostActions";
import PostTopBar from "./PostTopbar";

export default function Post(props) {
    return (
        <div class="post-container">
            <PostTopBar user={props.user} />
            <div class="post-image">
                <img src={props.imgID} alt="" />
            </div>
            <PostActions />
        </div>
    );
}