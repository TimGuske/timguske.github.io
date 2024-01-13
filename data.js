const projectsData = [
    {
        name: "Simple HTML",
        type: "HTML",
        date: "01.03.2023",
        link: "https://timguske.github.io/example/"
    },
    {
        name: "Space Kill",
        type: "HTML und JavaScript",
        date: "01.01.2023",
        link: "https://timguske.github.io/spacekill/"
    },
    {
        name: "ToDoListe",
        type: "React",
        date: "01.02.2023",
        link: "https://timguske.github.io/react/"
    },
    {
        name: "Zettel mit Paper Design",
        type: "React",
        date: "01.12.2023",
        link: "https://timguske.github.io/test/"
    },
    {
        name: "Liefermax App",
        type: "Next.js und React",
        date: "01.01.2024",
        link: "https://liefermax-seven.vercel.app/"
    },
    {
        name: "Patricias Rezepte App",
        type: "Next.js und React",
        date: "noch offen",
        link: "/"
    }
];

function generateProjectsTable() {
    const projectsBody = document.querySelector('.table-group-divider');

    projectsData.forEach(project => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        const link = document.createElement('a');
        link.href = project.link;
        link.textContent = project.name;
        nameCell.appendChild(link);
        row.appendChild(nameCell);

        const typeCell = document.createElement('td');
        typeCell.textContent = project.type;
        row.appendChild(typeCell);

        const dateCell = document.createElement('td');
        dateCell.textContent = project.date;
        row.appendChild(dateCell);

        projectsBody.appendChild(row);
    });
}

export { projectsData, generateProjectsTable };
