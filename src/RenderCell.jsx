
const RenderCell = ({board, index, handleClick}) => {
    return (
        <div className="cell" onClick={() => handleClick(index)}>{board[index]}</div>
    )
}
export default RenderCell;