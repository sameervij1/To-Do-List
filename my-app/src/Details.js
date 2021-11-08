const detailsStyle = {
    display: 'inline-block'
}
function Details(props) {
    return <p style = {detailsStyle}>{props.details}</p>;
}

export default Details;