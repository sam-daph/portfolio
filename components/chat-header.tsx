"use client"

import { Message, Portfolio } from "@prisma/client"
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { BotAvatar } from "./botavatar";

interface ChatHeaderClientProps {
    portfolio: Portfolio & {
        message: Message[];
        _count: {
            message: number;
        };
    };
};

export const ChatHeader = ({
    portfolio
}: ChatHeaderClientProps) => {
    const router = useRouter();
    return (
        <div className="flex w-full justify-between items-center border-b border-primary/10 pb-4">
            <Button onClick={() => router.back()} size="icon" variant="ghost">
                <ChevronLeft className="h-8 w-8"/>
            </Button>
            <BotAvatar />
        </div>
    )
}