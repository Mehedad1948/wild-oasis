import { styled } from 'styled-components';
import { useUser } from '../features/authentication/useUser';
import Spinner from '../ui/Spinner';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FullPage = styled.div`
  height: 100vh;
  background-color: #bbb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //  1. Load the authenticated users
  const { user, isLoading, isAuthenticated } = useUser();

  // console.log(
  //   'isAuthenticated',isAuthenticated);
  //2. If not Authenticated , redirect to login
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/login');
  }, [isLoading, isAuthenticated, navigate]);

  // 3. Shlow Spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If user, render the app
  if (isAuthenticated) {
    return <div>{children}</div>;
  }
}

export default ProtectedRoute;
