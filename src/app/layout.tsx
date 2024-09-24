// app/layout.tsx
import React from 'react';
import './globals.css'; // Hier kannst du eine CSS-Datei für globale Styles importieren

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="de">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
