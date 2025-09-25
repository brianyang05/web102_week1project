// src/components/EventCard.jsx
EventCard({ title, date, location, description, link, image, cta = "Open" }) {
    return (
    <article className="card">
    {image && (
    <div className="card__media">
    <img src={image} alt="" loading="lazy" />
    </div>
    )}
    
    
    <div className="card__body">
    <h3 className="card__title">{title}</h3>
    
    
    {(date || location) && (
    <ul className="card__meta">
    {date && <li>{date}</li>}
    {location && <li>{location}</li>}
    </ul>
    )}
    
    
    {description && <p className="card__desc">{description}</p>}
    
    
    {link && (
    <a className="card__btn" href={link} target="_blank" rel="noreferrer noopener">
    {cta}
    </a>
    )}
    </div>
    </article>
    );
    }

export default EventCard;