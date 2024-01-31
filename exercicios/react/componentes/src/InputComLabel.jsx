function InputComLabel({idString, textoLabel}){
    return <>
    <label htmlFor={idString}>{textoLabel} </label>
    <input type="text" id={idString} name={idString} />
    <br />
    </>
}

export default InputComLabel