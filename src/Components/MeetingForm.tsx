import { useForm } from "react-hook-form";
import styled from "styled-components";
import { DAY_OF_WEEK, MeetingFormType } from "../utils/types";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  * {
    box-sizing: border-box;
  }
`;

const StyledForm = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 400px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 5px 0px #ccc;
  padding: 0.5rem;

  input[type="text"],
  select {
    width: 100%;
    padding: 10px;
    margin-top: 0.1rem;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px 0px #ccc;
  }

  input[type="text"]:focus,
  select:focus {
    outline: none;
    border: 1px solid #aaa;
    box-shadow: 0px 0px 5px 0px #aaa;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 1em;
  font-size: 16px;
  border-radius: 5px;
  background-color: cornflowerblue;
  color: #fff;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #5085e7;
  }
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
          <input required type="text" {...register("name")} />
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
          <SubmitButton type="submit">Add meeting</SubmitButton>
        </div>
      </StyledForm>
    </FormContainer>
  );
};

export default MeetingForm;
