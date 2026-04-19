"use client";

import type { FC } from "react";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";

import {
  IconBuildingSvg,
  IconCalendarSvg,
  IconChartSvg,
  IconMapFoldedSvg,
  IconUserFramedSvg,
  SaudiMapSilhouetteSvg,
} from "@/assets";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Link } from "@/i18n/navigation";
import { setHeaderTabOptions } from "@/redux/header/slice";

type TabIcon = FC<{ className?: string }>;

type RightLink = {
  href: string;
  labelKey?: "mapSearch" | "addListing";
  Icon?: TabIcon;
  framedIcon?: boolean;
};

const MAIN_TABS = [
  { index: 0, labelKey: "realEstate" as const, Icon: IconBuildingSvg },
  { index: 1, labelKey: "projects" as const, Icon: IconChartSvg },
  { index: 2, labelKey: "dailyRent" as const, Icon: IconCalendarSvg },
] as const;

const RIGHT: RightLink[] = [
  { href: "/map", labelKey: "mapSearch", Icon: IconMapFoldedSvg },
  { href: "/add-listing", labelKey: "addListing" },
  { href: "/login", Icon: IconUserFramedSvg, framedIcon: true },
];

export default function Header() {
  const dispatch = useDispatch();
  const t = useTranslations("Header");
  const activeTab = useSelector(
    (state: { headerApiSlice: { headerTabOptions: number } }) =>
      state.headerApiSlice.headerTabOptions,
  );

  const fontUi =
    "font-[family-name:var(--font-inter),ui-sans-serif,system-ui,sans-serif]";

  return (
    <header
      className={`sticky top-0 z-40 overflow-x-hidden border-b border-neutral-200/80 bg-white text-[15px] font-medium leading-none tracking-[-0.01em] text-neutral-800 dark:bg-white ${fontUi}`}
    >
      <div className="relative mx-auto flex h-[52px] w-full min-w-0 max-w-[1280px] items-center px-[7px] min-[641px]:px-[32px] lg:px-[110px]">
        <div className="flex min-w-0 flex-1 justify-start">
          <Link
            href="/"
            onClick={() => dispatch(setHeaderTabOptions(0))}
            className="flex shrink-0 items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-brand/25"
          >
            <div className="flex flex-col items-end leading-none text-brand">
              <span
                className="text-[1.0625rem] font-bold tracking-tight"
                dir="rtl"
                lang="ar"
                style={{
                  fontFamily: "var(--font-noto-arabic), system-ui, sans-serif",
                }}
              >
                {t("brandArabic")}
              </span>
              <span className="mt-0.5 text-[0.6875rem] font-bold uppercase tracking-[0.22em]">
                {t("brandLatin")}
              </span>
            </div>
            <SaudiMapSilhouetteSvg className="h-9 w-[1.85rem] shrink-0 text-brand" />
          </Link>
        </div>

        <nav
          className="absolute left-1/2 z-10 hidden max-w-[min(520px,calc(100%-15rem))] -translate-x-1/2 items-center gap-3 md:flex md:gap-4 lg:max-w-none lg:gap-9"
          aria-label={t("navMain")}
        >
          {MAIN_TABS.map(({ index, labelKey, Icon }) => {
            const active = activeTab === index;
            return (
              <button
                key={index}
                type="button"
                onClick={() => dispatch(setHeaderTabOptions(index))}
                className={[
                  "flex shrink-0 items-center gap-1.5 border-b-2 pb-1 text-[12px] transition-colors sm:gap-2 sm:text-[13px] lg:text-[14px]",
                  active
                    ? "border-brand text-brand"
                    : "border-transparent text-muted hover:text-neutral-700",
                ].join(" ")}
              >
                <Icon className="shrink-0" />
                <span className="leading-tight">{t(labelKey)}</span>
              </button>
            );
          })}
        </nav>

        <div className="relative z-20 hidden min-w-0 flex-1 items-center justify-end gap-2 text-[12px] font-medium md:flex md:gap-3 lg:gap-5 lg:text-[14px]">
          <LanguageSwitcher />
          {RIGHT.map((item) => {
            const Icon = item.Icon;
            const isLogin = item.href === "/login";
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1.5 text-muted transition-opacity hover:opacity-80"
                aria-label={isLogin ? t("login") : undefined}
              >
                {Icon ? (
                  item.framedIcon ? (
                    <span className="inline-flex rounded border border-neutral-300/90 p-[3px] text-muted">
                      <Icon className="shrink-0" />
                    </span>
                  ) : (
                    <Icon className="shrink-0" />
                  )
                ) : null}
                {item.labelKey ? (
                  <span className="leading-tight">{t(item.labelKey)}</span>
                ) : null}
              </Link>
            );
          })}
        </div>

        <div className="flex flex-1 items-center justify-end gap-1.5 md:hidden">
          <LanguageSwitcher />
          <Link
            href="/map"
            className="rounded p-1.5 text-muted transition-opacity hover:opacity-80"
            aria-label={t("ariaMapSearch")}
          >
            <IconMapFoldedSvg className="h-[1.15rem] w-[1.15rem] shrink-0" />
          </Link>
          <Link
            href="/add-listing"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand text-xl leading-none text-white transition-opacity hover:opacity-90"
            aria-label={t("ariaAddListing")}
          >
            +
          </Link>
          <Link
            href="/login"
            className="rounded p-1.5 text-muted transition-opacity hover:opacity-80"
            aria-label={t("login")}
          >
            <span className="inline-flex rounded border border-neutral-300/90 p-[2px] text-muted">
              <IconUserFramedSvg className="h-[1.15rem] w-[1.15rem] shrink-0" />
            </span>
          </Link>
        </div>
      </div>

      <div className="border-t border-neutral-200/70 md:hidden">
        <nav
          className="mx-auto flex w-full min-w-0 max-w-[1280px] items-center px-[7px]"
          aria-label={t("navMobile")}
        >
          {MAIN_TABS.map(({ index, labelKey, Icon }) => {
            const active = activeTab === index;
            return (
              <button
                key={index}
                type="button"
                onClick={() => dispatch(setHeaderTabOptions(index))}
                className={[
                  "flex flex-1 items-center justify-center gap-2 border-b-[3px] px-1 py-3 text-[0.95rem] font-medium transition-colors",
                  active
                    ? "border-brand text-brand"
                    : "border-transparent text-[#3f3f46]",
                ].join(" ")}
              >
                <Icon className="shrink-0" />
                <span className="leading-tight">{t(labelKey)}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
