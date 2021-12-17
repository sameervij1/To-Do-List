function ClearButton(props) {
    const clear = () => {
        props.clear()
    }
    return <button style = {{position: "absolute", left: "40%", top: 120 + 30 * props.tasksAbove}} onClick = {clear}> Clear </button>;
}

export default ClearButton;