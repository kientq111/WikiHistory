let $ul = document.getElementsByClassName('list')[0];

async function getListCharacter() {
    let response = await db.collection('characters').get();
    for (let doc of response.docs) {
        let data = doc.data();
        let $li = document.createElement('li');
        $li.className = 'character mr-3 mb-3';

        let $figure = document.createElement('figure');
        $figure.className = 'snip1273 rounded';

        let $img = document.createElement('img');
        $img.src = data.picture;
        $img.alt = 'sample72';
        $img.className = 'rounded';

        let $figcaption = document.createElement('figcaption');
        $figcaption.className = 'rounded';
        let $name = document.createElement('h3');
        $name.innerHTML = data.name;
        $name.className = 'text-warning text-center';

        let $job = document.createElement('p');
        $job.innerHTML = `<b class="text-warning">Chức danh:</b> ${data.title}`;

        let $date = document.createElement('p');

        $date.innerHTML = `<b class="text-warning">Ngày sinh - mất:</b> ${data.birth} - ${data.death === undefined ? 'chưa rõ' : data.death}`;

        let $countryside = document.createElement('p');
        $countryside.innerHTML = `<b class="text-warning">Quê quán:</b> ${data.home}`;

        let $general = document.createElement('p');
        $general.innerHTML = `<b class="text-warning">Khái quát:</b> ${data.general}`;

        $figcaption.append($name, $job, $date, $countryside, $general);

        let $link = document.createElement('a');
        $link.onclick = async() => {
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


async function searchCharacter(search) {
    let response = await db.collection('characters').get();
    let countOne = 0;
    let countAll = 0;
    for (let doc of response.docs) {
        countAll++;
        let data = doc.data();
        let $li = document.createElement('li');
        if (data.name.includes(search)) {
            console.log('yes', data.name);
        } else if (data.name.includes(search) === false) {
            console.log('Không thấy');
            $li.style.display = 'none';
            countOne++;

        } else {
            $li.style.display = 'none';
            console.log('no', data.name);
        }
        $li.className = 'character mr-3 mb-3';

        let $figure = document.createElement('figure');
        $figure.className = 'snip1273 rounded';

        let $img = document.createElement('img');
        $img.src = data.picture;
        $img.alt = 'sample72';
        $img.className = 'rounded';

        let $figcaption = document.createElement('figcaption');
        $figcaption.className = 'rounded';
        let $name = document.createElement('h3');
        $name.innerHTML = data.name;
        $name.className = 'text-warning text-center';

        let $job = document.createElement('p');
        $job.innerHTML = `<b class="text-warning">Chức danh:</b> ${data.title}`;

        let $date = document.createElement('p');

        $date.innerHTML = `<b class="text-warning">Ngày sinh - mất:</b> ${data.birth} - ${data.death === undefined ? 'chưa rõ' : data.death}`;

        let $countryside = document.createElement('p');
        $countryside.innerHTML = `<b class="text-warning">Quê quán:</b> ${data.home}`;

        let $general = document.createElement('p');
        $general.innerHTML = `<b class="text-warning">Khái quát:</b> ${data.general}`;

        $figcaption.append($name, $job, $date, $countryside, $general);

        let $link = document.createElement('a');
        $link.onclick = async() => {
            let id1 = await db.collection('characters').doc(doc.id).get();
            console.log(id1.id);
            localStorage.setItem('id', id1.id);
            location.href = 'CharacterDetails_user.html';
        }

        $figure.append($img, $figcaption, $link);
        $li.append($figure);
        $ul.append($li);

    }
    if (countOne == countAll) {
        $ul.innerHTML = 'Không tìm thấy nhân vật!';
        $ul.className = 'list d-flex justify-content-center mt-5';
    }
}

function searchPage() {
    let searchInput = document.getElementById('searchInput').value;
    localStorage.setItem('searchChar', searchInput);
    window.location.reload();
}

if (window.localStorage.hasOwnProperty('searchChar')) {
    let search = window.localStorage.getItem('searchChar');
    searchCharacter(search);
} else {
    getListCharacter();
}