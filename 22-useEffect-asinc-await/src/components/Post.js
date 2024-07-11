function Post(props){
    const {title, body, id} = props
    return (
        <div className="post">
            <small>{id}</small>
        <h1 className="titleOfPost">{title}</h1>
        <h2 className="bodyOfPost">{body}</h2>
        </div>
    )
}

export default Post