import { TemplateProps } from "./@types";
import { Logo } from "./Logo";

export const Template = ({ children, className }: TemplateProps) => {
  return (
    <div
      className={`
      flex flex-col items-center py-10 min-h-screen bg-[url('/images/background.png')]
      bg-cover bg-center bg-no-repeat`}
    >
      <Logo />
      <main
        className={`flex flex-col justify-center py-10 w-full container ${className}`}
      >
        {children}
      </main>
    </div>
  );
};
