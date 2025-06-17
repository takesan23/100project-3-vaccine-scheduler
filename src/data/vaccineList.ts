import type { Vaccine } from "../types/vaccineTypes";

export const vaccineList: Vaccine[] = [
  { id: "hepb-1", name: "B型肝炎①", recommendedMonth: 2 },
  { id: "hepb-2", name: "B型肝炎②", recommendedMonth: 3 },
  { id: "hepb-3", name: "B型肝炎③", recommendedMonth: 7 },

  { id: "fivecombo-1", name: "五種混合①", recommendedMonth: 2 },
  { id: "fivecombo-2", name: "五種混合②", recommendedMonth: 3 },
  { id: "fivecombo-3", name: "五種混合③", recommendedMonth: 4 },
  { id: "fivecombo-4", name: "五種混合④", recommendedMonth: 18 },

  { id: "pneumo-1", name: "小児肺炎球菌①", recommendedMonth: 2 },
  { id: "pneumo-2", name: "小児肺炎球菌②", recommendedMonth: 3 },
  { id: "pneumo-3", name: "小児肺炎球菌③", recommendedMonth: 4 },
  { id: "pneumo-4", name: "小児肺炎球菌④", recommendedMonth: 12 },

  { id: "rota-1", name: "ロタ①", recommendedMonth: 2 },
  { id: "rota-2", name: "ロタ②", recommendedMonth: 3 },

  { id: "bcg", name: "BCG", recommendedMonth: 5 },

  { id: "mr-1", name: "MR①（麻しん・風しん）", recommendedMonth: 12 },
  { id: "mr-2", name: "MR②（麻しん・風しん）", recommendedMonth: 60 },

  { id: "varicella-1", name: "水痘①", recommendedMonth: 12 },
  { id: "varicella-2", name: "水痘②", recommendedMonth: 15 },

  { id: "mumps", name: "おたふくかぜ（任意）", recommendedMonth: 12 },

  { id: "je-1", name: "日本脳炎①期①", recommendedMonth: 36 },
  { id: "je-2", name: "日本脳炎①期②", recommendedMonth: 37 },
  { id: "je-3", name: "日本脳炎①期", recommendedMonth: 42 },

  { id: "je-4", name: "日本脳炎②期", recommendedMonth: 108 },

  { id: "hpv-1", name: "HPV①（子宮頸がん）", recommendedMonth: 132 },
  { id: "hpv-2", name: "HPV②", recommendedMonth: 134 },
];
