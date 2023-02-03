export const DAY_OF_WEEK = {
  Monday: 0,
  Tuesday: 1,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
};

export type DayOfWeek = keyof typeof DAY_OF_WEEK;

export type MeetingEvent = {
  name: string;
  dayOfWeek: DayOfWeek;
  time: number;
};

export interface MeetingFormType {
  name: string;
  dayOfWeek: DayOfWeek;
  time: string;
}
