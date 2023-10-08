import React, { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="md:px-8 lg:px-16 px-6 container mx-auto relative flex-1">
      {children}
    </div>
  );
}

export default Container;
