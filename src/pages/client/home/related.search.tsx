import React from 'react';

const RelatedSearch = () => {
    const links = [
        { href: "https://tiki.vn/search?q=harry%20potter%20tr%E1%BB%8Dn%20b%E1%BB%99", text: "harry potter trọn bộ" },
        { href: "https://tiki.vn/search?q=m%C3%B9a%20h%C3%A8%20kh%C3%B4ng%20t%C3%Aan", text: "999 lá thư gửi cho chính mình" },
        { href: "https://tiki.vn/search?q=atomic%20habits", text: "atomic habits" },
        { href: "https://tiki.vn/search?q=roses%20and%20champagne", text: "roses and champagne" },
        { href: "https://tiki.vn/search?q=%C4%91%C3%A1m%20tr%E1%BA%BB%20%E1%BB%9F%20%C4%91%E1%BA%A1i%20d%C6%B0%C6%A1ng%20%C4%91en", text: "đám trẻ ở đại dương đen" },
        { href: "https://tiki.vn/search?q=t%C3%A2m%20l%C3%BD%20h%E1%BB%8Dc%20v%E1%BB%81%20ti%E1%BB%81n", text: "tâm lý học về tiền" },
        { href: "https://tiki.vn/search?q=t%C6%B0%20duy%20nhanh%20v%C3%A0%20ch%E1%BA%Adm", text: "tư duy nhanh và chậm" },
        { href: "https://tiki.vn/search?q=d%C3%A1m%20b%E1%BB%8B%20gh%C3%A9t", text: "dám bị ghét" },
        { href: "https://tiki.vn/search?q=ng%C6%B0%E1%BB%9Di%20b%C3%A0%20t%C3%A0i%20gi%E1%BB%8Fi%20v%C3%B9ng%20saga", text: "người bà tài giỏi vùng saga" },
        { href: "https://tiki.vn/search?q=vi%E1%BB%87t%20nam%20s%E1%BB%AD%20l%C6%B0%E1%BB%A3c", text: "việt nam sử lược" },
        { href: "https://tiki.vn/search?q=tr%E1%BB%91n%20l%C3%AAn%20m%C3%A1i%20nh%C3%A0%20%C4%91%E1%BB%83%20kh%C3%B3c", text: "trốn lên mái nhà để khóc" },
        { href: "https://tiki.vn/search?q=t%E1%BB%99i%20%C3%A1c%20v%C3%A0%20h%C3%ACnh%20ph%E1%BA%A1t", text: "tội ác và hình phạt" },
        { href: "https://tiki.vn/search?q=v%E1%BA%BB%20%C4%91%E1%BA%B9p%20c%E1%BB%A7a%20s%E1%BB%B1%20c%C3%B4%20%C4%91%C6%A1n", text: "vẻ đẹp của sự cô đơn" },
        { href: "https://tiki.vn/search?q=%C4%91%C3%BAng%20vi%E1%BB%87c", text: "đúng việc" },
        { href: "https://tiki.vn/search?q=tri%C3%AAu%20du", text: "triêu du" },
        { href: "https://tiki.vn/search?q=t%E1%BA%A7n%20s%E1%BB%91%20rung%20%C4%91%E1%BB%99ng", text: "tần số rung động" },
        { href: "https://tiki.vn/search?q=%C4%91%E1%BB%A9a%20tr%E1%BA%BB%20hi%E1%BB%83u%20chuy%E1%BB%87n%20th%C6%B0%E1%BB%9Dng%20kh%C3%B4ng%20c%C3%B3%20k%E1%BA%B9o%20%C4%83n", text: "đứa trẻ hiểu chuyện thường không có kẹo ăn" },
        { href: "https://tiki.vn/search?q=con%20%C4%91%C6%B0%E1%BB%9Dng%20ch%E1%BA%B3ng%20m%E1%BA%A5y%20ai%20%C4%91i", text: "con đường chẳng mấy ai đi" },
        { href: "", text: "" },
        { href: "", text: "" }
    ];

    return (
        <div className="sc-10ba12aa-0 bTDJhN">
            <h2 className="sc-9ee36b14-0 hPpiPH"> Tìm Kiếm Liên Quan</h2>
            <div className="sc-10ba12aa-1 wUPLe">
                {links.map((link, index) => (
                    <a key={index} href={link.href}>
                        {link.text}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default RelatedSearch;