import './Card.css'
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate();
  const routeChange = () =>{ 
    let path = props.path; 
    navigate(path);
  }
    return (
      <div className="card">
        <div className="card__body">
          <img src={props.img} class="card__image" alt = {props.alt}/>
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
        </div>
        <button className="card__btn" onClick={routeChange}>{props.buttonTitle}</button>
      </div>
    );
  }

