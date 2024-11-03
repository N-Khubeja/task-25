import { useId } from "react"

const MailForm:React.FC = () => {
    const id1 = useId()
    const id2 = useId()
    return(
        <div>
            <div style={{marginBottom:'20px'}}>
                <label htmlFor={id1} style={{background:'gray',padding:'5px',marginRight:'5px'}}>USERNAME</label>
                <input type="text" id={id1} placeholder="USERNAME"/>
            </div>
            <div>
                <label htmlFor={id2} style={{background:'gray',padding:'5px',marginRight:'5px',borderTop:'black solid 2px'}}>PASSWORD</label>
                <input type="password" id={id2} placeholder="PASSWORD"/>
            </div>
            
        </div>
    )
}

export default MailForm