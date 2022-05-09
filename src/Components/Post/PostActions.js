import Icon from '../Icon'

export default function PostActions() {

    const reactionIcons = ['heart-outline', 'chatbubble-outline', 'paper-plane-outline'];

    return (
        <div class="post-action">
            <div class="post-reactions">
                <div class="action-bar">
                    <ul>
                        {reactionIcons.map(icon => <Icon iconName={icon} />)}
                        <li class="justify-end">
                            <a href="https://instagram.com" target="_blank">
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="post-stats">
                    <img src="./assets/img/img1.jpg" alt="" />
                    <p> Curtido por <strong><a href="https://instagram.com" target="_blank"> respondeai</a></strong> e <strong><a href="https://instagram.com" target="_blank">
                        outras 101.805</a> pessoas</strong></p>
                </div>
            </div>
        </div>
    );
}