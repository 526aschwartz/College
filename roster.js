document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('rosterGrid');

  const render = list => {
    grid.innerHTML = '';
    list.forEach((p, index) => {
      const col = document.createElement('div');
      col.className = 'col-4 mb-3';

      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${p.photo}" alt="${p.firstName}" class="card-img-top">
          <div class="card-body text-center">
            <h5 class="card-title mb-1">${p.firstName} </h5>
            <div class="badge badge-position badge-pos-${p.position}">${p.position}</div>
            <p class="small text-muted mb-0">Age ${p.age}</p>
            <button class="btn btn-sm show-info-btn" data-player-index="${index}">
              <a href="${p.link}" target="_blank"> More Info </a>
            </button>
          </div>
        </div>
      `;
      grid.appendChild(col);
    });
  };


  render(players);
});