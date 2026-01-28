const MenuModal = ({ children, isOpen }) => {  
  return (
    <div
      className={`w-48 fixed py-2 top-5 right-4 border-black shadow-3xl bg-white dark:bg-slate-900 z-50 transition ${
        isOpen ? "translate-x-0 translate-y-0 opacity-1" : "translate-x-full -translate-y-full opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default MenuModal;
