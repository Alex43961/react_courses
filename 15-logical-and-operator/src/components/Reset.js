const buttonStyle = {
    backgroundColor: 'royalblue',
  };

function Reset({onClick, count}) {
    return  (
        <div className="reset">
           {            
            <button  style={buttonStyle} onClick={onClick}>Reset</button>
           } 
        </div>
    )
}

export default Reset