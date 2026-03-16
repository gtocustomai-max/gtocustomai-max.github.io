# Module 5, Lesson 5.4: Agent Handoffs & Collaboration

## Agents Working Together

The true power of a multi-agent system emerges when agents work together. A request might start with one agent, get passed to another, involve a third, and return results through the first. This orchestration multiplies the value of each individual agent.

This lesson covers how agents communicate, hand off tasks, and collaborate on complex work.

## Understanding Agent Communication

### Types of Agent Communication

**1. Direct Handoff**
One agent passes a task to another:
- Executive Agent receives a research request
- Recognizes it should go to Research Agent
- Passes the task with context
- Research Agent completes and responds

**2. Parallel Collaboration**
Multiple agents work on different parts simultaneously:
- Research Agent gathers information
- Content Agent drafts based on research
- Executive Agent handles logistics
- All work in parallel, combine at the end

**3. Sequential Pipeline**
Agents work in sequence, each adding value:
- Research Agent gathers information
- Strategy Agent analyzes findings
- Content Agent creates report
- Executive Agent schedules delivery

**4. Consultation**
One agent consults another for input:
- Content Agent asks Research Agent for facts
- Strategy Agent asks Executive Agent for context
- Research Agent asks Content Agent for formatting

### The Handoff Protocol

For smooth handoffs, agents need a standard protocol:

**Handoff Message Format:**
```markdown
## Handoff Request

**From:** [Agent Name]
**To:** [Agent Name]
**Task:** [What needs to be done]
**Context:** [Relevant background]
**Urgency:** [Low/Medium/High]
**Return To:** [Where to send results]
**Additional Notes:** [Anything else useful]
```

**Example:**
```markdown
## Handoff Request

**From:** Executive Agent
**To:** Research Agent
**Task:** Research the competitive landscape for AI consulting services
**Context:** User is preparing for a client meeting next Tuesday. They need 
to understand competitors' pricing, services, and positioning.
**Urgency:** Medium (needed by Monday)
**Return To:** Executive Agent (or directly to user in #research channel)
**Additional Notes:** Focus on small business consultants, not enterprise.
```

## Setting Up Handoff Rules

### Defining Handoff Triggers

Each agent should know when to hand off:

**Executive Agent Handoffs:**
```markdown
## Handoff Triggers

### Hand Off to Research Agent:
- Research requests (anything requiring information gathering)
- Market analysis questions
- Competitive intelligence needs
- Topic monitoring requests

### Hand Off to Content Agent:
- Content creation requests
- Editing and refinement needs
- Content calendar questions
- Repurposing content

### Hand Off to Strategy Agent:
- Business analysis requests
- Strategic planning needs
- Performance review requests
- Decision support needs
```

**Research Agent Handoffs:**
```markdown
## Handoff Triggers

### Hand Off to Executive Agent:
- Routine scheduling/logistics (not research-related)
- Email or calendar management
- Task management outside research

### Hand Off to Content Agent:
- Research complete, content creation needed
- Findings need to be formatted as content
- Information should be published/shared

### Hand Off to Strategy Agent:
- Research findings need strategic analysis
- Data needs interpretation
- Business implications need exploration
```

### Handoff Rules in AGENTS.md

Add explicit handoff rules to each agent's configuration:

```markdown
## Handoff Rules

### When to Hand Off:
- Task is outside your defined scope
- Another agent is better suited for the task
- Task requires capabilities you don't have
- User explicitly asks for a different agent

### How to Hand Off:
1. Acknowledge the request
2. Explain why you're handing off
3. Provide context to the receiving agent
4. Notify the user of the handoff
5. Follow up if needed

### Handoff Format:
Use the standard handoff message format.

### After Handoff:
- Stay available for follow-up questions
- Don't duplicate work
- Be ready to receive handoffs back
```

## Collaboration Patterns

### Pattern 1: Research-to-Content Pipeline

**Scenario:** User needs a research-based article.

**Flow:**
1. User requests article on a topic
2. Content Agent receives request
3. Content Agent hands off research to Research Agent
4. Research Agent conducts research, returns findings
5. Content Agent drafts article using research
6. Content Agent delivers article to user

**Implementation:**

User (in #content):
"I need a blog post about AI automation for small businesses."

Content Agent:
"I'll help you create that blog post. First, let me gather the research.
[Handoff to Research Agent]"

Research Agent (receives handoff):
"Starting research on AI automation for small businesses...
[Conducts research]
[Returns findings to Content Agent]"

Content Agent:
"I have the research. Now I'll draft the article.
[Creates draft]
Here's the draft: [content]"

### Pattern 2: Strategy-Informed Execution

**Scenario:** User wants to make a strategic decision and execute on it.

**Flow:**
1. User requests strategic analysis
2. Strategy Agent analyzes options
3. Strategy Agent recommends course of action
4. User approves
5. Executive Agent handles execution
6. Content Agent creates any needed materials

**Implementation:**

User (in #strategy):
"Should I expand my services to include AI training workshops?"

Strategy Agent:
"I'll analyze that strategic option.
[Analyzes market, competition, resources, fit]
[Returns analysis with recommendation]"

User:
"Based on your analysis, I'll proceed with the workshops."

Strategy Agent:
"Great choice. I'll hand off the execution planning to Executive Agent."

Executive Agent:
"Received the handoff. I'll create an execution plan:
- Create workshop curriculum (Content Agent)
- Set up scheduling and logistics (me)
- Create marketing materials (Content Agent)
..."

### Pattern 3: Multi-Agent Project

**Scenario:** User has a complex project requiring multiple capabilities.

**Flow:**
1. User describes project
2. Executive Agent coordinates overall effort
3. Multiple agents work in parallel
4. Results converge for delivery

**Implementation:**

User (in #general):
"I need to launch a new service offering. This will require market research,
a marketing plan, pricing strategy, and content creation."

Executive Agent:
"This is a multi-agent project. I'll coordinate:
- Research Agent: Market research
- Strategy Agent: Pricing and positioning
- Content Agent: Marketing materials

[Creates project channel or thread]
[Coordinates handoffs and timeline]"

Research Agent:
"Working on market research...
[Delivers findings to project thread]"

Strategy Agent:
"Working on pricing and positioning...
[Delivers strategy to project thread]"

Content Agent:
"Working on marketing materials...
[Delivers content to project thread]"

Executive Agent:
"All components are ready. Here's the complete launch package:
[Compiles all contributions]
[Schedules implementation steps]"

## Orchestrating Complex Workflows

### The Coordinator Role

For complex multi-agent workflows, one agent (typically Executive Agent) acts as coordinator:

**Coordinator Responsibilities:**
1. Receive the initial request
2. Decompose into components
3. Assign components to appropriate agents
4. Track progress across agents
5. Combine results
6. Deliver to user

**Coordinator Configuration:**
```markdown
## Coordinator Role

When acting as project coordinator:

### Project Initiation:
1. Understand the full scope
2. Identify all agents needed
3. Create a project plan
4. Set up project workspace (channel/thread)
5. Brief all participating agents

### Project Tracking:
1. Monitor agent progress
2. Handle blockers and issues
3. Adjust timeline as needed
4. Keep user informed
5. Ensure quality across contributions

### Project Completion:
1. Verify all components are complete
2. Combine results coherently
3. Deliver to user
4. Archive project materials
5. Update memory with learnings
```

### Project Workspace

For multi-agent projects, create a dedicated workspace:

**In Discord:**
- Create a thread or channel for the project
- All agents post updates there
- User can monitor progress
- Results are consolidated

**Project Thread Example:**
```
📌 Project: New Service Launch
📅 Started: 2024-01-15
🎯 Target: 2024-02-01

📊 Status:
- Research: ✅ Complete
- Strategy: 🔄 In Progress (80%)
- Content: ⏳ Waiting on strategy
- Execution: ⏳ Not started

💬 Updates:
[Research Agent]: Research complete. Key findings...
[Strategy Agent]: Working on pricing. Need input on...
[User]: For pricing, let's aim for...
```

## Handling Handoff Challenges

### Challenge: Lost Context

**Problem:** Information gets lost when passed between agents.

**Solution:** Standardize handoff format and require context:
```markdown
## Handoff Best Practices

Always Include:
1. Original request from user
2. Work completed so far
3. Relevant findings or decisions
4. What's needed next
5. Any constraints or preferences
6. Deadline or urgency

Format:
Use consistent handoff template.
Keep context concise but complete.
Highlight critical information.
```

### Challenge: Conflicting Instructions

**Problem:** Different agents receive conflicting instructions.

**Solution:** Establish a single source of truth:
- The user's direct instruction takes precedence
- Coordinator resolves conflicts
- Agents ask for clarification when conflicted

### Challenge: Handoff Loops

**Problem:** Agents hand off back and forth without resolution.

**Solution:** Handoff limits and escalation:
```markdown
## Handoff Limits

- Maximum 3 handoffs per task
- After 3 handoffs, escalate to user
- Track handoff chain
- If loop detected, ask for clarification

## Escalation

If stuck:
1. Summarize the confusion
2. Ask user for clarification
3. Don't keep handing off
```

### Challenge: Timing Mismatches

**Problem:** One agent delivers before another is ready.

**Solution:** Sequential dependencies and status tracking:
- Mark dependencies in project plan
- Agents check if dependencies are met
- Coordinator manages timeline
- Status updates keep everyone aligned

## Collaboration Examples

### Example 1: Weekly Planning

**User Request:** "Plan my week."

**Collaboration:**
```
Executive Agent:
"I'll coordinate your weekly planning.

Research Agent: Any important industry updates?
Research Agent: [Provides updates]

Strategy Agent: What are the strategic priorities?
Strategy Agent: [Provides priorities]

Content Agent: What content is due?
Content Agent: [Provides content calendar]

Executive Agent:
[Combines all inputs]
Here's your weekly plan:
[Comprehensive plan]
```

### Example 2: Client Project

**User Request:** "Prepare for the Acme Corp meeting."

**Collaboration:**
```
Executive Agent: "I'll coordinate meeting preparation.

Research Agent: Research Acme Corp and their industry.
Research Agent: [Delivers research]

Strategy Agent: Analyze their likely needs and our positioning.
Strategy Agent: [Delivers analysis]

Content Agent: Prepare any presentation materials.
Content Agent: [Delivers presentation draft]

Executive Agent: Schedule preparation time and compile briefing.
[Delivers complete meeting prep]
```

### Example 3: Product Launch

**User Request:** "I want to launch a new service."

**Collaboration:**
```
Executive Agent: "This is a major initiative. I'll coordinate.

[Creates project workspace]

Research Agent: Market research on the service category.
[Delivers findings]

Strategy Agent: Pricing, positioning, and go-to-market strategy.
[Delivers strategy]

Content Agent: Website copy, sales materials, announcements.
[Delivers content]

Executive Agent: Timeline, task assignments, launch coordination.
[Delivers execution plan]

All agents continue supporting through launch.
```

## Monitoring and Improving Collaboration

### Tracking Handoffs

Monitor how well agents collaborate:

```markdown
## Collaboration Metrics

- Handoffs per day/week
- Handoff success rate (completed without issue)
- Average handoff time
- Handoff loops detected
- User satisfaction with multi-agent work
```

### Continuous Improvement

Regularly review and improve:

**Weekly Review:**
- What handoffs went well?
- What handoffs had issues?
- Where was context lost?
- What can be improved?

**Agent Updates:**
- Update handoff rules based on experience
- Refine handoff message format
- Add new collaboration patterns
- Remove patterns that don't work

## Coming Up Next

In Lesson 5.5, we'll explore real-world multi-agent examples—complete setups for different use cases and how to apply what you've learned.

---

## Key Takeaways

1. **Agents need a handoff protocol** - Standard format, clear triggers, proper context
2. **Define handoff rules** - Each agent should know when and how to hand off
3. **Use patterns for common workflows** - Research-to-content, strategy-to-execution, multi-agent projects
4. **One agent coordinates complex projects** - Orchestration requires a conductor
5. **Monitor and improve** - Track handoffs, identify issues, refine the system