import { Commands } from './Commands';
import style from './OS.module.css';
import { Link } from 'react-router';

function OperativeSystem() {
    return (
        <section className={style.OS}>

            <div className={style.header}>
                <Link to="/" className={style.back_button}>&#x21A9;</Link>
                <p className={style.title}>Simulated Desktop <span className={style.accent}>OS</span></p>
            </div>

            <p className={style.description}>
                A self-contained, browser-based environment built with React and TypeScript and is fully
                client-side. It features a draggable window manager, a from-scratch virtual file system
                with a working terminal shell you can type commands into.
            </p>

            <div className={style.anchor_wrapper}>
                <a href="https://github.com/TryFailCryTryAgain/OS" className={style.anchor}>
                    <i className='fab fa-github'></i>
                    github.com/tryfailcrytryagain/OS
                </a>
            </div>

            <h2 className={style.section_heading}>Features</h2>

            <ul className={style.feature_list}>
                <li><b>Window Manager</b> - Open, close, focus, drag, and maximize multiple app windows at once, with proper z-index stacking and per-window state.</li>
                <li><b>Virtual File System (VFS)</b> - A flat, normalized file/directory tree (files and folders referenced by ID, not nested objects) supporting creation, deletion, renaming, and path resolution — including relative paths and .. traversal.</li>
                <li><b>Persistence</b> - The entire file system state is saved to localStorage, so your files and folders survive a page refresh.</li>
                <li>
                    <b>Terminal Shell</b> - A real command-line interface with:
                    <ul className={style.sub_list}>
                        <li>Input parsing (including quoted strings for names with spaces)</li>
                        <li>Command history (↑ / ↓ arrow recall)</li>
                        <li>A registry of shell commands (see below)</li>
                    </ul>
                </li>
                <li><b>Live HTML Preview</b> - Run preview "file-name" on an HTML file to render it live inside a sandboxed window, launched via the same event system that powers the window manager.</li>
            </ul>

            <h2 className={style.section_heading}>Available Commands</h2>

            <table className={style.command_table}>
                <thead>
                    <tr>
                        <th>Command</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {Commands.map((c) => (
                        <tr key={c.command}>
                            <td>{c.command}</td>
                            <td>{c.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2 className={style.section_heading}>Architecture</h2>

            <p className={style.description}>
                The codebase is organized into isolated feature modules with a clear separation between
                logic, state and UI:
            </p>

            <pre className={style.file_tree}>
                <code>{`src/
  Terminal/
    vfs/            # Pure data model + logic: types, path resolution, queries, mutations
    commands/        # One function per shell command, each a pure (args, ctx) -> result
    shell/            # Input parsing, command dispatch, history
    hooks/             # React bridges (useVFS, useShell) — the only layer that touches React
    components/         # Terminal UI (input, output log, prompt)
  apps/
    events.ts          # CustomEvent-based pub/sub for opening/closing/focusing app windows
    appRegistry.ts       # Maps app IDs to their React components
  Window_Overlay/         # The desktop's window manager (drag, resize, focus, maximize)`}</code>
            </pre>

            <h2 className={style.section_heading}>Key Design Decisions</h2>

            <ul className={style.decisions_list}>
                <li>The VFS stores nodes in a flat Record{`<string, VNode>`} map rather than nested objects — lookups are O(1) regardless of tree depth, and hierarchy is represented via children/parentId references instead of nesting.</li>
                <li>Command functions are pure: given the same filesystem state and arguments, they always return the same result, with no direct side effects — making them trivially unit-testable without mocking React or localStorage.</li>
                <li>Apps communicate with the window manager (and, for preview, with each other) through a small CustomEvent-based event bus, keeping individual apps decoupled from the desktop shell itself.</li>
            </ul>

            <h2 className={style.section_heading}>Tech Stack</h2>

            <ul className={style.tech_list}>
                <li>React + TypeScript</li>
                <li>CSS Modules</li>
                <li>localStorage for persistence (no backend/database)</li>
            </ul>

            <h2 className={style.section_heading}>Running Locally</h2>

            <pre className={style.code_block}>
                <code>{`npm install
npm run dev`}</code>
            </pre>

            <h2 className={style.section_heading}>Possible Next Steps</h2>

            <ul className={style.next_steps_list}>
                <li>Recursive delete (rm -r) for non-empty directories</li>
                <li>Drag-and-drop file upload into the VFS</li>
                <li>A visual file explorer app alongside the terminal</li>
                <li>Tab-based autocomplete for commands and file names</li>
            </ul>

        </section>
    )
};

export default OperativeSystem;