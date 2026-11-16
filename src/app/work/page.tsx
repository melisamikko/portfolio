import type { Metadata } from "next";
import Link from "next/link";
import { ContactBox, Shell, Thumb } from "@/components/Profile";
import { earlierWork, site } from "@/data/site";
import { statusLabel, work } from "@/data/work";

export const metadata: Metadata = {
  title: "Work",
  description: `Systems ${site.name} has built for real businesses: websites, automations and internal tools.`,
};

export default function WorkIndexPage() {
  return (
    <Shell current="/work">
      <div className="cols">
        <div className="stack">
          <h1 className="name">{site.firstName}&apos;s Work</h1>
          <p>
            Clients are described, not named, and their names, logos and
            numbers are blurred in the pictures. Ask on a call and I will walk
            you through any of these.
          </p>
          <ContactBox />
        </div>
        <div className="stack">
          <section>
            <h2 className="peach">
              Showing {work.length} of {work.length} pieces of work
            </h2>
            <table className="worklist">
              <tbody>
                {work.map((w) => (
                  <tr key={w.slug}>
                    <td className="thumbcell">
                      <Thumb pic={w.pics[0]} sizes="110px" />
                    </td>
                    <td>
                      <Link href={`/work/${w.slug}`}>{w.title}</Link>
                      <small>{w.summary}</small>
                      <small>
                        <b>{w.business}.</b> {statusLabel[w.status]}
                        {w.since ? `, since ${w.since}` : ""}.
                      </small>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <section className="blurb">
            <h2 className="peach">Before that</h2>
            {earlierWork.map(([title, summary]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{summary}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </Shell>
  );
}
