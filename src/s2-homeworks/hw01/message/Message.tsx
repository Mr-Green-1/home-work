import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message0: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message0.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message0.id}
                    // создаёт студент
                    src={props.message0.user.avatar}
                    alt={'Some Name'}
                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message0.id} className={s.name}>
                        {/*создаёт студент*/}
                        {props.message0.user.name}
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message0.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        {props.message0.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message0.id} className={s.time}>
                {/*создаёт студент*/}
                {props.message0.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default Message
