import type { PropsWithChildren } from "react";

/**
 * Centers page content and applies consistent horizontal padding.
 */
export function Container({ children }: PropsWithChildren) {
  return (
    <main className="mx-auto w-full max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">{children}</main>
  );
}
