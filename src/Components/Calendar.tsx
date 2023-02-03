import { Fragment } from "react";
import styled from "styled-components";
import { DAY_OF_WEEK, MeetingEvent } from "../utils/types";

const CalendarContainer = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(6, 20%);
  grid-template-rows: repeat(11, 80px);
`;

const TimeContainer = styled.div`
  display: flex;
  border-right: 1px solid grey;
  padding: 0.1rem;
  gap: 0.1rem;
  flex-wrap: wrap;
`;

const Meeting = styled.div`
  @keyframes meeting-animate {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  display: flex;
  background-color: cornflowerblue;
  border-radius: 0.5rem;
  flex-grow: 1;
  padding: 0.1rem;
  animation: meeting-animate 0.3s linear;
`;

interface CalendarProps {
  meetings: MeetingEvent[];
}

const Calendar = ({ meetings }: CalendarProps) => {
  return (
    <CalendarContainer>
      <TimeContainer></TimeContainer>
      {Object.keys(DAY_OF_WEEK).map((day) => (
        <TimeContainer key={day}>{day}</TimeContainer>
      ))}
      {Array.from({ length: 10 }, (_, time) => (
        <Fragment key={"time" + time}>
          <TimeContainer>{`${time + 9}:00`}</TimeContainer>
          {Object.keys(DAY_OF_WEEK).map((day) => (
            <TimeContainer id={`time${time + 9}` + day}>
              {meetings
                .filter((meeting) => {
                  console.log(meeting);
                  return (
                    meeting.dayOfWeek === day && +meeting.time === time + 9
                  );
                })
                .map((meeting) => (
                  <Meeting>{meeting.name}</Meeting>
                ))}
            </TimeContainer>
          ))}
        </Fragment>
      ))}
    </CalendarContainer>
  );
};

export default Calendar;
