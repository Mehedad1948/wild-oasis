import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 6rem;
  width: auto;
`;

function Logo() {
  return (
    <div className='flex items-center  justify-center'>
      <Img src="/logo-light.png" alt="Logo" />
    </div>
  );
}

export default Logo;
