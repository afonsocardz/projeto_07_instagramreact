import Logo from "../Components/Topbar/Logo";
import Menu from "../Components/Topbar/Menu";
import Searchbar from "../Components/Topbar/Searchbar";

export default function Topbar(){
    return(
        <div class="topbar">
            <div class="topbar-content">
                <Logo />
                <Searchbar />
                <Menu />
            </div>
        </div>
    );
}