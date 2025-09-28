import React from "react";
import { Copy } from "lucide-react";

type Props = {
  text: string;
  onCopied?: () => void;
  label?: string;
};

export default function CopyButton({ text, onCopied, label = "Copy" }: Props) {
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      onCopied?.();
    } catch {
      alert("ไม่สามารถคัดลอกได้ — เบราว์เซอร์ไม่อนุญาต");
    }
  };

  return (
    <button
      onClick={onCopy}
      className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm hover:bg-neutral-50"
    >
      <Copy size={16} /> {label}
    </button>
  );
}
