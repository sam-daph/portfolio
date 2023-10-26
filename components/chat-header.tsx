"use client";

import axios from "axios";
import { Message, Portfolio } from "@prisma/client";
import { Button } from "./ui/button";
import {
  ChevronLeft,
  Edit,
  MessageSquare,
  MoreVertical,
  Trash,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { BotAvatar } from "./botavatar";
import { useUser } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useToast } from "./ui/use-toast";

interface ChatHeaderClientProps {
  portfolio: Portfolio & {
    message: Message[];
    _count: {
      message: number;
    };
  };
}

export const ChatHeader = ({ portfolio }: ChatHeaderClientProps) => {
  const router = useRouter();
  const { user } = useUser();
  const { toast } = useToast();

  const onDelete = async () => {
    try {
      await axios.delete(`/api/companion/${portfolio.id}`);

      toast({
        description: "Successfully",
      });

      router.refresh();
      router.push('/');

    } catch (error) {
      toast({
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex w-full justify-between items-center border-b border-primary/10 pb-4">
      <div className="flex gap-x-2 items-center">
        <Button onClick={() => router.back()} size="icon" variant="ghost">
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <BotAvatar src={portfolio.src} />
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-2">
            <p className="font-bold">{portfolio.name}</p>
            <div className="text-muted-forgound flex items-center">
              <MessageSquare className="w-4 h-4 mr-1" />
              {portfolio._count.message}
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Created by {portfolio.username}
          </p>
        </div>
      </div>
      {user?.id === portfolio.userId && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon">
              <MoreVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="flex justify-center items-center m-4"
              onClick={() => router.push(`/companion/${portfolio.id}`)}
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={onDelete}
              className="flex justify-center items-center"
            >
              <Trash className="w-4 h-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};
