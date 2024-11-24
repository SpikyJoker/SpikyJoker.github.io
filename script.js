fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
        const container = document.getElementById('projects');
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'bg-white shadow-md rounded-lg overflow-hidden';
            card.innerHTML = `
                <img src="${project.thumbnail}" alt="${project.title}" class="w-full h-80 object-cover object-center">
                <div class="p-4">
                    <h1 class="text-2xl font-semibold mb-2">${project.title}</h1>
                    <p class="text-gray-600 mb-8">${project.description}</p>
                    <a href="${project.link}" target="_blank" class="text-blue-500 font-medium hover:underline">
                        View the projects GitHub page
                    </a>
                </div>
            `;
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading data:', error));
