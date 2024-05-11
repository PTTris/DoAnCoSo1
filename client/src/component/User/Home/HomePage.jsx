import BookBrand from "./Contents/BookBrand/BookBrand";
import BookNewRelease from "./Contents/BookNewRelease/BookNewRelease";
import ExclusiveBook from "./Contents/ExclusiveBook/ExclusiveBook";
import NewsSpecial from "./Contents/NewsSpecial/NewsSpecial";
import SlideShow from "./Contents/Swiper/SlideShow";
import "./HomePage.scss";
const HomePage = () => {
    return (
        <>
            <div className="main-content">
                <div className="slide-show-main">
                    <SlideShow />
                </div>
                <div className="book-new-release">
                    <BookNewRelease />
                </div>
                <div className="book-brand">
                    <BookBrand />
                </div>
                <div className="news-special">
                    <NewsSpecial />
                </div>
                <div className="ExclusiveBook">
                    <ExclusiveBook />
                </div>
            </div>
        </>
    );
};

export default HomePage;
