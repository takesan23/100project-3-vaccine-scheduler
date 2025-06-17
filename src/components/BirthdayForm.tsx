import React, { useState } from "react";

type Props = {
  onSave: (birthday: string) => void;
};

const BirthdayForm: React.FC<Props> = ({ onSave }) => {
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) return;
    onSave(date);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 bg-white p-6 rounded-xl shadow-lg"
    >
      <h2 className="text-xl font-semibold text-blue-600">
        お子様の生年月日を入力してください
      </h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border rounded px-4 py-2 text-lg"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded text-lg shadow"
      >
        登録
      </button>
    </form>
  );
};

export default BirthdayForm;
