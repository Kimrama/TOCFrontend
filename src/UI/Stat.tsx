import React from "react";

type Props = {
  icon: React.ComponentType<{ size?: number }>;
  value: string;
  hint: string;
};

export default function Stat({ icon: Icon, value, hint }: Props) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-sm">
      <div className="rounded-lg bg-neutral-50 p-2"><Icon size={18} /></div>
      <div>
        <div className="text-sm text-neutral-500">{hint}</div>
        <div className="text-base font-medium">{value}</div>
      </div>
    </div>
  );
}
