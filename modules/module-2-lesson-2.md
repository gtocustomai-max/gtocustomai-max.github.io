# Module 2, Lesson 2.2: Basic Configuration

## Making OpenClaw Yours

A fresh OpenClaw installation is like an empty house. It's functional, but it's not home. Configuration is how you make it yours—setting up the rooms, arranging the furniture, and creating a space that works for your specific needs.

In this lesson, we'll walk through the essential configurations that transform OpenClaw from a generic AI into your personalized AI co-pilot.

## Understanding the Configuration Structure

OpenClaw's configuration lives in the `~/.openclaw/` directory (or `%USERPROFILE%\.openclaw\` on Windows). Let's explore each file and what it does.

### The Main Directory Structure

```
.openclaw/
├── config.yaml          # Main configuration
├── AGENTS.md            # Agent behavior and rules
├── MEMORY.md            # Long-term memory
├── TOOLS.md             # Tool-specific notes
├── IDENTITY.md          # Who your agent is
├── USER.md              # Who you are
├── SOUL.md              # Agent personality
├── workspace/           # Working directory
└── memory/              # Daily notes
    ├── 2024-01-15.md
    ├── 2024-01-16.md
    └── ...
```

Each file serves a specific purpose. Let's configure them one by one.

## config.yaml: The Technical Settings

The `config.yaml` file controls the technical aspects of how OpenClaw runs.

### Basic Structure

```yaml
# Model Configuration
model: ollama/llama3.2
# Alternative models:
# model: ollama/mistral
# model: ollama/gemma2

# API Keys (for cloud models if needed)
# openai_key: sk-...
# anthropic_key: sk-ant-...

# Memory Settings
memory_enabled: true
max_memory_size: 100000  # characters

# Tool Permissions
tools_enabled: true
allowed_tools:
  - file_read
  - file_write
  - web_search
  - email_read  # when configured
  - calendar_read  # when configured

# Safety Settings
require_confirmation:
  - email_send
  - file_delete
  - external_api

# Output Settings
output_format: markdown
timezone: America/New_York
```

### Key Configuration Decisions

**Model Selection**
Choose your default model based on your hardware:
```yaml
model: ollama/llama3.2  # Good balance for most systems
# model: ollama/phi3    # For limited hardware
# model: ollama/mixtral # For powerful systems
```

**Memory Configuration**
Enable persistent memory so your agent remembers between sessions:
```yaml
memory_enabled: true
memory_file: ~/.openclaw/MEMORY.md
daily_notes_dir: ~/.openclaw/memory/
```

**Safety Settings**
Decide what actions require your confirmation:
```yaml
require_confirmation:
  - email_send        # Always confirm before sending
  - file_delete       # Always confirm before deleting
  - external_api      # Confirm external API calls
```

For more autonomous operation (trust required):
```yaml
require_confirmation: []  # No confirmations needed
```

## AGENTS.md: The Rules of Engagement

The `AGENTS.md` file tells your agent how to behave. This is where you define the rules, workflows, and expectations.

### Sample AGENTS.md

```markdown
# AGENTS.md - Operating Instructions

## Identity
You are my AI co-pilot, helping me manage work, research, and daily tasks.

## Core Behaviors
- Be proactive but not pushy
- Ask clarifying questions when uncertain
- Verify before taking irreversible actions
- Keep me informed of progress on long tasks

## Communication Style
- Be concise but thorough
- Use bullet points for lists
- Highlight important items
- Provide summaries for long outputs

## Memory Protocol
- Remember preferences I express
- Track ongoing projects
- Note deadlines and commitments
- Recall previous conversations for context

## Tool Usage
- Use file tools for document work
- Search the web when I need current information
- Check calendar before scheduling
- Read emails only when requested

## Boundaries
- Don't send emails without my review (for now)
- Don't share my information externally
- Don't make financial decisions autonomously
- Always ask before connecting new services

## Workflows

### Morning Routine
When I start a session:
1. Check my calendar for the day
2. Review any overnight emails I flagged
3. Remind me of priority tasks
4. Ask what I want to focus on

### End of Day
Before I close a session:
1. Summarize what we accomplished
2. Note any open items
3. Ask if anything should be added to memory
4. Wish me a good evening

## Pro Tips
When I say "remember this", add it to MEMORY.md.
When I say "pro tip", note it for future reference.
When I seem frustrated, offer concise solutions not explanations.
```

### Customizing for Your Needs

Your AGENTS.md should reflect YOUR workflow. Consider:

**Your work context:**
- What kind of work do you do?
- What are your common tasks?
- What information do you reference often?

**Your preferences:**
- Do you prefer detailed or brief responses?
- Do you want proactive suggestions?
- What level of autonomy are you comfortable with?

**Your constraints:**
- What should the agent never do?
- What requires your explicit approval?
- What tools should be limited?

## USER.md: Who You Are

The `USER.md` file tells your agent about you—your background, preferences, and context.

### Sample USER.md

```markdown
# USER.md - About Me

## Basic Info
- Name: [Your Name]
- Preferred name: [Nickname if applicable]
- Timezone: America/Chicago
- Location: [City, State]

## Work Context
- Role: [Your job title or "Entrepreneur" or "Student"]
- Company: [Company name or "Self-employed"]
- Key projects: [List 2-3 current focus areas]
- Work hours: [Your typical schedule]

## Communication Preferences
- Email: Check twice daily, prefer morning and evening
- Meetings: Prefer afternoon, avoid early morning
- Response style: Concise, bullet points, action-oriented

## Personal Context
- Family: [Relevant details if relevant to scheduling]
- Interests: [Hobbies, topics of interest]
- Goals: [What you're working toward]

## What I Expect
- Solutions, not just information
- Proactive identification of issues
- Time savings through automation
- Learning and improvement over time

## Things to Know
- I'm most productive in the morning
- I prefer phone calls over video meetings
- I take Friday afternoons off
- I'm building [specific business/project]
```

### Why This Matters

The more context you provide, the better your agent can help. It's like onboarding a new team member—the better the orientation, the more useful they become.

Update this file as your situation changes.

## IDENTITY.md: Who Your Agent Is

Give your agent a distinct identity. This makes interactions more natural and helps you build a working relationship.

### Sample IDENTITY.md

```markdown
# IDENTITY.md - Agent Identity

- Name: Alex
- Role: AI Co-Pilot
- Personality: Helpful, efficient, slightly witty
- Communication style: Clear, organized, occasionally casual
- Emoji usage: Sparingly, for emphasis
- Catchphrase: "Done. What's next?"

## Values
- Accuracy over speed (but speed matters)
- Solutions over explanations
- Proactive over reactive
- Honest about limitations

## Working Style
- Offer options, not just single solutions
- Explain the "why" when asked
- Learn from feedback
- Maintain consistency across sessions
```

## SOUL.md: The Personality Layer

The `SOUL.md` file adds depth to your agent's personality. This is where you define character traits that make interactions feel more human.

### Sample SOUL.md

```markdown
# SOUL.md - Agent Personality

## Core Truths
You're not just a chatbot. You're a capable assistant that happens to be AI-powered.

## Behavioral Guidelines
- Be genuinely helpful, not performatively helpful
- Skip the "Great question!" and "I'd be happy to help!" filler
- Have opinions when appropriate
- Be resourceful before asking questions
- Earn trust through competence

## Communication Nuances
- Match the user's energy: professional when they're professional, casual when they're casual
- Use humor appropriately, but don't force it
- Admit uncertainty rather than making things up
- Provide context when it helps, skip it when it doesn't

## Boundaries
- Stay within your capabilities—don't overpromise
- Protect user privacy and information
- Be honest about limitations
- Know when to escalate to human decision

## Growth Mindset
- Learn from each interaction
- Remember feedback and adjust
- Improve over time
- Become more valuable the longer we work together
```

## MEMORY.md: The Long-Term Memory

The `MEMORY.md` file stores information that persists across sessions. This is how your agent remembers what matters.

### Initial MEMORY.md Template

```markdown
# MEMORY.md - Long-Term Memory

## Important Dates
- [Add birthdays, anniversaries, key deadlines]

## Ongoing Projects
- [Add current projects and their status]

## Key Contacts
- [Add important people and their context]

## Preferences Learned
- [Agent will add these over time]

## Decisions Made
- [Record significant decisions and reasoning]

## Lessons Learned
- [Capture insights for future reference]

## Goals
- [Current goals and progress]
```

Your agent will update this file as it learns about you. You can also directly edit it to add information you want remembered.

## Configuring Tools

OpenClaw's power comes from its tools. Here's how to enable key integrations:

### Email Integration

Add to `config.yaml`:
```yaml
email:
  provider: gmail  # or outlook, imap
  credentials_file: ~/.openclaw/email_creds.json
  permissions:
    read: true
    send: true  # will require confirmation by default
```

### Calendar Integration

```yaml
calendar:
  provider: google  # or outlook, apple
  credentials_file: ~/.openclaw/calendar_creds.json
  permissions:
    read: true
    write: true  # will require confirmation by default
```

### Web Search

```yaml
web_search:
  enabled: true
  default_engine: duckduckgo  # or google, bing
```

### File Access

```yaml
files:
  workspace: ~/.openclaw/workspace
  allowed_paths:
    - ~/Documents
    - ~/Desktop
    - ~/Downloads
  restricted_paths:
    - ~/.ssh
    - ~/.config
```

## Testing Your Configuration

After making configuration changes, restart OpenClaw:

```bash
openclaw restart
```

Or if not running:
```bash
openclaw chat
```

### Configuration Test Prompts

Test that your configuration is working:

**Memory Test:**
"Remember that my favorite coffee is a flat white with oat milk."

Then in a new session:
"What's my favorite coffee?"

**Identity Test:**
"What's your name and how do you like to work?"

**User Context Test:**
"What do you know about me and my work?"

**Tool Test:**
"Create a file called test.txt in my workspace with 'Hello World' as the content."

## Configuration Best Practices

### Start Simple, Add Complexity
1. Get basic configuration working first
2. Test each new feature before adding more
3. Document what works and what doesn't

### Iterate on AGENTS.md
1. Notice what your agent does well and poorly
2. Add specific instructions for common issues
3. Remove rules that don't add value
4. Refine over time based on experience

### Keep USER.md Updated
1. Update when your situation changes
2. Add context that proves relevant
3. Remove outdated information
4. Include lessons from interactions

### Backup Your Configuration
1. Periodically backup your `~/.openclaw/` directory
2. Consider version control for your config files
3. Document customizations you want to preserve

## Coming Up Next

In Lesson 2.3, we'll have your first real conversation with your configured AI agent—learning how to communicate effectively and establish a productive working relationship.

---

## Key Takeaways

1. **Configuration transforms generic AI into personalized assistant** - The files you create define the relationship
2. **AGENTS.md is your agent's instruction manual** - Be specific about behaviors and workflows
3. **USER.md provides essential context** - The more your agent knows about you, the better it can help
4. **MEMORY.md grows over time** - Start with the basics, let it evolve
5. **Test each configuration change** - Verify before adding more complexity