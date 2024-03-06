import styled from 'styled-components';

import Row from '../../ui/Row';
import Spinner from '../../ui/Spinner';
import { useTodayActivity } from './useTodayActivity';
import TodayItem from './TodayItem';
import DashboardBox from '../dashboard/DashboardBox';

const StyledToday = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
`;

// const TodayList = styled.ul`
//   overflow: scroll;
//   overflow-x: hidden;

//   /* Removing scrollbars for webkit, firefox, and ms, respectively */
//   &::-webkit-scrollbar {
//     width: 0 !important;
//   }
//   scrollbar-width: none;
//   -ms-overflow-style: none;
// `;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();

  return (
    <DashboardBox>
      <Row type="horizontal">
        <h2>Today</h2>
      </Row>

      {!isLoading ? (
        activities?.length > 0 ? (
          <div className='overflow-auto'>
          
          <ul className="flex min-w-[450px] flex-col divide-y max-h-full">
            {activities.map((activity) => (
              <TodayItem key={activity.id} activity={activity} />
              ))}
          </ul>
              </div>
        ) : (
          <NoActivity>No activity today</NoActivity>
        )
      ) : (
        <Spinner />
      )}
    </DashboardBox>
  );
}

export default TodayActivity;
