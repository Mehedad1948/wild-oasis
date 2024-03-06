function Tag({ children, type }) {
  return (
    <span
      className={
        (type === 'green'
          ? 'bg-emerald-200 text-emerald-800'
          : 'bg-blue-200 text-blue-800') +
        ' ' +
        `w-fit rounded-full px-2 py-0.5 text-xs sm:!text-sm font-medium uppercase`
      }
    >
      {children}
    </span>
  );
}

export default Tag;
