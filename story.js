// Story UI & Logic
function renderStorySection() {
    const container = document.getElementById('story-container');
    if (!container) return;

    container.innerHTML = `
        <section class="card collapsible-story" aria-labelledby="story-card-title">
            <button class="collapsible-trigger" id="story-toggle-trigger" onclick="toggleStory()"
                aria-expanded="false">
                <span class="card-title" style="margin-bottom: 0;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        viewBox="0 0 16 16">
                        <path
                            d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8H5v-.5h6V8zm0 2H5v-.5h6V10zm0 2H5v-.5h6V12z" />
                    </svg>
                    <span data-i18n="title-story">قصتنا</span>
                </span>
                <span class="collapsible-icon-wrapper">
                    <svg class="collapsible-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </span>
            </button>
            <div class="collapsible-content" id="story-content-area" aria-hidden="true">
                <div class="collapsible-content-inner">
                    <span class="story-quote-icon" aria-hidden="true">"</span>
                    <p class="story-text" data-i18n="story-paragraph"></p>
                </div>
            </div>
        </section>
    `;
}

// Story Toggle Logic
function toggleStory() {
    const trigger = document.getElementById('story-toggle-trigger');
    const content = document.getElementById('story-content-area');
    if (!trigger || !content) return;

    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

    trigger.setAttribute('aria-expanded', !isExpanded);
    content.setAttribute('aria-hidden', isExpanded);

    if (isExpanded) {
        content.style.maxHeight = '0';
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}
