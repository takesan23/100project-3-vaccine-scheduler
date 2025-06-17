import React, { useState } from "react";
import { vaccineList } from "../data/vaccineList";
import type { Vaccine } from "../types/vaccineTypes";
import { calculateSchedule } from "../utils/dateUtils";
import type { VaccineRecord } from "../types/vaccineTypes";
import dayjs from "dayjs";

type Props = {
  birthday: string;
  records: VaccineRecord[];
  onSaveRecord: (record: VaccineRecord) => void;
};

const ScheduleList: React.FC<Props> = ({ birthday, records, onSaveRecord }) => {
  const isCompleted = (id: string) => records.some((r) => r.id === id);

  const [inputDates, setInputDates] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleDateChange = (vaccineId: string, value: string) => {
    setInputDates({ ...inputDates, [vaccineId]: value });
    setErrors({ ...errors, [vaccineId]: "" });
  };

  const handleRegister = (vaccine: Vaccine) => {
    const date = inputDates[vaccine.id];
    if (!date) {
      setErrors({ ...errors, [vaccine.id]: "接種日を入力してください" });
      return;
    }
    if (dayjs(date).isAfter(dayjs())) {
      setErrors({ ...errors, [vaccine.id]: "未来の日付は登録できません" });
      return;
    }
    onSaveRecord({ id: vaccine.id, administeredDate: date });
    setInputDates({ ...inputDates, [vaccine.id]: "" });
  };

  // ソート処理
  const sortedVaccineList = [...vaccineList]
    .map((vaccine) => ({
      ...vaccine,
      scheduledDate: calculateSchedule(birthday, vaccine.recommendedMonth),
    }))
    .sort((a, b) => {
      const aCompleted = isCompleted(a.id);
      const bCompleted = isCompleted(b.id);
      if (aCompleted !== bCompleted) return aCompleted ? 1 : -1;
      return dayjs(a.scheduledDate).diff(dayjs(b.scheduledDate));
    });

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg w-full max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        予防接種スケジュール
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border rounded-lg overflow-hidden">
          <thead className="bg-blue-100">
            <tr>
              <th className="border p-3 text-left">ワクチン名</th>
              <th className="border p-3 text-left">推奨接種日</th>
              <th className="border p-3 text-center">接種記録</th>
            </tr>
          </thead>
          <tbody>
            {sortedVaccineList.map((vaccine) => (
              <tr
                key={vaccine.id}
                className={`border ${
                  isCompleted(vaccine.id) ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
              >
                <td className="border p-3 font-medium">{vaccine.name}</td>
                <td className="border p-3">{vaccine.scheduledDate}</td>
                <td className="border p-3 text-center">
                  {isCompleted(vaccine.id) ? (
                    <span className="text-green-600 font-bold">済</span>
                  ) : (
                    <div className="flex justify-center items-center gap-2">
                      <input
                        type="date"
                        value={inputDates[vaccine.id] || ""}
                        onChange={(e) =>
                          handleDateChange(vaccine.id, e.target.value)
                        }
                        className="border rounded px-3 py-1.5 w-40 text-sm"
                      />
                      <button
                        onClick={() => handleRegister(vaccine)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-3 py-1.5 rounded shadow-sm text-sm"
                      >
                        登録
                      </button>
                      {errors[vaccine.id] && (
                        <div className="text-red-500 text-xs mt-1">
                          {errors[vaccine.id]}
                        </div>
                      )}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleList;
