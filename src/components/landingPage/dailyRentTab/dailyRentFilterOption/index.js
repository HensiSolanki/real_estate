"use client";

import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import {
    FilterBar,
    FilterButton,
    FilterButtonIcon,
    FilterButtonText,
    FilterSection,
    FilterShell,
} from "./style";
import { dailyRentFilterOptions } from "@/constants/options";
import DateRangePopup from "./dateRangePopup";
import {
    formatDateChipLabel,
    getTomorrowDate,
    normalizeDate,
    parseDateKey,
} from "@/utils/globalFunctions";

const DailyRentFilterOption = () => {
    const { dailyrentStartDate, dailyrentEndDate } = useSelector(
        (state) => state.landingPageFilterSlice,
    );
    const [calendarOpen, setCalendarOpen] = useState(false);

    const today = useMemo(() => normalizeDate(new Date()), []);
    const tomorrow = useMemo(() => getTomorrowDate(today), [today]);

    const selectedStartDate = useMemo(
        () => parseDateKey(dailyrentStartDate),
        [dailyrentStartDate],
    );
    const selectedEndDate = useMemo(
        () => parseDateKey(dailyrentEndDate),
        [dailyrentEndDate],
    );
    const dateFilterActive = Boolean(selectedStartDate && selectedEndDate);

    const onDateFilterClick = () => {
        setCalendarOpen(true);
    };

    return (
        <FilterSection>
            <FilterShell>
                <FilterBar role="toolbar" aria-label="Daily rent filters">
                    {dailyRentFilterOptions.map(({ id, label, icon: Icon }) => {
                        const isDateFilter = id === "date";
                        const isActive = isDateFilter ? dateFilterActive : false;
                        const displayLabel = isDateFilter
                            ? formatDateChipLabel(
                                selectedStartDate ?? today,
                                selectedEndDate ?? tomorrow,
                            )
                            : label;

                        if (isDateFilter) {
                            return (
                                <div key={id}>
                                    <FilterButton
                                        type="button"
                                        $active={isActive}
                                        $compact={false}
                                        aria-pressed={isActive}
                                        aria-expanded={calendarOpen}
                                        aria-controls="daily-rent-calendar-panel"
                                        onClick={onDateFilterClick}
                                    >
                                        <FilterButtonIcon aria-hidden="true">
                                            <Icon />
                                        </FilterButtonIcon>
                                        <FilterButtonText>{displayLabel}</FilterButtonText>
                                    </FilterButton>
                                </div>
                            );
                        }

                        return (
                            <FilterButton
                                key={id}
                                type="button"
                                $active={isActive}
                                $compact={id !== "date"}
                                aria-pressed={isActive}
                            >
                                <FilterButtonIcon aria-hidden="true">
                                    <Icon />
                                </FilterButtonIcon>
                                <FilterButtonText>{displayLabel}</FilterButtonText>
                            </FilterButton>
                        );
                    })}
                </FilterBar>
            </FilterShell>

            <DateRangePopup
                isOpen={calendarOpen}
                onClose={() => setCalendarOpen(false)}
            />
        </FilterSection>
    );
};

export default DailyRentFilterOption;