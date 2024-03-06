import styled from 'styled-components';

const StyledStat = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 1.6rem;
  display: grid;
  grid-template-columns: 6.4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1.6rem;
  row-gap: 0.4rem;
`;

const Icon = styled.div`
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Make these dynamic, based on the received prop */
  background-color: var(--color-${(props) => props.color}-100);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-${(props) => props.color}-700);
  }
`;

const imageStyles = {
  blue: 'bg-blue-500 text-blue-800',
  green: 'bg-emerald-500 text-emerald-800',
  yellow: 'bg-yellow-500 text-yellow-800',
  indigo: 'bg-indigo-500 text-indigo-800',
};

function Stat({ icon, title, value, color }) {
  return (
    <div
      className="grid h-fit w-full max-w-xs 
                  grid-cols-[3.2rem,_1fr] grid-rows-[auto,_auto] gap-x-3 rounded-md border
                   bg-white p-2 lg:p-4"
    >
      <div
        // style={{backgroundColor: color}}
        className={
          imageStyles[color] +
          ' ' +
          `row-span-full flex aspect-square items-center justify-center
                   rounded-full bg-opacity-30 text-xl lg:text-2xl`
        }
      >
        {icon}
      </div>
      <div>
        <h5 className="self-center  font-medium uppercase">{title}</h5>
        <p className="text-lg font-medium">{value}</p>
      </div>
    </div>
  );
}

export default Stat;
