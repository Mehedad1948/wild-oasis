import { useSearchParams } from 'react-router-dom';

function Filter({ filterField, options }) {
  const [serachParams, setSearchParams] = useSearchParams();
  const currentFilter = serachParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    serachParams.set(filterField, value);
    if (serachParams.get('page')) serachParams.set('page', 1);
    setSearchParams(serachParams);
  }

  return (
    <div className="flex flex-wrap gap-3 rounded sm:justify-between border-slate-300 p-1
                   w-full sm:w-fit"
        >
      {options.map((option) => (
        <button
          className={
            (option.value === currentFilter ? '!bg-theme-600 !text-white' : '') +
            ' ' +
            `rounded border border-slate-300 bg-white px-2.5 py-1 font-medium 
            transition-colors duration-300`
          }
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}{' '}
        </button>
      ))}
    </div>
  );
}

export default Filter;
