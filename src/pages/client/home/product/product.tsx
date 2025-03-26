import { getBooksAPI } from "@/services/api";
import { ReloadOutlined } from "@ant-design/icons";
import { Button, Rate, Row, Col, Tag } from "antd";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import 'styles/product.scss'
const Product = () => {

    const [searchTerm, setSearchTerm] = useOutletContext() as any;
    const [listBook, setListBook] = useState<IBookTable[]>([]);
    const [pageSize, setPageSize] = useState<number>(10);
    const [total, setTotal] = useState<number>(0);
    const [current, setCurrent] = useState<number>(1);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>("");
    const [sortQuery, setSortQuery] = useState<string>("sort=-sold");
    const [showMobileFilter, setShowMobileFilter] = useState<boolean>(false);
    const [nameCategory, setNameCategory] = useState<{ [key: string]: string[] }>({});
    const [listBrand, setListBrand] = useState<IBrands[]>([])
    const [listSupplier, setListSupplier] = useState<ISupplier[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [queryFiler, setQueryFilter] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [listFullCategory, setListFullCategory] = useState<ICategory[]>([])

    const navigate = useNavigate();
    // Change these from string to arrays
    const [brand, setBrand] = useState<string[]>([]);
    const [supplier, setSupplier] = useState<string[]>([]);

    const filteredBooks = useMemo(() => {
        return listBook.filter((book) =>
            book.mainText.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, listBook]);
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
    useEffect(() => {
        fetchBook();
    }, [current, pageSize, filter, sortQuery]);


    const addViewedProduct = (productId: string) => {
        const viewedProducts = JSON.parse(localStorage.getItem("viewedProducts") || "[]").map(Number);

        // Nếu sản phẩm chưa có trong danh sách thì thêm vào
        if (!viewedProducts.includes(productId)) {
            viewedProducts.push(productId);
        }

        // Giữ tối đa 10 sản phẩm gần nhất
        if (viewedProducts.length > 10) {
            viewedProducts.shift(); // Xóa sản phẩm cũ nhất
        }

        localStorage.setItem("viewedProducts", JSON.stringify(viewedProducts));
    };

    return (
        <div className="product-container">
            <Row className="customize-row" > {/* Điều chỉnh gutter */}
                {filteredBooks?.length > 0 ? (
                    filteredBooks.map((item, index) => (
                        <Col
                            xs={24}
                            sm={12}
                            md={8}
                            lg={6}
                            xl={6}
                            key={`book-${index}`}
                            style={{ marginBottom: '16px' }}
                        >
                            <div
                                onClick={() => {
                                    navigate(`/book/${item.id}`);
                                    addViewedProduct(item.id);
                                }}
                                className="column top-deal-column"
                            >
                                <div className="wrapper">
                                    {/* Thumbnail */}
                                    <div className="thumbnail">
                                        <img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/17/4a/65/b4765d60127ee4cccf8fd551633fafd4.png.webp"
                                            alt="thumbnail book"
                                        />
                                        {/* Badge */}
                                        <div className="badge-container">
                                            <picture className="webpimg-container">
                                                <source
                                                    type="image/webp"
                                                    srcSet="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
                                                />
                                                <img
                                                    src="https://salt.tikicdn.com/ts/upload/12/e2/4a/c5226426ee9429b0050449ae5403c9cf.png"
                                                    alt="product_image_badge"
                                                    className="product-badge"
                                                />
                                            </picture>
                                        </div>

                                        {/* Badge "AD" */}
                                        <p className="ads-badge">AD</p>
                                    </div>

                                    {/* Price and Promotion */}
                                    <div className="price-section">
                                        <div className="price">
                                            {new Intl.NumberFormat("vi-VN", {
                                                style: "currency",
                                                currency: "VND",
                                            }).format(item?.price ?? 0)}
                                        </div>
                                        <div className="discount">
                                            {item.promotion && (
                                                <span className="promotion-tag">-{item.promotion}%</span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className="text" title={item.mainText}>
                                        <span>{item.mainText}</span>
                                    </div>

                                    {/* Author and Rating */}
                                    <div className="author-rating">
                                        <div className="author" title={item.author}>
                                            <span>{item.author}</span>
                                        </div>
                                        <div className="rating">
                                            <Rate
                                                value={5}
                                                disabled
                                                style={{ fontSize: 12 }}
                                            />
                                            <span>Đã bán {item?.sold ?? 0}</span>
                                        </div>
                                    </div>

                                    {/* Extra Badges */}
                                    <div className="extra-badges">
                                        <Tag color="blue">CHÍNH HÃNG</Tag>
                                        <div className="delivery-tag">
                                            <span>Giao siêu tốc 2h</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))
                ) : (
                    <div
                        style={{
                            width: "100%",
                            textAlign: "center",
                            padding: "50px 0",
                            fontSize: "18px",
                            color: "#666",
                            border: "1px dashed #ddd",
                            borderRadius: "8px",
                            margin: "20px 0",
                        }}
                    >
                        <div style={{ marginBottom: "15px" }}>
                            <ReloadOutlined style={{ fontSize: "32px", color: "#999" }} />
                        </div>
                        <p>Chúng tôi không có sản phẩm phù hợp</p>
                        <Button
                            type="primary"
                            onClick={() => {
                                setSearchTerm("");
                                setCategory("");
                                setBrand([]); // Reset brand filter to empty array
                                setSupplier([]); // Reset supplier filter to empty array
                                fetchBook();
                            }}
                            icon={<ReloadOutlined />}
                        >
                            Xem tất cả sản phẩm
                        </Button>
                    </div>
                )}
            </Row>
        </div>
    );
};

export default Product;