// src/components/Layout.js

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto p-4">
      {children}
    </div>
  );
}

export default Layout;
