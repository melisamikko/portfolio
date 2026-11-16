import Image from "next/image";
import Link from "next/link";
import { OnlineIcon, PersonIcon, SmallIcon } from "@/components/Icons";
import { Box, ContactBox, KeyValues, Shell, Thumb } from "@/components/Profile";
import { formatPostDate, getAllPosts } from "@/data/blog";
import { blurbs, details, interests, site } from "@/data/site";
import { work } from "@/data/work";

const updated = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <Shell current="/">
      <div className="cols home">
        <div className="stack side-top">
          <div>
            <h1 className="name">{site.name}</h1>
            <div className="id">
              {site.photo ? (
                <Image
                  className="photo"
                  src={site.photo}
                  alt={site.name}
                  width={170}
                  height={170}
                  priority
                />
              ) : (
                <span className="photo tile" role="img" aria-label="Photo to come">
                  <PersonIcon />
                </span>
              )}
              <div>
                <p className="quote">&ldquo;{site.quote}&rdquo;</p>
                <p className="meta">
                  Last updated:
                  <br />
                  {updated}
                </p>
                <p className="online">
                  <OnlineIcon />
                  Online Now!
                </p>
              </div>
            </div>
          </div>
          <ContactBox />
        </div>
        <div className="stack side-bottom">
          <Box title={`${site.firstName}'s GitHub`}>
            <div className="contact">
              <a href={site.githubHref} style={{ gridColumn: "1 / -1" }}>
                <SmallIcon id="code" />
                github.com/melisamikko
              </a>
            </div>
            <p className="picnote">
              My public code, including the site template from my Top 8.
            </p>
          </Box>
          <Box title={`${site.firstName}'s Details`}>
            <KeyValues rows={details} />
          </Box>
          <Box title={`${site.firstName}'s Interests`}>
            <KeyValues rows={interests} />
          </Box>
        </div>

        <div className="stack main">
          <p className="network">{site.offer}</p>

          <section className="blurb" id="about">
            <h2 className="peach">{site.firstName}&apos;s Blurbs</h2>
            <h3>About me:</h3>
            {blurbs.aboutMe.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <h3>Who I&apos;d like to meet:</h3>
            {blurbs.whoIdLikeToMeet.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </section>

          <section>
            <h2 className="peach">{site.firstName}&apos;s Work Space: Top 8</h2>
            <p className="count">
              {site.firstName} has <b>{work.length}</b> pieces of work.
            </p>
            <ul className="top8">
              {work.map((w) => (
                <li key={w.slug}>
                  <Link href={`/work/${w.slug}`}>
                    <Thumb pic={w.pics[0]} sizes="(max-width: 760px) 45vw, 150px" />
                    {w.short}
                  </Link>
                </li>
              ))}
              <li>
                <a href={site.bookingHref}>
                  <span className="tile you">
                    <PersonIcon />
                  </span>
                  You? Book a call
                </a>
              </li>
            </ul>
            <p className="more">
              <Link className="btn" href="/work">View all of {site.firstName}&apos;s work</Link>
            </p>
          </section>

          <section className="blurb">
            <h2 className="peach">How {site.firstName} works</h2>
            <ol style={{ marginTop: 12 }}>
              {blurbs.howIWork.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="peach">{site.firstName}&apos;s Latest Blog Entries</h2>
            {posts.length ? (
              <ul className="entries">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="count">
                No entries yet. The first one is being written.
              </p>
            )}
          </section>

          <Box title={`Leave ${site.firstName} a comment`}>
            <p style={{ marginBottom: 12 }}>
              Tell me what is eating your week. A 30 minute call is the fastest
              way to find out if I can take it off your plate.
            </p>
            <div className="contact">
              <a className="call" href={site.bookingHref}>
                Book a call
              </a>
            </div>
          </Box>
        </div>
      </div>
    </Shell>
  );
}
