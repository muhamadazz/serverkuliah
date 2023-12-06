const mahasiswaNim = '1102020';
const updatedData = {
    nama: 'Ronaldo',
    gender: 'L',
    prodi: 'TE',
    alamat: 'Jl. Cibolang Kaler'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'Application/json'
    },
    body: JSON.stringify(updatedData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));


// POST
const postData = {
    nim: '1102030',
    nama: 'iyom',
    gender: 'P',
    prodi: 'TE',
    alamat: 'Jl. cikaso no.130'
};

fetch('http://localhost:3000/mahasiswa', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));


// DELETE
fetch('http://localhost:3000/mahasiswa/1102023', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));



    
