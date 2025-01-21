import img from '../assets/pfp1.jpeg';

const Card1 = () => {
    const name = 'Amber Zeng';
    const title = 'Web Developer';
    const email = 'zeng274@purdue.edu';

    return(
        <div id="jump" className="profile-card">
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
export default Card1;