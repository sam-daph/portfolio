"use client"

import {ChatRequestOptions} from "ai"
import {Input} from "@/components/ui/input";
import { ChangeEvent, FormEvent } from "react";
import { Button } from "./ui/button";
import { SendHorizonal } from "lucide-react";

interface ChatFormProps {
    input: string;
    handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>, ChatRequestOptions?: ChatRequestOptions | undefined) => void;
    isLoading: boolean;
}

export const ChatForm = ({
    input,
    handleInputChange,
    onSubmit,
    isLoading,
}: ChatFormProps) => {
    return (
        <form onSubmit={onSubmit} className="border-t border-primary/40 py-4 flex items-center gap-x-2">
            <Input 
                disabled={isLoading}
                value={input}
                placeholder="Type Message"
                onChange={handleInputChange}
                className="rended-lg bg-primary/20" />
            <Button disabled={isLoading} variant="ghost">
                <SendHorizonal />
            </Button>
        </form>
    )
}