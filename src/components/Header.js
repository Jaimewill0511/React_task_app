import Button from './Button'
import { AiOutlinePlus } from "react-icons/ai";

import { TiDeleteOutline } from "react-icons/ti";


const Header = ({click, state}) => {
    const onClic = () =>{
        if (!state) {
            click(true)
        } else{
            click(false)
        }
        
    }
    const size = 32;
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            {state ? <Button color='red' text={<TiDeleteOutline size={size}/>} click={onClic}/> : <Button color='green' text={<AiOutlinePlus size={size}/>}  click={onClic}/>
            }
            
        </header>
    )
}

export default Header
