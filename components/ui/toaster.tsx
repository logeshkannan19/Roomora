"use client"

import * as React from "react"
import { X, CheckCircle, AlertCircle, Info } from "lucide-react"

interface ToastProps {
  id: string
  title?: string
  description?: string
  variant?: "default" | "success" | "destructive"
}

interface ToastState {
  toasts: ToastProps[]
}

type ToastAction =
  | { type: "ADD_TOAST"; toast: ToastProps }
  | { type: "REMOVE_TOAST"; id: string }

function toastReducer(state: ToastState, action: ToastAction): ToastState {
  switch (action.type) {
    case "ADD_TOAST":
      return { toasts: [...state.toasts, action.toast] }
    case "REMOVE_TOAST":
      return { toasts: state.toasts.filter((t) => t.id !== action.id) }
    default:
      return state
  }
}

export function Toaster() {
  const [toasts, dispatch] = React.useReducer(toastReducer, { toasts: [] })

  React.useEffect(() => {
    const handleToast = (event: CustomEvent<ToastProps>) => {
      const id = Math.random().toString(36).substring(7)
      dispatch({ type: "ADD_TOAST", toast: { ...event.detail, id } })
      setTimeout(() => {
        dispatch({ type: "REMOVE_TOAST", id })
      }, 5000)
    }

    window.addEventListener("toast" as any, handleToast as EventListener)
    return () => window.removeEventListener("toast" as any, handleToast as EventListener)
  }, [])

  if (toasts.toasts.length === 0) return null

  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 w-full max-w-md">
      {toasts.toasts.map((toast) => (
        <div
          key={toast.id}
          className={`rounded-xl border p-4 shadow-lg transition-all animate-in slide-in-from-right ${
            toast.variant === "destructive"
              ? "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950"
              : toast.variant === "success"
              ? "border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950"
              : "border bg-background text-foreground"
          }`}
        >
          <div className="flex items-start gap-3">
            {toast.variant === "success" && <CheckCircle className="w-5 h-5 shrink-0 text-green-600" />}
            {toast.variant === "destructive" && <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />}
            {!toast.variant && <Info className="w-5 h-5 shrink-0" />}
            <div className="flex-1">
              {toast.title && <p className="font-semibold text-sm">{toast.title}</p>}
              {toast.description && <p className="text-sm opacity-80 mt-1">{toast.description}</p>}
            </div>
            <button
              onClick={() => dispatch({ type: "REMOVE_TOAST", id: toast.id })}
              className="shrink-0 rounded-lg p-1 hover:bg-black/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
