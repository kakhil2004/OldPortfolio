import './box.css'

function Box(props) {
    return (
      <div class="elements">
        <img id="icon" src={props.image} alt="logo"></img>
        <h2 id="title">{props.title}</h2>
      </div>
    );
  }
  
  export default Box;
  