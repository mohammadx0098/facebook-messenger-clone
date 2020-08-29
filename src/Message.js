import  React , {forwardRef} from 'react'
import { Typography, CardContent, Card } from '@material-ui/core'
import './Message.css'

const Message = forwardRef(({message,username} , ref) => {
    //we should pass argument as an Object.
    const isUser = username === message.username;
    

    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
              {/* Name is based on Bem  (component__element) */}
            <Card className={isUser ? 'message__userCard' : 'message__gustCard'}>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2"
                    >
                    {!isUser && `${message.username || 'Unkown User'}:`} {message.message}
                    </Typography>
    
                </CardContent>  
            </Card>
        </div>
    )
})

export default Message
