const buttonStyle = {
    position: "relative",
    margin: "10px 5px",
    display: "inline-block",
    padding: 0,
    border: "none",
    background: "none",
    cursor: "pointer",
    fontSize: 15
}
function EditButton(props){
    const onEdit = () => {
        props.onEdit()
    }
    return <span><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <button onClick = {onEdit} style = {buttonStyle}><i class="fa fa-edit"></i></button> </span>;
}

export default EditButton;