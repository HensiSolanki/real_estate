"use client";

/**
 * Routes match a typical React Router setup (`/`, `/projects`, …).
 * This app uses Next.js App Router — same paths, `next/link` + `usePathname`.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";
import { useEffect, useState } from "react";

/** Brand / active tab / logo — deep green (aqar.fm style) */
const BRAND_GREEN = "#1B5E38";
const MUTED = "#555555";

type TabIcon = FC<{ className?: string }>;

type RightLink = {
  href: string;
  label: string;
  Icon?: TabIcon;
  /** Subtle frame around icon (login / profile) */
  framedIcon?: boolean;
};

function IconBuilding({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 21h18" />
      <path d="M6 21V10l6-3.5L18 10v11" />
      <path d="M9 21v-4h2v4" />
      <path d="M13 21v-4h2v4" />
      <path d="M9 13h2" />
      <path d="M9 17h2" />
      <path d="M13 13h2" />
      <path d="M13 17h2" />
    </svg>
  );
}

function IconChart({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 3v18h18" />
      <path d="M7 16V9" />
      <path d="M12 16v-5" />
      <path d="M17 16V6" />
    </svg>
  );
}

function IconCalendar({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4" />
      <path d="M8 3v4" />
      <path d="M3 11h18" />
      <path d="M8 15h.01" />
      <path d="M12 15h.01" />
    </svg>
  );
}

function IconMapFolded({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 7.5 L8 5.5 L8 18.5 L3 20.5 Z" />
      <path d="M8 5.5 L15 7.5 L15 19.5 L8 18.5 Z" />
      <path d="M15 7.5 L21 5.5 L21 18.5 L15 20.5 Z" />
    </svg>
  );
}

function IconUserFramed({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <circle cx="12" cy="10" r="2.5" />
      <path d="M8 18c0-2.2 1.8-4 4-4s4 1.8 4 4" />
    </svg>
  );
}

const NAV = [
  { href: "/", label: "Real Estate", Icon: IconBuilding },
  { href: "/projects", label: "Projects", Icon: IconChart },
  { href: "/daily-rent", label: "Daily Rent", Icon: IconCalendar },
] as const;

const RIGHT: RightLink[] = [
  { href: "/map", label: "Map Search", Icon: IconMapFolded },
  { href: "/add-listing", label: "+ Add" },
  { href: "/login", label: "", Icon: IconUserFramed, framedIcon: true },
];

function SaudiMapSilhouette({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <title>Saudi Arabia</title>
      <path
        fill="currentColor"
        d="M12 78 L14 42 L22 24 L38 12 L58 8 L76 14 L90 28 L94 48 L88 68 L72 84 L52 94 L32 96 L16 88 Z M62 96 L70 88 L82 92 L86 102 L78 110 L66 108 Z"
      />
      <circle cx="48" cy="40" r="3" fill="#ffffff" />
      <path fill="#ffffff" d="M48 43.5 L44.5 52 L51.5 52 Z" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeWidth="2" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const fontUi = "font-[family-name:var(--font-inter),ui-sans-serif,system-ui,sans-serif]";

  return (
    <header
      className={`sticky top-0 z-40 border-b border-neutral-200/80 bg-white text-[15px] font-medium leading-none tracking-[-0.01em] text-neutral-800 dark:bg-white ${fontUi}`}
    >
      <div className="relative mx-auto flex h-[52px] max-w-[1400px] items-center px-4 sm:px-6">
        <div className="flex min-w-0 flex-1 justify-start">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E38]/25"
          >
            <div
              className="flex flex-col items-end leading-none"
              style={{ color: BRAND_GREEN }}
            >
              <span
                className="text-[1.0625rem] font-bold tracking-tight"
                dir="rtl"
                lang="ar"
                style={{ fontFamily: "var(--font-noto-arabic), system-ui, sans-serif" }}
              >
                عقار
              </span>
              <span className="mt-0.5 text-[0.6875rem] font-bold uppercase tracking-[0.22em]">
                AQAR
              </span>
            </div>
            <SaudiMapSilhouette className="h-9 w-[1.85rem] shrink-0 text-[#1B5E38]" />
          </Link>
        </div>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex"
          aria-label="Main"
        >
          {NAV.map(({ href, label, Icon }) => {
            const active = isNavActive(pathname, href);
            const color = active ? BRAND_GREEN : MUTED;
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "flex items-center gap-2 border-b-2 pb-1 text-[14px] transition-colors",
                  active ? "border-[#1B5E38]" : "border-transparent hover:text-neutral-700",
                ].join(" ")}
                style={{ color }}
              >
                <Icon className="shrink-0" />
                <span className="leading-tight">{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-8 text-[14px] font-medium md:flex">
          {RIGHT.map((item) => {
            const Icon = item.Icon;
            const isLogin = item.href === "/login";
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1.5 text-[#555555] transition-opacity hover:opacity-80"
                aria-label={isLogin ? "Login" : undefined}
              >
                {Icon ? (
                  item.framedIcon ? (
                    <span className="inline-flex rounded border border-neutral-300/90 p-[3px] text-[#555555]">
                      <Icon className="shrink-0" />
                    </span>
                  ) : (
                    <Icon className="shrink-0" />
                  )
                ) : null}
                {item.label ? <span className="leading-tight">{item.label}</span> : null}
              </Link>
            );
          })}
        </div>

        <div className="flex flex-1 justify-end md:hidden">
          <button
            type="button"
            className="-mr-2 rounded p-2 text-[#555555] outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E38]/25"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-50 bg-black/30 md:hidden"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-drawer"
            className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col border-l border-neutral-200/90 bg-white shadow-xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
          >
            <div className="flex items-center justify-between border-b border-neutral-200/80 px-4 py-3">
              <span className="text-sm font-semibold text-[#555555]">Menu</span>
              <button
                type="button"
                className="rounded p-2 text-[#555555] outline-none focus-visible:ring-2 focus-visible:ring-[#1B5E38]/25"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-0.5 p-4" aria-label="Mobile">
              {NAV.map(({ href, label, Icon }) => {
                const active = isNavActive(pathname, href);
                const color = active ? BRAND_GREEN : MUTED;
                return (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-sm font-medium"
                    style={{
                      color,
                      borderLeft: active ? `3px solid ${BRAND_GREEN}` : "3px solid transparent",
                    }}
                  >
                    <Icon className="shrink-0" />
                    {label}
                  </Link>
                );
              })}
              <div className="my-2 border-t border-neutral-200/80" />
              {RIGHT.map((item) => {
                const Icon = item.Icon;
                const isLogin = item.href === "/login";
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-sm font-medium text-[#555555]"
                    aria-label={isLogin ? "Login" : undefined}
                  >
                    {Icon ? (
                      item.framedIcon ? (
                        <span className="inline-flex rounded border border-neutral-300/90 p-[3px]">
                          <Icon className="shrink-0" />
                        </span>
                      ) : (
                        <Icon className="shrink-0" />
                      )
                    ) : null}
                    {item.label ? item.label : null}
                  </Link>
                );
              })}
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
