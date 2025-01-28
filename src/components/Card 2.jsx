import img from '../assets/ouh.png';

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
    name: "Goobli Goo",
    email: "goobli@purdue.edu",
    title: "Alien"
  }
export default Card2;