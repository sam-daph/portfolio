import { Portfolio } from "@prisma/client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { MessagesSquare } from "lucide-react";

interface SamdaphProps {
  data: (Portfolio & {
    _count: {
      message: number;
    };
  })[];
}

export const Samdaph = ({ data }: SamdaphProps) => {
  if (data.length === 0) {
    return (
      <div className="pt-10 flex flex-col items-center justify-center space-y-3">
        <div className="relative w-60 h-60">
          <Image fill className="grayscale" alt="empty" src="/empty.png" />
        </div>
        <p>image Not Found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grod-cols-4 lg-grid-cols-5 xl:grid-cols-6 gap-10 pb-10">
      {data.map((item) => (
        <Card
          key={item.id}
          className="bg-card rounded-xl cursor-pointer hover:opacity-75 transition border-0"
        >
          <Link href={`/chat/${item.id}`}>
            <CardHeader className="flex items-center justify-center text-center text-muted-foreground">
              <div className="relative w-32 h-32">
                <Image
                  className="rounded-xl object-cover"
                  fill
                  alt="image"
                  src={item.src}
                />
              </div>
              <p className="font-bold">
                {item.name}
              </p>
              <p className="text-xs">
                {item.description}
              </p>
            </CardHeader>
            <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
              <p>
                @{item.username}
              </p>
              <div className="flex items-center">
                <MessagesSquare className="w-3 h-3 mr-1" />
                {item._count.message}
              </div>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  );
};
