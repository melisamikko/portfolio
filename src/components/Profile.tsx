import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import type { Pic } from "@/data/work";
import { SmallIcon } from "./Icons";

const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About me" },
  { href: "/blog", label: "Blog" },
] as const;

export function Shell({
  current,
  children,
}: {
  current?: (typeof nav)[number]["href"];
  children: React.ReactNode;
}) {
  return (
    <div className="page">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header>
        <div className="topbar">
          <Link href="/">{site.domain}</Link>
          <span>a place for work</span>
        </div>
        <nav aria-label="Main">
          <ul className="nav">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={item.href === current ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.bookingHref}>Book a call</a>
            </li>
          </ul>
        </nav>
      </header>
      <main id="main">{children}</main>
      <footer className="foot">
        <span>
          {site.name}. {site.quote}
        </span>
        <a href={site.bookingHref}>Book a call</a>
        <a href={site.linkedinHref}>LinkedIn</a>
      </footer>
    </div>
  );
}

export function Thumb({ pic, sizes }: { pic: Pic; sizes: string }) {
  return (
    <span className="tile">
      <Image src={pic.src} alt="" width={pic.width} height={pic.height} sizes={sizes} />
    </span>
  );
}

export function Box({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="box">
      <h2>{title}</h2>
      <div className="box-body">{children}</div>
    </section>
  );
}

export function ContactBox() {
  return (
    <Box title={`Contacting ${site.firstName}`}>
      <div className="contact">
        <a className="call" href={site.bookingHref}>
          Book a call
        </a>
        <a href={site.linkedinHref}>
          <SmallIcon id="message" />
          Message me on LinkedIn
        </a>
        <Link href="/work">
          <SmallIcon id="work" />
          See my work
        </Link>
        <Link href="/blog">
          <SmallIcon id="blog" />
          Read my blog
        </Link>
        <Link href="/about">
          <SmallIcon id="about" />
          About me
        </Link>
      </div>
    </Box>
  );
}

export function KeyValues({
  rows,
}: {
  rows: readonly (readonly [string, string])[];
}) {
  return (
    <table className="kv">
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label}>
            <th scope="row">{label}</th>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
