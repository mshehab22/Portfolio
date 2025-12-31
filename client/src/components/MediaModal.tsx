import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { MediaItem } from "@/data/projects";

interface MediaModalProps {
  media: MediaItem;
  onClose: () => void;
}

export function MediaModal({ media, onClose }: MediaModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const isVideo = media.type === "video";
  const isEmbed = isVideo && !media.src.endsWith(".mp4");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={handleBackdropClick}
      data-testid="modal-media-backdrop"
    >
      <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col">
        <Button
          size="icon"
          variant="ghost"
          className="absolute -top-12 right-0 text-white hover:bg-white/20"
          onClick={onClose}
          data-testid="button-modal-close"
        >
          <X className="h-6 w-6" />
        </Button>

        <div className="bg-background rounded-lg overflow-hidden">
          {isVideo ? (
            isEmbed ? (
              <iframe
                src={media.src}
                className="w-full aspect-video"
                allowFullScreen
                data-testid="iframe-media"
              />
            ) : (
              <video
                src={media.src}
                poster={media.poster}
                controls
                className="w-full aspect-video"
                data-testid="video-media"
              />
            )
          ) : (
            <img
              src={media.src}
              alt={media.alt || "Media"}
              className="w-full h-auto max-h-[80vh] object-contain"
              data-testid="img-media-modal"
            />
          )}

          {media.caption && (
            <div className="p-4 border-t border-border">
              <p className="text-sm text-muted-foreground text-center" data-testid="text-media-caption">
                {media.caption}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
