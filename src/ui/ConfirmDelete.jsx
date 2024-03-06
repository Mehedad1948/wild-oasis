import styled from "styled-components";
import Button from "./Button";

const StyledConfirmDelete = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 0.6rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 0.9rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  // const { openName, close } = useContext(ModalContext);
  // console.log(close);
  
  return (
    <StyledConfirmDelete>
      <h2>Delete {resourceName}</h2>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button onClick={onCloseModal} variation="secondary" disabled={disabled}>
          Cancel
        </Button>
        <Button onClick={onConfirm} variation="danger" disabled={disabled}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
