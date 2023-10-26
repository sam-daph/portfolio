import prismadb from "@/lib/prismadb";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import {ChatClient} from "./components/client";

interface ChatIdProps {
    params: {
        chatId: string;
    }
}

export default async function PageChat({
    params
}: ChatIdProps) {
    const { userId } = auth();
    
    if (!userId) {
        return redirectToSignIn();
    }

    const portfolio = await prismadb.portfolio.findUnique({
        where: {
            id: params.chatId,
        },
        include: {
            message: {
                orderBy: {
                    createdAt: "asc"
                },
                where: {
                    userId,
                }
            },
            _count: {
                select: {
                    message: true
                }
            }
        }
    });

    if (!portfolio) {
        return redirect("/");
    }

    return (
        <ChatClient portfolio={portfolio}/>
    )
}