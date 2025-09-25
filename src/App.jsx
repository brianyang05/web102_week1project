// src/App.jsx
import EventCard from "./components/Card.jsx";
import events from "./data/events.js";
import "./index.css";


export default function App() {
return (
<div className="app">
<header className="header">
<h1 className="title">Software Engineering Learning Hub</h1>
<p className="subtitle">Events & resources for aspiring software engineers.</p>
</header>


<main className="grid">
{events.map((ev) => (
<EventCard key={ev.id} {...ev} />
))}
</main>


<footer className="footer">
<small>Edit content in <code>src/data/events.js</code> • Built with React + Vite</small>
</footer>
</div>
);
}