// Default Game and Anime data templates
const defaultGames = [
    { id: "g1", title: "Minecraft", category: "games", rating: 5, month: "January", year: 2024, image: "", notes: "Started playing via TLauncher right after setting up the laptop!" },
    { id: "g2", title: "Valorant", category: "games", rating: 4, month: "February", year: 2024, image: "", notes: "Competitive FPS benders with friends." },
    { id: "g3", title: "Hitman (2016)", category: "games", rating: 5, month: "June", year: 2024, image: "", notes: "Agent 47 stealth missions." },
    { id: "g4", title: "Assassin's Creed Rogue", category: "games", rating: 4, month: "June", year: 2024, image: "", notes: "Playing as Shay Cormac, hunting Assassins." },
    { id: "g5", title: "Far Cry 3", category: "games", rating: 5, month: "July", year: 2024, image: "", notes: "Defeating Vaas Montenegro in the Rook Islands." },
    { id: "g6", title: "Assassin's Creed IV: Black Flag", category: "games", rating: 5, month: "July", year: 2024, image: "", notes: "Sailing the Jackdaw across the Caribbean." },
    { id: "g7", title: "Assassin's Creed Brotherhood", category: "games", rating: 5, month: "July", year: 2024, image: "", notes: "Rebuilding Rome and recruiting recruits." },
    { id: "g8", title: "Call of Duty: Black Ops", category: "games", rating: 5, month: "November", year: 2024, image: "", notes: "The numbers Mason, what do they mean!" },
    { id: "g9", title: "God of War", category: "games", rating: 5, month: "November", year: 2024, image: "", notes: "Kratos and Atreus in Midgard." },
    { id: "g10", title: "Detroit: Become Human", category: "games", rating: 5, month: "December", year: 2024, image: "", notes: "Interactive masterclass with Connor, Kara, and Markus." },
    { id: "g11", title: "Resident Evil 2 (Remake)", category: "games", rating: 5, month: "February", year: 2025, image: "", notes: "Survival horror in Raccoon City Police Station." },
    { id: "g12", title: "Hitman Series", category: "games", rating: 5, month: "March", year: 2025, image: "", notes: "Deep dive into stealth contracts." },
    { id: "g13", title: "Call of Duty: Modern Warfare 3", category: "games", rating: 4, month: "April", year: 2025, image: "", notes: "Campaign revision." },
    { id: "g14", title: "Ghostrunner 2", category: "games", rating: 4, month: "April", year: 2025, image: "", notes: "Fast-paced cyberpunk slasher." },
    { id: "g15", title: "Phasmophobia", category: "games", rating: 4, month: "July", year: 2025, image: "", notes: "Ghost hunting in the dark with friends." },
    { id: "g16", title: "Devour", category: "games", rating: 4, month: "July", year: 2025, image: "", notes: "Co-op horror ritual interruptions." },
    { id: "g17", title: "Uncharted: Legacy of Thieves Collection", category: "games", rating: 5, month: "August", year: 2025, image: "", notes: "Nathan Drake's last treasure hunt." },
    { id: "g18", title: "Rise of the Tomb Raider", category: "games", rating: 4, month: "September", year: 2025, image: "", notes: "Lara Croft searching for the Divine Source." },
    { id: "g19", title: "Grand Theft Auto IV", category: "games", rating: 5, month: "October", year: 2025, image: "", notes: "Niko Bellic chasing the American Dream." },
    { id: "g20", title: "RV There Yet?", category: "games", rating: 3, month: "November", year: 2025, image: "", notes: "Co-op driving shenanigans." },
    { id: "g21", title: "Batman: Arkham City", category: "games", rating: 5, month: "November", year: 2025, image: "", notes: "Hugo Strange, Joker, and Gotham's super-prison." },
    { id: "g22", title: "Batman: Arkham Knight", category: "games", rating: 5, month: "November", year: 2025, image: "", notes: "Driving the Batmobile in Gotham." },
    { id: "g23", title: "Marvel's Guardians of the Galaxy", category: "games", rating: 5, month: "November", year: 2025, image: "", notes: "Incredible story and banter with Star-Lord and crew." },
    { id: "g24", title: "Call of Duty: Black Ops II", category: "games", rating: 5, month: "December", year: 2025, image: "", notes: "Futuristic battles with Raul Menendez." },
    { id: "g25", title: "Need for Speed: Most Wanted", category: "games", rating: 5, month: "December", year: 2025, image: "", notes: "Revisiting the classic Black Edition." },
    { id: "g26", title: "Symphony of the Serpent", category: "games", rating: 4, month: "December", year: 2025, image: "", notes: "Discovered during winter gaming sessions." },
    { id: "g27", title: "Hogwarts Legacy", category: "games", rating: 5, month: "December", year: 2025, image: "", notes: "Exploring Hogwarts and casting spells." },
    { id: "g28", title: "Schedule I", category: "games", rating: 4, month: "January", year: 2026, image: "", notes: "Simulation drug-manufacturing mechanics." },
    { id: "g29", title: "College Kings", category: "games", rating: 4, month: "February", year: 2026, image: "", notes: "Visual novel gameplay choices." },
    { id: "g30", title: "Enshrouded", category: "games", rating: 4, month: "February", year: 2026, image: "", notes: "Co-op survival action RPG." },
    { id: "g31", title: "Lethal Company", category: "games", rating: 5, month: "February", year: 2026, image: "", notes: "Hilarious scrap hunting runs with friends." },
    { id: "g32", title: "Raft", category: "games", rating: 4, month: "February", year: 2026, image: "", notes: "Building a grand floating home on the sea." },
    { id: "g33", title: "Shadow of the Tomb Raider", category: "games", rating: 5, month: "February", year: 2026, image: "", notes: "Lara Croft preventing a Mayan apocalypse." },
    { id: "g34", title: "Red Dead Redemption 2", category: "games", rating: 5, month: "February", year: 2026, image: "", notes: "Arthur Morgan and the Van der Linde gang." },
    { id: "g35", title: "Welcome to Dustown", category: "games", rating: 4, month: "April", year: 2026, image: "", notes: "Atmospheric exploration logs." },
    { id: "g36", title: "Demonologist", category: "games", rating: 4, month: "April", year: 2026, image: "", notes: "Terrifying ghost exorcisms in Unreal Engine." },
    { id: "g37", title: "Summer's Gone: Season 1", category: "games", rating: 4, month: "May", year: 2026, image: "", notes: "Engaging choices visual novel." },
    { id: "g38", title: "Human: Fall Flat", category: "games", rating: 4, month: "June", year: 2026, image: "", notes: "Clumsy physics puzzles." },
    { id: "g39", title: "Lust Theory: Season 1", category: "games", rating: 4, month: "June", year: 2026, image: "", notes: "Visual novel story arcs." },
    { id: "g40", title: "Watch Dogs", category: "games", rating: 5, month: "July", year: 2026, image: "", notes: "Aiden Pearce hacking Chicago." },
    { id: "g41", title: "Tekken 3", category: "games", rating: 5, month: "July", year: 2026, image: "", notes: "Emulating the PS1 classic fight game via RetroArch." },
    { id: "g42", title: "Watch Dogs 2", category: "games", rating: 5, month: "July", year: 2026, image: "", notes: "Marcus Holloway hacking San Francisco." }
];

const defaultAnime = [
    { id: "a1", title: "Death Note", category: "anime", rating: 5, month: "January", year: 2024, image: "", notes: "Masterpiece psychological battle between Light and L. (Example)" },
    { id: "a2", title: "Attack on Titan", category: "anime", rating: 5, month: "March", year: 2024, image: "", notes: "Epic story about humanity fighting giant titans. (Example)" },
    { id: "a3", title: "Demon Slayer", category: "anime", rating: 4, month: "June", year: 2024, image: "", notes: "Beautiful animations and great action sequences. (Example)" },
    { id: "a4", title: "Jujutsu Kaisen", category: "anime", rating: 4, month: "October", year: 2025, image: "", notes: "Superb curse battles and unforgettable characters. (Example)" },
    { id: "a5", title: "Naruto: Shippuden", category: "anime", rating: 5, month: "January", year: 2026, image: "", notes: "An emotional journey of a ninja seeking recognition. (Example)" }
];

// App State
let currentTab = "games";
let entertainmentList = [];

// Initialize Page Data
function initData() {
    const saved = localStorage.getItem("entertainment_log");
    if (saved) {
        entertainmentList = JSON.parse(saved);
    } else {
        entertainmentList = [...defaultGames, ...defaultAnime];
        saveData();
    }
}

function saveData() {
    localStorage.setItem("entertainment_log", JSON.parse(JSON.stringify(entertainmentList)));
}

// Generate Cover Color Gradients based on string hashes
function getGlowStyle(title) {
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
        hash = title.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h1 = Math.abs(hash % 360);
    const h2 = (h1 + 60) % 360;
    return `background: linear-gradient(135deg, hsl(${h1}, 70%, 15%) 0%, hsl(${h2}, 80%, 25%) 100%);`;
}

// Render Cards
function render() {
    const grid = document.getElementById("grid-section");
    const searchQuery = document.getElementById("search-input").value.toLowerCase();
    const yearFilter = document.getElementById("year-filter").value;
    const sortFilter = document.getElementById("sort-filter").value;

    grid.innerHTML = "";

    // Filter items
    let filtered = entertainmentList.filter(item => {
        const matchesTab = item.category === currentTab;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery);
        const matchesYear = yearFilter === "all" ? true : item.year.toString() === yearFilter;
        return matchesTab && matchesSearch && matchesYear;
    });

    // Sorting
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    filtered.sort((a, b) => {
        if (sortFilter === "alpha") {
            return a.title.localeCompare(b.title);
        }
        
        // Convert dates to numeric weight for sorting
        const dateWeightA = parseInt(a.year) * 12 + months.indexOf(a.month);
        const dateWeightB = parseInt(b.year) * 12 + months.indexOf(b.month);

        if (sortFilter === "newest") {
            return dateWeightB - dateWeightA;
        } else {
            return dateWeightA - dateWeightB;
        }
    });

    // Build Cards
    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        
        let stars = "⭐".repeat(item.rating);
        
        let imageHtml = "";
        if (item.image) {
            imageHtml = `<img src="${item.image}" class="card-img" alt="${item.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`;
        }
        
        const style = getGlowStyle(item.title);
        
        card.innerHTML = `
            <div class="card-img-container" style="${style}">
                ${imageHtml}
                <div class="card-fallback" style="display: ${item.image ? 'none' : 'flex'}">
                    ${item.title.substring(0, 2).toUpperCase()}
                </div>
                <div class="card-date-badge">${item.month} ${item.year}</div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <div class="card-rating">${stars}</div>
                <p class="card-notes">${item.notes || 'No review notes written yet.'}</p>
                <div class="card-actions">
                    <button class="btn btn-secondary btn-edit" data-id="${item.id}">✏️ Edit</button>
                    <button class="btn btn-danger btn-delete" data-id="${item.id}">🗑️ Delete</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    if (filtered.length === 0) {
        const placeholder = document.createElement("div");
        placeholder.style.gridColumn = "1 / -1";
        placeholder.style.textAlign = "center";
        placeholder.style.padding = "50px 0";
        placeholder.style.color = "var(--text-secondary)";
        placeholder.innerHTML = `<h3 style="margin-bottom:10px;">No items found</h3><p>Try resetting filters or adding a new entry!</p>`;
        grid.appendChild(placeholder);
    }

    // Attach card event listeners
    document.querySelectorAll(".btn-delete").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id");
            if (confirm("Are you sure you want to delete this item?")) {
                entertainmentList = entertainmentList.filter(item => item.id !== id);
                saveData();
                render();
            }
        });
    });

    document.querySelectorAll(".btn-edit").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id");
            const item = entertainmentList.find(item => item.id === id);
            if (item) {
                openModal(item);
            }
        });
    });
}

// Modal handling
const modal = document.getElementById("item-modal");
const closeModal = document.querySelector(".close-modal");

function openModal(editItem = null) {
    modal.style.display = "flex";
    const form = document.getElementById("item-form");
    form.reset();

    if (editItem) {
        document.getElementById("modal-title").innerText = "Edit Item";
        document.getElementById("item-id").value = editItem.id;
        document.getElementById("form-title").value = editItem.title;
        document.getElementById("form-category").value = editItem.category;
        document.getElementById("form-rating").value = editItem.rating;
        document.getElementById("form-month").value = editItem.month;
        document.getElementById("form-year").value = editItem.year.toString();
        document.getElementById("form-image").value = editItem.image;
        document.getElementById("form-notes").value = editItem.notes;
    } else {
        document.getElementById("modal-title").innerText = "Add New Item";
        document.getElementById("item-id").value = "";
        document.getElementById("form-category").value = currentTab;
    }
}

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Form Submission
document.getElementById("item-form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const id = document.getElementById("item-id").value;
    const title = document.getElementById("form-title").value;
    const category = document.getElementById("form-category").value;
    const rating = parseInt(document.getElementById("form-rating").value);
    const month = document.getElementById("form-month").value;
    const year = parseInt(document.getElementById("form-year").value);
    const image = document.getElementById("form-image").value;
    const notes = document.getElementById("form-notes").value;

    if (id) {
        // Edit existing
        const index = entertainmentList.findIndex(item => item.id === id);
        if (index !== -1) {
            entertainmentList[index] = { id, title, category, rating, month, year, image, notes };
        }
    } else {
        // Create new
        const newId = Date.now().toString();
        entertainmentList.push({ id: newId, title, category, rating, month, year, image, notes });
    }

    saveData();
    modal.style.display = "none";
    render();
});

// Event Listeners for Filters
document.getElementById("search-input").addEventListener("input", render);
document.getElementById("year-filter").addEventListener("change", render);
document.getElementById("sort-filter").addEventListener("change", render);

// Tab switching
document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        currentTab = e.target.getAttribute("data-tab");
        render();
    });
});

document.getElementById("add-btn").addEventListener("click", () => openModal());

// Export JSON Utility
document.getElementById("export-btn").addEventListener("click", () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(entertainmentList, null, 4));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "entertainment_log_backup.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
});

// Import JSON Utility
const fileInput = document.getElementById("import-file");
document.getElementById("import-btn").addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        try {
            const imported = JSON.parse(evt.target.result);
            if (Array.isArray(imported)) {
                if (confirm("Do you want to overwrite your current list? Click OK to overwrite, or Cancel to merge imported items.")) {
                    entertainmentList = imported;
                } else {
                    // Merge based on title/category uniqueness or just append
                    imported.forEach(imp => {
                        if (!entertainmentList.some(item => item.title.toLowerCase() === imp.title.toLowerCase() && item.category === imp.category)) {
                            // Assign a new ID to avoid collisions
                            imp.id = "imp_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7);
                            entertainmentList.push(imp);
                        }
                    });
                }
                saveData();
                render();
                alert("Import successful!");
            } else {
                alert("Invalid format! Import must be a JSON array of games/anime.");
            }
        } catch (err) {
            alert("Error parsing JSON file: " + err.message);
        }
    };
    reader.readAsText(file);
});

// Run application
initData();
render();
