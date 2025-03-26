import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './filter.product.scss';
import FilterProduct from './modal.filter';
import { useOutletContext } from 'react-router-dom';
import { getBooksAPI, getBrandsAPI, getFullCategories, getSuppliersAPI } from '@/services/api';

const ProductFilter: React.FC = () => {
    const [brandExpanded, setBrandExpanded] = useState(false);
    const [supplierExpanded, setSupplierExpanded] = useState(false);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [sortMenuVisible, setSortMenuVisible] = useState(false);
    const [selectedSort, setSelectedSort] = useState('Phổ biến');
    const sortOptions = ['Phổ biến', 'Bán chạy', 'Hàng mới', 'Giá thấp đến cao', 'Giá cao đến thấp'];
    const sortButtonRef = useRef<HTMLButtonElement>(null);
    const sortMenuRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [queryFiler, setQueryFilter] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [listBrand, setListBrand] = useState<IBrands[]>([])
    const [listSupplier, setListSupplier] = useState<ISupplier[]>([])
    const [listBook, setListBook] = useState<IBookTable[]>([]);
    const [pageSize, setPageSize] = useState<number>(10);
    const [total, setTotal] = useState<number>(0);
    const [listFullCategory, setListFullCategory] = useState<ICategory[]>([])
    const containerRef = useRef<HTMLDivElement>(null);
    const expandButtonRef = useRef<HTMLButtonElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const [current, setCurrent] = useState<number>(1);
    const [filter, setFilter] = useState<string>("");
    const [sortQuery, setSortQuery] = useState<string>("sort=-sold");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useOutletContext() as any;

    useEffect(() => {
        // Add empty dependency array to prevent infinite rendering

        fetchBrand();
        fetchSupplier();
        fetchFullCategories(); // This function was defined but never called
    }, []);
    useEffect(() => {
        fetchBook();
    }, [current, pageSize, filter, sortQuery]);

    const fetchBook = async () => {
        setIsLoading(true)
        let query = `current=${current}&pageSize=${pageSize}`;
        if (filter) {
            query += `&${filter}`;
        }
        if (sortQuery) {
            query += `&${sortQuery}`;
        }

        if (searchTerm) {
            query += `&mainText=/${searchTerm}/i`;
        }

        const res = await getBooksAPI(query);
        if (res && res.data) {
            setListBook(res.data.items);
            setTotal(res.data.meta.totalItems)
        }
        setIsLoading(false)
    }


    const fetchBrand = async () => {

        const res = await getBrandsAPI();
        setListBrand(res.data!)

    }
    const fetchSupplier = async () => {

        const res = await getSuppliersAPI();
        setListSupplier(res.data!)

    }

    const fetchFullCategories = async () => {
        const res = await getFullCategories()

        setListFullCategory(res.data!)

    }
    const brands = ["Deli", "Thiên Long", "MAGIX", "Hồng Hà"];
    const brandsFull = ["Deli", "Thiên Long", "MAGIX", "Hồng Hà"];

    const suppliers = ["Nhà Sách Vĩnh Thụy", "Bamboo Books", "HỆ THỐNG NHÀ SÁCH AB..."];
    const suppliersFull = ["Nhà Sách Vĩnh Thụy", "Bamboo Books", "HỆ THỐNG NHÀ SÁCH AB...", "info book"];

    const allBrands = [
        "Deli", "Thiên Long", "MAGIX", "Hồng Hà",
        "K&B Handmade", "KLONG", "Pentel", "Stacom",
        "Stabilo", "LAMY", "Plus", "Uyên Loan", "Campus",
        "Baoke", "Enter", "Fahasa", "PROLEA PL", "Bavico",
        "Flexoffice", "Việt Net", "Văn Lang", "The Sun",
        "Artline", "Casio", "Mont Marte", "DAICAT",
        "Kai Nguyên", "PILOT", "Uncle Bills", "Elephant"
    ];

    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

    const handleBrandToggle = () => {
        console.log('Toggle brand modal, current state:', !brandExpanded);
        setBrandExpanded(prev => !prev);
    };

    const handleBrandSelect = (brand: string) => {
        setSelectedBrands(prev =>
            prev.includes(brand)
                ? prev.filter(b => b !== brand)
                : [...prev, brand]
        );
    };

    const handleResetBrands = () => {
        setSelectedBrands([]);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node) &&
            expandButtonRef.current &&
            !expandButtonRef.current.contains(event.target as Node)
        ) {
            setBrandExpanded(false);
        }
    };

    useEffect(() => {
        if (brandExpanded) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [brandExpanded]);

    const renderBrandModal = () => {
        if (!brandExpanded || !expandButtonRef.current) {
            return null;
        }

        const buttonRect = expandButtonRef.current.getBoundingClientRect();

        return ReactDOM.createPortal(
            <div
                ref={modalRef}
                className="brand-selection-modal"
                style={{
                    position: 'absolute',
                    top: `${buttonRect.bottom + window.scrollY + 10}px`,
                    left: `${buttonRect.left + window.scrollX}px`,
                    width: '450px',
                    maxWidth: '90vw',
                    maxHeight: '80vh', // Limit height to 80% of the viewport
                    zIndex: 9999,
                    background: 'white',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    border: '1px solid #E0E0E0',
                    borderRadius: '8px',
                    overflowY: 'auto', // Enable vertical scrollbar for overflow content
                    display: 'flex', // Use flexbox for alignment
                    flexDirection: 'column', // Stack content vertically
                    alignItems: 'flex-start', // Align content to the start
                }}
            >

                <div className="brand-selection-content" style={{ padding: '16px' }}>
                    <div className="brand-selection-options" style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        maxHeight: '300px',
                        overflowY: 'auto'
                    }}>
                        {allBrands.map((brand, index) => (
                            <button
                                key={index}
                                className={`brand-selection-chip ${selectedBrands.includes(brand) ? 'selected' : ''}`}
                                onClick={() => handleBrandSelect(brand)}
                                style={{
                                    border: `1px solid ${selectedBrands.includes(brand) ? '#0B74E5' : '#D8D8D8'}`,
                                    borderRadius: '16px',
                                    padding: '8px 16px',
                                    fontSize: '14px',
                                    background: selectedBrands.includes(brand) ? '#EBF5FF' : 'white',
                                    color: selectedBrands.includes(brand) ? '#0B74E5' : '#38383D',
                                    cursor: 'pointer'
                                }}
                            >
                                {brand}
                            </button>
                        ))}
                    </div>
                    <div className="brand-selection-actions" style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '16px',
                        marginTop: '16px'
                    }}>
                        <button
                            className="reset-button"
                            onClick={handleResetBrands}
                            style={{
                                flex: 1,
                                padding: '12px',
                                borderRadius: '4px',
                                fontSize: '14px',
                                cursor: 'pointer',
                                background: 'white',
                                border: '1px solid #D8D8D8',
                                color: '#38383D'
                            }}
                        >
                            Xóa lọc
                        </button>
                        <button
                            className="apply-button"
                            onClick={handleBrandToggle}
                            style={{
                                flex: 1,
                                padding: '12px',
                                borderRadius: '4px',
                                fontSize: '14px',
                                cursor: 'pointer',
                                background: '#0B74E5',
                                color: 'white',
                                border: 'none'
                            }}
                        >
                            Xem kết quả
                        </button>
                    </div>
                </div>
            </div>,
            document.body
        );
    };

    const handleSupplierToggle = () => {
        setSupplierExpanded(!supplierExpanded);
        setShowLeftArrow(!supplierExpanded);
        setBrandExpanded(false); // Close the modal when toggling supplier
    };

    const handleLeftArrowClick = () => {
        setSupplierExpanded(false);
        setShowLeftArrow(false);
        setBrandExpanded(false); // Close the modal when clicking the left arrow
    };

    useEffect(() => {
        if (containerRef.current) {
            if (supplierExpanded) {
                containerRef.current.style.transform = 'translateX(-80px)';
                containerRef.current.classList.add('translated');
                setShowLeftArrow(true);
            } else {
                containerRef.current.style.transform = 'translateX(0)';
                containerRef.current.classList.remove('translated');
                setShowLeftArrow(false);
            }
        }
    }, [supplierExpanded]);

    // Add useEffect to debug
    useEffect(() => {
        if (brandExpanded) {
            console.log('Brand expanded changed to true');
            // Check if any modals rendered
            setTimeout(() => {
                const modals = document.querySelectorAll('.brand-selection-modal, #brand-modal-fixed');
                console.log('Found modals:', modals.length);
                modals.forEach(modal => {
                    console.log('Modal:', modal);
                    // Force visibility
                    (modal as HTMLElement).style.display = 'block';
                    (modal as HTMLElement).style.visibility = 'visible';
                    (modal as HTMLElement).style.opacity = '1';
                    (modal as HTMLElement).style.zIndex = '999999';
                });
            }, 100);
        }
    }, [brandExpanded]);

    const toggleSortMenu = () => {
        setSortMenuVisible((prev) => !prev);
    };

    const handleSortSelect = (option: string) => {
        setSelectedSort(option);
        setSortMenuVisible(false);
    };

    const handleClickOutsideSortMenu = (event: MouseEvent) => {
        if (
            sortMenuRef.current &&
            !sortMenuRef.current.contains(event.target as Node) &&
            sortButtonRef.current &&
            !sortButtonRef.current.contains(event.target as Node)
        ) {
            setSortMenuVisible(false);
        }
    };

    useEffect(() => {
        if (sortMenuVisible) {
            document.addEventListener('mousedown', handleClickOutsideSortMenu);
        } else {
            document.removeEventListener('mousedown', handleClickOutsideSortMenu);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideSortMenu);
        };
    }, [sortMenuVisible]);

    const renderSortDropdown = () => {
        if (!sortMenuVisible || !sortButtonRef.current) return null;

        const buttonRect = sortButtonRef.current.getBoundingClientRect();

        return ReactDOM.createPortal(
            <div
                ref={sortMenuRef}
                className="sort-menu visible"
                style={{
                    position: 'absolute',
                    top: `${buttonRect.bottom + window.scrollY}px`,
                    right: '70px',
                    width: '200px',
                    background: 'white',
                    border: '1px solid #E0E0E0',
                    borderRadius: '4px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    zIndex: 1000,
                }}
            >
                {sortOptions.map((option, index) => (
                    <div
                        key={index}
                        className={`sort-item ${selectedSort === option ? 'selected' : ''}`}
                        onClick={() => handleSortSelect(option)}
                    >
                        {option}
                        {selectedSort === option && (
                            <img
                                src="https://salt.tikicdn.com/ts/upload/0a/3f/8c/35f5967924f138b30c5840d3907ba081.png"
                                alt="selected"
                                style={{ width: '16px', height: '16px' }}
                            />
                        )}
                    </div>
                ))}
            </div>,
            document.body
        );
    };

    return (
        <div className="product-filter-container">
            {/* Left arrow button */}
            {showLeftArrow && (
                <div onClick={handleLeftArrowClick} className="left-arrow-button arrow-icon-wrapper">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M15.5 17L9.5 11L15.5 5"
                            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )}

            <div className="filter-sections-wrapper">
                <div className="filter-sections" ref={containerRef}>
                    <div className="filter-section-groups">
                        {/* Brand section */}
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
                                    <button ref={expandButtonRef} className="expand-button" onClick={handleBrandToggle}>
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

                        <div className="vertical-divider">|</div>

                        {/* Supplier section */}
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
                    <div
                        onClick={() => { setIsModalOpen(true) }}

                        className="filter-button">
                        <img
                            src="https://salt.tikicdn.com/ts/upload/3f/23/35/2d29fcaea0d10cbb85ce5b0d4cd20add.png"
                            alt="filters"
                            className="filter-icon"
                        />
                        <span>Tất cả</span>
                    </div>
                </div>
            </div>

            {/* Filter options row */}
            <div className="filter-options-row">
                {/* First option */}
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

                {/* Second option */}
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

                {/* Third option */}
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

                {/* Fourth option */}
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

                {/* Sort section */}
                <div className="sort">
                    <span className="sort-label">Sắp xếp</span>
                    <button ref={sortButtonRef} className="sort-button" onClick={toggleSortMenu}>
                        {selectedSort}
                        <svg width="16" height="16" viewBox="0 0 24 24">
                            <path d="M12 16.5L6 10.5L7.4 9.1L12 13.7L16.6 9.1L18 10.5L12 16.5Z" fill="currentColor" />
                        </svg>
                    </button>
                    {renderSortDropdown()}
                </div>
            </div>

            {/* Render the modal outside the normal flow */}
            {brandExpanded && renderBrandModal()}



            <FilterProduct
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                queryFiler={queryFiler}
                setQueryFilter={setQueryFilter}
                listBrand={listBrand}
                listSupplier={listSupplier}
                pageSize={pageSize}
                setListBook={setListBook}
                setTotal={setTotal}
                listFullCategory={listFullCategory}
            />
        </div>
    );
};

export default ProductFilter;