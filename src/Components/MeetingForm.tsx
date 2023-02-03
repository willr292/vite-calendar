import { useForm } from "react-hook-form";
import styled from "styled-components";
import { DAY_OF_WEEK, MeetingFormType } from "../utils/types";

interface MeetingFormProps {
  addMeeting: (event: MeetingFormType) => void;
}

const MeetingForm = ({ addMeeting }: MeetingFormProps) => {
  const { register, handleSubmit } = useForm<MeetingFormType>();
  return (
    <form onSubmit={handleSubmit(addMeeting)}>
      <div>
        <label>First Name</label>
        <input {...register("name")} />
      </div>

      <select {...register("dayOfWeek")}>
        {Object.keys(DAY_OF_WEEK).map((day) => (
          <option value={day} key={`option${day}`}>
            {day}
          </option>
        ))}
      </select>
      <select {...register("time")}>
        {Array.from({ length: 9 }, (_, i) => (
          <option key={`option${i + 9}:00`} value={i + 9}>
            {`${i + 9}:00`}
          </option>
        ))}
      </select>
      <div>
        <button type="submit">Add meeting</button>
      </div>
    </form>
  );
};

export default MeetingForm;
