import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../../../utils/axiosCustomize.js";
import { changeString, scrollToTop } from "../../../../assets/js/handleFunc.js";

const AllBooksOfCategory = (props) => {
    const LIMIT_PAGE = 5;
    const [books, setbooks] = useState([]);
    const [totalPages, settotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const fetchAllBooksOfCategoryWithPaginate = async (page) => {
        let response = await axios.get(
            `/getAllBooksOfCategoryWithPag/${props.selectedCategoryID}?page=${page}&limit=${LIMIT_PAGE}`
        );

        setbooks(response.data.data);

        settotalPages(response.data.totalPages);
    };

    useEffect(() => {
        fetchAllBooksOfCategoryWithPaginate(1);
    }, [props.selectedCategoryID]);

    const handlePageClick = async (event) => {
        await fetchAllBooksOfCategoryWithPaginate(+event.selected + 1);
        setCurrentPage(+event.selected + 1);
    };

    return (
        <>
            <section class="bread-crumb">
                <span class="crumb-border"></span>
                <div class="container">
                    <div class="rows">
                        <div class="col-xs-12 a-left">
                            <ul class="breadcrumb">
                                <li class="home">
                                    <NavLink to="/">
                                        <span>Trang Chủ</span>
                                    </NavLink>
                                    <span class="mr_lr">&nbsp;/&nbsp;</span>
                                </li>

                                <li>
                                    <span>{props.nameCategory}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div class="section wrap_background">
                <div class="container ">
                    <div class="bg_collection section">
                        <div class="row">
                            <div class="main_container collection col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div class="slider-items-products section">
                                    <div class="collectiontitle">
                                        <h1 class="cat-heading">
                                            {props.nameCategory}
                                        </h1>
                                    </div>
                                </div>
                                <div class="category-products products">
                                    <section class="products-view products-view-grid collection_reponsive list_hover_pro">
                                        <div class="row">
                                            {books.map((book) => (
                                                <>
                                                    <div
                                                        key={book.id_sach}
                                                        class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 product-col mb-3 "
                                                    >
                                                        <div class="item_product_main item_option margin-bottom-15">
                                                            <div class="variants product-action">
                                                                <div class="product-thumbnail">
                                                                    <NavLink
                                                                        class="image_thumb scale_hover"
                                                                        to={`/${changeString(
                                                                            book.tenSach
                                                                        )}`}
                                                                        onClick={
                                                                            scrollToTop
                                                                        }
                                                                    >
                                                                        <img
                                                                            class="lazyload loaded"
                                                                            src={`http://localhost:8080/images/${book.thumbnail}`}
                                                                            alt={
                                                                                book.tenSach
                                                                            }
                                                                        />
                                                                    </NavLink>
                                                                </div>
                                                                <div class="product-info">
                                                                    <h3 class="product-name">
                                                                        <NavLink
                                                                            to={`/${changeString(
                                                                                book.tenSach
                                                                            )}`}
                                                                            onClick={
                                                                                scrollToTop
                                                                            }
                                                                        >
                                                                            {
                                                                                book.tenSach
                                                                            }
                                                                        </NavLink>
                                                                    </h3>
                                                                    <div class="price-box">
                                                                        <span>
                                                                            {
                                                                                book.giaSach
                                                                            }
                                                                            &nbsp;VNĐ
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="paginater-container"
                style={{ display: "flex", justifyContent: "center" }}
            >
                <ReactPaginate
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={3}
                    pageCount={totalPages}
                    nextLabel=">"
                    previousLabel="<"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={currentPage - 1}
                />
            </div>
        </>
    );
};

export default AllBooksOfCategory;
