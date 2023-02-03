import { Fragment } from "react";
import styled from "styled-components";
import { DAY_OF_WEEK, MeetingEvent } from "../utils/types";

const CalendarContainer = styled.div`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
  border: 1px solid lightgray;
  width: 1500px;
  display: grid;
  grid-template-columns: auto repeat(5, 2fr);
  grid-template-rows: repeat(11, 80px);
`;

const TimeContainer = styled.div`
  display: flex;
  border-right: 1px solid grey;
  gap: 0.1rem;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.1rem;
  :nth-child(6n + 6) {
    border-right: none;
  }
`;

const DayLabel = styled(TimeContainer)`
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid gray;
`;

const TimeLabel = styled(TimeContainer)`
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
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
  padding: 0.25rem;
`;

interface CalendarProps {
  meetings: MeetingEvent[];
}

const Calendar = ({ meetings }: CalendarProps) => {
  return (
    <CalendarContainer>
      <DayLabel></DayLabel>
      {Object.keys(DAY_OF_WEEK).map((day) => (
        <DayLabel key={day}>{day}</DayLabel>
      ))}
      {Array.from({ length: 10 }, (_, time) => (
        <Fragment key={"time" + time}>
          <TimeLabel>{`${time + 9}:00`}</TimeLabel>
          {Object.keys(DAY_OF_WEEK).map((day) => (
            <TimeContainer key={`time${time + 9}` + day}>
              {meetings
                .filter((meeting) => {
                  return (
                    meeting.dayOfWeek === day && +meeting.time === time + 9
                  );
                })
                .map((meeting, idx) => (
                  <Meeting key={meeting.name + idx}>{meeting.name}</Meeting>
                ))}
            </TimeContainer>
          ))}
        </Fragment>
      ))}
    </CalendarContainer>
  );
};

export default Calendar;
