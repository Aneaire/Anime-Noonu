import { Button } from "../ui/button";

export const AccentBtn = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <Button
    onClick={onClick}
    className={`bg-btn-background font-montserrat text-lg px-7 hover:bg-btn-background-hover ${className}`}
  >
    {children}
  </Button>
);
