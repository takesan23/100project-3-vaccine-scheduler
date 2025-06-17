import React from "react";
import type { VaccineRecord } from "../types/vaccineTypes";
import { vaccineList } from "../data/vaccineList";

type Props = {
  records: VaccineRecord[];
  onDelete: (id: string) => void;
};

const RecordList: React.FC<Props> = ({ records, onDelete }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg w-full max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-600">
        接種履歴
      </h2>

      {records.length === 0 ? (
        <p className="text-center text-gray-500">まだ記録がありません。</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {records.map((record) => {
            const vaccineName =
              vaccineList.find((v) => v.id === record.id)?.name ?? record.id;
            return (
              <div
                key={record.id}
                className="border rounded-lg p-4 shadow-sm bg-gray-50 flex flex-col gap-2"
              >
                <div className="text-lg font-semibold">{vaccineName}</div>
                <div className="text-sm text-gray-700">
                  接種日: {record.administeredDate}
                </div>
                <button
                  onClick={() => onDelete(record.id)}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded self-end"
                >
                  削除
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RecordList;
