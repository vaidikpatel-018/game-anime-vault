// Default Game and Anime data templates
const defaultGames = [
    { id: "g1", title: "Minecraft", category: "games", rating: 5, month: "January", year: 2024, image: "", notes: "Fascinating block building. Started playing via TLauncher." },
    { id: "g2", title: "Valorant", category: "games", rating: 4, month: "February", year: 2024, image: "", notes: "Intense tactical shooter sessions with the squad." },
    { id: "g3", title: "Hitman (2016)", category: "games", rating: 5, month: "June", year: 2024, image: "", notes: "Sleek assassination contracts in Paris, Sapienza, and Hokkaido." },
    { id: "g4", title: "Assassin's Creed IV: Black Flag", category: "games", rating: 5, month: "June", year: 2024, image: "", notes: "Edward Kenway's journey. Sailing and singing sea shanties." },
    { id: "g5", title: "Assassin's Creed Rogue", category: "games", rating: 4, month: "July", year: 2024, image: "", notes: "Playing as a Templar hunting down my former brothers." },
    { id: "g6", title: "Assassin's Creed Brotherhood", category: "games", rating: 5, month: "July", year: 2024, image: "", notes: "Ezio Auditore leading the brotherhood in Rome." },
    { id: "g7", title: "Call of Duty: Modern Warfare 1", category: "games", rating: 5, month: "August", year: 2024, image: "", notes: "Soap and Captain Price in a legendary modern campaign." },
    { id: "g8", title: "Call of Duty: Modern Warfare 2 Remastered", category: "games", rating: 5, month: "September", year: 2024, image: "", notes: "Cliffhanger, Soap, and Ghost. Best remaster ever." },
    { id: "g9", title: "God of War", category: "games", rating: 5, month: "November", year: 2024, image: "", notes: "An emotional journey of Kratos and Atreus in Norse mythology." },
    { id: "g10", title: "Detroit: Become Human", category: "games", rating: 5, month: "December", year: 2024, image: "", notes: "Interactive narrative that is incredibly visual and emotional." },
    { id: "g11", title: "Call of Duty: Modern Warfare 3", category: "games", rating: 4, month: "April", year: 2025, image: "", notes: "Soap's final stand and the conclusion of the trilogy." },
    { id: "g12", title: "Tomb Raider: Definitive Edition", category: "games", rating: 4, month: "May", year: 2025, image: "", notes: "Lara Croft's origins. Surviving Yamatai island." },
    { id: "g13", title: "Grand Theft Auto III (GTA 3)", category: "games", rating: 4, month: "June", year: 2025, image: "", notes: "Classic 3D Liberty City open world." },
    { id: "g14", title: "Hitman 2", category: "games", rating: 5, month: "June", year: 2025, image: "", notes: "Amazing levels like Miami and Mumbai. Brilliant stealth sandbox." },
    { id: "g15", title: "Batman: Arkham Origins", category: "games", rating: 4, month: "July", year: 2025, image: "", notes: "Facing 8 assassins on Christmas Eve as a younger Batman." },
    { id: "g16", title: "Rise of the Tomb Raider", category: "games", rating: 4, month: "July", year: 2025, image: "", notes: "Searching for the Divine Source in the snowy peaks of Siberia." },
    { id: "g17", title: "Batman: Arkham Asylum", category: "games", rating: 5, month: "August", year: 2025, image: "", notes: "Infiltrating the asylum to stop Joker's takeover." },
    { id: "g18", title: "Batman: Arkham City", category: "games", rating: 5, month: "September", year: 2025, image: "", notes: "Navigating Gotham's mega-prison ruled by Hugo Strange." },
    { id: "g19", title: "Call of Duty: Black Ops 1", category: "games", rating: 5, month: "October", year: 2025, image: "", notes: "Alex Mason, Vietnam, and the mystery of the numbers." },
    { id: "g20", title: "Grand Theft Auto IV (GTA 4)", category: "games", rating: 5, month: "October", year: 2025, image: "", notes: "Niko Bellic's story. Great physics and dark atmosphere." },
    { id: "g21", title: "Need for Speed", category: "games", rating: 5, month: "November", year: 2025, image: "", notes: "Classic arcade street racing." },
    { id: "g22", title: "Call of Duty: Black Ops II", category: "games", rating: 5, month: "December", year: 2025, image: "", notes: "David Mason fighting Raul Menendez in the future." },
    { id: "g23", title: "Hogwarts Legacy", category: "games", rating: 5, month: "January", year: 2026, image: "", notes: "Exploring the wizarding world and casting ancient magic." },
    { id: "g24", title: "Shadow of the Tomb Raider", category: "games", rating: 5, month: "February", year: 2026, image: "", notes: "Lara Croft preventing a Mayan apocalypse." },
    { id: "g25", title: "Red Dead Redemption 2", category: "games", rating: 5, month: "March", year: 2026, image: "", notes: "Arthur Morgan and the outlaw gang. An emotional masterpiece." },
    { id: "g26", title: "Tekken 3", category: "games", rating: 5, month: "July", year: 2026, image: "", notes: "Played using RetroArch. Best PS1 fight game ever." },
    { id: "g27", title: "Watch Dogs 2", category: "games", rating: 5, month: "July", year: 2026, image: "", notes: "Marcus Holloway hacking the San Francisco Bay Area." }
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
    const saved = localStorage.getItem("game_anime_vault");
    const version = localStorage.getItem("vault_version");
    
    if (saved && version === "v2") {
        try {
            entertainmentList = JSON.parse(saved);
        } catch (e) {
            console.error("Error parsing saved data, resetting to defaults:", e);
            entertainmentList = [...defaultGames, ...defaultAnime];
            saveData();
        }
    } else {
        // Fresh install or migration to v2
        entertainmentList = [...defaultGames, ...defaultAnime];
        saveData();
        localStorage.setItem("vault_version", "v2");
    }
}

function saveData() {
    localStorage.setItem("game_anime_vault", JSON.stringify(entertainmentList));
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

// Modal handling and Image Upload Compression
const modal = document.getElementById("item-modal");
const closeModal = document.querySelector(".close-modal");
let uploadedImageBase64 = "";

// Helper to update image thumbnail preview in modal
function updatePreview(src) {
    const previewGroup = document.getElementById("image-preview-group");
    const previewImg = document.getElementById("modal-image-preview");
    if (src) {
        previewImg.src = src;
        previewGroup.style.display = "block";
    } else {
        previewGroup.style.display = "none";
        previewImg.src = "";
    }
}

// Compress local image files to save space in localStorage (Max 5MB limit)
document.getElementById("form-image-file").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) {
        uploadedImageBase64 = "";
        updatePreview(document.getElementById("form-image").value.trim());
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            
            // Limit image dimensions to max 400px (plenty for card display)
            let width = img.width;
            let height = img.height;
            const maxDim = 400;
            
            if (width > height) {
                if (width > maxDim) {
                    height = Math.round(height * (maxDim / width));
                    width = maxDim;
                }
            } else {
                if (height > maxDim) {
                    width = Math.round(width * (maxDim / height));
                    height = maxDim;
                }
            }
            
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            
            // Convert to JPEG with 0.7 quality (highly optimized base64 string)
            uploadedImageBase64 = canvas.toDataURL("image/jpeg", 0.7);
            
            // Clear URL input since file is uploaded
            document.getElementById("form-image").value = "";
            
            // Show preview
            updatePreview(uploadedImageBase64);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
});

// Clear URL input if they start typing a URL
document.getElementById("form-image").addEventListener("input", (e) => {
    const val = e.target.value.trim();
    if (val !== "") {
        document.getElementById("form-image-file").value = "";
        uploadedImageBase64 = "";
        updatePreview(val);
    } else {
        updatePreview("");
    }
});

function openModal(editItem = null) {
    modal.style.display = "flex";
    const form = document.getElementById("item-form");
    form.reset();
    uploadedImageBase64 = "";
    updatePreview("");

    if (editItem) {
        document.getElementById("modal-title").innerText = "Edit Item";
        document.getElementById("item-id").value = editItem.id;
        document.getElementById("form-title").value = editItem.title;
        document.getElementById("form-category").value = editItem.category;
        document.getElementById("form-rating").value = editItem.rating;
        document.getElementById("form-month").value = editItem.month;
        document.getElementById("form-year").value = editItem.year.toString();
        
        document.getElementById("form-image").value = editItem.image.startsWith("data:") ? "" : editItem.image;
        uploadedImageBase64 = editItem.image.startsWith("data:") ? editItem.image : "";
        document.getElementById("form-notes").value = editItem.notes;
        
        if (editItem.image) {
            updatePreview(editItem.image);
        }
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
    const notes = document.getElementById("form-notes").value;
    
    // Choose between uploaded file or pasted URL
    let image = "";
    if (uploadedImageBase64) {
        image = uploadedImageBase64;
    } else {
        image = document.getElementById("form-image").value.trim();
    }

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
    downloadAnchor.setAttribute("download", "game_anime_vault_backup.json");
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
