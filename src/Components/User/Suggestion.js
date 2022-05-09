export default function Suggestion(props) {
    return (
        <li>
            <a href="https://instagram.com" target="_blank"><img src={"./assets/img/stories/" + props.picture} alt="" /></a>
            <div>
                <a href="https://instagram.com" target="_blank">{props.user}</a>
                <h3>Segue você</h3>
            </div>
            <a href="" class="justify-end">Seguir</a>
        </li>
    );
}