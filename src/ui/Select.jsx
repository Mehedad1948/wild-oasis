import styled from 'styled-components';

const StyledSelect = styled.select`
  font-size: 1rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === 'white'
        ? 'var(--color-grey-100)'
        : 'var(--color-grey-300)'};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

function Select({ options, value, onChange, ...props }) {

  return (
    <div>
      <select className='px-3 py-1.5 font-medium text-sm border-slate-300 border rounded' 
      value={value} onChange={onChange} {...props}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
