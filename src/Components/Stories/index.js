import Storie from './Storie';

export default function Stories() {

    const users = [
        {
            name:'wowowiwo',
            profile:'img1.png'
        },
        {
            name:'9gag',
            profile:'img2.png'
        },
        {
            name:'barked',
            profile:'img3.png'
        },
        {
            name:'firminawww',
            profile:'img4.png'
        },
        {
            name:'afonsocardz',
            profile:'img5.jpg'
        },
        {
            name:'mewoed',
            profile:'img6.png'
        },
        {
            name:'etvarginha',
            profile:'img7.png'
        },
        {
            name:'respondeai',
            profile:'img8.png'
        }
    ]

    return (
        <div class="stories-box">
            <ul>
                {users.map( user => <Storie name={user.name} picture={user.profile} />)}
            </ul>
            <button><img src="./assets/img/arrow.svg" alt="" /></button>
        </div>
    );
}