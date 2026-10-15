

export interface CurrentOccupationRows {
    tag: "Work" | "Education" | "paper",
    title: string,
    place: string,
    desc: string,
    year: string,
}

export const CURRENT_OCCUPATION_REGISTRY: Record<string, CurrentOccupationRows> = {
    class1: {
        tag: "Education",
        title: "Accessibility in digital services and products",
        place: "Chas Academy, Stockholm",
        desc: "A 5 months long course that goes over how people with a range of abilities and access needs are effected when using the web and apps, and how assistive technologies like screen readers work. This course covers WCAG guidelines and legislations such as the DOS Act and the EU Accessibility Directive.",
        year: "2026 - 2027",
    },
    class2: {
        tag: "Education",
        title: "Cyber Security",
        place: "Chas Academy, Stockholm",
        desc: "This 5-month course goes through how to recognize threats such as phishing, ransomware, and social engineering, and gives an overview of key frameworks and regulations, including the ISO 27000 series, NIST, GDPR, and NIS2. It also covers everyday security: passwords, backups, cloud services, mobile devices, and what to do when an incident occurs.",
        year: "2026 - 2027",
    },
    // class3: {
    //     tag: "Education",
    //     title: "IT Law",
    //     place: "Chas Academy, Stockholm",
    //     desc: "",
    //     year: "2026 - 2027",
    // },
    // class4: {
    //     tag: "Education",
    //     title: "AI Quality Assurance & Model Validation",
    //     place: "Chas Academy, Stockholm",
    //     desc: "",
    //     year: "2026 - 2027",
    // }
}