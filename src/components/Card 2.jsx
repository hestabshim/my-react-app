import img from 'src/assets/ouh.png';

const Card2 = () => {
    const name = 'Goobli Goo';
    const title = 'Alien';
    const email = 'goobli@purdue.edu';

    return(
        <div className="profile-card">
            <div className="profile-card_img">
                <img src={img} alt={name}/>
            </div>
            <div className="profile-card_content">
                <p>{name}</p>
                <p>{title}</p>
                <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>
        </div>
    );
}
export default Card2;