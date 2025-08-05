export const userTable = document.querySelector('#userTable tbody');
  if (userTable) {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => {
        data.forEach(row => {
          const tr = document.createElement('tr');
          tr.innerHTML = `<td>${row.user_id}</td><td>${row.last_name}</td>`;
          userTable.appendChild(tr);
        });
      })
      .catch(err => {
        console.error('Failed to load data', err);
      });
  }