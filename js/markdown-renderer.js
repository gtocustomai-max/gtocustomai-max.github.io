// Markdown Renderer for GTO Course Platform
// Converts .md files to professional HTML inline

class MarkdownRenderer {
    constructor() {
        this.cache = new Map();
    }

    // Fetch and render markdown file
    async renderMarkdown(filePath, containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error('Container not found:', containerId);
            return;
        }

        // Check cache
        if (this.cache.has(filePath)) {
            container.innerHTML = this.cache.get(filePath);
            return;
        }

        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.status}`);
            }

            const markdown = await response.text();
            const html = this.parseMarkdown(markdown);
            
            // Cache result
            this.cache.set(filePath, html);
            
            // Render
            container.innerHTML = html;
        } catch (error) {
            console.error('Error loading markdown:', error);
            container.innerHTML = `
                <div style="padding: 24px; background: rgba(239, 68, 68, 0.1); border: 1px solid var(--error); border-radius: 12px;">
                    <h4 style="color: var(--error); margin-bottom: 8px;">Content Not Available</h4>
                    <p style="color: var(--gray-light);">Lesson content is loading. Please refresh the page.</p>
                </div>
            `;
        }
    }

    // Parse markdown to HTML
    parseMarkdown(markdown) {
        let html = markdown;

        // Headers (h1-h6)
        html = html.replace(/^###### (.*$)/g, '<h6>$1</h6>');
        html = html.replace(/^##### (.*$)/g, '<h5>$1</h5>');
        html = html.replace(/^#### (.*$)/g, '<h4>$1</h4>');
        html = html.replace(/^### (.*$)/g, '<h3>$1</h3>');
        html = html.replace(/^## (.*$)/g, '<h2>$1</h2>');
        html = html.replace(/^# (.*$)/g, '<h1>$1</h1>');

        // Bold
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');

        // Italic
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
        html = html.replace(/_(.*?)_/g, '<em>$1</em>');

        // Strikethrough
        html = html.replace(/~~(.*?)~~/g, '<del>$1</del>');

        // Links
        html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

        // Images
        html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" style="max-width: 100%; border-radius: 12px; margin: 16px 0;">');

        // Code blocks
        html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
            return `<pre style="background: var(--dark-elevated); border: 1px solid var(--border); border-radius: 12px; padding: 20px; overflow-x: auto; margin: 16px 0;"><code style="color: var(--light); font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 0.875rem;">${code.trim()}</code></pre>`;
        });

        // Inline code
        html = html.replace(/`(.*?)`/g, '<code style="background: var(--dark-elevated); padding: 2px 6px; border-radius: 4px; font-size: 0.9em; font-family: monospace;">$1</code>');

        // Blockquotes
        html = html.replace(/^> (.*$)/gm, '<blockquote style="border-left: 4px solid var(--gto-teal); padding-left: 16px; margin: 16px 0; color: var(--gray-light); font-style: italic;">$1</blockquote>');

        // Unordered lists
        html = html.replace(/^\s*[-*+] (.*$)/gm, '<li style="margin-bottom: 8px; padding-left: 8px;">$1</li>');
        html = html.replace(/(<li.*<\/li>\n?)+/g, '<ul style="margin: 16px 0; padding-left: 24px;">$&</ul>');

        // Ordered lists
        html = html.replace(/^\s*\d+\. (.*$)/gm, '<li style="margin-bottom: 8px; padding-left: 8px;">$1</li>');
        html = html.replace(/(<li.*<\/li>\n?)+/g, '<ol style="margin: 16px 0; padding-left: 24px;">$&</ol>');

        // Horizontal rule
        html = html.replace(/^---$/gm, '<hr style="border: none; border-top: 1px solid var(--border); margin: 32px 0;">');

        // Line breaks
        html = html.replace(/\n/g, '<br>');

        // Wrap paragraphs
        html = html.replace(/<br>([^<].*?)<br>/g, '<br><p style="margin: 16px 0; color: var(--gray-light); line-height: 1.8;">$1</p><br>');

        // Clean up extra breaks
        html = html.replace(/<br><br>/g, '<br>');
        html = html.replace(/<br><\/p>/g, '</p>');
        html = html.replace(/<\/p><br>/g, '</p>');

        return html;
    }
}

// Initialize
const mdRenderer = new MarkdownRenderer();
window.mdRenderer = mdRenderer;
