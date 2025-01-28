export default function Card({ children, title }) {
    return(
      <div className="card">
        <div className="card-details">
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    )
  }
  
  Card.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element), 
      PropTypes.element.isRequired
    ]),
    title: PropTypes.string.isRequired,
  }
  