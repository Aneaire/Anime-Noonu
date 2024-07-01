import { Badge } from "../ui/badge";

export const GreenBadge = ({ children }: { children: React.ReactNode }) => {
  return <Badge className=" px-4 bg-btn-background">{children}</Badge>;
};

export const NormalBadge = ({ children }: { children: React.ReactNode }) => {
  return <Badge className=" px-4 bg-sBackground">{children}</Badge>;
};

export const RedBadge = ({ children }: { children: React.ReactNode }) => {
  return <Badge className=" px-4 bg-orange-700">{children}</Badge>;
};
