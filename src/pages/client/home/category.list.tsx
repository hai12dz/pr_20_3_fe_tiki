const CategoryExplorer = () => {
    return (
        <div className="sc-dfad4f1d-2 kQdWhJ">
            <div className="sc-d1be8d65-0 bFGLIR">
                <div className="sc-d1be8d65-1 NBIRX">Khám phá theo danh mục</div>
                <div className="sc-36d678cb-0 eSTCTE">
                    <div className="sc-36d678cb-1 jZopbL">
                        <div className="sc-36d678cb-2 bLoXGk">
                            <a href="/sach-tieng-anh/c320">
                                <div className="sc-36d678cb-3 fZuZht">English Books</div>
                            </a>
                            <div className="sc-36d678cb-4 jMdDfP">
                                <picture className="webpimg-container">
                                    <source
                                        type="image/webp"
                                        srcSet="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp"
                                    />
                                    <img
                                        src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png"
                                        alt="arrow-icon"
                                        width="20"
                                        height="20"
                                        srcSet="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png"
                                        className="sc-82b4dcf2-0 ldcZGa"
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="sc-36d678cb-5 cHTThk">
                            {[
                                { href: "/art-photography/c623", text: "Art & Photography" },
                                { href: "/biographies-memoirs/c27", text: "Biographies & Memoirs" },
                                { href: "/business-economics/c4", text: "Business & Economics" },
                                { href: "/self-help/c614", text: "How-to - Self Help" },
                                { href: "/children-books/c7", text: "Children's Books" },
                                { href: "/dictionary/c282", text: "Dictionary" },
                                { href: "/education-teaching/c5308", text: "Education - Teaching" },
                                { href: "/fiction-literature/c9", text: "Fiction - Literature" },
                                { href: "/magazines/c6445", text: "Magazines" },
                                { href: "/medical-books/c218", text: "Medical Books" },
                                { href: "/parenting-relationships/c28", text: "Parenting & Relationships" },
                                { href: "/reference/c5309", text: "Reference" },
                                { href: "/science-technology/c269", text: "Science - Technology" },
                                { href: "/history-politics-social-sciences/c632", text: "History, Politics & Social Sciences" },
                                { href: "/travel-holiday/c32", text: "Travel & Holiday" },
                                { href: "/cookbooks-food-wine/c21", text: "Cookbooks, Food & Wine" },
                            ].map((item, index) => (
                                <div key={index} className="sc-36d678cb-6 jZEauZ">
                                    <a href={item.href}>{item.text}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                    {[
                        { href: "/sach-truyen-tieng-viet/c316", text: "Sách tiếng Việt" },
                        { href: "/van-phong-pham-qua-luu-niem/c7741", text: "Văn phòng phẩm" },
                        { href: "/qua-luu-niem/c18328", text: "Quà lưu niệm" },
                    ].map((item, index) => (
                        <div key={index} className="sc-36d678cb-1 jZopbL">
                            <div className="sc-36d678cb-2 bLoXGk">
                                <a href={item.href}>
                                    <div className="sc-36d678cb-3 fZuZht">{item.text}</div>
                                </a>
                                <div className="sc-36d678cb-4 boDhca">
                                    <picture className="webpimg-container">
                                        <source
                                            type="image/webp"
                                            srcSet="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png.webp"
                                        />
                                        <img
                                            src="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png"
                                            alt="arrow-icon"
                                            width="20"
                                            height="20"
                                            srcSet="https://salt.tikicdn.com/cache/100x100/ts/ta/6c/37/a4/7ee5c72cc1c35b6b90b70b2ce3498215.png"
                                            className="sc-82b4dcf2-0 ldcZGa"
                                        />
                                    </picture>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="sc-dfad4f1d-6 cZA-DFv"></div>
        </div>
    );
};

export default CategoryExplorer;