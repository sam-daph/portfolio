import { Portfolio } from "@prisma/client";
import Image from "next/image";

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
      <div className="empty pt-20 pb-20 flex flex-col items-center justify-center space-y-3">
        <div className="relative w-60 h-60">
          <Image fill className="grayscale" alt="empty" src="/empty.png" />
        </div>
        <p className="pt-4">image Not Found</p>
      </div>
    );
  }

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg-grid-cols-5 xl:grid-cols-4 gap-10 pb-10">
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
            <CardFooter className="flex items-center justify-between text-lg text-[#e75e8d]">
              <p>
                @{item.username}
              </p>
              <div className="flex items-center">
                <MessagesSquare className="w-4 h-4 mr-1" />
                {item._count.message}
              </div>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </div>
    </>
  );
};
