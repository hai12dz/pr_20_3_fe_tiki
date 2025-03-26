import { getBooksAPI } from "@/services/api";
import { ReloadOutlined } from "@ant-design/icons";
import { Button, Rate, Row, Col } from "antd";
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
                            xs={24} // 1 sản phẩm trên 1 hàng ở màn hình nhỏ
                            sm={12} // 2 sản phẩm trên 1 hàng ở màn hình trung bình
                            md={8} // 3 sản phẩm trên 1 hàng ở màn hình lớn hơn
                            lg={6} // 4 sản phẩm trên 1 hàng ở màn hình lớn
                            xl={6} // Đảm bảo vẫn là 4 sản phẩm ở màn hình rất lớn
                            key={`book-${index}`}
                            style={{ marginBottom: '16px' }}
                        >
                            <div
                                onClick={() => {
                                    navigate(`/book/${item.id}`);
                                    addViewedProduct(item.id);
                                }}
                                className="column"
                            >
                                <div className="wrapper">
                                    <div className="thumbnail">
                                        <img
                                            src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${item.thumbnail}`}
                                            alt="thumbnail book"
                                        />
                                    </div>
                                    <div className="text" title={item.mainText}>
                                        {item.mainText}
                                    </div>
                                    <div className="price">
                                        {new Intl.NumberFormat("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        }).format(item?.price ?? 0)}
                                    </div>
                                    <div className="rating">
                                        <Rate
                                            value={5}
                                            disabled
                                            style={{ color: "#ffce3d", fontSize: 10 }}
                                        />
                                        <span>Đã bán {item?.sold ?? 0}</span>
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