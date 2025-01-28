import '../styles/card.css';
import PropTypes from 'prop-types';

const Card = ({img, name, title, email}) => {
    return (
        <div className="profile-card">
            <div className="profile-card__image">
                <img src={img} alt={name} />
            </div>
            <div className="profile-card__content">
                <p>{name}</p>
                <p>{title}</p>
                <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>
        </div>
    );
}
Card.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    email: PropTypes.string.isRequired
}
export default Card;

  