const cursos = [
    { name: "Engenharia Civil", universidade: "Universidade do Porto", duracao: "5 anos", preco: "69$" },
    { name: "Medicina", universidade: "Universidade de Lisboa", duracao: "7 anos", preco: "69$" },
    { name: "Ciencia da Computação", universidade: "Universidade do Porto", duracao: "4 anos", preco: "69$" },
    { name: "Direito", universidade: "Universidade de Coimbra", duracao: "4 anos", preco: "69$" }
];

// Função para buscar e exibir cursos
function procurarCursos() {
    const input = document.getElementById("procurarInput").value.toLowerCase();
    const tableBody = document.querySelector("#cursosTable tbody");
    tableBody.innerHTML = ""; // Limpa os resultados anteriores

    const filtredCursos = cursos.filter(curso => 
        curso.name.toLowerCase().includes(input) ||
        curso.universidade.toLowerCase().includes(input)
    );

    filtredCursos.forEach(curso => {
        const row = `
            <tr>
                <td>${curso.name}</td>
                <td>${curso.universidade}</td>
                <td>${curso.duracao}</td>
                <td>${curso.preco}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    if (filtredCursos.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="4">Nenhum curso encontrado.</td></tr>`;
    }
}