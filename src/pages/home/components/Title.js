import '../styles/Title.scss';
import downIconWhite from '../../../assets/icons/down-arrow-white.svg';

function Title({ scrollDown }) {
  return (
    <div id="title" className="title">
      <h1 className="title__heading">DYLAN GALBRAITH</h1>
      <p className="title__info">full-stack web developer</p>
      <img onClick={scrollDown} className="arrow arrow--title" src={downIconWhite} alt="down arrow"/>
    </div>
  )
}

export default Title;