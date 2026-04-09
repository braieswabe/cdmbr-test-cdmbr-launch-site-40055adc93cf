"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export type ModalLightboxProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

export function ModalLightbox({
  open,
  onClose,
  title,
  description,
  children,
  className,
  contentClassName,
}: ModalLightboxProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6",
        className,
      )}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-slate-950/70 backdrop-blur-sm transition-opacity"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-lightbox-title"
        aria-describedby={description ? "modal-lightbox-description" : undefined}
        className={cn(
          "relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-background shadow-2xl ring-1 ring-black/5",
          contentClassName,
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <h2
              id="modal-lightbox-title"
              className="text-lg font-semibold tracking-tight text-foreground sm:text-xl"
            >
              {title}
            </h2>
            {description ? (
              <p
                id="modal-lightbox-description"
                className="mt-1 text-sm leading-6 text-muted-foreground"
              >
                {description}
              </p>
            ) : null}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[80vh] overflow-auto p-4 sm:p-6">{children}</div>
      </div>
    </div>
  );
}

export default ModalLightbox;
