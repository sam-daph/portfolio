"use client"

import { ChangeEvent } from "react";

interface ChatFormProps {
    input: string;
    handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
}

export const ChatForm = () => {
    return (
        <div>chat form</div>
    )
}