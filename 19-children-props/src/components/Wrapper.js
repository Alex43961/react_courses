function Wrapper(props){
    const style = {
        backgroundColor: props.color,
        width: '300px',
        padding: '20px',
        margin: '10px auto',
    }
    return (
        <div style={style}>
           {props.children}
        </div>
    )
}

export default Wrapper