interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

  const student1: Student = {
    firstName: 'Afeez',
    lastName: 'Lasisi',
    age: 30,
    location: 'localhost',
  };

  const student2: Student = {
    firstName: 'AtoZconcept',
    lastName: 'Ecotech',
    age: 2,
    location: 'localhost',
  };

  const studentsList: Student[] = [student1, student2];

  const table: HTMLTableElement = document.createElement('table');
  studentsList.forEach((student) => {
    const row: HTMLTableRowElement = table.insertRow();
    const cell1: HTMLTableCellElement = row.insertCell();
    const cell2: HTMLTableCellElement = row.insertCell();

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });
  document.body.appendChild(table);