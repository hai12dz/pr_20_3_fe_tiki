import { useState } from 'react';
import { SearchOutlined, HomeOutlined, UserOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Badge, Popover, Empty, message, Input, Dropdown, Space, Avatar } from 'antd';
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';
import { useCurrentApp } from 'components/context/app.context';
import { logoutAPI } from '@/services/api';
import ManageAccount from '../client/account';
import { isMobile } from 'react-device-detect';
import './app.new.header.scss';

interface IProps {
    searchTerm: string;
    setSearchTerm: (v: string) => void;
}

const AppHeader = (props: IProps) => {

    const commitments = [
        { src: "https://salt.tikicdn.com/ts/upload/96/76/a3/16324a16c76ee4f507d5777608dab831.png", text: "100% hàng thật" },
        { src: "https://salt.tikicdn.com/ts/upload/11/09/ec/456a2a8c308c2de089a34bbfef1c757b.png", text: "Freeship mọi đơn" },
        { src: "https://salt.tikicdn.com/ts/upload/0b/f2/19/c03ae8f46956eca66845fb9aaadeca1e.png", text: "Hoàn 200% nếu hàng giả" },
        { src: "https://salt.tikicdn.com/ts/upload/3a/f4/7d/86ca29927e9b360dcec43dccb85d2061.png", text: "30 ngày đổi trả" },
        { src: "https://salt.tikicdn.com/ts/upload/87/98/77/fc33e3d472fc4ce4bae8c835784b707a.png", text: "Giao nhanh 2h" },
        { src: "https://salt.tikicdn.com/ts/upload/6a/81/06/0675ef5512c275a594d5ec1d58c37861.png", text: "Giá siêu rẻ" }
    ];


    return (
        <>
            <div style={{ position: "relative", zIndex: 999 }}>
                <a href="https://tiki.vn/khuyen-mai/ngay-hoi-freeship?from=inline_banner">
                    <div style={{ backgroundColor: "#EFFFF4" }} className="jfMKyG">
                        <div style={{ color: "#00AB56" }} className="cGVtRR">
                            Freeship đơn từ 45k, giảm nhiều hơn cùng
                        </div>
                        <picture className="webpimg-container">
                            <source
                                type="image/webp"
                                srcSet="https://salt.tikicdn.com/ts/upload/a7/18/8c/910f3a83b017b7ced73e80c7ed4154b0.png"
                            />
                            <img
                                srcSet="https://salt.tikicdn.com/ts/upload/a7/18/8c/910f3a83b017b7ced73e80c7ed4154b0.png"
                                className="fvWcVx title-img"
                                alt="icon"
                                width="79"
                                height="16"
                                style={{ width: "79px", height: "16px", opacity: 1 }}
                            />
                        </picture>
                    </div>
                </a>
            </div>

            <div>
                <header id="main-header" className="rgsXe">
                    <div className="edZgU">
                        <div className="duXRBJ">
                            <div className="dxEhmH">
                                <a href="/" data-view-id="header_main_logo" className="tiki-logo">
                                    <img
                                        src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png"
                                        alt="tiki-logo"
                                        width="96"
                                        height="40"
                                    />
                                    <span>Tốt &amp; Nhanh</span>
                                </a>
                            </div>
                            <div className="ljZvVE">
                                <div className="gypTeU">
                                    <div className="hqCsjg">
                                        <div className="cYLtAT">
                                            <div className="cfhkdd">
                                                <img
                                                    className="icon-search"
                                                    src="https://salt.tikicdn.com/ts/upload/33/d0/37/6fef2e788f00a16dc7d5a1dfc5d0e97a.png"
                                                    alt="icon-search"
                                                />
                                                <input
                                                    data-view-id="main_search_form_input"
                                                    type="text"
                                                    placeholder="Freeship đơn từ 45k"
                                                    className="lgENLJ"
                                                    defaultValue=""
                                                />
                                                <button
                                                    data-view-id="main_search_form_button"
                                                    className="agnbj"
                                                >
                                                    Tìm kiếm
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-view-id="header_user_shortcut" className="cFDjju">
                                        <div className="hTmXuX">
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/b4/90/74/6baaecfa664314469ab50758e5ee46ca.png"
                                                alt="header_menu_item_home"
                                            />
                                            <a rel="nofollow">Trang chủ</a>
                                        </div>
                                        <div data-view-id="header_header_account_container" className="hTmXuX">
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png"
                                                alt="header_header_account_img"
                                            />
                                            <span>Tài khoản</span>
                                        </div>
                                        <div className="cLQssM">
                                            <a data-view-id="header_user_shortcut_cart" href="#" rel="nofollow">
                                                <div className="fstAJs fcjrQq">
                                                    <div className="cart-wrapper">
                                                        <img
                                                            className="cart-icon"
                                                            src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png"
                                                            alt="header_header_img_Cart"
                                                        />
                                                        <span className="eusHvB">0</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="dtcpAn">
                                    <div data-view-id="header_quicklinks_container" className="bbUcuP">
                                        {["điện gia dụng", "xe cộ", "mẹ & bé", "khỏe đẹp", "nhà cửa", "sách", "thể thao", "agatha christie", "bốn thoả ước", "chiến tranh tiền tệ"].map((item, index) => (
                                            <a key={index} data-view-id="header_quicklinks_item" data-view-index={index} href="#">
                                                {item}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="fKRaGb revamp">
                                        <div className="delivery-zone__heading">
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/88/5c/9d/f5ee506836792eb7775e527ef8350a44.png"
                                                alt="header-icon-location"
                                            />
                                            <h4 className="title">Giao đến:</h4>
                                            <div className="address">Bạn muốn giao hàng tới đâu?</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div style={{ backgroundColor: "white" }} className="sc-cc99b0e2-0 fzFpkg">
                    <a href="https://tiki.vn/thong-tin/tiki-doi-tra-de-dang-an-tam-mua-sam" className="sc-cc99b0e2-1 klHtaf">
                        <div style={{ color: "#003EA1" }} className="sc-cc99b0e2-2 iMmKHC">Cam kết</div>
                        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                            {[...Array(6).keys()].map((index) => (
                                <>
                                    <div style={{ display: "flex", gap: "4px", paddingInline: "6px", alignItems: "center" }}>
                                        <picture className="webpimg-container">
                                            <source type="image/webp" srcSet={`https://salt.tikicdn.com/ts/upload/${index === 0 ? "96/76/a3/16324a16c76ee4f507d5777608dab831.png" : index === 1 ? "11/09/ec/456a2a8c308c2de089a34bbfef1c757b.png" : index === 2 ? "0b/f2/19/c03ae8f46956eca66845fb9aaadeca1e.png" : index === 3 ? "3a/f4/7d/86ca29927e9b360dcec43dccb85d2061.png" : index === 4 ? "87/98/77/fc33e3d472fc4ce4bae8c835784b707a.png" : "6a/81/06/0675ef5512c275a594d5ec1d58c37861.png"}`} />
                                            <img className={`sc-82b4dcf2-0 ldcZGa title-img-${index}`} src={`https://salt.tikicdn.com/ts/upload/${index === 0 ? "96/76/a3/16324a16c76ee4f507d5777608dab831.png" : index === 1 ? "11/09/ec/456a2a8c308c2de089a34bbfef1c757b.png" : index === 2 ? "0b/f2/19/c03ae8f46956eca66845fb9aaadeca1e.png" : index === 3 ? "3a/f4/7d/86ca29927e9b360dcec43dccb85d2061.png" : index === 4 ? "87/98/77/fc33e3d472fc4ce4bae8c835784b707a.png" : "6a/81/06/0675ef5512c275a594d5ec1d58c37861.png"}`} alt={`icon-${index}`} width="20" height="20" />
                                        </picture>
                                        <div style={{ color: "#27272A", fontSize: "12px", fontWeight: "500", whiteSpace: "nowrap" }}>
                                            {index === 0 ? "100% hàng thật" : index === 1 ? "Freeship mọi đơn" : index === 2 ? "Hoàn 200% nếu hàng giả" : index === 3 ? "30 ngày đổi trả" : index === 4 ? "Giao nhanh 2h" : "Giá siêu rẻ"}
                                        </div>
                                    </div>
                                    {index < 5 && <div style={{ width: "1px", height: "20px", background: "#EBEBF0" }}></div>}
                                </>
                            ))}
                        </div>
                    </a>
                </div>








            </div>

        </>
    );
};

export default AppHeader;