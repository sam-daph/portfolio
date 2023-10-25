"use client";

import { useEffect, useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

interface ImageUploadProps {
  value: string;
  onChange: (src: string) => void;
  disabled?: boolean;
}

export const ImageUpload = ({
  value,
  onChange,
  disabled,
}: ImageUploadProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="space-y-4 w-full flex flex-col justify-center items-center">
      <CldUploadButton
        onUpload={(result: any) => onChange(result.info.secure_url)}
        options={{ maxFiles: 1 }}
        uploadPreset="kesi0siz"
      >
        <div className="p-4 border-4 border-dashed border-primary/20 rounded-lg hover:opacity-75 transition flex flex-col space-y-2 items-center jistify-center">
          <div className="relative h-60 w-60">
            <Image
              fill
              alt="Upload"
              src={value || "/placeholder.png"}
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </CldUploadButton>
    </div>
  );
};
