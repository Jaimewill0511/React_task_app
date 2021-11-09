

const Button = ({color, text, click}) => {
    return (
        <div>
           <button onClick={click} style={{backgroundColor: color}} className='btn'>{text}</button> 
        </div>
    )
}

export default Button
