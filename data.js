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
        name: "Solution Coding",
        type: "HTML und CSS",
        date: "20.01.2024",
        link: "https://timguske.github.io/solution-coding/"
    },
    {
        name: "Work Countdown",
        type: "react",
        date: "20.01.2024",
        link: "https://timguske.github.io/work-countdown/"
    },
    {
        name: "Binär Rechner",
        type: "HTML und JavaScript",
        date: "20.12.2024",
        link: "https://timguske.github.io/addierer/"
    },
    {
        name: "Zettel mit Paper Design",
        type: "React",
        date: "01.12.2023",
        link: "https://timguske.github.io/test/"
    },
    {
        name: "Liefermax App",
        type: "Next.js und React mit MongoDB",
        date: "01.01.2024",
        link: "https://liefermax-seven.vercel.app/"
    },
    {
        name: "Patricias Rezepte App",
        type: "Next.js und React mit MongoDB",
        date: "noch offen",
        link: "/"
    },
    {
        name: "Choreo Maker (simpel) V1",
        type: "React",
        date: "06.01.2025",
        link: "https://timguske.github.io/cm-v1/"
    },
    {
        name: "Choreo Maker Free",
        type: "React",
        date: "1.01.2025",
        link: "https://timguske.github.io/cm-free/"
    },
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
