import { createSlice } from "@reduxjs/toolkit";
import {
    cityFilterOptions as defaultCityFilterOptions,
    listingOptionsFilter,
    propertyOptionsFilter,
} from "@/constants/options";

const initialState = {
    listingOptions: listingOptionsFilter[0],
    propertyOptions: propertyOptionsFilter[0],
    selectedCity: null,
    callNowPopupOpen: false,
    callNowPopupTargetId: null,
    isLoading: false,
    error: null,
    cityFilterOptions: defaultCityFilterOptions,
};

const landingPageFilterSlice = createSlice({
    name: "landingPageFilterSlice",
    initialState,
    reducers: {
        setListingOptions: (state, { payload }) => {
            state.listingOptions = payload;
        },
        setPropertyOptions: (state, { payload }) => {
            state.propertyOptions = payload;
        },
        setSelectedCity: (state, { payload }) => {
            state.selectedCity = payload;
        },
        setCallNowPopupOpen: (state, { payload }) => {
            state.callNowPopupOpen = payload;
            if (!payload) {
                state.callNowPopupTargetId = null;
            }
        },
        setCallNowPopupTargetId: (state, { payload }) => {
            state.callNowPopupTargetId = payload;
        },
        setCityFilterOptions: (state, { payload }) => {
            state.cityFilterOptions = payload;
        },
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        setError: (state, { payload }) => {
            state.error = payload;
        },
    },
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(getUserAction.pending, (state) => {
    //       state.isLoading = true;
    //     })
    //     .addCase(getUserAction.fulfilled, (state, action) => {
    //       state.userData = action.payload;
    //       state.getUserData = action.payload;
    //       state.isLoading = false;
    //       state.error = null;
    //       state.notificationType = action.payload?.data?.notificationType == 1 ? false : true
    //       state.allNotifications = action.payload?.data?.isAllNotificationsEnabled
    //       state.matchNotifications = action.payload?.data?.isMatchNotification
    //       state.likeNotifications = action.payload?.data?.isSuperLikesNotification
    //       // state.imageNotifications = action.payload?.data?.isImageStatusNotification

    //     })
    //     .addCase(getUserAction.rejected, (state, action) => {
    //       state.isLoading = false;
    //       state.error = action.error.message || "Error fetching user data";
    //     })

    // },
});

export const landingPageFilterSliceReducer = landingPageFilterSlice.reducer;

export const {
    setListingOptions,
    setPropertyOptions,
    setSelectedCity,
    setCallNowPopupOpen,
    setCallNowPopupTargetId,
    setCityFilterOptions,
    setIsLoading,
    setError,
} = landingPageFilterSlice.actions;