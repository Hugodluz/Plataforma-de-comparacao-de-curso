const cursos =[{name:"Engenharia Civil",universidade:"Universidade do Porto",duração:"5 anos",preço:"69$"},
               {name:"Medicina",universidade:"Universidade de Lisboa",duração:"7 anos",preço:"69$"},
               {name:"Ciencia da Computação",universidade:"Universidade do Porto",duração:"4 anos",preço:"69$"},
               {name:"Direito",universidade:"Universidade de Coimbra",duração:"4 anos",preço:"69$"}
]

// Função para buscar e exibir cursos
function procurarCursos(){
    const input = document.getElementById("procurarInput").value.toLowerCase();
    const tableBody = document.querySelection("#cursosTable tbody");
    tableBody.innerHTML = ""; // Limpa os resultados anteriores

    const filtredCursos = cursos.filter(curso => curso.name.toLowerCase().includes(input)||
curso.universidade.toLowerCase().includes(input));

filtredCursos.forEach(curso0=>{const row = 
    <tr>
        <td>$ {cursos.name}</td>
        <td>${curso.universidade}</td>
        <td>${curso.duração}</td>
        <td>${curso.preço}</td>
    </tr>
    ;
    tableBody.innerHTML += row;
});
if (filtredCursos.length===0){
    tableBody.innerHTML = <tr><td colspan="4">Nenhum curso encontrado.</td></tr>
}
}
