
export interface EducationWorkRows {
    tag: "Work" | "Education" | "paper",
    title: string,
    place: string,
    desc: string,
    year: string,
}

export const EDUCATION_WORK_REGISTRY: Record<string, EducationWorkRows> = {
    chas: {
        tag: "Education",
        title: "Fullstack Developer - Open Source",
        place: "Chas Academy, Stockholm",
        desc: "A two year education...",
        year: "2024 - 2026"
    },
    intern: {
        tag: "Work",
        title: "Fullstack Developer Intern",
        place: "Lindcode AB",
        desc: "A 6 months long intership were I restructured the sales website...",
        year: "2025 - 2026"
    }
    
}