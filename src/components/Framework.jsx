import Image from "next/image";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import js from "../assets/icons/js.svg";
import ts from "../assets/icons/ts.svg";
import react from "../assets/icons/react.svg";
import node from "../assets/icons/node.svg";
import next from "../assets/icons/next.svg";
import d3 from "../assets/icons/d3.svg";
import java from "../assets/icons/java.svg";
import swift from "../assets/icons/swift.svg";
import swiftui from "../assets/icons/swiftui.png";
import c from "../assets/icons/c.svg";
import tailwind from "../assets/icons/tailwind.svg";
import sass from "../assets/icons/sass.svg";
import ocaml from "../assets/icons/ocaml.svg";
import mongodb from "../assets/icons/mongodb.svg";
import express from "../assets/icons/express.svg";
import haskell from "../assets/icons/haskell.svg";
import dataStructure from "../assets/icons/data-structure.svg";

function Framework({ name }) {
    let icon;

    if (name === "HTML") {
        icon = html;
    } else if (name === "CSS") {
        icon = css;
    } else if (name === "JavaScript") {
        icon = js;
    } else if (name === "TypeScript") {
        icon = ts;
    } else if (name === "React") {
        icon = react;
    } else if (name === "Node.js") {
        icon = node;
    } else if (name === "Next.js") {
        icon = next;
    } else if (name === "D3.js") {
        icon = d3;
    } else if (name === "Java") {
        icon = java;
    } else if (name === "Swift") {
        icon = swift;
    } else if (name === "SwiftUI") {
        icon = swiftui;
    } else if (name === "C") {
        icon = c;
    } else if (name === "TailwindCSS") {
        icon = tailwind;
    } else if (name === "Sass") {
        icon = sass;
    } else if (name === "OCaml") {
        icon = ocaml;
    } else if (name === "MongoDB") {
        icon = mongodb;
    } else if (name === "Express") {
        icon = express;
    } else if (name === "Haskell") {
        icon = haskell;
    } else if (name === "Data Structures") {
        icon = dataStructure;
    }

    return (
        <div
            className={`m-3 flex h-[40px] w-[40px] lg:h-[60px] lg:w-[60px] transform cursor-pointer 
            items-center justify-center rounded-full border-[3px] border-neutral-200 
            shadow-xl transition-transform duration-200 hover:-translate-y-1 hover:scale-110`}
        >
            <Image src={icon} alt={name} title={name} className=" h-6 w-6 lg:h-10 lg:w-10" />
        </div>
    );
}

export default Framework;
