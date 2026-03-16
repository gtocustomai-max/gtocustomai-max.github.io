# Module 4, Lesson 4.5: Customer Inquiry Handling

## The Customer Inquiry Challenge

Every business gets inquiries. They're a sign of interest, but they're also a time sink:

- The same questions arrive repeatedly
- Response time affects conversion
- Quality of response affects perception
- Volume can overwhelm your ability to respond

The businesses that win are those that respond quickly, consistently, and helpfully. AI automation makes this possible at scale.

## The Customer Inquiry Spectrum

Not all inquiries are equal. Let's categorize them:

### Category 1: Frequently Asked Questions (70-80% of inquiries)

These are the same questions you've answered a hundred times:
- "What are your prices?"
- "How does this work?"
- "Do you offer [service]?"
- "Can you help with [problem]?"

**Automation Potential: High**
These can be handled almost entirely by AI with templates and knowledge bases.

### Category 2: Qualified Interest (15-20% of inquiries)

These prospects have done research and have specific questions:
- "I saw you offer X. How would that work for [my specific situation]?"
- "I'm comparing you to [competitor]. What makes you different?"
- "I need [specific solution]. Can you help?"

**Automation Potential: Medium**
AI can draft responses, but human review adds value.

### Category 3: Complex or High-Value (5-10% of inquiries)

These require understanding nuance, building relationship, or handling complexity:
- Enterprise clients with custom needs
- Sensitive situations requiring empathy
- Complex problems needing expertise
- High-value prospects warranting personal attention

**Automation Potential: Low**
AI assists with research and drafting, but human handles the interaction.

## Setting Up Inquiry Automation

### Inquiry Classification System

Create a classification framework:

```markdown
## Customer Inquiry Classification

### Level 1: Auto-Response (FAQ)
Criteria:
- Question matches known pattern
- No customization needed
- Standard answer applies
- Low-risk response

Examples:
- Pricing inquiries
- Service descriptions
- Basic how-to questions
- Availability checks

Response: Automated with template

### Level 2: AI-Drafted Response (Qualified)
Criteria:
- Specific context mentioned
- Requires customization
- Standard framework applies
- Medium-risk response

Examples:
- Situation-specific questions
- Comparison requests
- Custom needs inquiry
- Follow-up questions

Response: AI drafts, human reviews and sends

### Level 3: Human-Led (Complex)
Criteria:
- High-value prospect
- Complex requirements
- Sensitive situation
- Strategic importance

Examples:
- Enterprise inquiries
- Custom projects
- Partnership proposals
- Complaints or issues

Response: Human handles, AI assists with research
```

### Response Templates

Create templates for common inquiries:

```
~/.openclaw/workspace/Resources/inquiry-templates/
├── pricing-inquiry.md
├── service-description.md
├── availability-check.md
├── comparison-request.md
├── custom-project.md
└── follow-up.md
```

**Pricing Inquiry Template:**
```markdown
# Pricing Inquiry Response

Subject: Re: Pricing Information

Hi [Name],

Thanks for reaching out! I'd be happy to share pricing information.

[Standard pricing explanation with options]

A few questions to help me give you a more precise quote:
- [Question 1 about their situation]
- [Question 2 about their needs]
- [Question 3 about timeline]

Would you like to schedule a brief call to discuss your specific needs? I can give you a tailored estimate that way.

[Calendar link or scheduling CTA]

Best,
[Your name]
```

### Knowledge Base

Build a knowledge base for consistent answers:

```
~/.openclaw/workspace/Resources/knowledge-base/
├── services.md
├── pricing.md
├── process.md
├── faq.md
└── competitors.md
```

**services.md:**
```markdown
# Services Overview

## AI Automation Consulting

### What We Offer
- Process automation assessment
- Tool selection and implementation
- Training and support
- Ongoing optimization

### Who It's For
- Small businesses (5-50 employees)
- Teams overwhelmed with manual tasks
- Companies looking to scale without hiring
- Businesses seeking competitive advantage

### Typical Engagement
1. Discovery call (30 minutes)
2. Assessment and proposal (1 week)
3. Implementation (2-8 weeks depending on scope)
4. Training and handoff (1-2 weeks)
5. Optional ongoing support

### Pricing
- Hourly: $X/hour
- Project: Starting at $X
- Retainer: $X/month

[Continue with other services...]
```

## Level 1: Automated FAQ Handling

### Identifying FAQ Patterns

Your AI can learn to recognize FAQ patterns:

```markdown
## FAQ Patterns

### Pricing Questions
- "How much do you charge?"
- "What are your prices?"
- "Do you have a price list?"
- "What's your rate?"
→ Use: pricing-inquiry.md template

### Services Questions
- "What services do you offer?"
- "What do you do?"
- "Can you help with [problem]?"
→ Use: services-overview.md template

### Process Questions
- "How does this work?"
- "What's the process?"
- "What are the steps?"
→ Use: process-explanation.md template
```

### Automated Response Workflow

When an inquiry arrives:

1. **Classify:** AI identifies the inquiry type
2. **Match:** AI matches to appropriate template
3. **Customize:** AI fills in relevant details
4. **Draft:** AI creates response draft
5. **Send (FAQ):** Automatic for Level 1
6. **Queue (Others):** For human review

**Example:**

Incoming email:
> Hi, I saw your website and I'm interested in your AI automation services. What do you charge?

AI Processing:
```
📋 Inquiry Classification

Type: Pricing inquiry
Level: 1 (Auto-Response)
Confidence: High

Pattern Match: "What do you charge?" → pricing-inquiry template

Draft Response:
Hi [Name],

Thanks for reaching out! I'd be happy to share pricing information.

For AI automation consulting, I offer:

**Hourly Rate:** $X/hour
Best for: Smaller projects, troubleshooting, ongoing advice

**Project Rate:** Starting at $X
Best for: Defined projects with clear scope

**Monthly Retainer:** $X/month
Best for: Ongoing support and optimization

A few questions to help me give you a more precise quote:
- What specific tasks or processes are you looking to automate?
- How many people are on your team?
- What's your timeline for getting started?

Would you like to schedule a brief call to discuss your specific needs? 
[Calendar link]

Best,
[Your name]

✅ Ready to send (Level 1 auto-response)
```

## Level 2: AI-Assisted Responses

For inquiries that need customization:

### Understanding Context

The AI analyzes the inquiry for context:

```
📋 Inquiry Analysis

**From:** John Smith, Operations Manager at Acme Manufacturing

**Context Indicators:**
- Company: Manufacturing (50+ employees based on LinkedIn)
- Role: Operations Manager (decision-maker level)
- Specific need: "automate our inventory tracking"
- Pain point: "spending 10+ hours/week on manual data entry"
- Timeline: "looking to start next quarter"

**Classification:** Level 2 (AI-Drafted)

**Suggested Approach:**
- Acknowledge specific situation
- Reference manufacturing experience
- Provide relevant case study
- Offer discovery call
- Include rough estimate range
```

### Drafting with Context

The AI drafts a customized response:

```
📝 Draft Response

Hi John,

Thanks for reaching out. Inventory tracking automation is exactly what we help businesses like yours implement.

Your situation—10+ hours/week on manual data entry—is common in manufacturing, and the good news is it's highly automatable. We recently helped a similar-sized manufacturing company reduce their inventory admin time by 80%, saving them about 15 hours per week.

Based on what you've described, here's a rough idea of what this could look like:

**Scope:** Inventory tracking automation including data capture, reconciliation, and reporting
**Timeline:** Typically 4-6 weeks to implement
**Investment:** Projects like this generally run $X-$Y depending on complexity

I'd love to learn more about your current process and specific needs. Would you be open to a 30-minute call this week to discuss?

[Calendar link with suggested times]

Best,
[Your name]

---
📊 Draft Stats:
- Personalization level: High
- Included case study: Yes
- Call to action: Discovery call
- Confidence: Medium-High

⚠️ Human Review Recommended
Reason: Potential high-value lead, consider personal touches
```

### Human Review Queue

Level 2 responses go to a review queue:

```
📬 Response Queue (5 pending)

1. John Smith - Manufacturing inquiry (HIGH PRIORITY)
   Draft ready, 15 minutes old
   
2. Sarah Jones - Service comparison (MEDIUM)
   Draft ready, 1 hour old
   
3. Mike Brown - Follow-up question (MEDIUM)
   Draft ready, 2 hours old
   
[...]
```

You can:
- Approve and send as-is
- Edit and send
- Request a new draft with specific changes
- Escalate to Level 3

## Level 3: Human-Led with AI Assist

For complex or high-value inquiries, the human leads, AI assists:

### AI Research Support

Before you respond, the AI provides research:

```
📋 Lead Intelligence: [Company/Person]

**Company Overview:**
- Industry: [Industry]
- Size: [Employee count]
- Location: [Location]
- Founded: [Year]

**Recent News:**
- [News item 1]
- [News item 2]

**Contact Background:**
- Role: [Title]
- Previous roles: [Notable positions]
- Likely priorities: [Based on role/industry]

**Potential Pain Points:**
- [Pain point 1]
- [Pain point 2]

**Competitors They May Be Considering:**
- [Competitor 1]
- [Competitor 2]

**Suggested Talking Points:**
- [Point 1]
- [Point 2]

**Similar Clients We've Helped:**
- [Case study 1]
- [Case study 2]
```

### Draft Assistance

You write the response, AI helps:

"Draft a response to this inquiry. Key points to cover: [your points]"

The AI creates an initial draft that you then personalize significantly.

### Follow-Up Support

After you send a response:

"Remind me to follow up with [Name] in 3 days if I don't hear back."

"Track this conversation and let me know if they don't respond within a week."

## Response Quality Standards

### Response Time Targets

```markdown
## Response Time Standards

### Level 1 (FAQ)
- Target: Under 1 hour
- Acceptable: Under 4 hours
- After hours: First thing next business day

### Level 2 (Qualified)
- Target: Under 4 hours
- Acceptable: Same business day
- After hours: First thing next business day

### Level 3 (Complex/High-Value)
- Target: Same business day
- Acceptable: Within 24 hours
- Always aim for fastest reasonable response
```

### Quality Checklist

Before any response goes out:

```markdown
## Response Quality Checklist

### Content
- [ ] Answers the question asked
- [ ] Provides relevant next step
- [ ] Includes appropriate detail
- [ ] Addresses their specific situation

### Tone
- [ ] Professional but approachable
- [ ] Helpful, not salesy
- [ ] Appropriate for inquiry level

### Mechanics
- [ ] No spelling/grammar errors
- [ ] Correct name and details
- [ ] Working links
- [ ] Appropriate subject line

### Follow-Up
- [ ] Clear call to action
- [ ] Follow-up scheduled if needed
- [ ] Added to CRM/tracking
```

## Handling Difficult Inquiries

### Complaints or Issues

These always require human attention:

```markdown
## Complaint Handling Protocol

1. Acknowledge immediately
2. Take seriously
3. Don't be defensive
4. Investigate the issue
5. Respond with solution
6. Follow up to ensure satisfaction

AI Role:
- Draft acknowledgment email
- Research the customer's history
- Find relevant policies or precedents
- Suggest resolution options
- Track follow-up
```

### Unusual Requests

For inquiries that don't fit templates:

"This doesn't fit our standard categories. Draft a thoughtful response asking clarifying questions so I can help them better."

### Out of Scope

For inquiries outside your services:

"They're asking about [service we don't offer]. Respond helpfully and suggest alternatives if I can think of any."

## Measuring Inquiry Performance

### Key Metrics

Track these to optimize your system:

```markdown
## Inquiry Metrics

### Volume
- Total inquiries per week/month
- Inquiries by category (Level 1/2/3)
- Inquiries by type (pricing, services, etc.)

### Response Time
- Average response time by level
- Percentage meeting target
- Worst case response times

### Outcomes
- Response-to-conversation rate
- Conversation-to-meeting rate
- Meeting-to-customer rate

### Automation Efficiency
- Percentage auto-responded (Level 1)
- Percentage AI-assisted (Level 2)
- Percentage human-led (Level 3)
- Time saved per inquiry
```

### Weekly Review

"Give me a summary of this week's inquiries. What patterns do you notice? What's working? What needs improvement?"

```
📊 Weekly Inquiry Summary

## Volume
- Total inquiries: 47
- Level 1 (auto): 33 (70%)
- Level 2 (draft): 11 (23%)
- Level 3 (human): 3 (6%)

## Response Time
- Level 1 avg: 23 minutes ✓
- Level 2 avg: 2.3 hours ✓
- Level 3 avg: 5.2 hours ✓

## Patterns Noticed
- Pricing inquiries up 15% this week
- Several mentions of [competitor] in Level 2s
- 3 inquiries specifically about [new topic]

## Opportunities
- Consider adding FAQ for [new topic]
- May need comparison sheet for [competitor]
- Response templates working well

## Recommended Actions
1. Create template for [new topic] inquiries
2. Update comparison information
3. Review Level 2 drafts for personalization
```

## Best Practices for Inquiry Automation

### Start Conservative

1. Begin with clear FAQ auto-responses
2. Gradually expand to more complex inquiries
3. Always maintain human oversight for sensitive situations
4. Review AI responses regularly

### Maintain Your Voice

- Templates should sound like you
- Customize drafts to add personality
- AI assists, you don't surrender your voice

### Never Automate Empathy

- Complaints → Human
- Sensitive situations → Human
- High-value relationships → Human
- Anything unusual → Human

### Keep Templates Updated

- Review templates monthly
- Update pricing and service information
- Incorporate what's working from human responses
- Remove outdated information

### Track and Improve

- Monitor which responses convert
- Identify patterns in follow-up questions
- Refine templates based on outcomes
- Continuously improve your knowledge base

## Coming Up Next

In Lesson 4.6, we'll bring everything together and build your first complete automation—the process for creating end-to-end automated workflows.

---

## Key Takeaways

1. **Categorize inquiries by automation level** - Not all inquiries need the same response
2. **Templates save time, customization builds relationships** - Use both strategically
3. **Auto-respond to FAQs, assist with qualified leads, personally handle high-value** - Match effort to value
4. **Quality and speed both matter** - Fast responses that are also good responses
5. **Never automate empathy** - Some interactions require a human touch