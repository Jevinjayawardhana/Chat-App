import{PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    

    return (
    
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
            projectId='deeb9da4-ffd5-4ddf-bdba-8914689cbc3f'
            username = {props.user.username}
            secret = {props.user.secret}
            style = {{height: '100%'}}
            />
    </div>
    )
}

export default ChatsPage