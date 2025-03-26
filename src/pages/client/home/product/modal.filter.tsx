import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Checkbox, Col, Divider, Form, InputNumber, Modal, Row } from 'antd';
import { filterBookWithFullInfoAPI, getFullCategories } from '@/services/api';
import './modal.filter.scss';

interface IProps {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    queryFiler: string;
    setQueryFilter: React.Dispatch<React.SetStateAction<string>>;
    listBrand: IBrands[];
    listSupplier: ISupplier[];
    pageSize: number;
    setListBook: React.Dispatch<React.SetStateAction<IBookTable[]>>;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
    listFullCategory: ICategory[];
}

const FilterProduct: React.FC<IProps> = ({
    isModalOpen,
    setIsModalOpen,
    queryFiler,
    setQueryFilter,
    listBrand,
    listSupplier,
    pageSize,
    setListBook,
    setTotal,
    listFullCategory,
}) => {
    const [brand, setBrand] = useState<string>('');
    const [supplier, setSupplier] = useState<string>('');
    const [showFullBrandList, setShowFullBrandList] = useState(false);
    const [showFullSupplierList, setShowFullSupplierList] = useState(false);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedSuppliers, setSelectedSuppliers] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [category, setCategory] = useState<string>('');
    const [selectedServices, setSelectedServices] = useState<string[]>([]); // State for "Dịch vụ"
    const [selectedPromotions, setSelectedPromotions] = useState<string[]>([]); // State for "Ưu đãi"
    const [selectedRatings, setSelectedRatings] = useState<string[]>([]); // State for "Đánh giá"

    const [form] = Form.useForm();

    const handleOk = async (values: any) => {
        handleCancel();
        let query = `current=1&pageSize=${pageSize}`;

        if (brand) query += `&brand=${brand}`;
        if (category) query += `&nameCategory=${category}`;
        if (supplier) query += `&supplier=${supplier}`;

        const minPrice = values.minPrice;
        const maxPrice = values.maxPrice;
        if (minPrice !== undefined) query += `&priceBottom=${minPrice}`;
        if (maxPrice !== undefined) query += `&priceTop=${maxPrice}`;

        const res = await filterBookWithFullInfoAPI(query);
        setTotal(res.data!.meta.totalItems);
        setListBook(res.data?.items || []);
    };

    const handleCancel = () => {
        form.resetFields();
        setSelectedBrands([]);
        setSelectedSuppliers([]);
        setIsModalOpen(false);
    };

    const setPriceRange = (min: number, max: number) => {
        form.setFieldsValue({ minPrice: min, maxPrice: max });
    };

    const onChangeCheckBox = (type: 'brand' | 'supplier' | 'category' | 'service' | 'promotion' | 'rating', name: string) => {
        if (type === 'brand') {
            setSelectedBrands((prev) => {
                const updatedBrands = prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name];
                setBrand(updatedBrands.join(','));
                return updatedBrands;
            });
        } else if (type === 'supplier') {
            setSelectedSuppliers((prev) => {
                const updatedSuppliers = prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name];
                setSupplier(updatedSuppliers.join(','));
                return updatedSuppliers;
            });
        } else if (type === 'category') {
            setSelectedCategories((prev) => {
                const updatedCategories = prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name];
                setCategory(updatedCategories.join(','));
                return updatedCategories;
            });
        } else if (type === 'service') {
            setSelectedServices((prev) => {
                const updatedServices = prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name];
                return updatedServices;
            });
        } else if (type === 'promotion') {
            setSelectedPromotions((prev) => {
                const updatedPromotions = prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name];
                return updatedPromotions;
            });
        } else if (type === 'rating') {
            setSelectedRatings((prev) => {
                const updatedRatings = prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name];
                return updatedRatings;
            });
        }
    };

    const modalContent = (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Modal
                bodyStyle={{ maxHeight: '500px', overflowY: 'auto', overflowX: 'hidden' }}
                title="Tất cả bộ lọc"
                open={isModalOpen}
                onOk={async () => {
                    try {
                        const values = await form.validateFields();
                        handleOk(values);
                    } catch (error) {
                        console.error('Validation failed:', error);
                    }
                }}
                onCancel={handleCancel}
                footer={null}
                style={{
                    position: 'relative',
                }}
            >
                <Divider />
                <h3>Dịch vụ</h3>
                <Row gutter={[16, 8]} className="modal-service-section">
                    <Col span={12}>
                        <Checkbox
                            onChange={() => onChangeCheckBox('service', 'Giao siêu tốc 2H')}
                            checked={selectedServices.includes('Giao siêu tốc 2H')}
                        >
                            <img

                                src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png"
                                alt="Giao siêu tốc 2H"
                                className="service-icon"
                            />
                            <span className="service-text"> Giao siêu tốc 2H </span>
                        </Checkbox>
                    </Col>
                </Row>
                <Divider />
                <h3>Ưu đãi</h3>
                <Row gutter={[16, 8]} className="modal-promotion-section">
                    <Col span={12}>
                        <Checkbox
                            onChange={() => onChangeCheckBox('promotion', 'Siêu rẻ')}
                            checked={selectedPromotions.includes('Siêu rẻ')}
                        >
                            <img
                                src="https://salt.tikicdn.com/ts/upload/b5/aa/48/2305c5e08e536cfb840043df12818146.png"
                                alt="Siêu rẻ"
                                className="promotion-icon"
                            />
                            <span className="promotion-text">  Siêu rẻ </span>

                        </Checkbox>
                    </Col>
                    <Col span={12}>
                        <Checkbox
                            onChange={() => onChangeCheckBox('promotion', 'FREESHIP XTRA')}
                            checked={selectedPromotions.includes('FREESHIP XTRA')}
                        >
                            <img
                                src="https://salt.tikicdn.com/ts/upload/2f/20/77/0f96cfafdf7855d5e7fe076dd4f34ce0.png"
                                alt="FREESHIP XTRA"
                                className="promotion-icon"
                            />
                        </Checkbox>
                    </Col>
                </Row>
                <Divider />
                <h3>Đánh giá</h3>
                <Row gutter={[16, 8]} className="modal-rating-section">
                    <Col span={12}>
                        <Checkbox
                            onChange={() => onChangeCheckBox('rating', '5 sao')}
                            checked={selectedRatings.includes('5 sao')}
                        >
                            <div className="rating-stars">
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        width="12"
                                        height="12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ width: '12px', height: '12px' }}
                                    >
                                        <g clipPath="url(#a)">
                                            <path
                                                d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                fill="#FFC400"
                                            ></path>
                                        </g>
                                        <defs>
                                            <clipPath id="a">
                                                <path
                                                    fill="#fff"
                                                    transform="translate(1 1.5)"
                                                    d="M0 0h10v10H0z"
                                                ></path>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                ))}
                                từ 5 sao
                            </div>
                        </Checkbox>
                    </Col>
                    <Col span={12}>
                        <Checkbox
                            onChange={() => onChangeCheckBox('rating', '4 sao')}
                            checked={selectedRatings.includes('4 sao')}
                        >
                            <div className="rating-stars">
                                {[...Array(4)].map((_, index) => (
                                    <svg
                                        key={index}
                                        width="12"
                                        height="12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ width: '12px', height: '12px' }}
                                    >
                                        <g clipPath="url(#a)">
                                            <path
                                                d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                fill="#FFC400"
                                            ></path>
                                        </g>
                                        <defs>
                                            <clipPath id="a">
                                                <path
                                                    fill="#fff"
                                                    transform="translate(1 1.5)"
                                                    d="M0 0h10v10H0z"
                                                ></path>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                ))}
                                từ 4 sao
                            </div>
                        </Checkbox>
                    </Col>
                    <Col span={12}>
                        <Checkbox
                            onChange={() => onChangeCheckBox('rating', '3 sao')}
                            checked={selectedRatings.includes('3 sao')}
                        >
                            <div className="rating-stars">
                                {[...Array(3)].map((_, index) => (
                                    <svg
                                        key={index}
                                        width="12"
                                        height="12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ width: '12px', height: '12px' }}
                                    >
                                        <g clipPath="url(#a)">
                                            <path
                                                d="M6.448 2.029a.5.5 0 0 0-.896 0L4.287 4.59l-2.828.41a.5.5 0 0 0-.277.854l2.046 1.994-.483 2.816a.5.5 0 0 0 .726.528L6 9.863l2.53 1.33a.5.5 0 0 0 .725-.527l-.483-2.817 2.046-1.994a.5.5 0 0 0-.277-.853L7.713 4.59 6.448 2.029Z"
                                                fill="#FFC400"
                                            ></path>
                                        </g>
                                        <defs>
                                            <clipPath id="a">
                                                <path
                                                    fill="#fff"
                                                    transform="translate(1 1.5)"
                                                    d="M0 0h10v10H0z"
                                                ></path>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                ))}
                                từ 3 sao
                            </div>
                        </Checkbox>
                    </Col>
                </Row>
                <Divider />
                <h3>Giá</h3>
                <div style={{ marginBottom: '10px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        <Button style={{ border: '0.5px solid #666' }} type="text" onClick={() => setPriceRange(0, 60000)}>
                            Dưới 60.000
                        </Button>
                        <Button style={{ border: '0.5px solid #666' }} type="text" onClick={() => setPriceRange(60000, 140000)}>
                            60.000 - 140.000
                        </Button>
                        <Button style={{ border: '0.5px solid #666' }} type="text" onClick={() => setPriceRange(140000, 280000)}>
                            140.000 - 280.000
                        </Button>
                        <Button style={{ border: '0.5px solid #666' }} type="text" onClick={() => setPriceRange(280000, 10000000)}>
                            Trên 280.000
                        </Button>
                    </div>
                    <Form form={form} name="control-hooks" onFinish={handleOk} style={{ maxWidth: 600 }}>
                        <div style={{ marginTop: '10px', marginBottom: '10px' }}>Tự nhập khoảng giá</div>
                        <Row gutter={16} align="middle">
                            <Col span={10}>
                                <Form.Item name="minPrice">
                                    <InputNumber
                                        placeholder="Từ"
                                        addonAfter="₫"
                                        controls={false}
                                        style={{ width: '100%' }}
                                        formatter={(value) => (value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : '')}
                                        parser={(value) => value?.replace(/\./g, '') || ''}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={4} style={{ textAlign: 'center', paddingBottom: '30px' }}>
                                <span>-</span>
                            </Col>
                            <Col span={10}>
                                <Form.Item name="maxPrice">
                                    <InputNumber
                                        placeholder="Đến"
                                        addonAfter="₫"
                                        controls={false}
                                        style={{ width: '100%' }}
                                        formatter={(value) => (value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : '')}
                                        parser={(value) => value?.replace(/\./g, '') || ''}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <Divider />
                <h3>Thể loại</h3>
                <Row gutter={[16, 8]}>
                    {(showFullBrandList ? listFullCategory : listFullCategory.slice(0, 4)).map((items, index) => (
                        <Col key={index} span={12}>
                            <Checkbox onChange={() => onChangeCheckBox('category', items.name)} checked={selectedCategories.includes(items.name)}>
                                {items.name}
                            </Checkbox>
                        </Col>
                    ))}
                </Row>
                {listBrand.length > 5 && (
                    <p
                        onClick={() => setShowFullBrandList(!showFullBrandList)}
                        style={{ color: 'black', textDecoration: 'underline', cursor: 'pointer', marginTop: 10, marginBottom: 10 }}
                    >
                        {showFullBrandList ? 'Thu gọn' : 'Xem thêm'}
                    </p>
                )}
                <Divider />
                <h3>Thương hiệu</h3>
                <Row gutter={[16, 8]}>
                    {(showFullBrandList ? listBrand : listBrand.slice(0, 5)).map((items, index) => (
                        <Col key={index} span={12}>
                            <Checkbox onChange={() => onChangeCheckBox('brand', items.name)} checked={selectedBrands.includes(items.name)}>
                                {items.name}
                            </Checkbox>
                        </Col>
                    ))}
                </Row>
                {listBrand.length > 5 && (
                    <p
                        onClick={() => setShowFullBrandList(!showFullBrandList)}
                        style={{ color: 'black', textDecoration: 'underline', cursor: 'pointer', marginTop: 10, marginBottom: 10 }}
                    >
                        {showFullBrandList ? 'Thu gọn' : 'Xem thêm'}
                    </p>
                )}
                <Divider />
                <h3>Nhà cung cấp</h3>
                <Row gutter={[16, 8]}>
                    {(showFullSupplierList ? listSupplier : listSupplier.slice(0, 5)).map((items, index) => (
                        <Col key={index} span={12}>
                            <Checkbox onChange={() => onChangeCheckBox('supplier', items.name)} checked={selectedSuppliers.includes(items.name)}>
                                {items.name}
                            </Checkbox>
                        </Col>
                    ))}
                </Row>
                {listSupplier.length > 5 && (
                    <p
                        onClick={() => setShowFullSupplierList(!showFullSupplierList)}
                        style={{ color: 'black', textDecoration: 'underline', cursor: 'pointer', marginTop: 10, marginBottom: 10 }}
                    >
                        {showFullSupplierList ? 'Thu gọn' : 'Xem thêm'}
                    </p>
                )}
                <Divider />
                <div
                    style={{
                        position: 'sticky',
                        bottom: 0,
                        backgroundColor: 'white',
                        padding: '10px 0',
                        borderTop: '1px solid #f0f0f0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        zIndex: 10,
                    }}
                >
                    <Button
                        style={{
                            backgroundColor: 'white',
                            border: '1px solid #D8D8D8',
                            color: '#38383D',
                            padding: '10px 20px',
                            borderRadius: '4px',
                        }}
                        onClick={() => {
                            form.resetFields(); // Reset form fields
                            setSelectedBrands([]); // Clear selected brands
                            setSelectedSuppliers([]); // Clear selected suppliers
                            setSelectedCategories([]); // Clear selected categories
                            setBrand(''); // Reset brand state
                            setSupplier(''); // Reset supplier state
                            setCategory(''); // Reset category state

                            // Clear additional states for "Dịch vụ", "Ưu đãi", and "Đánh giá"
                            setSelectedServices([]); // Clear selected services
                            setSelectedPromotions([]); // Clear selected promotions
                            setSelectedRatings([]); // Clear selected ratings
                        }}
                    >
                        Xóa tất cả
                    </Button>
                    <Button
                        type="primary"
                        style={{
                            backgroundColor: '#0B74E5',
                            color: 'white',
                            padding: '10px 20px',
                            borderRadius: '4px',
                        }}
                        onClick={async () => {
                            try {
                                const values = await form.validateFields();
                                handleOk(values);
                            } catch (error) {
                                console.error('Validation failed:', error);
                            }
                        }}
                    >
                        Xem kết quả
                    </Button>
                </div>
            </Modal>
        </div>
    );

    return isModalOpen ? ReactDOM.createPortal(modalContent, document.body) : null;
};

export default FilterProduct;
