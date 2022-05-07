export default function Post() {
    return (
        <div class="post-container">
            <div class="post-topbar">
                <div class="user">
                    <a href="https://instagram.com" target="_blank"><img src="./assets/img/img1.jpg" alt="" /></a>
                    <a href="https://instagram.com" target="_blank">afonsocardz</a>
                </div>
                <button class="options">...</button>
            </div>
            <div class="post-image">
                <img src="./assets/img/img1.jpg" alt="" />
            </div>
            <div class="post-action">
                <div class="post-reactions">
                    <div class="action-bar">
                        <ul>
                            <li>
                                <a href="https://instagram.com" target="_blank">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank">
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank">
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </a>
                            </li>
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
        </div>
    );
}