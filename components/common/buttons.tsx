import { Button } from "../ui/button";

export const AccentBtn = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <Button
    className={`bg-btn-background font-montserrat text-lg px-7 hover:bg-btn-background-hover ${className}`}
  >
    {children}
  </Button>
);
