"use client"

import { useEffect, useState } from "react";
import { Portfolio } from "@prisma/client";
import { ChatMessage, ChatMessageProps } from "./chatMessage";

interface ChatMessagesProps {
    messages: ChatMessageProps[];
    isLoading: boolean;
    portfolio: Portfolio;
}

export const ChatMessages = ({
    messages = [],
    isLoading,
    portfolio: Portfolio
}: ChatMessagesProps) => {
    const [fakeLoading, setFakeLoading] = useState(messages.length === 0 ? true : false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFakeLoading(false)
        }, 1000);
        return () => {
            clearTimeout(timeout);
        }
    }, [])
    return (
        <div className="flex-1 overflow-y-auto pr-4">
            <ChatMessage 
                isLoading={fakeLoading}
                src={Portfolio.src}
                role="system"
                content={`Hello, I am ${Portfolio.name}, ${Portfolio.description}`}
            />

            {messages.map((message) => (
                <ChatMessage 
                    key={message.content}
                    role={message.role}
                    content={message.content}
                    src={message.src}/>
            ))}

            {isLoading && (
                <ChatMessage 
                    role="system"
                    src={Portfolio.src}
                    isLoading/>
            )}
        </div>
    )
}