import Head from 'next/head';
import BaseLayout from '../components/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
      <Head>
        <title>Mustafa Imran Afzal</title>
      </Head>
      <div className="max-w-4xl space-y-8">
        <p className="type-kicker">Mustafa Imran Afzal</p>
        <h1 className="type-display max-w-3xl text-5xl sm:text-7xl text-neutral-50">
          Software engineer building reliable systems and useful AI.
        </h1>
        <p className="type-lead">
          I&apos;m a software engineer at NielsenIQ, working across Java, Spring Boot, data systems, and applied AI with Python. I build production software that handles real scale, from faster catalog processing and platform upgrades to tools that help engineers work better.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2" aria-label="Selected engineering impact">
          <li className="rounded-[1.5rem] bg-neutral-800/70 p-5 shadow-md ring-1 ring-white/8">
            <p className="type-kicker mb-2">Systems at scale</p>
            <p className="type-body text-neutral-200">Cut taxonomy-change processing time by over 83% for a 1M-product job with parallel product workers and a dedicated I/O pool.</p>
          </li>
          <li className="rounded-[1.5rem] bg-neutral-800/70 p-5 shadow-md ring-1 ring-white/8">
            <p className="type-kicker mb-2">Built for production</p>
            <p className="type-body text-neutral-200">Modernized 20+ microservices with Java 21 and Spring Boot 3, and migrated three services from Neo4j to MongoDB without customer-facing downtime.</p>
          </li>
          <li className="rounded-[1.5rem] bg-neutral-800/70 p-5 shadow-md ring-1 ring-white/8">
            <p className="type-kicker mb-2">From beta to production</p>
            <p className="type-body text-neutral-200">Took a mobile-banking platform from early beta to production, shipping five full-stack modules for 2M+ retail users.</p>
          </li>
          <li className="rounded-[1.5rem] bg-neutral-800/70 p-5 shadow-md ring-1 ring-white/8">
            <p className="type-kicker mb-2">Applied AI</p>
            <p className="type-body text-neutral-200">Built AI skills and led a GitHub Copilot CLI workshop for 60 engineers, driving adoption of agentic workflows and MCP servers across four teams.</p>
          </li>
        </ul>
      </div>
    </BaseLayout>
  );
}
