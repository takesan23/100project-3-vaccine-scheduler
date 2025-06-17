import dayjs from "dayjs";

export function calculateSchedule(
  birthday: string,
  recommendedMonth: number,
  administeredDate?: string
): string {
  const baseDate = administeredDate ? dayjs(administeredDate) : dayjs(birthday);
  const scheduledDate = baseDate.add(recommendedMonth, "month");
  return scheduledDate.format("YYYY-MM-DD");
}
