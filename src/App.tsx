import { useState } from "react";
import Calendar from "./Components/Calendar";
import MeetingForm from "./Components/MeetingForm";
import { MeetingEvent, MeetingFormType } from "./utils/types";

function App() {
  const [meetings, setMeetings] = useState<MeetingEvent[]>([]);

  const addMeeting = (data: MeetingFormType) => {
    setMeetings([
      ...meetings,
      {
        name: data.name,
        dayOfWeek: data.dayOfWeek,
        time: +data.time,
      },
    ]);
  };
  return (
    <>
      <Calendar meetings={meetings} />
      <MeetingForm addMeeting={addMeeting} />
    </>
  );
}

export default App;
