import { useState } from "react";
import BirthdayForm from "./components/BirthdayForm";
import ScheduleList from "./components/ScheduleList";
import RecordList from "./components/RecordList";
import type { VaccineRecord } from "./types/vaccineTypes";

function App() {
  const [birthday, setBirthday] = useState(
    localStorage.getItem("birthday") || ""
  );
  const [records, setRecords] = useState<VaccineRecord[]>(() => {
    const storedRecords = localStorage.getItem("records");
    return storedRecords ? JSON.parse(storedRecords) : [];
  });

  const handleSaveRecord = (newRecord: VaccineRecord) => {
    const updated = [...records, newRecord];
    setRecords(updated);
    localStorage.setItem("records", JSON.stringify(updated));
  };

  const handleDeleteRecord = (id: string) => {
    const updated = records.filter((r) => r.id !== id);
    setRecords(updated);
    localStorage.setItem("records", JSON.stringify(updated));
  };

  const handleSaveBirthday = (newBirthday: string) => {
    setBirthday(newBirthday);
    localStorage.setItem("birthday", newBirthday);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
          予防接種管理アプリ
        </h1>

        {birthday ? (
          <div className="mb-6 flex flex-col items-center gap-4">
            <div className="text-lg font-medium text-gray-700">
              生年月日: {birthday}
            </div>
            <div>
              <label className="mr-2 text-sm text-gray-600">変更:</label>
              <input
                type="date"
                value={birthday}
                onChange={(e) => handleSaveBirthday(e.target.value)}
                className="border rounded px-3 py-1 text-sm"
              />
            </div>
          </div>
        ) : (
          <BirthdayForm onSave={handleSaveBirthday} />
        )}

        {birthday && (
          <>
            <ScheduleList
              birthday={birthday}
              records={records}
              onSaveRecord={handleSaveRecord}
            />
            <RecordList records={records} onDelete={handleDeleteRecord} />
          </>
        )}
      </div>
      <div className="h-16" />
    </div>
  );
}

export default App;
