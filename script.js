// ---- Initialization ----

// Translation Dictionary
const i18n = {
    ar: {
        "btn-lang": "English",
        "brand-name": "بيب كوب",
        "brand-tagline": "تذوق الفرق مع كوب من إبداعنا ❤️",
        "title-menu-widget": "تصفح المنيو",
        "tab-drip": "القهوة المقطرة",
        "tab-espresso": "مشروبات الاسبريسو",
        "tab-cold": "المشروبات الباردة",
        "tab-matcha": "الماتشا",
        "tab-sweet": "السويت",
        "title-branches": "فروعنا",
        "branch-nayfiyah": "فرع النايفية",
        "address-nayfiyah": "حي النايفية، الهفوف 36441، شارع منصور بن متعب بن عبدالعزيز",
        "hours-label": "ساعات العمل:",
        "hours-val": "يومياً: ٦:٠٠ ص - ١:٠٠ ص",
        "btn-directions": "الوصول للموقع",
        "branch-ruqayqah": "فرع الرقيقة",
        "address-ruqayqah": "حي الرقيقة، الهفوف 36441، شارع الأمير محمد بن فهد",
        "branch-hamra": "فرع الحمراء",
        "address-hamra": "حي الحمراء، الهفوف 36365، طريق الرياض",
        "branch-hufairah": "فرع الحفيرة",
        "address-hufairah": "حي الحفيرة، الهفوف 36362، طريق الملك عبدالله",
        "branch-mahasen": "فرع محاسن",
        "address-mahasen": "محاسن البلدية، الهفوف 36422، طريق الأمير طلال بن عبدالعزيز",
        "branch-salmaniyah": "فرع السلمانية",
        "address-salmaniyah": "حي السلمانية، الهفوف 36441، طريق الرياض",
        "title-story": "قصتنا",
        "story-paragraph": "من أيام الطفولة، كنا ننتظر بفارغ الصبر فلم كرتون \"بيب بيب\"،\nمن هولين بسرعته وخفته.\n\nكبرنا وكبرت معنا فكرة أن السرعة بدون تأخير هي حلم كل عميل.\n\nفكرنا نسوي مشروع يشبهه:\nسريع، بسيط، ويوصل لك التجربة اللي تتمناها بدون تعقيد.\n\nومن هنا ولدت فكرة بيب كوب\nكوب قهوة سريع وجودته عالية، وبدون تأخير.\nواخترنا لك أجود أنواع البن المختص، عشان قهوتك ما تكون عادية،\nتكون قهوتك اليوم، وكل يوم.\n\nبيب كوب\nيعدل كيفك، ويراعي جيبك.\nوجعلها بالعافية!",
        "footer-cookie": "تفضيلات ملفات تعريف الارتباط",
        "footer-report": "إبلاغ",
        "footer-privacy": "الخصوصية",
        "status-open": "مفتوح الآن",
        "status-closed": "مغلق حالياً",
        "status-coming-soon": "قريباً",
        "menu-scroll-hint-text": "اسحب لأسفل لمشاهدة المزيد ➔"
    },
    en: {
        "btn-lang": "عربي",
        "brand-name": "BeepCup",
        "brand-tagline": "Taste the difference with a cup of our creation ❤️",
        "title-menu-widget": "Browse Menu",
        "tab-drip": "Drip Coffee",
        "tab-espresso": "Espresso Drinks",
        "tab-cold": "Cold Drinks",
        "tab-matcha": "Matcha",
        "tab-sweet": "Sweet",
        "title-branches": "Our Branches",
        "branch-nayfiyah": "Al Nayfiyah Branch",
        "address-nayfiyah": "Al Nayfiyah, Al Hofuf 36441, Mansour Bin Mutaib Bin Abdulaziz St.",
        "hours-label": "Opening Hours:",
        "hours-val": "Daily: 6:00 AM - 1:00 AM",
        "btn-directions": "Get Directions",
        "branch-ruqayqah": "Al Ruqayqah Branch",
        "address-ruqayqah": "Al Ruqayqah, Al Hofuf 36441, Prince Mohammad Bin Fahd St.",
        "branch-hamra": "Al Hamra Branch",
        "address-hamra": "Al Hamra, Al Hofuf 36365, Riyadh Rd.",
        "branch-hufairah": "Al Hufairah Branch",
        "address-hufairah": "Al Hufairah, Al Hofuf 36362, King Abdullah Rd.",
        "branch-mahasen": "Mahasen Branch",
        "address-mahasen": "Mahasen Municipal, Al Hofuf 36422, Prince Talal Bin Abdulaziz Rd.",
        "branch-salmaniyah": "Al Salmaniyah Branch",
        "address-salmaniyah": "Al Salmaniyah, Al Hofuf 36441, Riyadh Rd.",
        "title-story": "Our Story",
        "story-paragraph": "Since childhood, we eagerly anticipated the \"Beep Beep\" (Road Runner) cartoon, amazed by his speed and agility.\n\nAs we grew up, the idea grew with us: that speed without delay is every customer's dream.\n\nSo, we thought of creating a project just like him:\nFast, simple, and delivering the experience you wish for without complexity.\n\nAnd from here, the idea of BeepCup was born:\nA quick, high-quality cup of coffee, with zero delay.\nWe chose the finest specialty coffee beans for you, so your coffee isn't just ordinary—it's your coffee today, and every day.\n\nBeepCup:\nRestores your mood, and respects your budget.\nEnjoy it in good health!",
        "footer-cookie": "Cookie Preferences",
        "footer-report": "Report",
        "footer-privacy": "Privacy",
        "status-open": "Open Now",
        "status-closed": "Closed",
        "status-coming-soon": "Coming Soon",
        "menu-scroll-hint-text": "Scroll down for more ➔"
    }
};

// Interactive Menu Database
const menuItems = {
    drip: [
        {
            nameAr: "قهوة اليوم (حار/بارد)",
            nameEn: "Today's coffee (Hot/Cold)",
            calories: 5,
            price: "7 / 5"
        },
        {
            nameAr: "V60 (حار/بارد)",
            nameEn: "V60 (Hot/Cold)",
            calories: 5,
            price: 9
        }
    ],
    espresso: [
        {
            nameAr: "لاتيه (حار/بارد)",
            nameEn: "Latte (Hot/Cold)",
            calories: 120,
            price: 8
        },
        {
            nameAr: "سبانش لاتيه (حار/بارد)",
            nameEn: "Spanish Latte (Hot/Cold)",
            calories: 180,
            price: 9
        },
        {
            nameAr: "فلات وايت (حار)",
            nameEn: "Flat White (Hot)",
            calories: 120,
            price: 8
        },
        {
            nameAr: "أمريكانو (حار/بارد)",
            nameEn: "Americano (Hot/Cold)",
            calories: 10,
            price: 8
        },
        {
            nameAr: "كورتادو (حار)",
            nameEn: "Cortado (Hot)",
            calories: 50,
            price: 7
        },
        {
            nameAr: "اسبريسو (حار)",
            nameEn: "Espresso (Hot)",
            calories: 5,
            price: 6
        },
        {
            nameAr: "الفريدو اسبريسو",
            nameEn: "Alfredo Espresso",
            calories: 3,
            price: 8
        }
    ],
    cold: [
        {
            nameAr: "كركديه",
            nameEn: "Hibiscus",
            calories: 49,
            price: 8
        },
        {
            nameAr: "آيس تي خوخ",
            nameEn: "Ice Tea peach",
            calories: 36,
            price: 8
        },
        {
            nameAr: "ماء",
            nameEn: "Water",
            calories: 0,
            price: 1
        }
    ],
    matcha: [
        {
            nameAr: "ماتشا (حار/بارد)",
            nameEn: "Matcha (Hot/Cold)",
            calories: 120,
            price: 9
        }
    ],
    sweet: [
        {
            nameAr: "كوكيز",
            nameEn: "Cookies",
            calories: 240,
            price: 7
        },
        {
            nameAr: "كيك بار",
            nameEn: "Cake bar",
            calories: 210,
            price: 7
        },
        {
            nameAr: "شوكلت بار",
            nameEn: "Chocolate bar",
            calories: 272,
            price: 7
        },
        {
            nameAr: "تشيز كيك توت",
            nameEn: "Berry Cheesecake",
            calories: 259,
            price: 12
        },
        {
            nameAr: "تشيز كيك بيكان",
            nameEn: "Pecan Cheesecake",
            calories: 195,
            price: 13
        },
        {
            nameAr: "تشيز كيك لوتس",
            nameEn: "Cheesecake Lutos",
            calories: 338,
            price: 14
        },
        {
            nameAr: "بودينق",
            nameEn: "Pudding",
            calories: 226,
            price: 14
        },
        {
            nameAr: "كيك كنافة البستاشيو",
            nameEn: "Pistachio Kunafa Cake",
            calories: 337,
            price: 14
        },
        {
            nameAr: "دولتشي بيكان",
            nameEn: "Dolce Pecan",
            calories: 265,
            price: 17
        },
        {
            nameAr: "كيكة الكوكونت",
            nameEn: "Coconut Cake",
            calories: 273,
            price: 13
        }
    ]
};

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
        if (i18n[currentLanguage][key]) {
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

// Calculate AST (UTC+3) Time and update status badges
function getSaudiTime() {
    const now = new Date();
    // Convert current system time to UTC
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    // Convert UTC to AST (UTC+3)
    return new Date(utcTime + (3600000 * 3));
}

function updateBranchStatuses() {
    const saudiTime = getSaudiTime();
    const hour = saudiTime.getHours();

    // Daily 6:00 AM - 1:00 AM AST
    // H >= 6 (6:00 AM to 11:59 PM) OR H < 1 (midnight to 1:00 AM)
    const isOpen = (hour >= 6 || hour < 1);

    // Active branches
    const activeBranches = ['nayfiyah', 'ruqayqah', 'hamra', 'hufairah'];
    activeBranches.forEach(branchId => {
        const card = document.getElementById(`branch-${branchId}`);
        if (card) {
            const badge = card.querySelector('.branch-status-badge');
            if (badge) {
                if (isOpen) {
                    badge.className = 'branch-status-badge open';
                    badge.textContent = currentLanguage === 'ar' ? i18n.ar['status-open'] : i18n.en['status-open'];
                } else {
                    badge.className = 'branch-status-badge closed';
                    badge.textContent = currentLanguage === 'ar' ? i18n.ar['status-closed'] : i18n.en['status-closed'];
                }
            }
        }
    });

    // Coming soon branches
    const comingSoonBranches = ['mahasen', 'salmaniyah'];
    comingSoonBranches.forEach(branchId => {
        const card = document.getElementById(`branch-${branchId}`);
        if (card) {
            const badge = card.querySelector('.branch-status-badge');
            if (badge) {
                badge.className = 'branch-status-badge coming-soon';
                badge.textContent = currentLanguage === 'ar' ? i18n.ar['status-coming-soon'] : i18n.en['status-coming-soon'];
            }
        }
    });
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

// Toggle Story Collapsible Panel
function toggleStory() {
    const trigger = document.getElementById('story-toggle-trigger');
    const content = document.getElementById('story-content-area');

    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

    trigger.setAttribute('aria-expanded', !isExpanded);
    content.setAttribute('aria-hidden', isExpanded);

    if (isExpanded) {
        content.style.maxHeight = '0';
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
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

// Toggle Branches Collapsible Panel
function toggleBranchesCollapse() {
    const trigger = document.getElementById('branches-toggle-trigger');
    const content = document.getElementById('branches-content-area');

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
    document.getElementById('year').textContent = new Date().getFullYear();

    // Set initial direction for AR default
    document.dir = 'rtl';
    document.documentElement.lang = 'ar';

    renderMenuItems();
    updateBranchStatuses();

    // Periodically check statuses every 60 seconds
    setInterval(updateBranchStatuses, 60000);
});
