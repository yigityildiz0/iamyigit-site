export type Theme = "light" | "dark";

/** Storage can be unavailable or contain values from an older client. */
export function readTheme(read: () => string | null): Theme {
  try {
    return read() === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

/** A blocked persistence layer must not break the current UI. */
export function persistTheme(write: (value: Theme) => void, theme: Theme): boolean {
  try {
    write(theme);
    return true;
  } catch {
    return false;
  }
}
