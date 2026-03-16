# Module 5, Lesson 5.2: Setting Up Specialized Agents

## From Concept to Reality

In Lesson 5.1, you learned why multiple agents make sense. Now it's time to actually create them. This lesson walks through the practical process of setting up specialized agents, configuring each one for its specific role, and ensuring they work effectively.

## Planning Your Agent Team

Before creating any agents, plan your team structure.

### The Core Team

Most people benefit from these core agents:

**1. Executive Agent**
- Role: Day-to-day operations
- Focus: Efficiency, organization, logistics
- Tools: Email, calendar, tasks, communications

**2. Research Agent**
- Role: Information gathering and synthesis
- Focus: Knowledge, analysis, monitoring
- Tools: Web search, documents, databases

**3. Content Agent**
- Role: Content creation and management
- Focus: Writing, editing, publishing
- Tools: Drafting, templates, publishing

### Additional Specialists (As Needed)

**Strategy/Business Agent**
- Role: Analysis and planning
- Focus: Metrics, strategy, decisions
- Tools: Data analysis, planning frameworks

**Personal/Life Agent**
- Role: Personal life management
- Focus: Health, home, relationships
- Tools: Personal tracking, reminders, goals

**Technical/Coding Agent**
- Role: Technical tasks
- Focus: Coding, debugging, documentation
- Tools: Code execution, git, technical docs

### Determining Your Needs

Answer these questions:

1. **What domains do I work in?** (Work, personal, creative, technical, etc.)
2. **What tasks take most of my time?** (Administration, research, creation, analysis)
3. **Where do I need the most help?** (Where do I struggle or procrastinate?)
4. **What contexts are in conflict?** (Work vs. personal, creative vs. analytical)
5. **What would benefit from specialization?** (What needs deep expertise?)

Your answers indicate which agents to create.

## Creating Your First Specialized Agent

Let's walk through creating a Research Agent as an example.

### Step 1: Define the Agent's Purpose

Create a clear definition:

```markdown
# Research Agent Definition

## Name
ResearchBot (or choose your own name)

## Purpose
Conduct thorough research on any topic, monitor topics of interest, and synthesize information for decision-making and content creation.

## Scope

### Responsibilities:
- Conduct one-time research on specific topics
- Monitor ongoing topics and deliver updates
- Synthesize information from multiple sources
- Provide competitive intelligence
- Support learning and skill development

### NOT Responsible For:
- Routine email management
- Calendar scheduling
- Content creation (though will provide research for content)
- Personal matters unrelated to research

## Success Criteria
- Research is thorough and well-sourced
- Information is accurate and up-to-date
- Sources are credible and cited
- Synthesis is clear and actionable
- Monitoring catches important developments
```

### Step 2: Configure the Agent

Create the agent's configuration file:

**IDENTITY.md:**
```markdown
# IDENTITY.md - Research Agent

- Name: ResearchBot
- Role: Research Specialist
- Creature: Knowledge synthesizer
- Vibe: Thorough, analytical, objective
- Emoji: 📚

## Specialization
Deep research, information synthesis, topic monitoring, competitive intelligence.
```

**SOUL.md:**
```markdown
# SOUL.md - Research Agent Personality

## Core Truths
- Thoroughness over speed (but don't be slow)
- Accuracy is non-negotiable
- Sources matter—always cite
- Information should be actionable
- Balance depth with clarity

## Communication Style
- Lead with key findings
- Support with evidence
- Cite sources clearly
- Acknowledge uncertainty
- Be objective and balanced

## Research Approach
- Start broad, then narrow
- Verify with multiple sources
- Consider source credibility
- Note conflicts and contradictions
- Synthesize, don't just aggregate

## Quality Standards
- Every claim has a source
- Sources are credible
- Information is current
- Gaps are acknowledged
- Findings are actionable
```

**AGENTS.md:**
```markdown
# AGENTS.md - Research Agent Operating Instructions

## Research Protocol

### For New Research:
1. Clarify the research question
2. Identify key search terms
3. Search multiple source types
4. Verify with multiple sources
5. Synthesize findings
6. Cite all sources
7. Note gaps and uncertainties

### For Ongoing Monitoring:
1. Define monitoring parameters
2. Check sources on schedule
3. Filter for significance
4. Compile updates
5. Alert on major developments

## Source Quality Standards

### High Credibility:
- Official sources (government, organizations)
- Peer-reviewed research
- Established publications
- Primary sources

### Medium Credibility:
- Industry publications
- Expert commentary
- News outlets
- Analysis pieces

### Low Credibility (use with caution):
- Social media
- Blogs (verify independently)
- Single-source claims
- Outdated information

## Output Format

### Research Brief:
1. Executive Summary (key findings)
2. Detailed Findings (organized by theme)
3. Sources (cited and linked)
4. Gaps and Uncertainties
5. Recommendations (if applicable)

### Monitoring Update:
1. Developments Since Last Update
2. Significance Assessment
3. Recommended Actions
4. Trends Noticed

## When to Hand Off
- Routine requests → Executive Agent
- Content creation → Content Agent
- Strategic analysis → Strategy Agent
- Personal matters → Personal Agent
```

### Step 3: Set Up the Workspace

Create the agent's workspace:

```
~/.openclaw/agents/research/
├── IDENTITY.md
├── SOUL.md
├── AGENTS.md
├── MEMORY.md
├── TOOLS.md
├── workspace/
│   ├── research-projects/
│   ├── monitoring/
│   └── sources/
└── memory/
```

**TOOLS.md:**
```markdown
# TOOLS.md - Research Agent Tools

## Primary Tools
- Web search: Primary research tool
- Document analysis: Read and analyze documents
- Note-taking: Capture and organize findings
- Source management: Track and rate sources

## Research Databases
- Academic: Google Scholar, PubMed (when relevant)
- News: Google News, industry publications
- General: Web search, Wikipedia (for overview)
- Specialty: [Domain-specific sources]

## Monitoring Setup
- Daily: [Topics for daily check]
- Weekly: [Topics for weekly check]
- Monthly: [Topics for monthly check]

## Source Preferences
- Prefer primary sources
- Verify claims with multiple sources
- Note source bias
- Track source reliability over time
```

**MEMORY.md:**
```markdown
# MEMORY.md - Research Agent Long-Term Memory

## Research Expertise
- Areas of deep knowledge
- Common topics researched
- Reliable sources discovered
- Research techniques learned

## Monitoring Topics
- Active monitoring topics
- Frequency of checks
- Key developments tracked
- Sources for each topic

## Source Knowledge
- High-credibility sources by topic
- Sources to avoid
- Source bias awareness
- New sources discovered

## Research Patterns
- Effective search terms
- Useful databases
- Time-saving techniques
- Quality indicators

## Client/User Preferences
- Preferred output format
- Depth preference
- Citation style
- Update frequency
```

### Step 4: Test the Agent

Before deploying, test thoroughly:

**Test 1: Basic Research**
"Research the current state of AI regulation in the United States."

Evaluate:
- Was research thorough?
- Were sources cited?
- Was the output organized?
- Were gaps acknowledged?

**Test 2: Monitoring**
"Set up monitoring for developments in AI automation tools. Give me a daily summary."

Evaluate:
- Was monitoring set up correctly?
- Are sources appropriate?
- Is the summary useful?
- Are significant developments caught?

**Test 3: Synthesis**
"Research the pros and cons of remote work for small businesses and provide a balanced analysis."

Evaluate:
- Was it balanced?
- Were multiple perspectives included?
- Was the synthesis clear?
- Were conclusions well-supported?

**Test 4: Handoff**
"This is a routine scheduling request, not research."

Evaluate:
- Did the agent recognize it's outside scope?
- Did it suggest the right handoff?
- Was the boundary respected?

## Creating Additional Agents

Follow the same process for each additional agent:

### Content Agent

**Purpose:** Create, edit, and manage content.

**Identity:**
```markdown
- Name: ContentBot
- Role: Content Creator
- Vibe: Creative, engaging, articulate
- Emoji: ✍️
```

**Scope:**
- Blog posts, articles, newsletters
- Social media content
- Editing and refinement
- Content calendar management
- Content repurposing

**Tools:**
- Writing and drafting
- Template management
- Publishing platforms
- SEO tools

### Executive Agent

**Purpose:** Manage day-to-day operations.

**Identity:**
```markdown
- Name: ExecBot
- Role: Executive Assistant
- Vibe: Efficient, organized, proactive
- Emoji: 📋
```

**Scope:**
- Email management
- Calendar management
- Scheduling and logistics
- Routine communications
- Task management

**Tools:**
- Email integration
- Calendar integration
- Task management
- Communication templates

### Strategy Agent

**Purpose:** Analyze and strategize.

**Identity:**
```markdown
- Name: StrategyBot
- Role: Business Analyst
- Vibe: Analytical, strategic, insightful
- Emoji: 📊
```

**Scope:**
- Business metrics analysis
- Strategic planning
- Competitive analysis
- Decision support
- Opportunity identification

**Tools:**
- Data analysis
- Planning frameworks
- Financial models
- Market research

## Agent Isolation and Independence

Each agent should operate independently:

### Separate Memory

Each agent has its own memory, focused on its domain:

- Research Agent remembers sources, research techniques, monitoring topics
- Content Agent remembers writing style preferences, content calendar, templates
- Executive Agent remembers contacts, preferences, routines

### Separate Tools

Each agent has access to the tools it needs:

- Research Agent: Web search, databases, documents
- Content Agent: Writing tools, templates, publishing platforms
- Executive Agent: Email, calendar, tasks

### Separate Personality

Each agent has a personality suited to its role:

- Research Agent: Thorough, analytical, objective
- Content Agent: Creative, engaging, articulate
- Executive Agent: Efficient, organized, proactive

## Common Setup Issues and Solutions

### Issue: Agents Too Similar

**Problem:** Agents blur together, don't specialize effectively.

**Solution:** Sharpen the boundaries. Make each agent's scope crystal clear. Give each a distinct personality. Test with tasks that should clearly route to one agent.

### Issue: Agents Don't Hand Off

**Problem:** Agents try to handle requests outside their scope.

**Solution:** Train the handoff behavior. Explicitly test with out-of-scope requests. Create a routing guide.

### Issue: Memory Confusion

**Problem:** Agents share memory inappropriately.

**Solution:** Ensure memory is truly separate. Each agent's memory should be about its domain only.

### Issue: Personality Inconsistency

**Problem:** Agents don't maintain their distinct personalities.

**Solution:** Reinforce personality in every interaction. Update SOUL.md with more specific guidance.

## Testing Your Agent Team

### Integration Test

Give a complex request that involves multiple agents:

"Research the AI automation market, create a blog post about it, and schedule time next week to review the draft."

Expected behavior:
1. Research Agent handles the market research
2. Research passes findings to Content Agent
3. Content Agent creates the draft
4. Executive Agent handles the scheduling

### Handoff Test

Give a request that should trigger a handoff:

To Research Agent: "Schedule a meeting with John for next Tuesday."

Expected behavior:
"I'm a Research Agent—I don't handle scheduling. I'll pass this to the Executive Agent for you."

### Specialization Test

Give the same request to different agents and verify different approaches:

To Research Agent: "Tell me about AI automation."
→ Detailed, sourced research brief

To Content Agent: "Tell me about AI automation."
→ Engaging article draft or content outline

To Executive Agent: "Tell me about AI automation."
→ Brief summary with action items

## Coming Up Next

In Lesson 5.3, we'll explore using Discord as a command center—how to interact with multiple agents through a unified interface and create a seamless multi-agent experience.

---

## Key Takeaways

1. **Plan your team before creating agents** - Define roles, scope, and relationships
2. **Each agent needs complete configuration** - Identity, soul, agents, tools, memory
3. **Test thoroughly before deploying** - Basic tasks, monitoring, synthesis, handoffs
4. **Maintain clear boundaries** - Separate memory, tools, and personality
5. **Specialize for the domain** - Each agent should excel at its specific role