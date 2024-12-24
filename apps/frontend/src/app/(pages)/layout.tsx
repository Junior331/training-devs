import { Template } from "@/components";
import { Toaster } from "@/components/ui/toaster";
import { ProviderContextEvent } from "@/data/contexts/ContextEvent";
import { ProviderContextMessages } from "@/data/contexts/ContextMessage";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ProviderContextMessages>
      <ProviderContextEvent>
        <Template>{children}</Template>;
        <Toaster />
      </ProviderContextEvent>
    </ProviderContextMessages>
  );
}
