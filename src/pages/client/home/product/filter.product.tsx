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

                <div onClick={handleLeftArrowClick} className="left-arrow-button arrow-icon-wrapper">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M15.5 17L9.5 11L15.5 5"
                            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
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
                        <img
                            src="https://salt.tikicdn.com/ts/upload/3f/23/35/2d29fcaea0d10cbb85ce5b0d4cd20add.png"
                            alt="filters"
                            className="filter-icon"
                        />
                        <span>Tất cả</span>
                    </div>
                </div>

            </div>

            <div className="filter-options-row">
                <label className="option">
                    <input type="checkbox" />
                    <div className="option-content">
                        <img
                            src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
                            alt="Giao siêu tốc 2H"
                            className="now-tag"
                        />
                        <span className="option-text">Giao siêu tốc 2H</span>
                    </div>
                </label>

                <label className="option">
                    <input type="checkbox" />
                    <div className="option-content">
                        <img
                            src="https://salt.tikicdn.com/ts/upload/b5/aa/48/2305c5e08e536cfb840043df12818146.png"
                            alt="Siêu rẻ"
                            className="deal-tag"
                        />
                        <span className="option-text">Siêu rẻ</span>
                    </div>
                </label>

                <label className="option">
                    <input type="checkbox" />
                    <div className="option-content">
                        <img
                            src="https://salt.tikicdn.com/ts/upload/2f/20/77/0f96cfafdf7855d5e7fe076dd4f34ce0.png"
                            alt="FREESHIP XTRA"
                            className="freeship-tag"
                        />
                    </div>
                </label>

                <label className="option">
                    <input type="checkbox" />
                    <div className="option-content">
                        <div className="star-rating">
                            {[...Array(4)].map((_, index) => (
                                <svg key={index} width="14" height="14" viewBox="0 0 24 24" fill="#FFC400">
                                    <path d="M12 17.8L5.8 21.2L7.3 14.3L2 9.6L9.2 8.7L12 2.5L14.8 8.7L22 9.6L16.7 14.3L18.2 21.2L12 17.8Z" />
                                </svg>
                            ))}
                        </div>
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