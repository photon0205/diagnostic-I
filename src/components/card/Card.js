import './Card.css'

export default function Card(props) {
    return (
      <div className="card">
        <div className="card__body">
          <img src={props.img} class="card__image" alt = {props.alt}/>
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
        </div>
        <button className="card__btn">{props.buttonTitle}</button>
      </div>
    );
  }

