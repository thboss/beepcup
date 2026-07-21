// Branches Data & Dynamic UI Render

const branchesData = [
    {
        id: "nayfiyah",
        nameKey: "branch-nayfiyah",
        addressKey: "address-nayfiyah",
        mapUrl: "https://www.google.com/maps?q=%D8%A8%D9%8A%D8%A8+%D9%83%D9%88%D8%A8+BEEP+CUP%D8%8C+FHGE6546%D8%8C+2744+%D9%85%D9%86%D8%B5%D9%88%D8%B1+%D8%A8%D9%86+%D9%85%D8%AA%D8%B9%D8%A8+%D8%A8%D9%86+%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2%D8%8C+6546%D8%8C+%D8%AD%D9%8A+%D8%A7%D9%84%D9%87%D9%81%D9%88%D9%81%E2%80%8E+36441&ftid=0x3e37910002d048f7:0x2d5477f893baf5be&entry=gps",
        isComingSoon: false
    },
    {
        id: "ruqayqah",
        nameKey: "branch-ruqayqah",
        addressKey: "address-ruqayqah",
        mapUrl: "https://www.google.com/maps?q=9H29%2BRVV+%D8%A8%D9%8A%D8%A8+%D9%83%D9%88%D8%A8+beep+cup%D8%8C+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D8%A7%D9%85%D9%8A%D8%B1+%D9%85%D8%AD%D9%85%D8%AF+%D8%A8%D9%86+%D9%81%D9%87%D8%AF%D8%8C+%D8%AD%D9%8I+%D8%A7%D9%84%D8%B1%D9%82%D9%8A%D9%82%D8%A9%D8%8C+%D8%A7%D9%84%D9%87%D9%81%D9%88%D9%81%E2%80%8E+36441&ftid=0x3e3791006d8fd7e7:0xf617298ae5e7b421&entry=gps",
        isComingSoon: false
    },
    {
        id: "hamra",
        nameKey: "branch-hamra",
        addressKey: "address-hamra",
        mapUrl: "https://maps.app.goo.gl/Ssh8YxLN5Vi86Dgv8",
        isComingSoon: false
    },
    {
        id: "hufairah",
        nameKey: "branch-hufairah",
        addressKey: "address-hufairah",
        mapUrl: "https://maps.app.goo.gl/TawiG2N3gzy28ZMk6",
        isComingSoon: false
    },
    {
        id: "mahasen",
        nameKey: "branch-mahasen",
        addressKey: "address-mahasen",
        mapUrl: "https://maps.app.goo.gl/KdNiCtGV5vjZeVwa7",
        isComingSoon: true
    },
    {
        id: "salmaniyah",
        nameKey: "branch-salmaniyah",
        addressKey: "address-salmaniyah",
        mapUrl: "https://maps.app.goo.gl/1U97hQz6X6YgSutU8",
        isComingSoon: true
    }
];

function renderBranchesSection() {
    const container = document.getElementById('branches-container');
    if (!container) return;

    const branchCardsHtml = branchesData.map(branch => {
        const hoursRow = !branch.isComingSoon ? `
            <div class="branch-info-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path
                        d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path
                        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </svg>
                <div>
                    <strong data-i18n="hours-label">ساعات العمل:</strong>
                    <span data-i18n="hours-val">يوميا على مدار الساعة</span>
                </div>
            </div>
        ` : '';

        const badgeClass = branch.isComingSoon ? 'branch-status-badge coming-soon' : 'branch-status-badge open';
        const badgeKey = branch.isComingSoon ? 'status-coming-soon' : 'status-open';

        return `
            <article class="branch-card" id="branch-${branch.id}">
                <div class="branch-card-header">
                    <h3 class="branch-name" data-i18n="${branch.nameKey}"></h3>
                    <span class="${badgeClass}" id="status-${branch.id}" data-i18n="${badgeKey}"></span>
                </div>
                <div class="branch-card-body">
                    <div class="branch-info-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                            <path
                                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <span data-i18n="${branch.addressKey}"></span>
                    </div>
                    ${hoursRow}
                    <a href="${branch.mapUrl}" target="_blank" rel="noopener noreferrer" class="branch-action-btn" id="${branch.id}-map-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 1a3 3 0 1 0 0 6A3 3 0 0 0 8 1zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 4z" />
                        </svg>
                        <span data-i18n="btn-directions">الوصول للموقع</span>
                    </a>
                </div>
            </article>
        `;
    }).join('');

    container.innerHTML = `
        <section class="card collapsible-story" id="branches-section-wrapper" aria-labelledby="branches-toggle-trigger">
            <button class="collapsible-trigger" id="branches-toggle-trigger" onclick="toggleBranchesCollapse()" aria-expanded="false">
                <span class="card-title" style="margin-bottom: 0;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    <span data-i18n="title-branches">فروعنا</span>
                </span>
                <span class="collapsible-icon-wrapper">
                    <svg class="collapsible-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </span>
            </button>
            <div class="collapsible-content" id="branches-content-area" aria-hidden="true">
                <div class="collapsible-content-inner" style="background-color: transparent; border-top: none; padding-top: 0; padding-bottom: 10px;">
                    <div class="branches-grid" style="margin-top: 15px;">
                        ${branchCardsHtml}
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Calculate AST (UTC+3) Time and update status badges
function getSaudiTime() {
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    return new Date(utcTime + (3600000 * 3));
}

function updateBranchStatuses() {
    const saudiTime = getSaudiTime();
    const hour = saudiTime.getHours();

    const isOpen = true;

    branchesData.forEach(branch => {
        const card = document.getElementById(`branch-${branch.id}`);
        if (card) {
            const badge = card.querySelector('.branch-status-badge');
            if (badge) {
                if (branch.isComingSoon) {
                    badge.className = 'branch-status-badge coming-soon';
                    badge.textContent = currentLanguage === 'ar' ? i18n.ar['status-coming-soon'] : i18n.en['status-coming-soon'];
                } else {
                    if (isOpen) {
                        badge.className = 'branch-status-badge open';
                        badge.textContent = currentLanguage === 'ar' ? i18n.ar['status-open'] : i18n.en['status-open'];
                    } else {
                        badge.className = 'branch-status-badge closed';
                        badge.textContent = currentLanguage === 'ar' ? i18n.ar['status-closed'] : i18n.en['status-closed'];
                    }
                }
            }
        }
    });
}

// Toggle Branches Collapsible Panel
function toggleBranchesCollapse() {
    const trigger = document.getElementById('branches-toggle-trigger');
    const content = document.getElementById('branches-content-area');
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
