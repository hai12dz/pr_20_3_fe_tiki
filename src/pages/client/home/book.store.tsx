import { Carousel } from "antd";
import TikiAdsComponent from "./ads";
import CarouselComponent from "./slide/slide";
import MyCarousel from "./slide/carousel";

const TikiBookstore = () => {
    return (
        <div className="sc-dfad4f1d-3 TjGns">
            <div className="sc-4b956788-0 dUZwur">
                <h2>Nhà Sách Tiki</h2>
            </div>

            <MyCarousel />




            <div className="sc-9f1e84db-0 hzwFlv">
                <div className="sc-9f1e84db-2 cASiea">Khám phá theo danh mục</div>
                <div className="sc-9f1e84db-1 iNVZwz">
                    {[
                        { link: "/sach-tieng-anh/c320", imgSrc: "https://salt.tikicdn.com/ts/category/cc/66/3d/4e4f1b8b1e772fe9e09611c6bec98746.png", label: "English Books" },
                        { link: "/sach-truyen-tieng-viet/c316", imgSrc: "https://salt.tikicdn.com/ts/category/53/0f/bc/f6e936554ec845b45af8f94cbd4f1569.png", label: "Sách tiếng Việt" },
                        { link: "/van-phong-pham-qua-luu-niem/c7741", imgSrc: "https://salt.tikicdn.com/ts/category/45/ab/0f/cffe9f60a7b37e0f87a9c50c4478aed9.png", label: "Văn phòng phẩm" },
                        { link: "/qua-luu-niem/c18328", imgSrc: "https://salt.tikicdn.com/ts/category/17/59/4f/af1292bf74c4d2862afd269bdfd42a62.png", label: "Quà lưu niệm" }
                    ].map((item, index) => (
                        <a key={index} href={item.link}>
                            <div className="sc-9f1e84db-3 jhfSVS">
                                <div className="sc-9f1e84db-4 bxgzHY">
                                    <img src={item.imgSrc} width="88" height="88" alt={item.label} />
                                </div>
                                <div className="sc-9f1e84db-5 cZlEPY">{item.label}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <div style={{ height: "436px" }} className="sc-e7181281-2 hrzgqR">
                <div className="sc-e7181281-3 dpPpxv">Nhập khẩu chính hãng</div>
                <div className="sc-e7181281-1 iCGauc">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", columnGap: "8px" }}>
                        {[...Array(6)].map((_, index) => (
                            <div key={index}>
                                {[...Array(5)].map((_, subIndex) => (
                                    <div key={subIndex} className="sc-e7181281-0 eNwwjF" style={{ width: subIndex === 0 ? "100%" : subIndex === 1 ? "92%" : subIndex === 2 ? "60%" : "90%", height: "16px", marginBottom: "4px", marginTop: subIndex === 1 ? "16px" : "" }}></div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TikiBookstore;
