export default function Icon(props) {
    return (
        <li>
            <a href="https://instagram.com" target="_blank">
                <ion-icon name={props.iconName}></ion-icon>
            </a>
        </li>
    );
}