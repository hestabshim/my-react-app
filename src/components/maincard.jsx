import style from "../styles/card.module.css";
import PropTypes from "prop-types";

const Card = ({ image_url, name, title, email }) => {
  return (
    <div
      className={`${style["profile-card"]} ${style["is-entering"]}`}
    >
      <div className={style["profile-card__image"]}>
        <img src={image_url} alt={name} />
      </div>
      <div className={style["profile-card__content"]}>
        <p>{name}</p>
        <p>{title}</p>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </div>
  );
};
Card.propTypes = {
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  email: PropTypes.string.isRequired,
};
export default Card;