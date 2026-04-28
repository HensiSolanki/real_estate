import styled from "styled-components";

export const PageWrapper = styled.div`
    background: #ffffff;
`;

export const SearchesSection = styled.main`
    width: 100%;
    padding: 10px 7px 8px;
    background: #f4f7f8;

    @media (min-width: 641px) {
        padding: 12px 32px 10px;
    }

    @media (min-width: 1024px) {
        padding: 12px 110px 10px;
    }
`;

export const ContentShell = styled.div`
    margin: 0 auto;
    max-width: 1060px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #e3e8ea;
    border-radius: 10px;
    background: #f8fafa;
    padding: 14px;
`;

export const TopFilterBar = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 4px;
    margin-bottom: 0;
    -webkit-overflow-scrolling: touch;
`;

export const SegmentRow = styled.div`
    display: flex;
    align-items: stretch;
    gap: 0;
    width: fit-content;
    border: 1px solid #d8e0e2;
    border-radius: 8px;
    overflow: hidden;
    background: #ffffff;
`;

export const SegmentButton = styled.button`
    font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
    border: none;
    border-right: 1px solid #d8e0e2;
    background: ${({ $active }) =>
        $active ? "var(--color-brand-soft)" : "transparent"};
    color: ${({ $active }) => ($active ? "var(--color-brand)" : "#374151")};
    font-size: 15px;
    font-weight: 600;
    line-height: 1;
    min-height: 42px;
    padding: 0 20px;
    cursor: pointer;
    white-space: nowrap;

    &:last-child {
        border-right: none;
    }

    &:focus-visible {
        outline: 2px solid var(--color-brand);
        outline-offset: -2px;
    }
`;
