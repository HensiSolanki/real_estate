"use client";

import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCityPopUpOpen } from "@/redux/landingPageFilter/slice";

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
import CityPopUpModel from "../popUpModels/cityPopUp/index.js";

const DailyRentFilterOption = () => {
    const dispatch = useDispatch();
    const { dailyrentStartDate, dailyrentEndDate, cityPopUpOpen, dailyrentCity } =
        useSelector((state) => state.landingPageFilterSlice);
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
                        const isCityFilter = id === "city";
                        const isActive = isDateFilter
                            ? dateFilterActive
                            : isCityFilter
                              ? cityPopUpOpen || Boolean(dailyrentCity)
                              : false;
                        const displayLabel = isDateFilter
                            ? formatDateChipLabel(
                                selectedStartDate ?? today,
                                selectedEndDate ?? tomorrow,
                            )
                            : isCityFilter
                              ? (dailyrentCity ?? label)
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

                        if (isCityFilter) {
                            return (
                                <FilterButton
                                    key={id}
                                    type="button"
                                    $active={isActive}
                                    $compact
                                    aria-pressed={isActive}
                                    aria-expanded={cityPopUpOpen}
                                    onClick={() =>
                                        dispatch(setCityPopUpOpen(!cityPopUpOpen))
                                    }
                                >
                                    <FilterButtonIcon aria-hidden="true">
                                        <Icon />
                                    </FilterButtonIcon>
                                    <FilterButtonText>{displayLabel}</FilterButtonText>
                                </FilterButton>
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
            <CityPopUpModel />
        </FilterSection>
    );
};

export default DailyRentFilterOption;