import React from 'react';

const TikiBestsellers = () => {
    const bestsellers = [
        {
            name: "NEXUS - Lược Sử Của Những Mạng Lưới Thông Tin Từ Thời Đại Đồ Đá Đến Trí Tuệ Nhân Tạo",
            price: "360.800",
            url: "https://tiki.vn/nexus-luoc-su-cua-nhung-mang-luoi-thong-tin-tu-thoi-dai-do-da-den-tri-tue-nhan-tao-p276159943.html"
        },
        {
            name: "Chat GPT Thực Chiến",
            price: "113.700",
            url: "https://tiki.vn/chat-gpt-thuc-chien-p275702538.html"
        },
        {
            name: "Dẫn Dắt Một Bầy Sói Hay Chăn Một Đàn Cừu",
            price: "129.500",
            url: "https://tiki.vn/dan-dat-mot-bay-soi-hay-chan-mot-ddan-cuu-p275406600.html"
        },
        {
            name: "Nói Chuyện Là Bản Năng, Giữ Miệng Là Tu Dưỡng, Im Lặng Là Trí Tuệ",
            price: "111.510",
            url: "https://tiki.vn/noi-chuyen-la-ban-nang-giu-mieng-la-tu-duong-im-lang-la-tri-tue-p273844986.html"
        },
        {
            name: "Thao Túng Tâm Lý",
            price: "126.000",
            url: "https://tiki.vn/thao-tung-tam-ly-p273844978.html"
        },
        {
            name: "Giải mã Hoóc-môn Dopamine",
            price: "145.000",
            url: "https://tiki.vn/giai-ma-hooc-mon-dopamine-p263070154.html"
        },
        {
            name: "Personal Best American B1+ Intermediate Pack B",
            price: "228.920",
            url: "https://tiki.vn/personal-best-american-b1-intermediate-pack-b-sb-wb-e-learning-p225269677.html"
        },
        {
            name: "Bookmark kẹp sách giấy cứng",
            price: "2.000",
            url: "https://tiki.vn/bookmark-kep-sach-giay-cung-p209389165.html"
        },
        {
            name: "Black Jack - Tập 13 (Bìa Mềm)",
            price: "29.100",
            url: "https://tiki.vn/black-jack-tap-13-bia-mem-p195801686.html"
        },
        {
            name: "Blue Period - Tập 03",
            price: "44.700",
            url: "https://tiki.vn/blue-period-tap-03-p194960721.html"
        }
    ];

    return (
        <div className="sc-37a54662-0 hnXIPX">
            <h2>Top Bán Chạy Sản Phẩm {/* */}Nhà Sách Tiki</h2>
            <ol>
                {bestsellers.map((book, index) => (
                    <li key={index}>
                        <a href={book.url}>
                            <span className="best-sale-name">{book.name}</span>
                            <span className="best-sale-price">{book.price}<sup>₫</sup></span>
                        </a>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TikiBestsellers;