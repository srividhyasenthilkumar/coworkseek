"use client";
import React from "react";
import { CheckCircle2, XCircle, X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: "success" | "error";
  title: string;
  message: string;
  actionText?: string;
  onAction?: () => void;
}

export default function Modal({
  isOpen,
  onClose,
  type = "success",
  title,
  message,
  actionText,
  onAction,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white dark:bg-gray-950 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-white/5 w-full max-w-md p-8 overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Top Accent Bar */}
        <div className={`absolute top-0 left-0 w-full h-2 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`} />

        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors">
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center mt-4">
          <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 ${type === 'success' ? 'bg-green-50' : 'bg-red-50'}`}>
            {type === "success" ? (
              <CheckCircle2 size={40} className="text-green-500" />
            ) : (
              <XCircle size={40} className="text-red-500" />
            )}
          </div>

          <h3 className="text-2xl font-black italic uppercase text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-500 font-medium leading-relaxed mb-8">{message}</p>

          <button
            onClick={onAction || onClose}
            className={`
              w-full py-4 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all active:scale-95 shadow-xl
              ${type === 'success' ? 'bg-green-500 text-white hover:bg-green-600 shadow-green-500/20' : 'bg-red-500 text-white hover:bg-red-600 shadow-red-500/20'}
            `}
          >
            {actionText || "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}
