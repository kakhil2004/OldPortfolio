import './hugebox.css'

function Box(props) {
    return (
      <a href={props.link} target="_blank" rel="noopener noreferrer">
      <div class="hugebox">
        <img id="bigicon" src={props.image} alt="logo"></img><br></br>
        <h2 id="bigtitle">{props.title}</h2>
        <p id='hb'>{props.text}</p>
      </div>
      </a>
    );
  }
  
  export default Box;
  