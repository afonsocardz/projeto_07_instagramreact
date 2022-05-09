import Sidebar from "./Sidebar";
import Content from "./Content";


export default function Main() {
    return (
        <div class="content-container">
            <Content />
            <Sidebar /> 
        </div>
    );
}