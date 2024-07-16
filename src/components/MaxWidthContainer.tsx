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
    <div className={cn(className, "container mx-auto  px-10")}>{children}</div>
  );
}

export default MaxWidthContainer;
