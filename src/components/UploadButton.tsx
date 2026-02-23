"use client";

import { useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { nanoid } from "nanoid";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://theai.garden";

export default function UploadButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file.");
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError("Image must be under 10MB.");
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const supabase = createClient();
      const fileExt = file.name.split(".").pop();
      const filePath = `landing-uploads/${nanoid()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("plant-photos")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        console.error("Upload error:", uploadError);
        setError("Upload failed. Please try again.");
        setUploading(false);
        return;
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("plant-photos")
        .getPublicUrl(filePath);

      // Redirect to theai.garden/welcome with the uploaded image
      const redirectUrl = new URL(`${APP_URL}/welcome`);
      redirectUrl.searchParams.set("photoUrl", urlData.publicUrl);
      redirectUrl.searchParams.set("from", "landing");

      window.location.href = redirectUrl.toString();
    } catch {
      setError("Upload failed. Please try again.");
      setUploading(false);
    }
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleFileChange}
      />
      <button
        onClick={handleClick}
        disabled={uploading}
        className={className}
      >
        {uploading ? (
          <span className="flex items-center gap-3">
            <svg
              className="animate-spin h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Uploading...
          </span>
        ) : (
          children
        )}
      </button>
      {error && (
        <p className="text-red-400 text-sm mt-2">{error}</p>
      )}
    </>
  );
}
