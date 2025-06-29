// src/pages/community/Events.jsx
export function Events() {
  return (
    <DocsLayout
      sidebar={<Sidebar title="Community" sections={CommunitySections} />}
      rightnav={<RightNav links={[]} />}
    >
      <div className="prose dark:prose-invert max-w-4xl">
        <h1>React Events & Meetups</h1>
        <p>
          Attending or organizing React events is a great way to connect with
          other developers. Popular events include:
        </p>
        <ul>
          <li>React Conf</li>
          <li>JSNation</li>
          <li>
            Meetups organized through Dev.to, Meetup.com, and local communities
          </li>
        </ul>
        <p>Stay updated on Twitter and GitHub for announcements and CFPs.</p>
      </div>
    </DocsLayout>
  );
}