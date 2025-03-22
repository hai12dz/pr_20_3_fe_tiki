// ProductFilter.tsx
import React, { useState } from 'react';
import './filter.product.scss';

const ProductFilter: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const brands = ["Deli", "Thiên Long", "MAGIX", "Hồng Hà"];
    const suppliers = ["Nhà Sách Vĩnh Thụy", "Bamboo Books", "HỆ THỐNG NHÀ SÁCH AB...", "info book"];

    return (
        <div className="product-filter-container">
            <h2 className="filter-title">Tất cả sản phẩm</h2>

            <div className="filter-sections">
                <div className="filter-section">
                    <div className="section-label">Thương hiệu</div>
                    <div className="filter-options">
                        {brands.map((brand, index) => (
                            <button key={index} className="option-chip">
                                {brand}
                            </button>
                        ))}
                        <button className="expand-button" onClick={() => setIsExpanded(!isExpanded)}>
                            <svg width="16" height="16" viewBox="0 0 24 24">
                                <path d="M12 16.5L6 10.5L7.4 9.1L12 13.7L16.6 9.1L18 10.5L12 16.5Z" fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="filter-section">
                    <div className="section-label">Nhà cung cấp</div>
                    <div className="filter-options">
                        {suppliers.map((supplier, index) => (
                            <button key={index} className="option-chip">
                                {supplier}
                            </button>
                        ))}
                        <button className="expand-button">
                            <svg width="16" height="16" viewBox="0 0 24 24">
                                <path d="M12 16.5L6 10.5L7.4 9.1L12 13.7L16.6 9.1L18 10.5L12 16.5Z" fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="filter-options">
                <label className="option">
                    <input type="checkbox" />
                    <span className="now-tag">NOW</span>
                    <span>Giao siêu tốc 2H</span>
                </label>

                <label className="option">
                    <input type="checkbox" />
                    <span className="deal-tag">🔥 TOP DEAL</span>
                    <span>Siêu rẻ</span>
                </label>

                <label className="option">
                    <input type="checkbox" />
                    <span className="freeship-tag">FREESHIP XTRA</span>
                </label>

                <label className="option">
                    <input type="checkbox" />
                    <span className="star-rating">⭐⭐⭐⭐</span>
                    <span>từ 4 sao</span>
                </label>

                <div className="sort">
                    <span>Sắp xếp</span>
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