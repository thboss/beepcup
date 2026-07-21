// ---- Main Application Script ----

let currentLanguage = 'ar';
let activeMenuCategory = 'drip';

// Toggle Language Function
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';

    // Set body classes and text direction
    if (currentLanguage === 'ar') {
        document.body.className = 'lang-ar';
        document.documentElement.lang = 'ar';
        document.dir = 'rtl';
    } else {
        document.body.className = 'lang-en';
        document.documentElement.lang = 'en';
        document.dir = 'ltr';
    }

    // Update DOM text
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (i18n[currentLanguage] && i18n[currentLanguage][key]) {
            element.textContent = i18n[currentLanguage][key];
        }
    });

    // Update interactive menu and branch badges
    renderMenuItems();
    updateBranchStatuses();

    // Reset collapsible contents max-height if expanded to adapt to text height change
    const collapsibles = [
        { triggerId: 'story-toggle-trigger', contentId: 'story-content-area' },
        { triggerId: 'menu-toggle-trigger', contentId: 'menu-content-area' },
        { triggerId: 'branches-toggle-trigger', contentId: 'branches-content-area' }
    ];

    collapsibles.forEach(col => {
        const trigger = document.getElementById(col.triggerId);
        const content = document.getElementById(col.contentId);
        if (trigger && content && trigger.getAttribute('aria-expanded') === 'true') {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
}

// Switch Menu Tab
function switchMenuTab(category, event) {
    if (event) {
        event.stopPropagation();
    }

    activeMenuCategory = category;

    // Update active state in UI tabs
    document.querySelectorAll('.menu-tab-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });

    const activeTab = document.getElementById(`tab-${category}`);
    if (activeTab) {
        activeTab.classList.add('active');
        activeTab.setAttribute('aria-selected', 'true');
    }

    renderMenuItems();

    // Recalculate max-height of menu content area if it is expanded
    const trigger = document.getElementById('menu-toggle-trigger');
    const content = document.getElementById('menu-content-area');
    if (trigger && trigger.getAttribute('aria-expanded') === 'true') {
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}

// Render Menu Items based on current Category and Language
function renderMenuItems() {
    const listContainer = document.getElementById('menu-items-list');
    if (!listContainer) return;
    listContainer.innerHTML = ''; // Clear container

    const items = menuItems[activeMenuCategory] || [];

    items.forEach(item => {
        const name = currentLanguage === 'ar' ? item.nameAr : item.nameEn;
        const badge = currentLanguage === 'ar' ? item.badgeAr : item.badgeEn;
        const currencyMarkup = `<img src="currencySymbol.svg" class="currency-icon" alt="SAR">`;

        const itemElement = document.createElement('div');
        itemElement.className = 'menu-item';

        let badgeMarkup = '';
        if (badge) {
            badgeMarkup = `<span class="menu-item-badge">${badge}</span>`;
        }

        let calMarkup = '';
        if (item.calories !== undefined) {
            const calText = currentLanguage === 'ar' ? `${item.calories} سعرة` : `${item.calories} cal.`;
            calMarkup = `<span class="menu-item-desc">${calText}</span>`;
        }

        itemElement.innerHTML = `
            <div class="menu-item-details">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${name}</h3>
                    ${badgeMarkup}
                </div>
                ${calMarkup}
            </div>
            <span class="menu-item-price">${currencyMarkup}${item.price}</span>
        `;
        listContainer.appendChild(itemElement);
    });

    // Show scroll hint if there are more than 3 items
    const hintElement = document.getElementById('menu-scroll-hint-element');
    if (hintElement) {
        if (items.length > 3) {
            hintElement.style.display = 'flex';
        } else {
            hintElement.style.display = 'none';
        }
    }
}

// Share Profile Trigger
function shareProfile() {
    const shareData = {
        title: 'BeepCup | بيب كوب',
        text: 'تذوق الفرق مع كوب من إبداعنا ❤️',
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData)
            .catch((error) => console.log('Error sharing:', error));
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                const alertMsg = currentLanguage === 'ar' ? 'تم نسخ رابط الصفحة!' : 'Link copied to clipboard!';
                alert(alertMsg);
            })
            .catch((err) => console.error('Failed to copy link:', err));
    }
}

// Toggle Menu Collapsible Panel
function toggleMenuCollapse() {
    const trigger = document.getElementById('menu-toggle-trigger');
    const content = document.getElementById('menu-content-area');

    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

    trigger.setAttribute('aria-expanded', !isExpanded);
    content.setAttribute('aria-hidden', isExpanded);

    if (isExpanded) {
        content.style.maxHeight = '0';
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
    // Set footer year
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Render dynamic sections
    if (typeof renderStorySection === 'function') renderStorySection();
    if (typeof renderBranchesSection === 'function') renderBranchesSection();

    // Set initial direction for AR default
    document.dir = 'rtl';
    document.documentElement.lang = 'ar';

    renderMenuItems();
    updateBranchStatuses();

    // Translate dynamic story and branches text
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (i18n[currentLanguage] && i18n[currentLanguage][key]) {
            element.textContent = i18n[currentLanguage][key];
        }
    });

    // Periodically check statuses every 60 seconds
    setInterval(updateBranchStatuses, 60000);
});
