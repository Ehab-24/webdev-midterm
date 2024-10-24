import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function storeArray(key: string, arr: string[]) {
    localStorage.setItem(key, arr.join("|"))
}

export function getArray(key: string): string[] {
    return localStorage.getItem(key)?.split("|") ?? []
}
