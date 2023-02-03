import { useForm } from "react-hook-form";
import styled from "styled-components";
import { DAY_OF_WEEK, MeetingFormType } from "../utils/types";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-width: 300px;
`;
interface MeetingFormProps {
  addMeeting: (event: MeetingFormType) => void;
}

const MeetingForm = ({ addMeeting }: MeetingFormProps) => {
  const { register, handleSubmit } = useForm<MeetingFormType>();
  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(addMeeting)}>
        <>Add event</>
        <div>
          <label>Meeting name: </label>
          <input {...register("name")} />
        </div>
        <div>
          <label>Meeting day:</label>
          <select {...register("dayOfWeek")}>
            {Object.keys(DAY_OF_WEEK).map((day) => (
              <option value={day} key={`option${day}`}>
                {day}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Meeting time:</label>
          <select {...register("time")}>
            {Array.from({ length: 9 }, (_, i) => {
              const time = i + 9;
              return (
                <option key={`option${time}:00`} value={time}>
                  {`${time}:00`}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <button type="submit">Add meeting</button>
        </div>
      </StyledForm>
    </FormContainer>
  );
};

export default MeetingForm;
