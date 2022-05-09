import Topbar from "./Layouts/Topbar";
import Main from "./Layouts/Main";
import MobileNav from "./Layouts/MobileNav";

export default function App(){
    return(
        <div class="container">
            <Topbar />
            <Main />
            <MobileNav />
        </div>
    );
}