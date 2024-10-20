export const Overlay = ({children}: { children: React.ReactNode }) => {
  return <div className="fixed inset-0 z-10 overflow-hidden margin-auto">{children}</div>;
};
