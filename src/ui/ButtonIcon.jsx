import styled from 'styled-components';

function ButtonIcon({ children }) {
  return (
    <button
      className="rounded bg-slate-100 px-2 py-0.5 text-base 
    hover:bg-orange-100"
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
