function DashboardBox({ children, className }) {
  return (
    <div
      className={
        className +
        ' ' +
        `col-span-full sm:col-span-2 flex h-full flex-col gap-4
         rounded-md border bg-white 
          px-2 py-1.5 md:px-4 md:py-3`
      }
    >
      {children}
    </div>
  );
}

export default DashboardBox;
