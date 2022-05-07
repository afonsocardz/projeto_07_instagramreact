export default function Topbar(){
    return(
        <div class="topbar">
            <div class="topbar-content">
                <div class="logo-container">
                    <a href="" class="sm-logo"><img src="./assets/img/mini-logo.svg" alt=""/></a>
                    <div class="barra-vertical"></div>
                    <a href="" class="normal-logo"><img src="./assets/img/logo.png" alt=""/></a>
                </div>
                <div class="searchbar">
                    <input type="text" placeholder="Pesquisar"/>
                </div>
                <div class="menu-desktop">
                    <ul>



                        <li>
                            <a href="https://instagram.com" target="_blank">
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank">
                                <ion-icon name="compass-outline"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank">
                                <ion-icon name="heart-outline"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank">
                                <ion-icon name="person-outline"></ion-icon>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="menu-mobile">
                    <ul>
                        <li>
                            <a href="https://instagram.com" target="_blank">
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}