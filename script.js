const pets = [
    { id: 1, name: "Max", type: "dog", breed: "Golden Retriever", age:1, description: "Loves to play and swim.", image: "https://th.bing.com/th/id/OIP.Ux6YKVgmKndLX_77fZjrpAHaE7?w=3008&h=2000&rs=1&pid=ImgDetMain" },
    { id: 2, name: "Bella", type: "cat", breed: "Persian cat", age: 2, description: "A quiet and affectionate cat.", image: "https://th.bing.com/th/id/OIP.a8xpcdHhnk_19cc-Oa_JLgHaGN?w=940&h=788&rs=1&pid=ImgDetMain" },
    { id: 3, name: "Charlie", type: "dog", breed: "Beagle", age: 2, description: "Curious and friendly.", image: "https://i.pinimg.com/originals/34/a8/2b/34a82bad834101ba6bd2f3826f3016bd.jpg" },
    { id: 4, name: "Luna", type: "cat", breed: "Ragdoll", age: 3, description: "Loves to be pampered and brushed.", image: "https://th.bing.com/th/id/OIP.psvYC_JYgOseboQn4CgUZgHaF7?w=700&h=560&rs=1&pid=ImgDetMain" },
    { id: 5, name: "Rocky", type: "dog", breed: "Labrador", age: 3, description: "Active and loves to play fetch.", image: "https://th.bing.com/th/id/OIP.a_Ay4tCOTVN196_RaJGWtQHaGJ?w=926&h=768&rs=1&pid=ImgDetMain" },
    { id: 6, name: "Snofy", type: "dog", breed: "Shih Tzu", age: 2, description: "Loves to play with ball.", image: "https://th.bing.com/th/id/OIP.-kA4c7TG5KL9h8IHXfkP7gAAAA?w=474&h=369&rs=1&pid=ImgDetMain" },
    { id: 7, name: "Chunku", type: "dog", breed: "Pomeranian", age: 2, description: "Loves to bath.", image: "https://th.bing.com/th/id/OIP.EAQAsvUzPN6Ypz011ykMBgHaE6?w=1644&h=1092&rs=1&pid=ImgDetMain" },
    { id: 8, name: "Milo", type: "cat", breed: "Maine Coon", age: 3, description: "Very social and loves to be around people.", image: "https://th.bing.com/th/id/OIP.O83Pn2QYGUo7oQBUtCCt8gHaHU?w=1024&h=1012&rs=1&pid=ImgDetMain" },
    { id: 9, name: "Coco", type: "dog", breed: "Cocker Spaniel", age: 4, description: "Friendly, active, and loves the outdoors.", image: "https://i.pinimg.com/originals/0b/39/fd/0b39fd011bde3608de3bcd7e9696b2db.jpg" },
    { id: 10, name: "Oscar", type: "dog", breed: "Bulldog", age: 2, description: "Calm and gentle, great companion.", image: "https://1.bp.blogspot.com/-lucq--f3HAk/UVPDbK7w9PI/AAAAAAAACL8/qiwp5nCF-TQ/s1600/American+Pitbull+Dog+6.jpg" },
    { id: 11, name: "Zoe", type: "dog", breed: "Dachshund", age: 1, description: "Curious and loves to explore.", image: "https://ilovedachshunds.b-cdn.net/wp-content/uploads/2019/03/dachshund-fully-grown.jpg" },
    { id: 12, name: "Chloe", type: "cat", breed: "Bengal", age: 3, description: "Active, playful, and loves to climb.", image: "https://th.bing.com/th/id/OIP.bkiomP8Wz5lx4Kq9h1wsYAHaE5?w=1000&h=662&rs=1&pid=ImgDetMain" },
    { id: 13, name: "Maggie", type: "dog", breed: "Boxer", age: 4, description: "Energetic and loyal, loves to play.", image: "https://th.bing.com/th/id/OIP.Mo28g9bwA4vcyuTLPOGABwHaFj?rs=1&pid=ImgDetMain" },
    { id: 14, name: "Toby", type: "cat", breed: "Siamese", age: 2, description: "Vocal and friendly, loves attention.", image: "https://th.bing.com/th/id/OIP.hG9hRN0f1t-V69z6tDA3_wHaFj?w=1500&h=1125&rs=1&pid=ImgDetMain" },
    { id: 15, name: "Maggie", type: "dog", breed: "Pug", age: 4, description: "Affectionate, playful, and loves to nap.", image: "https://th.bing.com/th/id/OIP.-JasBgWFmR6mjmrvVA0GSgHaHa?w=750&h=750&rs=1&pid=ImgDetMain" },
    { id: 16, name: "Rusty", type: "dog", breed: "Australian Shepherd", age: 3, description: "Smart and active, loves to run and play fetch.", image: "https://allthingscanid.org/wp-content/images/?q=Australian%20shepherd%20for%20sale" },
    { id: 17, name: "Lily", type: "cat", breed: "British Shorthair", age: 3, description: "Independent and quiet, but loves cuddles.", image: "https://cdn.fotofits.com/petzlover/gallery/img/l/british-shorthair-481215.jpg" },
    { id: 18, name: "Oliver", type: "dog", breed: "Chihuahua", age: 1, description: "Bold and energetic despite his small size.", image: "https://cdn.fotofits.com/petzlover/gallery/img/l/chihuahua-798508.jpg" },
    { id: 19, name: "Leo", type: "cat", breed: "Birman", age: 2, description: "Affectionate and loves being warm.", image: "https://www.thesprucepets.com/thmb/nKSjx36SzF2NfZxWy874Hg_BosY=/2119x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-808977920-b3b9ebe033d440c5aaba3ac0df6817f1.jpg" },
    { id: 20, name: "Misty", type: "dog", breed: "Shiba Inu", age: 3, description: "Loyal, confident, and loves the outdoors.", image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Shiba_Inu.jpg" }
];

// function displayPets(filteredPets) {
//     const petListDiv = document.getElementById('pet-list');
//     petListDiv.innerHTML = ''; 
//      filteredPets.forEach(pet => {
//         const petItem = document.createElement('div');
//         petItem.classList.add('pet-item');
//         petItem.innerHTML = `
//             <img src="${pet.image}" alt="${pet.name}">
//             <h3>${pet.name}</h3>
//             <p>${pet.breed}, ${pet.age} years old</p>
//             <p>${pet.description}</p>
//             <a href="pet-details.html?id=${pet.id}">View Details</a>
//         `;
//         petListDiv.appendChild(petItem);
//     });
// }

// // Search pets by name, type, breed
// function searchPets() {
//     const name = document.getElementById('search-name').value.toLowerCase();
//     const type = document.getElementById('search-type').value.toLowerCase();
//     const breed = document.getElementById('search-breed').value.toLowerCase();

//     const filteredPets = pets.filter(pet => {
//         return (
//             (pet.name.toLowerCase().includes(name) || !name) &&
//             (pet.type.toLowerCase().includes(type) || !type) &&
//             (pet.breed.toLowerCase().includes(breed) || !breed)
//         );
//     });

//     displayPets(filteredPets);
// }

// // Display pet details on the pet details page
// function displayPetDetails() {
//     const petId = new URLSearchParams(window.location.search).get('id');
//     const pet = pets.find(pet => pet.id == petId);
//     const petDetailsDiv = document.getElementById('pet-details');

//     if (pet) {
//         petDetailsDiv.innerHTML = `
//             <img src="${pet.image}" alt="${pet.name}">
//             <h3>${pet.name}</h3>
//             <p>Breed: ${pet.breed}</p>
//             <p>Age: ${pet.age} years</p>
//             <p>Description: ${pet.description}</p>
//         `;
//     } else {
//         petDetailsDiv.innerHTML = "<p>Pet not found!</p>";
//     }
// }

// // Handle form submission (for adding a pet)
// document.getElementById('add-pet-form')?.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const name = document.getElementById('pet-name').value;
//     const type = document.getElementById('pet-type').value;
//     const breed = document.getElementById('pet-breed').value;
//     const age = document.getElementById('pet-age').value;
//     const description = document.getElementById('pet-description').value;
//     const image = document.getElementById('pet-image').value;
    

//     const newPet = { id: pets.length + 1, name, type, breed, age, description, image };
//     pets.push(newPet);

//     alert('Pet added successfully!');
//     window.location.href = 'index.html'; // Redirect to homepage
// });

// // Handle form submission (for adopting a pet)
// document.getElementById('adoption-form')?.addEventListener('submit', (event) => {
//     event.preventDefault();
//     alert("Thank you for your interest in adopting a pet! We will contact you soon.");
// });

// // Initialize page
// document.addEventListener('DOMContentLoaded', () => {
//     if (document.getElementById('pet-list')) {
//         displayPets(pets);
//     }

//     if (document.getElementById('pet-details')) {
//         displayPetDetails();
//     }
// });
function displayPets(filteredPets) {
    const petListDiv = document.getElementById('pet-list');
    petListDiv.innerHTML = '';
    filteredPets.forEach(pet => {
        const petItem = document.createElement('div');
        petItem.classList.add('pet-item');
        petItem.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}">
            <h3>${pet.name}</h3>
            <p>${pet.breed}, ${pet.age} years old</p>
            <p>${pet.description}</p>
            <a href="pet-details.html?id=${pet.id}">View Details</a>
        `;
        petListDiv.appendChild(petItem);
    });
}

function searchPets() {
    const name = document.getElementById('search-name').value.toLowerCase();
    const type = document.getElementById('search-type').value.toLowerCase();
    const breed = document.getElementById('search-breed').value.toLowerCase();

    const filteredPets = pets.filter(pet => {
        return (
            (pet.name.toLowerCase().includes(name) || !name) &&
            (pet.type.toLowerCase().includes(type) || !type) &&
            (pet.breed.toLowerCase().includes(breed) || !breed)
        );
    });

    displayPets(filteredPets);
}

function displayPetDetails() {
    const petId = new URLSearchParams(window.location.search).get('id');
    const pet = pets.find(pet => pet.id == petId);
    const petDetailsDiv = document.getElementById('pet-details');

    if (pet) {
        petDetailsDiv.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}">
            <h3>${pet.name}</h3>
            <p>Breed: ${pet.breed}</p>
            <p>Age: ${pet.age} years</p>
            <p>Description: ${pet.description}</p>
        `;
    } else {
        petDetailsDiv.innerHTML = "<p>Pet not found!</p>";
    }
}

// Handle form submission for adding a pet
document.getElementById('add-pet-form')?.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!localStorage.getItem('isLoggedIn')) {
        alert("You must be logged in to add a pet.");
        window.location.href = 'login.html';
        return;
    }

    const name = document.getElementById('pet-name').value;
    const type = document.getElementById('pet-type').value;
    const breed = document.getElementById('pet-breed').value;
    const age = document.getElementById('pet-age').value;
    const description = document.getElementById('pet-description').value;
    const image = document.getElementById('pet-image').value;

    const newPet = { id: pets.length + 1, name, type, breed, age, description, image };
    pets.push(newPet);

    alert('Pet added successfully!');
    window.location.href = 'index.html';
});

// Handle form submission for adopting a pet
document.getElementById('adoption-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    alert("Thank you for your interest in adopting a pet! We will contact you soon.");
});

// Initialize page content
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('pet-list')) {
        displayPets(pets);
    }

    if (document.getElementById('pet-details')) {
        displayPetDetails();
    }
});