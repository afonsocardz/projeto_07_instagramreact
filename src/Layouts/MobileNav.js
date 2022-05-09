import Icon from '../Components/Icon';

export default function MobileNav(){

    const navIcons = ['home','search-outline', 'add-circle-outline', 'heart-outline' ,'person-outline'];
    
    return(
        <div class="mobile-nav">
            <ul>
                {navIcons.map(icon => <Icon iconName={icon}/>)}
            </ul>
        </div>
    );
}