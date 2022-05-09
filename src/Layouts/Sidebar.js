import Suggestion from "../Components/User/Suggestion";
import UserInfo from "../Components/User/UserInfo";
import Footer from "./Footer";

export default function Sidebar(props) {

    const users = [
        {
            name: 'wowowiwo',
            profile: 'img1.png'
        },
        {
            name: '9gag',
            profile: 'img2.png'
        },
        {
            name: 'barked',
            profile: 'img3.png'
        },
        {
            name: 'firminawww',
            profile: 'img4.png'
        },
        {
            name: 'afonsocardz',
            profile: 'img5.jpg'
        },
        {
            name: 'mewoed',
            profile: 'img6.png'
        },
        {
            name: 'etvarginha',
            profile: 'img7.png'
        },
        {
            name: 'respondeai',
            profile: 'img8.png'
        }
    ]

    return (
        <div class="sidebar-fixed">
            <div class="sidebar">
                <UserInfo user={props.user} />
                <div class="suggestion-container">
                    <div class="top">
                        <h3>Sugestões para você</h3>
                        <a href="https://instagram.com" target="_blank">Ver tudo</a>
                    </div>
                    <div class="suggestions">
                        <ul>
                            {users.map(user => <Suggestion user={user.name} picture={user.profile} /> )}
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}