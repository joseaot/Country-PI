import { useHistory } from 'react-router-dom';
import style from './Card.module.css';

const Card = ({ id, name, flag, continent }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/detail/${id}`);
  };

  return (
    <div className={style.carta} onClick={handleClick}>
      <h1>{name}</h1>
      <img src={flag} alt="banderas" className={style.banderas} />
      <h3>{continent}</h3>
    </div>
  );
};

export default Card;