// index.tsx
import style from './index.module.css';
import { Link } from 'react-router';

const TECH_STACK = [
    {
        layer: 'Frontend',
        tech: 'Vue 3, TypeScript, Vite, Pinia, Vue Router',
    },
    {
        layer: 'Backend',
        tech: 'Node.js, Express, TypeScript, ws',
    },
    {
        layer: 'Auth',
        tech: 'JWT (jsonwebtoken), bcrypt'
    },
    {
        layer: 'Tooling',
        tech: 'ESLint, Oxlint, Prettier',
    },
    {
        layer: 'Infra',
        tech: 'Docker, Docker Compose',
    }
]

const HIGHLIGHTS = [
    {
        title: 'Real-time messaging',
        desc: 'A shared chat room with live presence and message history over native WebSockets — new clients receive recent history and updated presence the moment they join.',
    },
    {
        title: 'Security-first auth',
        desc: 'JWT-based authentication and bcrypt-hashed passwords. The WebSocket connection itself requires a valid token before it can send or receive anything — auth isn\u2019t just a REST-layer concern.',
    },
    {
        title: 'Deliberate token handling',
        desc: 'Tokens are kept in memory rather than localStorage, to avoid exposing them to XSS. The trade-off (a refresh requires logging in again) is a conscious choice, documented alongside how a production version would handle it.',
    },
    {
        title: 'Structurally safe API responses',
        desc: 'The password hash is excluded from any client-facing response by construction \u2014 via a dedicated PublicUser type and mapping function \u2014 rather than relying on remembering to omit it each time.',
    },
    {
        title: 'Fully containerized',
        desc: 'Frontend and backend each run in their own Docker image, orchestrated with a single docker-compose.yml \u2014 one command brings the whole app up.',
    },
];

const SECURITY_DECISIONS = [
    {
        title: 'Hashed passwords',
        desc: 'Passwords are hashed with bcrypt, never stored or transmitted in plaintext.',
    },
    {
        title: 'In-memory tokens',
        desc: 'JWTs are kept in memory (Pinia state), not localStorage — this avoids exposing the token to a potential XSS attack that could read localStorage directly. The tradeoff is that a page refresh currently requires logging in again; a production version would pair a short-lived in-memory access token with an HTTP-only refresh cookie.',
    },
    {
        title: 'Authenticated WebSocket connections',
        desc: 'A socket is not admitted to the room, and cannot send or receive messages, until it presents a valid JWT.',
    },
    {
        title: 'Structurally safe user model',
        desc: 'The User model excludes passwordHash from anything sent to the client, enforced via a dedicated PublicUser type and mapping function, rather than relying on remembering to omit it manually in every response.',
    },
];

const MESSAGE_FLOW = [
    'User registers or logs in via a REST call (POST /register or POST /login), receiving a JWT.',
    "On navigating to the chat view, the frontend opens a WebSocket connection and sends the JWT as the first message ({ type: 'auth', token }).",
    'The backend verifies the token, registers the client, sends them recent message history, and broadcasts updated presence to everyone.',
    "Messages sent afterward ({ type: 'message', text }) are broadcast to all connected clients.",
    'On disconnect, the client is removed and presence is broadcast again.',
];

const NEXT_STEPS = [
    {
        title: 'In-memory storage',
        desc: 'Users, sessions, and message history live in memory and reset when the server restarts. Every place a real database would plug in is marked with a DEPLOYMENT NOTE comment in the code (see backend/src/store/userStore.ts).',
    },
    {
        title: 'One shared chat room',
        desc: 'All connected users see the same conversation, rather than private 1-on-1 or group rooms. The room/broadcast architecture extends naturally to per-pair or per-group rooms keyed by a room ID.',
    },
    {
        title: 'Capped message history',
        desc: 'No message persistence beyond the last 50 messages, kept in a capped in-memory array.',
    },
];

function miniContactCenter() {

    return (
        <>
            <section className={style.center}>

                <div className={style.header}>
                    <Link to="/" className={style.back_button}>&#x21A9;</Link>
                    <p className={style.title}>Mini Contact <span className={style.accent}>Center</span></p>
                </div>

                <p className={style.description}>
                    A lightweight real-time chat application demonstrating secure WebSocket
                    communication \u2014 exploring the kind of infrastructure used in
                    contact center platforms.
                </p>

                <div className={style.anchor_wrapper}>
                    <a href="https://github.com/TryFailCryTryAgain/mini-contact-center" className={style.anchor}>
                        <i className='fab fa-github'></i>
                        github.com/TryFailCryTryAgain/mini-contact-center
                    </a>
                </div>

                <br />

                <h2 className={style.section_heading}>Features</h2>

                <ul className={style.feature_list}>
                    {HIGHLIGHTS.map((item) => (
                        <li key={item.title} className={style.row}>
                            <b className={style.rowTitle}>{item.title} - </b>
                            {item.desc}
                        </li>
                    ))}
                </ul>

                <h2 className={style.section_heading}>Tech Stack</h2>

                <ul className={style.tech_list}>
                    {TECH_STACK.map((tech, i) => (
                        <li key={i}><b className={style.tech_header}>{tech.layer} - </b> <span>{tech.tech}</span></li>
                    ))}
                </ul>

                <h2 className={style.section_heading}>Getting Started</h2>

                <p className={style.description}>
                    Requires Docker and Docker Compose. Node.js 22+ is only needed if
                    you'd rather run the frontend and backend outside a container.
                </p>

                <pre className={style.code_block}>
                    <code>
                        git clone https://github.com/TryFailCryTryAgain/mini-contact-center{'\n'}
                        cd mini-contact-center{'\n'}
                        docker compose up --build
                    </code>
                </pre>

                <p className={style.description}>
                    Then open <b className={style.tech_header}>localhost:5173</b> for the
                    frontend and <b className={style.tech_header}>localhost:3000</b> for
                    the backend. Register a user in one tab, then open a second tab
                    (or an incognito window) and register a different user — messages
                    sent between them arrive in real time, and the sidebar shows both
                    as online.
                </p>

                <h2 className={style.section_heading}>Architecture</h2>

                <pre className={style.file_tree}>
                    <code>
{`mini-contact-center/
├── docker-compose.yml
├── backend/
│   ├── src/
│   │   ├── index.ts          # Express + WebSocket server entry point
│   │   ├── env.ts            # loads .env before anything else
│   │   ├── models/           # User type definitions
│   │   ├── store/            # in-memory user storage
│   │   ├── auth/             # JWT signing/verification, password hashing
│   │   ├── controllers/      # request handlers for /login, /register
│   │   ├── routes/           # Express route definitions
│   │   └── ws/               # WebSocket connection handling, presence, history
│   └── Dockerfile
└── frontend/
    ├── src/
    │   ├── stores/            # Pinia stores: auth, chat
    │   ├── views/             # SignInView, RegisterView, ChatView
    │   ├── components/        # ChatSidebar, MessageThread, MessageComposer
    │   └── router/            # route definitions + auth guard
    └── Dockerfile`}
                    </code>
                </pre>

                <p className={style.description}>
                    Express and the WebSocket server share a single underlying HTTP
                    server — ws upgrades connections on the same port Express listens
                    on, so there's only one process and one port to manage per service.
                </p>

                <h2 className={style.section_heading}>Message Flow</h2>

                <ol className={style.ordered_list}>
                    {MESSAGE_FLOW.map((step, i) => (
                        <li key={i}>{step}</li>
                    ))}
                </ol>

                <h2 className={style.section_heading}>Security Decisions</h2>

                <ul className={style.decisions_list}>
                    {SECURITY_DECISIONS.map((item) => (
                        <li key={item.title}>
                            <b className={style.rowTitle}>{item.title} - </b>
                            {item.desc}
                        </li>
                    ))}
                </ul>

                <h2 className={style.section_heading}>Scope & Next Steps</h2>

                <ul className={style.next_steps_list}>
                    {NEXT_STEPS.map((item) => (
                        <li key={item.title}>
                            <b className={style.rowTitle}>{item.title} - </b>
                            {item.desc}
                        </li>
                    ))}
                </ul>

                <h2 className={style.section_heading}>Font & Styling Note</h2>

                <p className={style.description}>
                    The UI is styled with a nod to Telia's visual identity — clean
                    sans-serif typography and a purple accent palette — using the
                    open-license Inter font rather than Telia's proprietary TeliaSans
                    typeface, for licensing reasons.
                </p>

                <br />

            </section>
        </>
    )
};

export default miniContactCenter;