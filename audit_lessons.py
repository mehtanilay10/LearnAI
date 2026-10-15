#!/usr/bin/env python3
"""Audit all lesson JSON files for content depth."""

import json
import os
import re
from collections import defaultdict

# All lesson files from content/lessons/index.ts
LESSON_FILES = {
    "ai-basics": [
        # phase-1-foundations — what-is-ai
        "content/courses/ai-basics/phase-1-foundations/what-is-ai/ai-vs-ml-vs-generative-ai.json",
        "content/courses/ai-basics/phase-1-foundations/what-is-ai/how-llms-work-simply.json",
        "content/courses/ai-basics/phase-1-foundations/what-is-ai/what-ai-can-and-cannot-do.json",
        "content/courses/ai-basics/phase-1-foundations/what-is-ai/ai-in-everyday-life.json",
        # phase-1-foundations — ai-tools-overview
        "content/courses/ai-basics/phase-1-foundations/ai-tools-overview/chatbot-landscape.json",
        "content/courses/ai-basics/phase-1-foundations/ai-tools-overview/choosing-the-right-tool.json",
        # phase-1-foundations — prompting-basics
        "content/courses/ai-basics/phase-1-foundations/prompting-basics/anatomy-of-a-good-prompt.json",
        "content/courses/ai-basics/phase-1-foundations/prompting-basics/prompt-patterns.json",
        "content/courses/ai-basics/phase-1-foundations/prompting-basics/common-prompting-mistakes.json",
        "content/courses/ai-basics/phase-1-foundations/prompting-basics/system-prompts-and-custom-instructions.json",
        # phase-2-key-concepts — understanding-llms
        "content/courses/ai-basics/phase-2-key-concepts/understanding-llms/tokens-explained.json",
        "content/courses/ai-basics/phase-2-key-concepts/understanding-llms/context-window-deep-dive.json",
        # phase-2-key-concepts — hallucinations-and-accuracy
        "content/courses/ai-basics/phase-2-key-concepts/hallucinations-and-accuracy/ai-hallucination-deep-dive.json",
        "content/courses/ai-basics/phase-2-key-concepts/hallucinations-and-accuracy/evaluating-ai-output.json",
        # phase-3-tools-in-depth — chatbots-in-depth
        "content/courses/ai-basics/phase-3-tools-in-depth/chatbots-in-depth/chatgpt-guide.json",
        "content/courses/ai-basics/phase-3-tools-in-depth/chatbots-in-depth/model-comparison.json",
        "content/courses/ai-basics/phase-3-tools-in-depth/chatbots-in-depth/ai-for-coding.json",
        "content/courses/ai-basics/phase-3-tools-in-depth/chatbots-in-depth/model-selection-and-cost-optimization.json",
        # phase-3-tools-in-depth — research-and-search-tools
        "content/courses/ai-basics/phase-3-tools-in-depth/research-and-search-tools/ai-for-research.json",
        # phase-3-tools-in-depth — writing-and-content-tools
        "content/courses/ai-basics/phase-3-tools-in-depth/writing-and-content-tools/ai-writing-assistant.json",
        "content/courses/ai-basics/phase-3-tools-in-depth/writing-and-content-tools/editing-with-ai.json",
        # phase-4-advanced-prompting — advanced-prompting
        "content/courses/ai-basics/phase-4-advanced-prompting/advanced-prompting/chain-of-thought-prompting.json",
        "content/courses/ai-basics/phase-4-advanced-prompting/advanced-prompting/few-shot-prompting.json",
        # phase-4-advanced-prompting — ai-workflows
        "content/courses/ai-basics/phase-4-advanced-prompting/ai-workflows/building-your-first-workflow.json",
        "content/courses/ai-basics/phase-4-advanced-prompting/ai-workflows/prompt-debugging-workflow.json",
        "content/courses/ai-basics/phase-4-advanced-prompting/ai-workflows/ai-product-design-lifecycle.json",
        # phase-5-automation-agents — automation-basics
        "content/courses/ai-basics/phase-5-automation-agents/automation-basics/what-is-ai-automation.json",
        "content/courses/ai-basics/phase-5-automation-agents/automation-basics/no-code-automation-tools.json",
        "content/courses/ai-basics/phase-5-automation-agents/automation-basics/ai-for-data-analysis.json",
        # phase-5-automation-agents — agents-introduction
        "content/courses/ai-basics/phase-5-automation-agents/agents-introduction/what-are-agents.json",
        "content/courses/ai-basics/phase-5-automation-agents/agents-introduction/how-agents-work.json",
        # phase-5-automation-agents — tool-calling-basics
        "content/courses/ai-basics/phase-5-automation-agents/tool-calling-basics/what-is-tool-calling.json",
        "content/courses/ai-basics/phase-5-automation-agents/tool-calling-basics/agent-guardrails-and-approvals.json",
        # phase-6-safety — safety-and-limitations
        "content/courses/ai-basics/phase-6-safety/safety-and-limitations/ai-limitations.json",
        "content/courses/ai-basics/phase-6-safety/safety-and-limitations/critical-evaluation.json",
        "content/courses/ai-basics/phase-6-safety/safety-and-limitations/ai-evaluation-metrics.json",
        "content/courses/ai-basics/phase-6-safety/safety-and-limitations/prompt-security-and-jailbreak-defense.json",
        # phase-6-safety — privacy-and-data
        "content/courses/ai-basics/phase-6-safety/privacy-and-data/protecting-your-data.json",
        "content/courses/ai-basics/phase-6-safety/privacy-and-data/ai-and-copyright.json",
        "content/courses/ai-basics/phase-6-safety/privacy-and-data/team-ai-governance.json",
        "content/courses/ai-basics/phase-6-safety/privacy-and-data/enterprise-ai-implementation-playbook.json",
        # phase-7-intermediate-systems — rag-and-memory
        "content/courses/ai-basics/phase-7-intermediate-systems/rag-and-memory/rag-explained.json",
        # phase-7-intermediate-systems — embeddings-and-vectors
        "content/courses/ai-basics/phase-7-intermediate-systems/embeddings-and-vectors/embeddings-simply.json",
        "content/courses/ai-basics/phase-7-intermediate-systems/embeddings-and-vectors/vector-databases-in-practice.json",
        # phase-8-advanced-ai — mcp-and-skills
        "content/courses/ai-basics/phase-8-advanced-ai/mcp-and-skills/what-is-mcp.json",
        "content/courses/ai-basics/phase-8-advanced-ai/mcp-and-skills/ai-skills-explained.json",
        # phase-8-advanced-ai — multimodal-ai
        "content/courses/ai-basics/phase-8-advanced-ai/multimodal-ai/images-and-ai.json",
        "content/courses/ai-basics/phase-8-advanced-ai/multimodal-ai/voice-and-video-ai.json",
        # phase-8-advanced-ai — local-vs-cloud-ai
        "content/courses/ai-basics/phase-8-advanced-ai/local-vs-cloud-ai/local-ai-options.json",
        # phase-9-capstone — personal-ai-stack
        "content/courses/ai-basics/phase-9-capstone/personal-ai-stack/building-your-ai-stack.json",
        "content/courses/ai-basics/phase-9-capstone/personal-ai-stack/ai-roadmap-by-role.json",
        "content/courses/ai-basics/phase-9-capstone/personal-ai-stack/ai-project-portfolio-and-capstone-assessments.json",
        # phase-9-capstone — staying-current
        "content/courses/ai-basics/phase-9-capstone/staying-current/staying-current-in-ai.json",
    ],
    "codex": [
        # phase-1-foundations — intro-to-ai-coding
        "content/courses/codex/phase-1-foundations/intro-to-ai-coding/what-is-ai-coding.json",
        "content/courses/codex/phase-1-foundations/intro-to-ai-coding/history-of-ai-coding.json",
        "content/courses/codex/phase-1-foundations/intro-to-ai-coding/setting-up-ai-coding-environment.json",
        # phase-1-foundations — prompt-engineering-for-code
        "content/courses/codex/phase-1-foundations/prompt-engineering-for-code/basic-prompting-for-code.json",
        "content/courses/codex/phase-1-foundations/prompt-engineering-for-code/advanced-prompting-patterns.json",
        "content/courses/codex/phase-1-foundations/prompt-engineering-for-code/prompting-for-debugging.json",
        # phase-2-tools — ai-coding-tools
        "content/courses/codex/phase-2-tools/ai-coding-tools/github-copilot-guide.json",
        "content/courses/codex/phase-2-tools/ai-coding-tools/cursor-ide-guide.json",
        "content/courses/codex/phase-2-tools/ai-coding-tools/chat-assistants-for-coding.json",
        "content/courses/codex/phase-2-tools/ai-coding-tools/claude-for-code.json",
        "content/courses/codex/phase-2-tools/ai-coding-tools/windsurf-and-alternatives.json",
        # phase-3-workflows — practical-ai-workflows
        "content/courses/codex/phase-3-workflows/practical-ai-workflows/debugging-with-ai.json",
        "content/courses/codex/phase-3-workflows/practical-ai-workflows/writing-tests-with-ai.json",
        "content/courses/codex/phase-3-workflows/practical-ai-workflows/refactoring-with-ai.json",
        "content/courses/codex/phase-3-workflows/practical-ai-workflows/code-review-with-ai.json",
        # phase-3-workflows — agentic-workflows
        "content/courses/codex/phase-3-workflows/agentic-workflows/agentic-coding-intro.json",
        "content/courses/codex/phase-3-workflows/agentic-workflows/building-ai-agents.json",
        "content/courses/codex/phase-3-workflows/agentic-workflows/multi-file-workflows.json",
        # phase-4-advanced-techniques — security-and-testing
        "content/courses/codex/phase-4-advanced-techniques/security-and-testing/testing-strategies.json",
        "content/courses/codex/phase-4-advanced-techniques/security-and-testing/ai-security-risks.json",
    ],
    "claude": [
        # phase-1-foundations — what-is-claude
        "content/modules/claude/what-is-claude/what-is-claude.json",
        "content/modules/claude/what-is-claude/claude-vs-other-chatbots.json",
        "content/modules/claude/what-is-claude/claude-philosophy-and-safety.json",
        # phase-1-foundations — getting-started
        "content/modules/claude/getting-started/setting-up-claude.json",
        "content/modules/claude/getting-started/claude-interface-tour.json",
        "content/modules/claude/getting-started/your-first-claude-conversation.json",
        # phase-2-core-features — claude-for-writing
        "content/modules/claude/claude-for-writing/writing-with-claude.json",
        "content/modules/claude/claude-for-writing/editing-and-polishing.json",
        "content/modules/claude/claude-for-writing/tone-and-style.json",
        # phase-2-core-features — claude-for-research
        "content/modules/claude/claude-for-research/research-and-analysis.json",
        "content/modules/claude/claude-for-research/document-understanding.json",
        # phase-3-advanced-usage — claude-artifacts
        "content/modules/claude/claude-artifacts/artifacts-intro.json",
        "content/modules/claude/claude-artifacts/building-with-artifacts.json",
        "content/modules/claude/claude-artifacts/artifacts-workflows.json",
        # phase-3-advanced-usage — claude-api-and-integrations
        "content/modules/claude/claude-api-and-integrations/claude-api-basics.json",
        "content/modules/claude/claude-api-and-integrations/prompt-caching.json",
        "content/modules/claude/claude-api-and-integrations/claude-in-your-workflow.json",
        # phase-4-best-practices — mastering-claude
        "content/modules/claude/mastering-claude/prompt-engineering-for-claude.json",
        "content/modules/claude/mastering-claude/claude-limitations.json",
        "content/modules/claude/mastering-claude/building-your-claude-toolkit.json",
    ],
}

WORKSPACE = "/workspace/f9343184-f4eb-4a6e-8a7f-ec85c9efba8b/sessions/workspace_c8095ab2-3f48-4113-9322-f5c01b3eed81"

PLACEHOLDER_RE = re.compile(
    r'coming\s+soon|placeholder|TODO|will\s+be\s+added\s+soon|content\s+will\s+be\s+added',
    re.IGNORECASE
)

def slug_from_path(path):
    return os.path.splitext(os.path.basename(path))[0]

def serialize(obj):
    """Recursively serialize the object to a flat string for searching."""
    if isinstance(obj, str):
        return obj
    elif isinstance(obj, list):
        return " ".join(serialize(x) for x in obj)
    elif isinstance(obj, dict):
        return " ".join(serialize(v) for v in obj.values())
    else:
        return str(obj)

def count_blocks(data):
    return len(data.get("blocks", []))

def has_placeholder(data):
    text = serialize(data)
    return bool(PLACEHOLDER_RE.search(text))

def has_mermaid(data):
    blocks = data.get("blocks", [])
    for b in blocks:
        if isinstance(b, dict) and b.get("type") == "mermaid":
            return True
        if isinstance(b, dict) and b.get("type") == "diagram":
            return True
    return False

def has_tables(data):
    blocks = data.get("blocks", [])
    for b in blocks:
        if isinstance(b, dict) and b.get("type") == "table":
            return True
        if isinstance(b, dict) and b.get("type") == "comparison-card":
            return True
        if isinstance(b, dict) and b.get("type") == "comparison":
            return True
    return False

def has_examples(data):
    blocks = data.get("blocks", [])
    for b in blocks:
        if isinstance(b, dict) and b.get("type") == "example":
            return True
        if isinstance(b, dict) and b.get("type") == "code-example":
            return True
    return False

def has_callouts(data):
    blocks = data.get("blocks", [])
    for b in blocks:
        if isinstance(b, dict) and b.get("type") in ("callout", "note", "warning", "tip"):
            return True
    return False

def categorize(block_count, placeholder, mermaid, tables, examples, callouts):
    if placeholder or block_count < 5:
        return "placeholder"
    if 3 <= block_count <= 7:
        return "thin"
    if block_count <= 14:
        return "good"
    return "rich"

results = defaultdict(list)

total = 0
for course, files in LESSON_FILES.items():
    for rel_path in files:
        full_path = os.path.join(WORKSPACE, rel_path)
        total += 1
        try:
            with open(full_path, "r", encoding="utf-8") as f:
                data = json.load(f)
        except Exception as e:
            results[course].append({
                "slug": slug_from_path(rel_path),
                "path": rel_path,
                "error": str(e),
            })
            continue

        block_count = count_blocks(data)
        placeholder = has_placeholder(data)
        mermaid = has_mermaid(data)
        tables = has_tables(data)
        examples = has_examples(data)
        callouts = has_callouts(data)
        category = categorize(block_count, placeholder, mermaid, tables, examples, callouts)

        results[course].append({
            "slug": slug_from_path(rel_path),
            "path": rel_path,
            "blocks": block_count,
            "placeholder": placeholder,
            "mermaid": mermaid,
            "tables": tables,
            "examples": examples,
            "callouts": callouts,
            "category": category,
        })

# Print structured report
print("=" * 80)
print("LESSON CONTENT DEPTH AUDIT REPORT")
print("=" * 80)
print(f"\nTotal lessons audited: {total}")
print()

# Count by category across all courses
cat_counts = defaultdict(int)
for course, items in results.items():
    for item in items:
        if "error" not in item:
            cat_counts[item["category"]] += 1

print("CATEGORY TOTALS (all courses):")
for cat in ["rich", "good", "thin", "placeholder"]:
    print(f"  {cat:12s}: {cat_counts[cat]}")
print()

for course in ["ai-basics", "codex", "claude"]:
    items = results.get(course, [])
    print("=" * 80)
    print(f"COURSE: {course}  ({len(items)} lessons)")
    print("=" * 80)

    course_cats = defaultdict(int)
    for item in items:
        course_cats[item.get("category", "error")] += 1

    for cat in ["rich", "good", "thin", "placeholder"]:
        print(f"  {cat:12s}: {course_cats.get(cat, 0)}")
    print()

    # Placeholder lessons
    phs = [i for i in items if i.get("category") == "placeholder" or "error" in i]
    if phs:
        print("  PLACEHOLDER LESSONS (need full content):")
        for item in phs:
            if "error" in item:
                print(f"    ERROR  {item['slug']}: {item['error']}")
            else:
                print(f"    {item['slug']:50s}  blocks={item['blocks']:2d}  placeholder={item['placeholder']}")
        print()

    # Thin lessons
    thins = [i for i in items if i.get("category") == "thin"]
    if thins:
        print("  THIN LESSONS (need enhancement):")
        for item in thins:
            rich_feat = []
            if item["mermaid"]: rich_feat.append("mermaid")
            if item["tables"]: rich_feat.append("tables")
            if item["examples"]: rich_feat.append("examples")
            if item["callouts"]: rich_feat.append("callouts")
            rich_str = ", ".join(rich_feat) if rich_feat else "none"
            print(f"    {item['slug']:50s}  blocks={item['blocks']:2d}  features=[{rich_str}]")
        print()

    # Rich lessons
    richs = [i for i in items if i.get("category") == "rich"]
    if richs:
        print("  RICH LESSONS (15+ blocks, good features):")
        for item in richs:
            rich_feat = []
            if item["mermaid"]: rich_feat.append("mermaid")
            if item["tables"]: rich_feat.append("tables")
            if item["examples"]: rich_feat.append("examples")
            if item["callouts"]: rich_feat.append("callouts")
            rich_str = ", ".join(rich_feat) if rich_feat else "none"
            print(f"    {item['slug']:50s}  blocks={item['blocks']:2d}  features=[{rich_str}]")
        print()

print("=" * 80)
print("END OF REPORT")
print("=" * 80)
