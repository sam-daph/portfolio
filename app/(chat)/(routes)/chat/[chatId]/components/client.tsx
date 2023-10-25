"use client"

import { Message, Portfolio } from "@prisma/client"
import { ChatHeader } from "@/components/chat-header";

interface ChatClientProps {
    portfolio: Portfolio & {
        message: Message[];
        _count: {
            message: number;
        };
    };
};

export const ChatClient = ({
    portfolio
}: ChatClientProps) => {
    return (
        <div className="flex flex-col h-full p-4 space-y-2">
            <ChatHeader portfolio={portfolio} />
        </div>
    )
}