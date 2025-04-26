import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const TestingPage = () => {
    const { t, i18n, ready } = useTranslation();
    const [currentLangIndex, setCurrentLangIndex] = useState(0);

    // Define supported languages and their display names
    const languages = [
        { code: 'en', name: 'Svenska' },
        { code: 'sw', name: 'English' },
    ];

    const changeLanguage = (event) => {
        // Cycle to the next language
        const nextIndex = (currentLangIndex + 1) % languages.length;
        const nextLang = languages[nextIndex].code;

        // Change the language
        i18n.changeLanguage(nextLang);
        setCurrentLangIndex(nextIndex);

        // Log the button's data-id (optional)
        if (event?.currentTarget) {
            console.log(event.currentTarget.dataset.id);
        }
    };

    if (!ready) return <div>Loading translations...</div>;

    return (
        <div className="wrapper">
            <div className="testing-grounds">
                <div className="test-translation">{t('hello')}</div>
                <div className="buttons">
                    <button
                        data-id="1"
                        className="test-btn"
                        onClick={changeLanguage} // No need to pass language manually
                    >
                        {languages[currentLangIndex].name} {/* Dynamically update button text */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestingPage;