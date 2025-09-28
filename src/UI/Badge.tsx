import React from "react";

type Props = {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
};

export default function Badge({ icon: Icon, label }: Props) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700">
      <Icon size={16} /> {label}
    </span>
  );
}
