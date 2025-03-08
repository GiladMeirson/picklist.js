document.addEventListener('DOMContentLoaded', function() {
    const fruitDropdown = document.getElementById('fruitDropdown');
    const selectedValue = document.getElementById('selectedValue');
    const keywords = document.getElementById('keywords');

    // Demo data with keywords for search
    const fruits = [
        { value: "Apple", keywords: ["fruit", "red", "sweet", "crisp"] },
        { value: "Banana", keywords: ["fruit", "yellow", "tropical", "potassium"] },
        { value: "Orange", keywords: ["fruit", "citrus", "vitamin c", "juice"] },
        { value: "Grape", keywords: ["fruit", "purple", "wine", "antioxidants"] },
        { value: "Mango", keywords: ["fruit", "tropical", "sweet", "yellow"] },
        { value: "Pineapple", keywords: ["fruit", "tropical", "sweet", "tart"] },
        { value: "Strawberry", keywords: ["fruit", "red", "sweet", "berries"] },
        { value: "Blueberry", keywords: ["fruit", "blue", "antioxidants", "berries"] }
    ];

    // Initialize the dropdown with items
    fruitDropdown.setItems(fruits);

    // Listen for selection events
    fruitDropdown.addEventListener('dropdown-select', (event) => {
        selectedValue.textContent = event.detail.value;
        keywords.textContent = event.detail.keywords.join(', ');
    });

    // Reset output when dropdown input changes
    fruitDropdown.addEventListener('dropdown-input', () => {
        if (!fruitDropdown._selectedValue) {
            selectedValue.textContent = 'none';
            keywords.textContent = 'none';
        }
    });
});
