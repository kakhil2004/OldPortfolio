import './box.css'

function Box(props) {
    return (
      <a href={props.link} target="_blank" rel="noopener noreferrer">
      <div class="smallbox">
        <img id="icon" src={props.image} alt="logo"></img>
        <h2 id="title">{props.title}</h2>
      </div>
      </a>
    );
  }
  
  export default Box;
  