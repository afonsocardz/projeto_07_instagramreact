import Icon from "../Icon";


export default function Menu() {

    const desktopIcons = ['paper-plane-outline', 'compass-outline', 'heart-outline' , 'person-outline'];
    const mobileIcons = ['paper-plane-outline'];

    return (
        <>
            <div class="menu-desktop">
                <ul>
                    {desktopIcons.map(icon => <Icon iconName={icon} />)}
                </ul>
            </div>
            <div class="menu-mobile">
                <ul>
                    <Icon iconName={mobileIcons[0]} />
                </ul>
            </div>
        </>
    );
}