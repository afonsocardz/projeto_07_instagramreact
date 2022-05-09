export default function Storie(props) {
    return (
        <li>
            <div class="story">
                <a href="https://instagram.com" target="_blank"><img src={"./assets/img/stories/" + props.picture} alt="" /></a>
            </div>
            <h3>{props.name}</h3>
        </li>
    );
}