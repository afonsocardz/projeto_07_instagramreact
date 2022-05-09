import Suggestion from "../Components/User/Suggestion";
import UserInfo from "../Components/User/UserInfo";
import Footer from "./Footer";

export default function Sidebar() {
    return (
        <div class="sidebar-fixed">
            <div class="sidebar">
                <UserInfo />
                <div class="suggestion-container">
                    <div class="top">
                        <h3>Sugestões para você</h3>
                        <a href="https://instagram.com" target="_blank">Ver tudo</a>
                    </div>
                    <div class="suggestions">
                        <ul>
                            <Suggestion /> 
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}