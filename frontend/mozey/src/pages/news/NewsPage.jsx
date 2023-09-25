import React from 'react';
import * as components from "components";

const NewsPage = () => {
    return (
        <div className="news-page">
            <components.NewsSection />
            <components.QuizButton />
        </div>
    );
}

export default NewsPage;
