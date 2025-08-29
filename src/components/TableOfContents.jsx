import {useEffect, useState} from "react";
import "./toc.css"


export default function TableOfContents({contentRef}) {
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        if (!contentRef.current) return;

        const elements = contentRef.current.querySelectorAll("h2, h3, h4");

        const mapped = Array.from(elements).map(el => {
            if (!el.id) {
                el.id = el.innerText
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]+/g, "");
            }
            return {
                id: el.id,
                text: el.innerText,
                level: parseInt(el.tagName[1]) // 2, 3, or 4
            };
        });

        setHeadings(mapped);
    }, [contentRef]);

    return (
        <aside className="toc">
            <ul>
                {headings.map(h => (
                    <li key={h.id} className={`level-${h.level}`}>
                        <a href={`#${h.id}`}>{h.text}</a>
                    </li>
                ))}
            </ul>
        </aside>
    );
}