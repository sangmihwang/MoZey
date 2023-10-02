import React, { useState } from 'react';
import * as components from "components";

const NewsPage = () => {
    const [showPage, setShowPage] = useState(true);

    const toggleSection = () => {
        setShowPage(prevShowPage => !prevShowPage);
    };

    return (
        <div className="news-page">
            {showPage ? <components.NewsSection /> : <components.QuizSection />}
            <components.QuizButton onClick={toggleSection} showPage={showPage} />
        </div>
    );
}

export default NewsPage;
