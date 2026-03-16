# Module 4, Lesson 4.2: Calendar Intelligence

## The Calendar Chaos Problem

Your calendar should be a tool that serves you. For most people, it's become a source of stress instead.

- Meetings pile up with no breathing room
- Scheduling becomes an endless email chain
- Time zones create confusion
- Commitments conflict with priorities
- Your calendar runs you, not the other way around

Calendar intelligence means transforming your calendar from a passive record of commitments into an active tool that protects your time, optimizes your schedule, and handles the tedious logistics of scheduling.

## What Calendar Intelligence Looks Like

### Level 1: Calendar Awareness

Your AI agent monitors your calendar and:
- Knows your upcoming commitments
- Alerts you to conflicts
- Reminds you of upcoming meetings
- Provides daily briefings

**You still manage scheduling, but you're always informed.**

### Level 2: Calendar Assistance

Your AI agent actively helps:
- Proposes meeting times based on your preferences
- Drafts scheduling emails
- Identifies scheduling conflicts
- Suggests optimal times for different activities

**You make decisions, but logistics are handled.**

### Level 3: Calendar Automation

Your AI agent manages scheduling autonomously:
- Handles routine scheduling requests
- Automatically proposes and confirms times
- Reschedules when conflicts arise
- Protects your focused work time

**You're involved only in non-routine scheduling decisions.**

## Setting Up Calendar Integration

### Configuration

Add calendar configuration to your OpenClaw config:

```yaml
calendar:
  provider: google  # or outlook, apple
  
  # Permissions
  read: true        # Can read your calendar
  write: true       # Can add/edit events
  
  # Safety settings
  require_confirmation: true  # Confirm before booking
  draft_mode: true           # Draft events for review
  
  # Preferences
  default_meeting_length: 30  # minutes
  timezone: America/New_York
  business_hours:
    start: "09:00"
    end: "17:00"
```

### Connecting Your Calendar

For Google Calendar:
1. Enable Google Calendar API
2. Authorize OpenClaw access
3. Select which calendars to include

For Outlook:
1. Enable Microsoft Graph API access
2. Authorize OpenClaw
3. Configure calendar permissions

For Apple Calendar:
1. Use CalDAV integration
2. Authorize access
3. Select calendars

### Calendar Preferences

Define your preferences in AGENTS.md:

```markdown
## Calendar Preferences

### Working Hours
- Monday-Friday: 9 AM - 5 PM
- Prefer meetings: 10 AM - 12 PM, 2 PM - 4 PM
- Avoid meetings: Before 9 AM, after 5 PM, lunch (12-1 PM)

### Meeting Preferences
- Default meeting length: 30 minutes
- Buffer time between meetings: 10 minutes
- Maximum meetings per day: 6
- Prefer back-to-back or spread out: Spread out

### Focus Time
- Block 2-hour focus blocks: 9-11 AM, Tuesday and Thursday
- Don't schedule over focus blocks
- Emergency override: Only with explicit approval

### Scheduling Rules
- Never schedule more than 2 weeks in advance without asking
- Always include video link for remote meetings
- Confirm meetings 24 hours before
- Check for conflicts before proposing times

### Meeting Types
- Client calls: Up to 60 minutes, morning preferred
- Internal syncs: 30 minutes, afternoon OK
- Networking calls: 30 minutes, flexible
- Deep work sessions: 2+ hours, morning only
```

## Calendar Awareness: Knowing Your Time

Start with read-only capabilities:

### Daily Briefing

Prompt your agent:
"What does my calendar look like today?"

Your agent provides:
```
📅 Today's Schedule - Wednesday, January 15

🔵 Morning Focus Block: 9:00 - 11:00 AM
   [Protected time - no meetings]

📞 Client Call - Acme Corp: 11:30 AM - 12:00 PM
   Sarah Johnson, project status update
   Zoom link: [link]

🍽️ Lunch Break: 12:00 - 1:00 PM

👥 Team Sync: 1:30 - 2:00 PM
   Weekly team meeting
   Conference room B

📞 Prospect Call - NewCo: 3:00 - 3:30 PM
   Initial consultation call
   Notes: They found us through referral

📝 Buffer Time: 4:00 - 5:00 PM
   [Open for quick meetings or wrap-up]

⚠️ Reminders:
- Prepare Acme Corp status update (call in 2 hours)
- NewCo might need pricing info ready
- Team sync: Bring project updates

📊 Day Summary:
- 3 meetings (2.5 hours)
- 2 hours focus time protected
- 1 hour buffer time available
```

### Weekly Overview

"What's my week looking like?"

```
📅 Week of January 13-17

Monday:
- 4 meetings (3.5 hours)
- Light day - good for deep work

Tuesday:
- 6 meetings (5 hours) ⚠️ Heavy day
- Focus block protected (9-11 AM)

Wednesday:
- 3 meetings (2.5 hours)
- Afternoon mostly open

Thursday:
- 2 meetings (1.5 hours)
- Focus block protected (9-11 AM)
- Ideal for project work

Friday:
- 1 meeting (0.5 hours)
- Very light - catch-up day

📊 Week Summary:
- 16 meetings total (12.5 hours)
- 4 hours of protected focus time
- Heaviest day: Tuesday
- Best for deep work: Thursday, Friday

💡 Suggestions:
- Consider moving one meeting from Tuesday
- Thursday is ideal for that project work you mentioned
- Friday could be used for planning next week
```

### Conflict Detection

Your agent proactively identifies issues:

"⚠️ Scheduling Conflict Detected:
You have two meetings at 2 PM tomorrow:
1. Client call with Acme Corp
2. Team sync

Which one should take priority, or should I propose rescheduling one?"

### Time Analysis

"Analyze my calendar for the past month. How am I spending my time?"

```
📊 Time Analysis - Past 30 Days

Meeting Time: 47 hours (23% of work hours)
├── Client calls: 18 hours (38%)
├── Internal meetings: 15 hours (32%)
├── Networking: 8 hours (17%)
└── Other: 6 hours (13%)

Focus Time: 35 hours (17% of work hours)
├── Protected blocks used: 28 hours (80%)
└── Protected blocks interrupted: 7 hours (20%)

Available Time: 122 hours (60% of work hours)

⚠️ Insights:
- You're in meetings 23% of the time
- 20% of your focus blocks were interrupted
- Friday is consistently your lightest day
- Most meetings are in the afternoon

💡 Recommendations:
- Protect focus blocks more aggressively
- Consider batching meetings on specific days
- Friday could host more meetings if needed
```

## Calendar Assistance: Active Scheduling Help

Once you're comfortable with calendar awareness, add active assistance:

### Proposing Meeting Times

When you need to schedule a meeting:

"I need to schedule a 30-minute call with Sarah from Acme Corp. Propose 3 times that work."

Your agent:
1. Checks your calendar for available slots
2. Considers your preferences (morning for clients)
3. Adds buffer time
4. Proposes times:

```
📅 Proposed Times for Acme Corp Call (30 min):

1. Tuesday, Jan 14 at 10:00 AM
   ✅ Within your preferred client meeting window
   ✅ Morning focus block ends at 11, plenty of buffer

2. Wednesday, Jan 15 at 11:30 AM
   ✅ Morning slot
   ✅ Before your lunch break

3. Thursday, Jan 16 at 2:00 PM
   ✅ Afternoon, but your schedule is light
   ✅ Good buffer after

Which would you like me to propose?
```

### Drafting Scheduling Emails

"Draft an email to Sarah proposing these times."

```
To: Sarah Johnson <sarah@acmecorp.com>
Subject: Scheduling Our Call

Hi Sarah,

I'd love to connect to discuss the project status. Would any of these times work for you?

• Tuesday, Jan 14 at 10:00 AM ET
• Wednesday, Jan 15 at 11:30 AM ET
• Thursday, Jan 16 at 2:00 PM ET

Let me know what works best, and I'll send a calendar invite.

Best,
[Your name]
```

### Handling Scheduling Requests

When someone asks to meet:

"John asked for a meeting next week. Find 3 times that work."

Your agent:
1. Reviews your calendar for next week
2. Identifies available slots
3. Applies your preferences
4. Proposes times

### Time Zone Handling

"My client in London wants to meet. What times work for both of us?"

```
📅 Times that work in both time zones:
(Eastern Time / London Time)

Tuesday:
- 9:00 AM ET / 2:00 PM London
- 10:00 AM ET / 3:00 PM London

Wednesday:
- 9:00 AM ET / 2:00 PM London
- 10:00 AM ET / 3:00 PM London

Thursday:
- 9:00 AM ET / 2:00 PM London
- 11:00 AM ET / 4:00 PM London

💡 Your morning works well for their afternoon.
```

## Calendar Automation: Autonomous Scheduling

The highest level is letting your agent handle routine scheduling:

### What Can Be Automated

**Fully Automated:**
- Confirming meetings at times you've pre-approved
- Rescheduling around conflicts using your preferences
- Sending reminders before meetings
- Adding video links automatically

**Semi-Automated:**
- Proposing times for new meeting requests
- Handling back-and-forth scheduling
- Adjusting for time zones

**Human Required:**
- Prioritizing conflicting meetings
- Scheduling with VIP contacts
- Non-routine or complex scheduling

### Automation Rules

Define rules for your agent:

```markdown
## Calendar Automation Rules

### Auto-Confirm If:
- Time is within your preferred meeting hours
- You have no conflicts
- Meeting is with a known contact
- Duration is 30 minutes or less

### Auto-Propose If:
- Someone requests a meeting
- Time is available
- Meeting fits your preferences

### Always Ask If:
- Meeting is over 60 minutes
- Meeting is outside business hours
- Meeting is with a new contact
- There are any conflicts
```

### Handling Rescheduling

When conflicts arise:

"⚠️ Conflict detected: Your 2 PM call overlaps with your focus block tomorrow. How would you like to handle this?

1. Move the call to 3 PM (available)
2. Move the call to Thursday (you're light that day)
3. Cancel the focus block for this week
4. Decline the meeting request

What's your preference?"

### Meeting Reminders

Automate preparation:

```
🔔 Upcoming Meeting Reminder

📅 Client Call - Acme Corp
⏰ 30 minutes from now (11:30 AM)

📋 Last Meeting Notes:
- Discussed Q1 priorities
- Sarah mentioned budget concerns
- Agreed to prepare ROI analysis

📎 Files Referenced:
- /Projects/Acme/notes.md
- /Projects/Acme/proposal.pdf

📝 Preparation Suggested:
- Review ROI analysis
- Prepare budget options
- Have timeline ready

Would you like me to pull up the relevant files?
```

## Protecting Your Time

Calendar intelligence isn't just about scheduling—it's about protecting your time for what matters.

### Focus Blocks

Define protected time for deep work:

"Block 9-11 AM every Tuesday and Thursday for focus work. No meetings unless it's an emergency."

Your agent:
1. Creates recurring focus blocks
2. Rejects meeting requests during those times
3. Asks before making exceptions
4. Tracks how often focus blocks are respected

### Meeting Budgets

Set limits on meeting time:

"Limit my meetings to 4 hours per day maximum."

Your agent:
1. Monitors daily meeting time
2. Warns when approaching limit
3. Suggests rescheduling if over limit
4. Provides weekly meeting time reports

### Buffer Time

Ensure transitions between meetings:

"Always leave 10 minutes between meetings."

Your agent:
1. Schedules buffer time automatically
2. Proposes times that include buffers
3. Protects buffers from being scheduled over
4. Respects your need for transitions

### Declining Gracefully

When you need to decline:

"Decline the team meeting tomorrow. I have a conflict with my focus block. Draft a polite decline."

```
Hi [Organizer],

Unfortunately, I won't be able to join tomorrow's team meeting. I have a prior commitment during that time.

Could you share the agenda or notes afterward? I'd like to stay in the loop on what's discussed.

Thanks,
[Your name]
```

## Calendar Integration with Other Systems

### Calendar + Email

Connect scheduling across systems:

"When someone emails asking for a meeting, check my calendar and propose 3 times."

"When a meeting is confirmed via email, add it to my calendar automatically."

### Calendar + Tasks

Link calendar to your task system:

"Before my Acme Corp call, remind me to review the project status."

"Block 1 hour tomorrow for working on the proposal task."

### Calendar + Memory

Build context from calendar:

"Remember that I have a monthly check-in with Acme on the first Tuesday."

"After each client call, note key points in the project notes."

## Advanced Calendar Intelligence

### Smart Scheduling

Your agent learns your preferences over time:

"I notice you tend to accept client calls in the morning and decline afternoon meetings on Fridays. Should I apply this as a preference?"

### Calendar Analytics

Track how you spend your time:

"Show me a breakdown of my meetings last month by type."

```
📊 Meeting Breakdown - Last 30 Days

By Type:
- Client calls: 18 hours (38%)
- Internal meetings: 15 hours (32%)
- Networking: 8 hours (17%)
- One-on-ones: 6 hours (13%)

By Duration:
- 15 min: 4 meetings
- 30 min: 22 meetings
- 60 min: 8 meetings
- 90+ min: 2 meetings

By Day:
- Monday: 3.5 hours
- Tuesday: 5 hours
- Wednesday: 2.5 hours
- Thursday: 1.5 hours
- Friday: 0.5 hours

💡 Patterns:
- Your longest meetings are client calls
- Tuesday is your heaviest day
- Friday afternoons are consistently free
```

### Predictive Scheduling

Anticipate needs:

"Your weekly team sync is usually on Wednesdays at 1 PM. I don't see it on this week's calendar. Should I check if it's still happening?"

"The project deadline is in 2 weeks. Would you like me to block time for final preparation?"

## Calendar Best Practices

### The 50-Minute Meeting

Default to 50-minute meetings instead of 60:
- Gives you 10 minutes between meetings
- Most meetings don't need the full hour
- Creates natural buffer time

### The No-Meeting Day

Designate one day with no meetings:
- Pick your most productive day
- Block the entire day for focus work
- Protect it fiercely

### The Meeting Cost Calculation

Before accepting meetings, consider:
- Duration × hourly rate = meeting cost
- Number of attendees × duration × average rate = total cost
- Is the outcome worth the cost?

### The Pre-Meeting Prep

Always prepare before meetings:
- Review previous notes
- Check attendee list
- Know the agenda
- Have your objectives ready

### The Post-Meeting Capture

After meetings, capture:
- Key decisions
- Action items
- Follow-ups
- Next steps

## Coming Up Next

In Lesson 4.3, we'll explore content creation pipelines—how to use AI to generate, refine, and publish content at scale without sacrificing quality.

---

## Key Takeaways

1. **Calendar should serve you, not rule you** - Active management vs. passive recording
2. **Protect focus time aggressively** - Your most valuable work happens in uninterrupted blocks
3. **Automate routine scheduling** - Save decision fatigue for important choices
4. **Analyze your time regularly** - You can't optimize what you don't measure
5. **Integrate calendar with other systems** - Email, tasks, and memory work together