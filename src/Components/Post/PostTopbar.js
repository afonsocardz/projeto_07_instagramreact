export default function PostTopBar(props) {
    return (
        <div class="post-topbar">
            <div class="user">
                <a href="https://instagram.com" target="_blank"><img src={"./assets/img/" + props.user.profile} alt="" /></a>
                <a href="https://instagram.com" target="_blank">{props.user.name}</a>
            </div>
            <button class="options">...</button>
        </div>
    );
}