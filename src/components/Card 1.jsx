import img from '../assets/pfp1.jpeg';

function Card2 ({name}, {email}, {title}){
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
Card2.defaultProps = {
    name: "Amber Zeng",
    email: "zeng274@purdue.edu",
    title: "Web Designer"
}
export default Card1;