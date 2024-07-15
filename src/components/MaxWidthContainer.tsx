import { ReactNode } from "react";
import { cn } from "../lib/utils";

function MaxWidthContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(className, "container mx-auto py-20 md:py-32 px-10")}>
      {children}
    </div>
  );
}

export default MaxWidthContainer;
