const buttonStyle = {
    position: "relative",
    margin: "0px 10px",
    display: "inline-block",
    color: 'red',
    padding: 0,
    border: "none",
    background: "none",
    cursor: "pointer"
}
function DeleteButton(props){
    const onDelete = () => {
        props.onDelete()
    }
    return <span><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <button onClick = {onDelete} style = {buttonStyle} class="btn"><i class="fa fa-trash"></i></button> </span>;
}

export default DeleteButton;