import React, { useState, useRef, useEffect } from 'react';
import './filter.product.scss';

const ProductFilter: React.FC = () => {
    const [brandExpanded, setBrandExpanded] = useState(false);
    const [supplierExpanded, setSupplierExpanded] = useState(false);
    const [showLeftArrow, setShowLeftArrow] = useState(false);

    // Single ref for the main container
    const containerRef = useRef<HTMLDivElement>(null);

    const brands = ["Deli", "Thiên Long", "MAGIX", "Hồng Hà"];
    const brandsFull = ["Deli", "Thiên Long", "MAGIX", "Hồng Hà"];

    const suppliers = ["Nhà Sách Vĩnh Thụy", "Bamboo Books", "HỆ THỐNG NHÀ SÁCH AB..."];
    const suppliersFull = ["Nhà Sách Vĩnh Thụy", "Bamboo Books", "HỆ THỐNG NHÀ SÁCH AB...", "info book"];

    const handleSupplierToggle = () => {
        setSupplierExpanded(!supplierExpanded);
        setShowLeftArrow(!supplierExpanded);
    };

    const handleLeftArrowClick = () => {
        setSupplierExpanded(false);
        setShowLeftArrow(false);
    };

    const handleBrandToggle = () => {
        setBrandExpanded(!brandExpanded);
    };

    useEffect(() => {
        if (containerRef.current) {
            if (supplierExpanded) {
                // When supplier is expanded, shift the whole container left
                containerRef.current.style.transform = 'translateX(-80px)';
                containerRef.current.classList.add('translated'); // Add class to help with CSS targeting
                setShowLeftArrow(true);
            } else {
                // Reset transform when collapsed
                containerRef.current.style.transform = 'translateX(0)';
                containerRef.current.classList.remove('translated'); // Remove class when not translated
                setShowLeftArrow(false);
            }
        }
    }, [supplierExpanded]);

    return (
        <div className="product-filter-container">
            {/* Independent left arrow button outside the main container */}
            {showLeftArrow && (
                <button
                    className="left-arrow-button"
                    onClick={handleLeftArrowClick}
                >
                    <div className="arrow-icon-wrapper">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M15.5 17L9.5 11L15.5 5"
                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </button>
            )}

            <div className="filter-sections-wrapper">
                {/* Main container with single ref - Make sure the vertical divider is inside this container */}
                <div className="filter-sections" ref={containerRef}>
                    <div className="filter-section-groups">
                        <div className="filter-sections-brand">
                            <div className="filter-section">
                                <div className="section-label">Thương hiệu</div>
                                <div className="filter-options-wrapper">
                                    <div className="brand-options-container">
                                        <div className="filter-options">
                                            {(brandExpanded ? brandsFull : brands).map((brand, index) => (
                                                <button key={index} className="option-chip">
                                                    {brand}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <button className="expand-button" onClick={handleBrandToggle}>
                                        <svg width="16" height="16" viewBox="0 0 24 24">
                                            <path d={brandExpanded ? "M15.5 11L9.5 17L3.5 11" : "M12 16.5L6 10.5L7.4 9.1L12 13.7L16.6 9.1L18 10.5L12 16.5Z"}
                                                stroke={brandExpanded ? "currentColor" : undefined}
                                                fill={brandExpanded ? "none" : "currentColor"}
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Vertical divider with visible character */}
                        <div className="vertical-divider">|</div>

                        <div className="filter-sections-supplier">
                            <div className="filter-section">
                                <div className="section-label">Nhà cung cấp</div>
                                <div className="filter-options-wrapper">
                                    <div className="supplier-options-container">
                                        <div className="filter-options">
                                            {(supplierExpanded ? suppliersFull : suppliers).map((supplier, index) => (
                                                <button key={index} className="option-chip">
                                                    {supplier}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <button className="arrow-button" onClick={handleSupplierToggle}>
                                        <div className="arrow-icon-wrapper">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                <path d={supplierExpanded ? "M15.5 11L9.5 17L3.5 11" : "M9.5 17L15.5 11L9.5 5"}
                                                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filter-header">
                    <div className="filter-button">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M18 4H6C5.4 4 5 4.4 5 5V6.6C5 7.3 5.3 7.9 5.7 8.3L10 12.4V19C10 19.4 10.2 19.7 10.6 19.9L12.6 20.9C13.2 21.2 14 20.8 14 20.1V12.4L18.3 8.3C18.7 7.9 19 7.3 19 6.6V5C19 4.4 18.6 4 18 4Z" fill="currentColor" />
                        </svg>
                        <span>Tất cả</span>
                    </div>
                </div>
            </div>

            <div className="filter-options-row">
                <label className="option">
                    <input type="checkbox" />
                    <div className="option-content">
                        <span className="now-tag">NOW</span>
                        <span className="option-text">Giao siêu tốc 2H</span>
                    </div>
                </label>

                <label className="option">
                    <input type="checkbox" />
                    <div className="option-content">
                        <span className="deal-tag">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M12 18.5C11.8 18.5 11.6 18.4 11.4 18.3L9.9 17.2C6.6 14.7 2 11.2 2 7C2 4 4.2 1.5 7 1.5C8.4 1.5 9.8 2.1 11 3C12.2 2 13.6 1.5 15 1.5C17.8 1.5 20 4 20 7C20 11.3 15.4 14.7 12.1 17.2L10.6 18.3C10.4 18.4 10.2 18.5 10 18.5H12Z" fill="#FF424F" />
                            </svg>
                            TOP DEAL
                        </span>
                        <span className="option-text">Siêu rẻ</span>
                    </div>
                </label>

                <label className="option">
                    <input type="checkbox" />
                    <div className="option-content">
                        <span className="freeship-tag">FREESHIP XTRA</span>
                    </div>
                </label>

                <label className="option">
                    <input type="checkbox" />
                    <div className="option-content">
                        <span className="star-rating">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFC400">
                                <path d="M12 17.8L5.8 21.2L7.3 14.3L2 9.6L9.2 8.7L12 2.5L14.8 8.7L22 9.6L16.7 14.3L18.2 21.2L12 17.8Z" />
                            </svg>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFC400">
                                <path d="M12 17.8L5.8 21.2L7.3 14.3L2 9.6L9.2 8.7L12 2.5L14.8 8.7L22 9.6L16.7 14.3L18.2 21.2L12 17.8Z" />
                            </svg>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFC400">
                                <path d="M12 17.8L5.8 21.2L7.3 14.3L2 9.6L9.2 8.7L12 2.5L14.8 8.7L22 9.6L16.7 14.3L18.2 21.2L12 17.8Z" />
                            </svg>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFC400">
                                <path d="M12 17.8L5.8 21.2L7.3 14.3L2 9.6L9.2 8.7L12 2.5L14.8 8.7L22 9.6L16.7 14.3L18.2 21.2L12 17.8Z" />
                            </svg>
                        </span>
                        <span className="option-text">từ 4 sao</span>
                    </div>
                </label>

                <div className="sort">
                    <span className="sort-label">Sắp xếp</span>
                    <button className="sort-button">
                        <span>Phổ biến</span>
                        <svg width="16" height="16" viewBox="0 0 24 24">
                            <path d="M12 16.5L6 10.5L7.4 9.1L12 13.7L16.6 9.1L18 10.5L12 16.5Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductFilter;