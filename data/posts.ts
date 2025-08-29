export interface Post {
  slug: string
  title: string
  category: 'Development' | 'Best Practices' | 'Career'
  date: string // ISO
  minutes: number
  summary: string
  cover?: string // optional image in /public/images/blog/
  body: string // short markdown or HTML for now
}

export const posts: Post[] = [
  {
    slug: 'building-modern-web-apps-with-nuxt-3',
    title: 'Building Modern Web Apps with Nuxt 3',
    category: 'Development',
    date: '2024-01-15',
    minutes: 8,
    summary: 'How I chose Nuxt 3 for my portfolio and the tradeoffs I considered along the way.',
    cover: '/images/blog/nuxt3-cover.svg',
    body: `
      <h2>The Problem</h2>
      <p>I needed to rebuild my portfolio website. My old site was built with plain HTML/CSS and was becoming a maintenance nightmare. I wanted something modern, fast, and that would showcase my technical skills.</p>
      
      <h2>Options Considered</h2>
      <h3>1. Next.js (React)</h3>
      <p><strong>Pros:</strong> Excellent ecosystem, great performance, strong TypeScript support<br>
      <strong>Cons:</strong> I'm more comfortable with Vue, React's learning curve for me</p>
      
      <h3>2. Astro</h3>
      <p><strong>Pros:</strong> Incredible performance, "zero JS by default" philosophy<br>
      <strong>Cons:</strong> Newer framework, smaller ecosystem, less familiar</p>
      
      <h3>3. Nuxt 3</h3>
      <p><strong>Pros:</strong> Vue 3 + Composition API, excellent DX, built-in SSR/SSG<br>
      <strong>Cons:</strong> Vue ecosystem smaller than React's</p>
      
      <h2>Why I Chose Nuxt 3</h2>
      <p>I chose Nuxt 3 because it perfectly balanced my needs:</p>
      <ul>
        <li><strong>Familiarity:</strong> I already knew Vue, so the learning curve was minimal</li>
        <li><strong>Performance:</strong> Built-in optimizations and SSR/SSG capabilities</li>
        <li><strong>Developer Experience:</strong> Auto-imports, file-based routing, excellent TypeScript support</li>
        <li><strong>Future-proof:</strong> Vue 3 with Composition API is the future</li>
      </ul>
      
      <h2>The Result</h2>
      <p>My portfolio now loads in under 2 seconds, has perfect Lighthouse scores, and showcases modern web development practices. The development experience is smooth, and I can easily add new features.</p>
      
      <h2>What I'd Do Differently</h2>
      <p>I would have started with a more structured approach to content management. While the current JSON-based system works, I'm considering moving to a headless CMS for easier content updates.</p>
    `
  },
  {
    slug: 'clean-code-tradeoffs-i-actually-make',
    title: 'Clean Code in Practice: Tradeoffs I Actually Make',
    category: 'Best Practices',
    date: '2024-01-10',
    minutes: 12,
    summary: 'Real-world decisions I make when balancing clean code principles with practical constraints.',
    cover: '/images/blog/clean-code-cover.svg',
    body: `
      <h2>The Problem</h2>
      <p>Every developer knows about clean code principles, but real-world projects have deadlines, technical debt, and constraints that make perfect code impossible. I needed to find the right balance.</p>
      
      <h2>Options Considered</h2>
      <h3>1. Perfect Code Always</h3>
      <p><strong>Pros:</strong> Maintainable, readable, follows all best practices<br>
      <strong>Cons:</strong> Slower development, may not meet deadlines, over-engineering</p>
      
      <h3>2. Ship Fast, Fix Later</h3>
      <p><strong>Pros:</strong> Quick delivery, meets deadlines<br>
      <strong>Cons:</strong> Technical debt, harder to maintain, bugs</p>
      
      <h3>3. Strategic Tradeoffs</h3>
      <p><strong>Pros:</strong> Balanced approach, practical, sustainable<br>
      <strong>Cons:</strong> Requires judgment, not always clear-cut</p>
      
      <h2>My Decision Framework</h2>
      <p>I developed a simple framework for making clean code decisions:</p>
      
      <h3>High Priority (Always Clean)</h3>
      <ul>
        <li>Function and variable naming</li>
        <li>Error handling</li>
        <li>Security considerations</li>
        <li>Core business logic</li>
      </ul>
      
      <h3>Medium Priority (Clean When Possible)</h3>
      <ul>
        <li>Code organization and structure</li>
        <li>Comments and documentation</li>
        <li>Test coverage</li>
      </ul>
      
      <h3>Lower Priority (Can Compromise)</h3>
      <ul>
        <li>Perfect abstraction layers</li>
        <li>Exhaustive edge case handling</li>
        <li>Performance optimizations (unless critical)</li>
      </ul>
      
      <h2>Real Examples</h2>
      <p><strong>Example 1:</strong> I'll spend extra time naming a function that handles user authentication, but I might skip adding comments to a simple utility function.</p>
      
      <p><strong>Example 2:</strong> I'll write tests for business logic, but I might not test every UI component if the deadline is tight.</p>
      
      <h2>What I'd Do Differently</h2>
      <p>I would have documented these tradeoff decisions earlier in my career. Having a clear framework helps me make consistent decisions and explain them to team members.</p>
    `
  },
  {
    slug: 'chemistry-to-code-decisions-missteps',
    title: 'From Chemistry to Code: Decisions & Missteps',
    category: 'Career',
    date: '2024-01-05',
    minutes: 10,
    summary: 'How my chemistry background influenced my career decisions and the mistakes I made along the way.',
    cover: '/images/blog/chemistry-code-cover.svg',
    body: `
      <h2>The Problem</h2>
      <p>After graduating with a chemistry degree, I faced a career crossroads. I enjoyed programming but had no formal CS education. I needed to decide how to transition into tech.</p>
      
      <h2>Options Considered</h2>
      <h3>1. Go Back to School</h3>
      <p><strong>Pros:</strong> Formal education, structured learning, recognized credentials<br>
      <strong>Cons:</strong> Expensive, time-consuming, might not be necessary</p>
      
      <h3>2. Self-Taught Route</h3>
      <p><strong>Pros:</strong> Flexible, cheaper, learn at own pace<br>
      <strong>Cons:</strong> No structure, gaps in knowledge, harder to prove skills</p>
      
      <h3>3. Bootcamp</h3>
      <p><strong>Pros:</strong> Structured, practical, networking<br>
      <strong>Cons:</strong> Expensive, variable quality, might not cover fundamentals</p>
      
      <h2>Why I Chose Self-Taught</h2>
      <p>I chose the self-taught route because:</p>
      <ul>
        <li><strong>Cost:</strong> I couldn't afford more student loans</li>
        <li><strong>Flexibility:</strong> I could work while learning</li>
        <li><strong>Chemistry Background:</strong> I already had strong analytical and problem-solving skills</li>
        <li><strong>Market Reality:</strong> Many successful developers are self-taught</li>
      </ul>
      
      <h2>The Result</h2>
      <p>I landed my first developer job after 8 months of focused learning. My chemistry background actually helped me stand out - employers appreciated my analytical thinking and attention to detail.</p>
      
      <h2>Key Missteps</h2>
      <h3>1. Trying to Learn Everything</h3>
      <p>I spent months learning every programming language I could find. I should have focused on one stack and mastered it first.</p>
      
      <h3>2. Ignoring Fundamentals</h3>
      <p>I jumped straight into frameworks without understanding basic concepts like data structures and algorithms. This came back to haunt me in technical interviews.</p>
      
      <h3>3. Not Building a Portfolio</h3>
      <p>I spent too much time on tutorials and not enough building real projects. Employers want to see what you can actually build.</p>
      
      <h2>What I'd Do Differently</h2>
      <p>I would have:</p>
      <ul>
        <li>Chosen one technology stack and stuck with it</li>
        <li>Built a portfolio from day one</li>
        <li>Learned computer science fundamentals alongside practical skills</li>
        <li>Networked more actively in the tech community</li>
      </ul>
      
      <h2>Lessons Learned</h2>
      <p>My chemistry background taught me systematic thinking, which is invaluable in software development. The key is to leverage your unique background while filling in the gaps with focused learning.</p>
    `
  }
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug)
}

export function getNextPost(currentSlug: string): Post | undefined {
  const currentIndex = posts.findIndex(post => post.slug === currentSlug)
  if (currentIndex === -1 || currentIndex === posts.length - 1) return undefined
  return posts[currentIndex + 1]
}

export function getPrevPost(currentSlug: string): Post | undefined {
  const currentIndex = posts.findIndex(post => post.slug === currentSlug)
  if (currentIndex <= 0) return undefined
  return posts[currentIndex - 1]
}
