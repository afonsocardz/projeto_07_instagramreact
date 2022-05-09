import Sidebar from "./Sidebar";
import Content from "./Content";


export default function Main() {

    const loggedUser = {
        name:'afonsocardz',
        fullname:'Afonso Cardozo Cruz',
        profile:'img1.jpg'
    };

    return (
        <div class="content-container">
            <Content user={loggedUser} />
            <Sidebar user={loggedUser} /> 
        </div>
    );
}