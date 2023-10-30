"use client";
import { useTheme } from "next-themes";
import { useToast } from "./ui/use-toast";
import { BotAvatar } from "./botavatar";
import { cn } from "@/lib/utils";
import { BeatLoader } from "react-spinners";
import { UserAvatar } from "./user-avatar";

export interface ChatMessageProps {
  role: "system" | "user";
  content?: string;
  isLoading?: boolean;
  src?: string;
}

export const ChatMessage = ({
  role,
  content,
  isLoading,
  src,
}: ChatMessageProps) => {
  const { toast } = useToast();
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "group flex items-start gap-x-3 py-4 w-full",
        role === "user" && "justify-end"
      )}
    >
      {role !== "user" && src && <BotAvatar src={src} />}
      <div className="px-4 py-2 rounded-md bg-primary/20 text-sm max-w-sm">
        {isLoading ? (
          <BeatLoader color={theme === "light" ? "black" : "white"} size={5} />
        ) : (
          content
        )}
      </div>

      {role === "user" && <UserAvatar />}
    </div>
  );
};
