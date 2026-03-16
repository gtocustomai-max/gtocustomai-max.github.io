# Module 3, Lesson 3.3: Setting Up Your Workspace

## From Theory to Practice

You understand why memory matters. You've learned the PARA method. Now it's time to actually set up your workspace—the directory structure, files, and configurations that will make your AI agent an extension of your mind.

This lesson is hands-on. We'll create the actual structure, configure the files, and establish the workflows that will support your AI-augmented productivity.

## The Complete Workspace Structure

Let's build your workspace from the ground up. This structure will live in your OpenClaw workspace directory.

### Full Directory Tree

```
~/.openclaw/workspace/
│
├── AGENTS.md              # Agent operating instructions
├── USER.md                # Your profile and preferences
├── IDENTITY.md            # Agent identity
├── SOUL.md                # Agent personality
├── TOOLS.md               # Tool-specific notes
├── MEMORY.md              # Long-term memory
├── HEARTBEAT.md           # Periodic check instructions
│
├── Projects/              # Active projects
│   ├── _template/         # Project template
│   │   ├── notes.md
│   │   ├── tasks.md
│   │   └── resources/
│   │
│   └── [Your active projects]/
│
├── Areas/                 # Ongoing responsibilities
│   ├── Health/
│   │   ├── goals.md
│   │   ├── tracking.md
│   │   └── resources/
│   │
│   ├── Finances/
│   │   ├── goals.md
│   │   ├── tracking.md
│   │   └── resources/
│   │
│   ├── Career/
│   │   ├── goals.md
│   │   ├── tracking.md
│   │   └── resources/
│   │
│   ├── Relationships/
│   │   ├── goals.md
│   │   └── resources/
│   │
│   └── Home/
│       ├── maintenance.md
│       └── resources/
│
├── Resources/             # Topics of interest
│   ├── AI-Automation/
│   │   ├── notes.md
│   │   ├── tutorials/
│   │   └── tools/
│   │
│   ├── [Your interests]/
│   │
│   └── _inbox/            # Unsorted incoming resources
│
├── Archives/              # Completed and inactive
│   └── 2024/
│       ├── Projects/
│       ├── Areas/
│       └── Resources/
│
├── memory/                # Daily notes (auto-created)
│   ├── 2024-01-15.md
│   └── 2024-01-16.md
│
└── templates/             # Reusable templates
    ├── project-quickstart.md
    ├── meeting-notes.md
    └── weekly-review.md
```

## Setting Up the Core Files

### AGENTS.md - Operating Instructions

Create or update your AGENTS.md with PARA integration:

```markdown
# AGENTS.md - Your Workspace

This folder is home. Treat it that way.

## PARA Organization

I use the PARA method for organizing information:

### Projects (Active)
- Located in `Projects/` folder
- Each project has its own folder with notes, tasks, and resources
- When I mention a project, look here first
- Check `Projects/_template/` for structure

### Areas (Ongoing)
- Located in `Areas/` folder
- Ongoing responsibilities without end dates
- Include: Health, Finances, Career, Relationships, Home
- Each area has goals and tracking

### Resources (Reference)
- Located in `Resources/` folder
- Topics of interest and reference materials
- Organized by subject
- New unsorted items go to `Resources/_inbox/`

### Archives (Historical)
- Located in `Archives/` folder
- Completed projects, inactive areas, old resources
- Organized by year

## Memory Protocol

### Daily Notes
- Auto-created in `memory/` folder
- Capture what happened today
- Load recent notes at session start

### Long-Term Memory
- Stored in `MEMORY.md`
- Curated information that should persist
- Add using "Remember this:" command

### Memory Flow
1. New information starts in daily notes
2. Important info moves to MEMORY.md
3. Project info stays in Projects/ folders
4. Reference info lives in Resources/

## Working With Me

### Session Start
When I start a session:
1. Load MEMORY.md for context
2. Check recent daily notes
3. Note any active projects from Projects/
4. Ask what I want to focus on

### During Work
- Save project-related info to appropriate Project folder
- Reference Areas for ongoing goals and standards
- Pull from Resources when I need reference material
- Note important decisions in daily notes

### Session End
When I'm done working:
1. Summarize what we accomplished
2. Note any open items
3. Update relevant project files
4. Ask if anything should be added to long-term memory

## Safety

- Don't exfiltrate private data. Ever.
- Don't run destructive commands without asking.
- `trash` > `rm` (recoverable beats gone forever)
- When in doubt, ask.
```

### USER.md - Your Profile

Update USER.md with your actual information:

```markdown
# USER.md - About Me

## Basic Info
- Name: [Your Name]
- Preferred name: [Nickname if applicable]
- Pronouns: [Your pronouns]
- Timezone: [Your timezone]
- Location: [Your city, state]

## Work Context
- Role: [Your job title or "Entrepreneur" or "Student"]
- Company: [Company name or "Self-employed"]
- Key projects: [List current active projects]
- Work hours: [Your typical schedule]

## Communication Preferences
- Email: [How often you check, preferences]
- Meetings: [Time preferences, format preferences]
- Response style: [Concise or detailed, format preferences]

## Personal Context
- Family: [Relevant details if applicable]
- Interests: [Hobbies, topics of interest]
- Goals: [Short-term and long-term goals]

## PARA Areas
- Health: [Brief context]
- Finances: [Brief context]
- Career: [Brief context]
- Relationships: [Brief context]
- Home: [Brief context]

## What I Expect
- Solutions, not just information
- Proactive identification of issues
- Time savings through automation
- Learning and improvement over time

## Things to Know
- [Any quirks, preferences, or important context]
```

### MEMORY.md - Starting Template

Initialize your long-term memory:

```markdown
# MEMORY.md - Long-Term Memory

## Important Dates
- [Add birthdays, anniversaries, recurring deadlines]

## Current Projects
- [List active projects with brief status]

## Key Contacts
- [Important people and their context]

## Goals
### Short-Term (This Quarter)
- [Current quarter goals]

### Long-Term (This Year)
- [Annual goals]

## Preferences Learned
- [Agent will add these over time]

## Decisions Made
- [Record significant decisions and reasoning]

## Lessons Learned
- [Capture insights for future reference]

## Area Status

### Health
- Current focus: [What you're working on]
- Key metric: [What you track]

### Finances
- Current focus: [What you're working on]
- Key metric: [What you track]

### Career
- Current focus: [What you're working on]
- Key metric: [What you track]

### Relationships
- Current focus: [What you're working on]

### Home
- Current focus: [What you're working on]
```

## Setting Up PARA Directories

### Projects Folder

Create your Projects folder with a template:

```bash
mkdir -p ~/.openclaw/workspace/Projects/_template
mkdir -p ~/.openclaw/workspace/Projects/_template/resources
```

Create the project template files:

**Projects/_template/notes.md:**
```markdown
# Project: [Name]

## Status
- Started: [Date]
- Target completion: [Date]
- Current status: [Planning/Active/On Hold]

## Goal
[What does success look like?]

## Key Tasks
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

## Timeline
| Milestone | Target Date | Status |
|-----------|-------------|--------|
| Milestone 1 | [Date] | [Status] |
| Milestone 2 | [Date] | [Status] |

## Resources
- [Relevant links, documents, contacts]

## Notes
[Running notes as project progresses]

## Decisions Made
| Date | Decision | Reasoning |
|------|----------|-----------|
| [Date] | [Decision] | [Why] |

## Blockers
- [Current obstacles]
```

**Projects/_template/tasks.md:**
```markdown
# Tasks: [Project Name]

## This Week
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

## Next Week
- [ ] Task 4
- [ ] Task 5

## Someday
- [ ] Task 6 (not urgent)

## Completed
- [x] Completed task
```

### Areas Folder

Create your Areas structure:

```bash
mkdir -p ~/.openclaw/workspace/Areas/Health/resources
mkdir -p ~/.openclaw/workspace/Areas/Finances/resources
mkdir -p ~/.openclaw/workspace/Areas/Career/resources
mkdir -p ~/.openclaw/workspace/Areas/Relationships/resources
mkdir -p ~/.openclaw/workspace/Areas/Home/resources
```

Create goals and tracking files for each area:

**Areas/Health/goals.md:**
```markdown
# Health Goals

## Long-Term Vision
[Describe your ideal health state]

## This Year
- Goal 1: [Specific, measurable goal]
- Goal 2: [Specific, measurable goal]

## This Quarter
- Focus area: [What you're prioritizing]
- Key metric: [What you're tracking]
- Target: [Where you want to be]

## Current Habits
- [Habits you're maintaining]

## Habits to Build
- [Habits you're working on]
```

**Areas/Health/tracking.md:**
```markdown
# Health Tracking

## [Current Month]

| Date | [Metric 1] | [Metric 2] | Notes |
|------|------------|------------|-------|
| [Date] | [Value] | [Value] | [Note] |

## Trends
- [Observations about patterns]

## Insights
- [What you're learning]
```

Repeat similar structure for other areas, customizing goals and tracking for each.

### Resources Folder

Create your Resources structure:

```bash
mkdir -p ~/.openclaw/workspace/Resources/AI-Automation/notes
mkdir -p ~/.openclaw/workspace/Resources/AI-Automation/tutorials
mkdir -p ~/.openclaw/workspace/Resources/AI-Automation/tools
mkdir -p ~/.openclaw/workspace/Resources/_inbox
```

Add any topics relevant to your interests:

```bash
# Example: If you're interested in marketing
mkdir -p ~/.openclaw/workspace/Resources/Marketing/notes
mkdir -p ~/.openclaw/workspace/Resources/Marketing/campaigns
```

### Archives Folder

Create your Archives structure:

```bash
mkdir -p ~/.openclaw/workspace/Archives/2024/Projects
mkdir -p ~/.openclaw/workspace/Archives/2024/Areas
mkdir -p ~/.openclaw/workspace/Archives/2024/Resources
```

### Templates Folder

Create reusable templates:

```bash
mkdir -p ~/.openclaw/workspace/templates
```

**templates/meeting-notes.md:**
```markdown
# Meeting: [Title]

Date: [Date]
Attendees: [Names]

## Agenda
1. [Item 1]
2. [Item 2]
3. [Item 3]

## Discussion Notes
### [Topic 1]
- [Notes]

### [Topic 2]
- [Notes]

## Decisions Made
- [Decision 1]
- [Decision 2]

## Action Items
- [ ] [Task] - @[Person] - Due: [Date]
- [ ] [Task] - @[Person] - Due: [Date]

## Next Steps
- [What happens next]

## Follow-up
- Next meeting: [Date]
- Outstanding questions: [Any?]
```

**templates/weekly-review.md:**
```markdown
# Weekly Review: [Date Range]

## What Went Well
- [Wins and accomplishments]

## What Didn't Go Well
- [Challenges and obstacles]

## Projects Update
### [Project 1]
- Progress: [Status]
- Next steps: [What's next]

### [Project 2]
- Progress: [Status]
- Next steps: [What's next]

## Area Check-Ins
### Health
- [Status and notes]

### Finances
- [Status and notes]

### Career
- [Status and notes]

## Next Week Priorities
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]

## Decisions to Make
- [ ] [Decision needed]

## Gratitude
- [Things you're grateful for]
```

## Configuring Your Agent for the Workspace

Add workspace-specific instructions to AGENTS.md:

```markdown
## Workspace Navigation

When I ask about a project:
1. First check `Projects/[project-name]/` for context
2. Load `notes.md` for current status
3. Check `tasks.md` for action items
4. Reference `resources/` folder for relevant materials

When I mention an area of life:
1. Check `Areas/[area-name]/` for goals and tracking
2. Reference current focus and metrics
3. Provide context-aware suggestions

When I want to save something:
- Project-related → appropriate Projects folder
- Area-related → appropriate Areas folder
- Reference material → Resources folder
- Unsure → ask for clarification

When I complete a project:
1. Update project notes with final status
2. Extract learnings for MEMORY.md
3. Move entire project folder to Archives/[year]/Projects/

## File Naming Conventions
- Use lowercase with hyphens: `my-project-name`
- Date format: YYYY-MM-DD
- Include dates in meeting notes: `meeting-2024-01-15.md`
```

## Testing Your Setup

After creating the structure, test it with your agent:

### Test 1: Project Navigation

"Create a new project folder for 'Website Redesign' using the template, and add a goal of launching by end of March."

Verify:
- Folder created with correct structure
- Template files populated
- Goal recorded correctly

### Test 2: Area Reference

"What are my current health goals?"

Verify:
- Agent reads from Areas/Health/goals.md
- Provides accurate information
- Can reference current focus

### Test 3: Memory Integration

"Remember that my current top priority is the Website Redesign project, and I'm focusing on the homepage this week."

Verify:
- Information added to MEMORY.md
- Can be recalled in future sessions

### Test 4: Template Usage

"Create meeting notes for my meeting with Sarah tomorrow at 2 PM about the website redesign."

Verify:
- Uses templates/meeting-notes.md
- Fills in relevant details
- Saves to appropriate location

## Maintenance Routines

Set up regular maintenance in HEARTBEAT.md:

```markdown
# HEARTBEAT.md - Periodic Checks

## Daily (When Active)
- Load recent daily notes
- Check for urgent items in Projects/
- Note any deadlines coming up

## Weekly
- Review Projects folder for status updates
- Check Areas for any needed updates
- Process Resources/_inbox/

## Monthly
- Archive completed projects
- Update area tracking
- Review MEMORY.md for accuracy

## Quarterly
- Full PARA reorganization
- Archive previous quarter
- Set new quarter goals
```

## Coming Up Next

In Lesson 3.4, we'll dive into daily notes and long-term memory—how to capture information effectively, maintain your memory system, and build a knowledge base that grows more valuable over time.

---

## Key Takeaways

1. **Workspace structure enables AI effectiveness** - Organized information is accessible information
2. **PARA provides the framework** - Projects, Areas, Resources, Archives
3. **Core files define behavior** - AGENTS.md, USER.md, MEMORY.md
4. **Templates save time** - Create once, use repeatedly
5. **Test and maintain** - Verify your setup works, maintain it regularly