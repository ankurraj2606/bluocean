"use client";

import "./Card.scss";
import { useRouter } from "next/navigation";
export default function Card({ title, text, footerText }) {
  const router = useRouter();
  return (
    <div className="card">
      <header>
        <h3
          className="card-title"
          onClick={() => router.push("/library/risk-scenario")}
        >
          {title}
        </h3>
      </header>
      <main>
        <p className="card-text">{text}</p>
      </main>
      <hr />
      <footer>
        <p className="card-footer">{footerText}</p>
      </footer>
    </div>
  );
}
