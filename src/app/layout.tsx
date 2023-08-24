import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gibson Murray",
    description: "Developer Portfolio Website",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-neutral-100">{children}</body>
        </html>
    );
}
