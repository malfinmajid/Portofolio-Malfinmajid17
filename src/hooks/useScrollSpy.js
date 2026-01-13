import { useEffect, useState } from "react";

export const useScrollSpy = (sectionIds, offSet = 100) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offSet;

            for (let i = sectionIds.length - 1; i >= 0; i--){
                const section = document.getElementById(sectionIds[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(sectionIds[i]);
                        break;
                    }
                }
            }
        }

        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionIds, offSet]);

    return activeSection;
};

export const scrollToSection = (sectionId, offSet = 80) => {
    const section = document.getElementById(sectionId);
    if (section) {
        const top = section.offsetTop - offSet;
        window.scrollTo({
            top,
            behavior: 'smooth'
        });
    }
}