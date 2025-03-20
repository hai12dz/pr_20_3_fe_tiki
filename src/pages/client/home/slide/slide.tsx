import React, { useRef } from 'react';

const CarouselComponent = () => {
    // Tạo ref riêng biệt cho mỗi carousel
    const productListRef1 = useRef<HTMLDivElement>(null);
    const productListRef2 = useRef<HTMLDivElement>(null);

    // Chức năng scroll cho carousel thứ nhất
    const scrollLeft1 = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        if (productListRef1.current) {
            productListRef1.current.scrollBy({ left: -100, behavior: "smooth" });
        }
    };

    const scrollRight1 = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        if (productListRef1.current) {
            productListRef1.current.scrollBy({ left: 100, behavior: "smooth" });
        }
    };

    // Chức năng scroll cho carousel thứ hai
    const scrollLeft2 = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        if (productListRef2.current) {
            productListRef2.current.scrollBy({ left: -100, behavior: "smooth" });
        }
    };

    const scrollRight2 = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        if (productListRef2.current) {
            productListRef2.current.scrollBy({ left: 100, behavior: "smooth" });
        }
    };

    return (
        <div className="sc-b118de6a-0 cfnons">
            {/* Carousel thứ nhất */}
            <div>
                <div className="sc-aeef9a0f-0 sc-6be5dba8-0 kCvpXv giHiyf">
                    <div className="sc-6be5dba8-1 jZIHwB">
                        <div className="sc-aeef9a0f-1 bxiHoX"></div>
                        <img
                            src="https://salt.tikicdn.com/ts/tka/1c/a1/00/32b0e70d3c6db98a03f300e89480bc72.png"
                            alt="1980 Books Tại Tiki Trading" className="sc-6be5dba8-2 euPenc" />
                    </div>
                    <div className="sc-6be5dba8-3 lgpwhb">
                        <div style={{ fontSize: "20px", lineHeight: "30px", marginBottom: "4px" }}
                            className="sc-aeef9a0f-2 kyfJKn">Bộ Sưu Tập Sách Mới Giảm Đến 30%</div>
                        <div style={{ display: "flex", alignItems: "center", gap: '3px' }}>
                            <div style={{ fontSize: "14px", lineHeight: "20px" }} className="sc-aeef9a0f-3 eAjAIG">
                                Tài trợ bởi</div>
                            <div style={{ fontSize: "14px", lineHeight: "20px" }} className="sc-aeef9a0f-4 cnyvgK">
                                1980 Books Tại Tiki Trading</div>
                            <div style={{ display: "flex" }}>
                                <div className="sc-eaa6b2b1-0 jNTiiA">5/5</div>
                                <img
                                    src="https://salt.tikicdn.com/ts/upload/04/53/8a/47482447a52b6728573f14e37e228e72.png"
                                    alt="rating-star" className="sc-eaa6b2b1-1 dJHQGE" />
                            </div>
                        </div>
                        <div style={{ marginTop: "auto" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <button onClick={scrollLeft1} className='scroll-button-left'></button>
                                <div
                                    ref={productListRef1}
                                    style={{
                                        display: "flex",
                                        overflow: "auto",
                                        scrollBehavior: "smooth",
                                        width: "208px"
                                    }}
                                    className="sc-aeef9a0f-7 fRchjC"
                                >
                                    <div className="sc-49d535ac-0 bLwwYd" style={{ width: "64px", height: "64px", flexShrink: 0 }}>
                                        <picture className="webpimg-container">
                                            <source type="image/webp"
                                                srcSet="https://salt.tikicdn.com/cache/100x100/ts/product/3a/b9/bb/830a52037db377af2fbb6239c3dd4b6b.jpg.webp" />
                                            <img src="https://salt.tikicdn.com/cache/100x100/ts/product/3a/b9/bb/830a52037db377af2fbb6239c3dd4b6b.jpg"
                                                alt="product-image-undefined"
                                                className="sc-82b4dcf2-0 ldcZGa sc-49d535ac-1 hFsaQw"
                                                srcSet="https://salt.tikicdn.com/cache/100x100/ts/product/3a/b9/bb/830a52037db377af2fbb6239c3dd4b6b.jpg" />
                                        </picture>
                                        <div className="sc-49d535ac-2 iiebSR">-36%</div>
                                    </div>

                                    <div className="sc-49d535ac-0 bLwwYd" style={{ width: "64px", height: "64px", flexShrink: 0 }}>
                                        <picture className="webpimg-container">
                                            <source type="image/webp"
                                                srcSet="https://salt.tikicdn.com/cache/100x100/ts/product/66/85/66/90d7761e878935fd02ad45fb9f7cbbff.jpg.webp" />
                                            <img src="https://salt.tikicdn.com/cache/100x100/ts/product/66/85/66/90d7761e878935fd02ad45fb9f7cbbff.jpg"
                                                alt="product-image-undefined"
                                                className="sc-82b4dcf2-0 ldcZGa sc-49d535ac-1 hFsaQw"
                                                srcSet="https://salt.tikicdn.com/cache/100x100/ts/product/66/85/66/90d7761e878935fd02ad45fb9f7cbbff.jpg" />
                                        </picture>
                                        <div className="sc-49d535ac-2 iiebSR">-25%</div>
                                    </div>

                                    <div className="sc-49d535ac-0 bLwwYd" style={{ width: "64px", height: "64px", flexShrink: 0 }}>
                                        <picture className="webpimg-container">
                                            <source type="image/webp"
                                                srcSet="https://salt.tikicdn.com/cache/100x100/ts/product/f4/d0/2d/0e921326c5b3e62d147af997080b3d31.jpg.webp" />
                                            <img src="https://salt.tikicdn.com/cache/100x100/ts/product/f4/d0/2d/0e921326c5b3e62d147af997080b3d31.jpg"
                                                alt="product-image-undefined"
                                                className="sc-82b4dcf2-0 ldcZGa sc-49d535ac-1 hFsaQw"
                                                srcSet="https://salt.tikicdn.com/cache/100x100/ts/product/f4/d0/2d/0e921326c5b3e62d147af997080b3d31.jpg" />
                                        </picture>
                                        <div className="sc-49d535ac-2 iiebSR">-28%</div>
                                    </div>

                                    <div className="sc-49d535ac-0 bLwwYd" style={{ width: "64px", height: "64px", flexShrink: 0 }}>
                                        <picture className="webpimg-container">
                                            <source type="image/webp"
                                                srcSet="https://salt.tikicdn.com/cache/100x100/ts/product/8d/cd/39/5bbe8e91f15b5fa0f14f50e10fabeca5.jpg.webp" />
                                            <img src="https://salt.tikicdn.com/cache/100x100/ts/product/8d/cd/39/5bbe8e91f15b5fa0f14f50e10fabeca5.jpg"
                                                alt="product-image-undefined"
                                                className="sc-82b4dcf2-0 ldcZGa sc-49d535ac-1 hFsaQw"
                                                srcSet="https://salt.tikicdn.com/cache/100x100/ts/product/8d/cd/39/5bbe8e91f15b5fa0f14f50e10fabeca5.jpg" />
                                        </picture>
                                        <div className="sc-49d535ac-2 iiebSR">-35%</div>
                                    </div>
                                </div>
                                <button onClick={scrollRight1} className="scroll-button-right"></button>

                            </div>
                            <div className="sc-6be5dba8-4 gyfMKP"></div>
                        </div>
                    </div>

                    <a
                        href="https://tiki.vn/sach-truyen-tieng-viet/c316?itm_campaign=CTP_YPD_TKA_BSA_UNK_ALL_UNK_UNK_UNK_UNK_X.273103_Y.1855423_Z.3857321_CN.%255BStore-Ads%255D-1980s&amp;itm_medium=CPC&amp;itm_source=tiki-ads&amp;publisher_vn=33244&amp;seller=1&amp;sort=newest"
                        target="_blank"
                        className="link-overlay"
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1, opacity: 0 }}
                    />
                </div>
            </div>

            {/* Carousel thứ hai */}
            <div>
                <div className="sc-aeef9a0f-0 sc-6be5dba8-0 kCvpXv giHiyf">
                    <div className="sc-6be5dba8-1 jZIHwB">
                        <div className="sc-aeef9a0f-1 bxiHoX"></div>
                        <img
                            src="https://salt.tikicdn.com/ts/tka/1c/a1/00/32b0e70d3c6db98a03f300e89480bc72.png"
                            alt="1980 Books Tại Tiki Trading" className="sc-6be5dba8-2 euPenc" />
                    </div>
                    <div className="sc-6be5dba8-3 lgpwhb">
                        <div style={{ fontSize: "20px", lineHeight: "30px", marginBottom: "4px" }}
                            className="sc-aeef9a0f-2 kyfJKn">Bộ Sưu Tập Sách Mới Giảm Đến 30%</div>
                        <div style={{ display: "flex", alignItems: "center", gap: '3px' }}>
                            <div style={{ fontSize: "14px", lineHeight: "20px" }} className="sc-aeef9a0f-3 eAjAIG">
                                Tài trợ bởi</div>
                            <div style={{ fontSize: "14px", lineHeight: "20px" }} className="sc-aeef9a0f-4 cnyvgK">
                                1980 Books Tại Tiki Trading</div>
                            <div style={{ display: "flex" }}>
                                <div className="sc-eaa6b2b1-0 jNTiiA">5/5</div>
                                <img
                                    src="https://salt.tikicdn.com/ts/upload/04/53/8a/47482447a52b6728573f14e37e228e72.png"
                                    alt="rating-star" className="sc-eaa6b2b1-1 dJHQGE" />
                            </div>
                        </div>
                        <div style={{ marginTop: "auto" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <button onClick={scrollLeft2} className='scroll-button-left' ></button>
                                <div
                                    ref={productListRef2}
                                    style={{
                                        display: "flex",
                                        overflow: "auto",
                                        scrollBehavior: "smooth",
                                        width: "208px"
                                    }}
                                    className="sc-aeef9a0f-7 fRchjC"
                                >
                                    <div className="sc-49d535ac-0 bLwwYd" style={{ width: "64px", height: "64px", flexShrink: 0 }}>
                                        <picture className="webpimg-container">
                                            <source type="image/webp"
                                                srcSet="https://salt.tikicdn.com/cache/100x100/ts/product/3a/b9/bb/830a52037db377af2fbb6239c3dd4b6b.jpg.webp" />
                                            <img src="https://salt.tikicdn.com/cache/100x100/ts/product/3a/b9/bb/830a52037db377af2fbb6239c3dd4b6b.jpg"
                                                alt="product-image-undefined"
                                                className="sc-82b4dcf2-0 ldcZGa sc-49d535ac-1 hFsaQw"
                                                srcSet="https://salt.tikicdn.com/cache/100x100/ts/product/3a/b9/bb/830a52037db377af2fbb6239c3dd4b6b.jpg" />
                                        </picture>
                                        <div className="sc-49d535ac-2 iiebSR">-36%</div>
                                    </div>

                                    <div className="sc-49d535ac-0 bLwwYd" style={{ width: "64px", height: "64px", flexShrink: 0 }}>
                                        <picture className="webpimg-container">
                                            <source type="image/webp"
                                                srcSet="https://salt.tikicdn.com/cache/100x100/ts/product/66/85/66/90d7761e878935fd02ad45fb9f7cbbff.jpg.webp" />
                                            <img src="https://salt.tikicdn.com/cache/100x100/ts/product/66/85/66/90d7761e878935fd02ad45fb9f7cbbff.jpg"
                                                alt="product-image-undefined"
                                                className="sc-82b4dcf2-0 ldcZGa sc-49d535ac-1 hFsaQw"
                                                srcSet="https://salt.tikicdn.com/cache/100x100/ts/product/66/85/66/90d7761e878935fd02ad45fb9f7cbbff.jpg" />
                                        </picture>
                                        <div className="sc-49d535ac-2 iiebSR">-25%</div>
                                    </div>

                                    <div className="sc-49d535ac-0 bLwwYd" style={{ width: "64px", height: "64px", flexShrink: 0 }}>
                                        <picture className="webpimg-container">
                                            <source type="image/webp"
                                                srcSet="https://salt.tikicdn.com/cache/100x100/ts/product/f4/d0/2d/0e921326c5b3e62d147af997080b3d31.jpg.webp" />
                                            <img src="https://salt.tikicdn.com/cache/100x100/ts/product/f4/d0/2d/0e921326c5b3e62d147af997080b3d31.jpg"
                                                alt="product-image-undefined"
                                                className="sc-82b4dcf2-0 ldcZGa sc-49d535ac-1 hFsaQw"
                                                srcSet="https://salt.tikicdn.com/cache/100x100/ts/product/f4/d0/2d/0e921326c5b3e62d147af997080b3d31.jpg" />
                                        </picture>
                                        <div className="sc-49d535ac-2 iiebSR">-28%</div>
                                    </div>

                                    <div className="sc-49d535ac-0 bLwwYd" style={{ width: "64px", height: "64px", flexShrink: 0 }}>
                                        <picture className="webpimg-container">
                                            <source type="image/webp"
                                                srcSet="https://salt.tikicdn.com/cache/100x100/ts/product/8d/cd/39/5bbe8e91f15b5fa0f14f50e10fabeca5.jpg.webp" />
                                            <img src="https://salt.tikicdn.com/cache/100x100/ts/product/8d/cd/39/5bbe8e91f15b5fa0f14f50e10fabeca5.jpg"
                                                alt="product-image-undefined"
                                                className="sc-82b4dcf2-0 ldcZGa sc-49d535ac-1 hFsaQw"
                                                srcSet="https://salt.tikicdn.com/cache/100x100/ts/product/8d/cd/39/5bbe8e91f15b5fa0f14f50e10fabeca5.jpg" />
                                        </picture>
                                        <div className="sc-49d535ac-2 iiebSR">-35%</div>
                                    </div>
                                </div>
                                <button onClick={scrollRight2} className="scroll-button-right"></button>


                            </div>
                            <div className="sc-6be5dba8-4 gyfMKP"></div>
                        </div>
                    </div>

                    <a
                        href="https://tiki.vn/sach-truyen-tieng-viet/c316?itm_campaign=CTP_YPD_TKA_BSA_UNK_ALL_UNK_UNK_UNK_UNK_X.273103_Y.1855423_Z.3857321_CN.%255BStore-Ads%255D-1980s&amp;itm_medium=CPC&amp;itm_source=tiki-ads&amp;publisher_vn=33244&amp;seller=1&amp;sort=newest"
                        target="_blank"
                        className="link-overlay"
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1, opacity: 0 }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CarouselComponent;