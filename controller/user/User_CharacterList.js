let $ul = document.getElementsByClassName('list')[0];




async function getListCharacter() {
    let response = await db.collection('characters').get();
    for (let doc of response.docs) {
        let data = doc.data();
        let $li = document.createElement('li');
        $li.className = 'character mr-3 mb-3';

        let $figure = document.createElement('figure');
        $figure.className = 'snip1273';

        let $img = document.createElement('img');
        $img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Quang_Trung_statue_02.jpg/800px-Quang_Trung_statue_02.jpg';
        $img.src = data.picture;
        $img.alt = 'sample72';

        let $figcaption = document.createElement('figcaption');

        let $name = document.createElement('h4');
        $name.innerHTML = 'Tên: ' + data.name;

        let $job = document.createElement('p');
        $job.innerHTML = `Chức danh: ${data.title}`;

        let $date = document.createElement('p');
        $date.innerHTML = `Ngày sinh - mất: ${data.birth}-${data.death}`;

        let $countryside = document.createElement('p');
        $countryside.innerHTML = `Quê quán: ${data.title}`;

        let $general = document.createElement('p');
        $general.innerHTML = `Khái quát: ${data.general}`;

        $figcaption.append($name, $job, $date, $countryside, $general);

        let $link = document.createElement('a');
        $link.onclick = async () => {
            let id1 = await db.collection('characters').doc(doc.id).get();
            console.log(id1.id);
            localStorage.setItem('id', id1.id);
            location.href = 'CharacterDetails_user.html';
        }

        $figure.append($img, $figcaption, $link);
        $li.append($figure);
        $ul.append($li);
    }
}

getListCharacter();