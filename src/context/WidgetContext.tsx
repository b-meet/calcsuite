import React, { createContext, useContext } from 'react';

interface WidgetContextType {
  isWidget: boolean;
}

const WidgetContext = createContext<WidgetContextType>({ isWidget: false });

export function WidgetProvider({ children, isWidget }: { children: React.ReactNode; isWidget: boolean }) {
  return (
    <WidgetContext.Provider value={{ isWidget }}>
      {children}
    </WidgetContext.Provider>
  );
}

export function useWidget() {
  return useContext(WidgetContext);
}
