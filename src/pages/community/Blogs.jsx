// src/pages/community/Blogs.jsx
export function Blogs() {
  return (
    <DocsLayout
      sidebar={<Sidebar title="Community" sections={CommunitySections} />}
      rightnav={<RightNav links={[]} />}
    >
      <div className="prose dark:prose-invert max-w-4xl">
        <h1>React Community Blogs</h1>
        <p>
          Explore technical deep dives, tutorials, and experiences from
          community members on platforms like:
        </p>
        <ul>
          <li>Dev.to</li>
          <li>Medium</li>
          <li>Hashnode</li>
          <li>Official React Blog</li>
        </ul>
        <p>
          Contribute your story by writing on a platform of your choice and
          sharing it with the community.
        </p>
      </div>
    </DocsLayout>
  );
}
