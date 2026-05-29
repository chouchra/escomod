// Données de la galerie par défaut avec support bilingue
const DEFAULT_GALLERY = [

    {
        "id": "item_robe_blanche",
        "title_fr": "Robe Blanche",
        "title_ar": "",
        "category": "haute_couture",
        "type": "photo",
        "url": "images/haute_couture/robeblanche.jpg",
        "desc_fr": "Haute couture",
        "desc_ar": ""
    },
    {
        "id": "item_robe_mariee",
        "title_fr": "Robe de Mariée",
        "title_ar": "",
        "category": "haute_couture",
        "type": "photo",
        "url": "images/haute_couture/robemariee.webp",
        "desc_fr": "Haute couture",
        "desc_ar": ""
    },
    {
        "id": "item_robe_soiree_1",
        "title_fr": "Robe de Soirée",
        "title_ar": "",
        "category": "haute_couture",
        "type": "photo",
        "url": "images/haute_couture/robesoiree.jpeg",
        "desc_fr": "Haute couture",
        "desc_ar": ""
    },
    {
        "id": "item_robe_soiree_2",
        "title_fr": "Robe de Soirée",
        "title_ar": "",
        "category": "haute_couture",
        "type": "photo",
        "url": "images/haute_couture/robesoiree.jpg",
        "desc_fr": "Haute couture",
        "desc_ar": ""
    },
    {
        "id": "item_robe_hc",
        "title_fr": "Robe",
        "title_ar": "",
        "category": "haute_couture",
        "type": "photo",
        "url": "images/haute_couture/robe.jpg",
        "desc_fr": "Haute couture",
        "desc_ar": ""
    },
    {
        "id": "item_ensemble_blue",
        "title_fr": "Ensemble Bleu",
        "title_ar": "",
        "category": "pret_a_porter",
        "type": "photo",
        "url": "images/Pret_a_porter/ensembleblue.jpg",
        "desc_fr": "Prêt-à-porter",
        "desc_ar": ""
    },
    {
        "id": "item_ensemble_gris",
        "title_fr": "Ensemble Gris",
        "title_ar": "",
        "category": "pret_a_porter",
        "type": "photo",
        "url": "images/Pret_a_porter/ensemblegris.png",
        "desc_fr": "Prêt-à-porter",
        "desc_ar": ""
    },
    {
        "id": "item_robe_pap",
        "title_fr": "Robe",
        "title_ar": "",
        "category": "pret_a_porter",
        "type": "photo",
        "url": "images/Pret_a_porter/robe.jpg",
        "desc_fr": "Prêt-à-porter",
        "desc_ar": ""
    },
    {
        "id": "item_tailleur_jupe_pap",
        "title_fr": "Tailleur et Jupe",
        "title_ar": "",
        "category": "pret_a_porter",
        "type": "photo",
        "url": "images/Pret_a_porter/TailleurEtJupe.jpeg",
        "desc_fr": "Prêt-à-porter",
        "desc_ar": ""
    },
    {
        "id": "item_tunique",
        "title_fr": "Tunique",
        "title_ar": "",
        "category": "pret_a_porter",
        "type": "photo",
        "url": "images/Pret_a_porter/tunique.jpg",
        "desc_fr": "Prêt-à-porter",
        "desc_ar": ""
    },
    {
        "id": "item_veste_sportive",
        "title_fr": "Veste Sportive",
        "title_ar": "",
        "category": "pret_a_porter",
        "type": "photo",
        "url": "images/Pret_a_porter/vestesportive.jpg",
        "desc_fr": "Prêt-à-porter",
        "desc_ar": ""
    },
    {
        "id": "item_veste",
        "title_fr": "Veste",
        "title_ar": "",
        "category": "pret_a_porter",
        "type": "photo",
        "url": "images/Pret_a_porter/veste.jpg",
        "desc_fr": "Prêt-à-porter",
        "desc_ar": ""
    },
    {
        "id": "item_beldi",
        "title_fr": "Tenue Beldi",
        "title_ar": "",
        "category": "beldi",
        "type": "photo",
        "url": "images/Projets_etude/beldi.jpg",
        "desc_fr": "Prêt-à-porter",
        "desc_ar": ""
    }
];

const LOCAL_STORAGE_KEY = 'escomod_gallery_items';

/**
 * Retrieve gallery items from localStorage or default data.
 */
function getGalleryItems() {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!stored) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_GALLERY));
        return DEFAULT_GALLERY;
    }
    try {
        return JSON.parse(stored);
    } catch (e) {
        console.error('Failed to parse stored gallery items:', e);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_GALLERY));
        return DEFAULT_GALLERY;
    }
}

/**
 * Save the full gallery list to localStorage.
 */
function saveGalleryItems(items) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
}

/**
 * Add a new item to the gallery.
 */
function addGalleryItem(item) {
    const items = getGalleryItems();
    const newItem = {
        id: 'item_' + Date.now(),
        title_fr: item.title_fr || '',
        title_ar: item.title_ar || '',
        category: item.category || 'pret_a_porter',
        type: item.type || 'photo',
        url: item.url || '',
        desc_fr: item.desc_fr || '',
        desc_ar: item.desc_ar || ''
    };
    items.unshift(newItem);
    saveGalleryItems(items);
    return newItem;
}

/**
 * Delete an item by its ID.
 */
function deleteGalleryItem(id) {
    const items = getGalleryItems();
    const filtered = items.filter(item => item.id !== id);
    saveGalleryItems(filtered);
}

/**
 * Reset gallery to default data.
 */
function resetGallery() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_GALLERY));
    return DEFAULT_GALLERY;
}
