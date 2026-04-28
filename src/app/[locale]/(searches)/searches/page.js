"use client";

import { useDispatch, useSelector } from "react-redux";

import Header from "@/components/Header/Header";
import Footer from "@/components/footer";
import {
    setSelectedRentOrSaleOption,
    setSelectedPropertySearchOption,
} from "@/redux/landingPageFilter/slice";
import { searchesPropertyTypeOptions } from "@/constants/options";
import {
    ContentShell,
    PageWrapper,
    SearchesSection,
    SegmentButton,
    SegmentRow,
    TopFilterBar,
} from "./styles";


const SearchesPage = () => {
    const dispatch = useDispatch();
    const {
        selectedRentOrSaleOption,
        selectedPropertySearchOption,
    } = useSelector((state) => state.landingPageFilterSlice);


    return (
        <PageWrapper>
            <Header />
            <SearchesSection>
                <ContentShell>
                    <TopFilterBar>
                        <SegmentRow>
                            <SegmentButton
                                type="button"
                                $active={selectedRentOrSaleOption === "rent"}
                                onClick={() => dispatch(setSelectedRentOrSaleOption("rent"))}
                            >
                                Rent
                            </SegmentButton>
                            <SegmentButton
                                type="button"
                                $active={selectedRentOrSaleOption === "sale"}
                                onClick={() => dispatch(setSelectedRentOrSaleOption("sale"))}
                            >
                                Sale
                            </SegmentButton>
                        </SegmentRow>

                        <SegmentRow>
                            {searchesPropertyTypeOptions.map((propertyType) => (
                                <SegmentButton
                                    key={propertyType}
                                    type="button"
                                    $active={selectedPropertySearchOption === propertyType}
                                    onClick={() =>
                                        dispatch(setSelectedPropertySearchOption(propertyType))
                                    }
                                >
                                    {propertyType}
                                </SegmentButton>
                            ))}
                        </SegmentRow>
                    </TopFilterBar>
                </ContentShell>
            </SearchesSection>
            <Footer />
        </PageWrapper>
    );
};

export default SearchesPage;
