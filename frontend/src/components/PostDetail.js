import PropTypes from 'prop-types'

const PostDetail = props => {
    // console.log(props)
    return (
        <div style={{textAlign:"center"}} className="container">
            <h2>{props?.post?.title}</h2>
            <div  style={{textAlign:"right"}}>
                <small>Written By: {props?.post?.User.email}</small>
                </div>
            <p dangerouslySetInnerHTML={{__html:props?.post?.content}}></p>
        </div>
    )
}



export default PostDetail
