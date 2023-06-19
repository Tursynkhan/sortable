let superheroes = [];
const tableBody = document.getElementById('superheroes-data');

const loadData = (heroes) => {
  superheroes=heroes;
  
  const pageSizeSelect=document.getElementById("page-size")
  const searchInput = document.getElementById('search');

  pageSizeSelect.addEventListener('change',()=>PageSizeChange(superheroes))
  searchInput.addEventListener('input', ()=>SearchChange(superheroes))

  const sortableColumns = document.querySelectorAll('.sortable');
  sortableColumns.forEach((column) => {
    column.addEventListener('click', () => {
      const columnName = column.getAttribute('data-column');
      ColumnSort(superheroes, columnName);
    });
  });

  PageSizeChange(superheroes);
}

fetch('https://akabab.github.io/superhero-api/api/all.json')
.then((response) => response.json()) // parse the response from JSON
.then(loadData) // .then will call the `loadData` function with the JSON value.

const renderTable=(superheroes)=>{
  tableBody.innerHTML='';

    for (let hero of superheroes){
      let row = document.createElement('tr');
        row.innerHTML = `
          <td><img src=${hero.images.xs}></td>
          <td>${hero.name}</td>
          <td>${hero.biography.fullName}</td>
          <td>${renderPowerstats(hero.powerstats)}</td>
          <td>${hero.appearance.race}</td>
          <td>${hero.appearance.gender}</td>
          <td>${hero.appearance.height[0]}</td>
          <td>${hero.appearance.weight[0]}</td>
          <td>${hero.biography.placeOfBirth}</td>
          <td>${hero.biography.alignment}</td>
        `;
        tableBody.appendChild(row)
    };
}

const renderPowerstats=(obj)=>{
  return Object.entries(obj).map(([value,key])=> `${value}: ${key}`).join(", ");
} 

const PageSizeChange = (superheroes) => {
  const pageSizeSelect = document.getElementById('page-size');
  const pageSize = pageSizeSelect.value;

  if (pageSize === 'all') {
    renderTable(superheroes);
  } else {
    const pagedSuperheroes = superheroes.slice(0, pageSize);
    renderTable(pagedSuperheroes);
  }
}; 

const SearchChange = (superheroes) => {
  const searchInput = document.getElementById('search');
  const searchText = searchInput.value;
  const filteredSuperheroes = filterSuperheroes(superheroes, searchText);

  PageSizeChange(filteredSuperheroes);
};

const filterSuperheroes = (superheroes, searchText) => {
  return superheroes.filter((superhero) => {
    const name = superhero.name.toLowerCase();
    return name.includes(searchText.toLowerCase());
  });
};

const ColumnSort = (superheroes, column) => {
  const th = document.querySelector(`th[data-column="${column}"]`);
  const order = th.getAttribute('data-order');

  if (order === 'asc') {
    th.setAttribute('data-order', 'desc');
  } else {
    th.setAttribute('data-order', 'asc');
  }

  const sortedSuperheroes = sortSuperheroes(superheroes, column, order);
  PageSizeChange(sortedSuperheroes);
};

const sortSuperheroes = (superheroes, column, order) => {
  const compareValues = (a, b) => {
    if (typeof a === 'string' && typeof b === 'string') {
      a = a.toLowerCase();
      b = b.toLowerCase();
    }

    if (a === 'null') return 1;
    if (b === 'null') return -1;
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  };

  superheroes.sort((a, b) => {
    const valueA = a[column];
    const valueB = b[column];

    if (order === 'asc') {
      return compareValues(valueA, valueB);
    } else {
      return compareValues(valueB, valueA);
    }
  });

  return superheroes;
};