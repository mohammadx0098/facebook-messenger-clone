import React from 'react'
import { Typography, CardContent, Card } from '@material-ui/core'
import './Message.css'

function Message({message,username}) {
    //we should pass argument as an Object.

    const isUser = username === message.username;

    return (
        <div className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? 'message__userCard' : 'message_gustCard'}>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2"
                    >
                    {message.username}: {message.text}
                    </Typography>
    
                </CardContent>  
            </Card>
        </div>
    )
}

export default Message
