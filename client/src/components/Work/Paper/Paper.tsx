import { Metrics } from './Metrics';
import style from './Paper.module.css';
import { Link } from 'react-router';
import Thesis from '../../../assets/Thesis/Examensarbete 2.0 - David Segerbo - 2026.pdf';

function Paper() {
    return (
        <section className={style.Thesis}>

            <div className={style.header}>
                <Link to="/" className={style.back_button}>&#x21A9;</Link>
                <p className={style.title}>Data-Driven <span className={style.accent}>Decision Making</span> in B2C EdTech</p>
            </div>

            <p className={style.meta}>Bachelor's Thesis — Chas Academy, 2026</p>

            <p className={style.description}>
                A custom-built analytics system implemented on a live company website to measure real
                user interest and evaluate whether self-developed data collection can meaningfully
                inform product decisions — built and validated over a three-week production data
                collection period.
            </p>

            <div className={style.anchor_wrapper}>
                <a href={Thesis} className={style.anchor}>
                    <i className='fa-solid fa-download'></i>
                    The Complete Thesis
                </a>
            </div>

            <h2 className={style.section_heading}>Overview</h2>

            <p className={style.description}>
                Lindcode AB, a B2C EdTech company, needed a way to understand which courses were
                generating real user interest — not just page views. This project designed, built, and
                evaluated a self-developed feedback and analytics feature integrated directly into their
                existing Astro.js website, combining passive behavioral tracking with an explicit
                "interest" signal, and asked: can a small, purpose-built system actually inform product
                decisions better than general-purpose analytics alone?
            </p>

            <h2 className={style.section_heading}>System Architecture</h2>

            <ul className={style.feature_list}>
                <li><b>Passive tracking</b> — A page-visibility listener measures time spent per page and reports it via the browser's <code>sendBeacon()</code> API, chosen specifically because it reliably delivers data even as a tab is closing.</li>
                <li><b>Active tracking</b> — An explicit "interest" button on course pages captures a deliberate signal of intent, paired with the session and course context at the moment of the click.</li>
                <li><b>Session identification</b> — A client-generated UUID (via <code>crypto.randomUUID()</code>) groups behavior across a session without requiring login or storing personal data, in line with data-minimization principles.</li>
                <li><b>Backend</b> — A Node.js/Express REST API receives events, applies a server-side timestamp (to avoid client clock drift), and persists them to MongoDB via Mongoose.</li>
                <li><b>Supplementary signals</b> — Feedback and course-request form submissions were analyzed alongside behavioral data for a fuller picture of intent.</li>
            </ul>

            <h2 className={style.section_heading}>Testing</h2>

            <p className={style.description}>
                The backend API was validated with an end-to-end test suite (Jest, Supertest, and an
                in-memory MongoDB instance) covering every endpoint — normal cases, missing fields, and
                invalid input. Alongside this, a manual spot-check compared 15 real sessions against
                expected duration ranges per page type, to sanity-check whether the logged data actually
                reflected plausible user behavior.
            </p>

            <table className={style.stats_table}>
                <thead>
                    <tr>
                        <th>Metric</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {Metrics.map((m) => (
                        <tr key={m.label}>
                            <td>{m.label}</td>
                            <td>{m.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2 className={style.section_heading}>Key Findings</h2>

            <ul className={style.decisions_list}>
                <li>The system successfully distinguished passive browsing from active expressions of interest — the two signals told meaningfully different stories about the same traffic.</li>
                <li>Testing caught two real implementation bugs neither manual review nor casual use had surfaced: a mismatched error status code, and a valid event type that could be saved but never retrieved.</li>
                <li>The spot-check revealed that a large share of "too short" flagged durations were an artifact of how the tracking event fires — not actually short visits — once consecutive same-page events were merged into single visits, the "too short" rate dropped by 15 percentage points.</li>
                <li>A self-built system like this is best positioned as a complement to general analytics tools, not a replacement — it can capture domain-specific signals (e.g. per-course interest) that off-the-shelf tools don't support.</li>
            </ul>

            <h2 className={style.section_heading}>Limitations</h2>

            <ul className={style.next_steps_list}>
                <li>Client-side only — events that occur without JavaScript running (e.g. early drop-offs) aren't captured.</li>
                <li>No rate-limiting on the API endpoint yet — a requirement before wider public exposure.</li>
                <li>Small sample size (44 sessions over three weeks in an early beta) — findings are indicative, not statistically robust.</li>
                <li>No geographic segmentation of interest data.</li>
            </ul>

            <h2 className={style.section_heading}>Tech Stack</h2>

            <ul className={style.tech_list}>
                <li>Astro.js (frontend integration)</li>
                <li>Node.js + Express + TypeScript (backend API)</li>
                <li>MongoDB + Mongoose (data storage)</li>
                <li>Jest, Supertest, mongodb-memory-server (testing)</li>
            </ul>

        </section>
    )
};

export default Paper;