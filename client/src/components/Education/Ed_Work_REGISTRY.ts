
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
        desc: "Two-year fullstack development education spanning the full product lifecycle: Figma-based UI/UX design, frontend and backend development, API architecture, CI/CD, and deployment, following agile methodologies such as Scrum. Focused on open-source collaboration and shipping production-ready applications.",
        year: "2024 - 2026"
    },
    intern: {
        tag: "Work",
        title: "Fullstack Developer Intern",
        place: "Lindcode AB, Turku",
        desc: "Six-month internship as solo fullstack developer rebuilding an ed-tech platform from scratch, working in Scrum with a senior developer as Scrum Master. Delivered the entire product independently — from Figma UI/UX design through database, REST API, backend, and frontend using Astro.js, MongoDB, HTML, JavaScript, and CSS — covering company, course, and contact pages for business, group, and individual users. Placed strong emphasis on performance, replacing JavaScript with pure CSS/HTML where possible and converting raster images to optimized SVG paths, achieving a 0.13s LCP.",
        year: "2025 - 2026"
    }
    
}