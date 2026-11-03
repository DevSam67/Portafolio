import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URLS } from "@/lib/site";

interface WhatsAppButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "default" | "outline";
  className?: string;
}

export function WhatsAppButton({
  children,
  href = WHATSAPP_URLS.general,
  variant = "default",
  className,
}: WhatsAppButtonProps) {
  return (
    <Button asChild variant={variant} size="lg" className={`h-12 px-6 text-sm ${className ?? ""}`}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <MessageCircle />
        {children}
      </a>
    </Button>
  );
}
