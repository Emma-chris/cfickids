// Data and initialization for Bright Future Portfolio

// 1. History Timeline Data
const history = [
    { year: "2010", event: "The Vision", desc: "Founded in a small rented apartment with just 3 children and a big dream." },
    { year: "2015", event: "Permanent Home", desc: "Moved to our current 2-acre facility, allowing us to house 40+ children." },
    { year: "2021", event: "Education Center", desc: "Launched our on-site vocational school to provide life skills." }
];

// 2. Pillars Data
const pillars = [
    { title: "Psychology", desc: "Trauma-informed mental health support." },
    { title: "Nutrition", desc: "Farm-to-table organic meal programs." },
    { title: "Education", desc: "Full scholarships to top-tier universities." },
    { title: "Family", desc: "Lifelong mentorship for our graduates." }
];

// 3. Portfolio/Milestones Data
const milestones = [
    { title: "University Success", category: "Education", img: "https://images.unsplash.com/photo-1523050338692-7b835a07973f?q=80&w=800" },
    { title: "New Medical Wing", category: "Healthcare", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800" },
    { title: "Arts Program", category: "Creativity", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800" }
];

// 4. Daily Routine Data
const routine = [
    { time: "06:00 AM", task: "Morning Prayer & Exercise", icon: "sun" },
    { time: "08:00 AM", task: "School & Skill Acquisition", icon: "book" },
    { time: "02:00 PM", task: "Communal Lunch", icon: "coffee" },
    { time: "07:00 PM", task: "Mentorship & Reflection", icon: "moon" }
];

// 5. Budget Data
const budget = [
    { label: "Nutrition & Health", percent: 45 },
    { label: "Education & Fees", percent: 35 },
    { label: "Staff & Caregivers", percent: 15 },
    { label: "Admin & Operations", percent: 5 }
];

// Inject Daily Routine
const routineContainer = document.getElementById('daily-routine');
routine.forEach(r => {
    routineContainer.innerHTML += `
        <div class="routine-card bg-white p-8 rounded-3xl shadow-sm border border-neutral-100">
            <i data-lucide="${r.icon}" class="mb-4 w-6 h-6"></i>
            <p class="text-xs font-bold uppercase tracking-tighter mb-2">${r.time}</p>
            <p class="text-sm text-neutral-500 font-medium">${r.task}</p>
        </div>
    `;
});

// Inject Budget Breakdown
const budgetContainer = document.getElementById('budget-breakdown');
budget.forEach(b => {
    budgetContainer.innerHTML += `
        <div>
            <div class="flex justify-between text-sm font-bold mb-2">
                <span class="text-neutral-700">${b.label}</span>
                <span class="text-emerald-900">${b.percent}%</span>
            </div>
            <div class="progress-container">
                <div class="progress-bar" style="--final-width: ${b.percent}%"></div>
            </div>
        </div>
    `;
});


// Injections
const timelineContainer = document.getElementById('timeline-container');
history.forEach(h => {
    timelineContainer.innerHTML += `
        <div class="timeline-item">
            <span class="text-rose-600 font-bold text-xl">${h.year}</span>
            <h4 class="text-2xl font-bold mt-1">${h.event}</h4>
            <p class="text-neutral-500 mt-2">${h.desc}</p>
        </div>
    `;
});

const pillarsGrid = document.getElementById('pillars-grid');
pillars.forEach(p => {
    pillarsGrid.innerHTML += `
        <div class="border border-neutral-800 p-6 rounded-2xl">
            <h5 class="font-bold text-rose-500 mb-2">${p.title}</h5>
            <p class="text-xs text-neutral-400">${p.desc}</p>
        </div>
    `;
});

const portfolioGrid = document.getElementById('portfolio-grid');
milestones.forEach(m => {
    portfolioGrid.innerHTML += `
        <div class="relative impact-card group overflow-hidden rounded-[2rem]">
            <img src="${m.img}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <span class="text-rose-500 text-xs font-bold uppercase mb-2">${m.category}</span>
                <h4 class="text-white text-2xl font-bold">${m.title}</h4>
            </div>
        </div>
    `;
});

document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Stop page reload

    const form = e.target;
    const btn = document.getElementById('submitBtn');
    const loader = document.getElementById('loader');
    const btnText = document.getElementById('btnText');
    const successBox = document.getElementById('successMessage');

    // 1. UI Loading State
    btn.disabled = true;
    loader.classList.remove('hidden');
    btnText.innerText = "Sending...";

    // 2. Capture Data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // 3. Simulated API Call (Replace URL with your real backend endpoint)
    try {
        // Simulating a 2-second network delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Logic for actual sending would go here:
        // await fetch('https://your-api.com/send', { method: 'POST', body: JSON.stringify(data) });

        // 4. Success State
        form.classList.add('hidden'); // Hide form
        successBox.classList.remove('hidden'); // Show success message
        console.log("Message Sent Successfully:", data);

    } catch (error) {
        alert("Something went wrong. Please try again.");
        btn.disabled = false;
        loader.classList.add('hidden');
        btnText.innerText = "Send Message";
    }
});

lucide.createIcons();