export default function UserInfo(props) {
    return (
        <div class="user-info">

            <a href="https://instagram.com" target="_blank"><img src={"./assets/img/" + props.user.profile} alt="" /></a>

            <div>
                <a href="https://instagram.com" target="_blank">{props.user.name}</a>

                <h3>{props.user.fullname}</h3>
            </div>
        </div>
    );
}