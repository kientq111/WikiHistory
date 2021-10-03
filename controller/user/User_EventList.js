let $ul = document.getElementsByClassName('list')[0];




async function getListEvent() {
    let response = await db.collection('events').get();
    for (let doc of response.docs) {
        let data = doc.data();
        let $li = document.createElement('li');
        $li.className = 'event mr-3 mb-3';

        let $figure = document.createElement('figure');
        $figure.className = 'snip1273';

        let $img = document.createElement('img');
        $img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Quang_Trung_statue_02.jpg/800px-Quang_Trung_statue_02.jpg';
        $img.src = data.picture;
        $img.alt = 'sample72';

        let $figcaption = document.createElement('figcaption');

        let $name = document.createElement('h4');
        $name.innerHTML = 'Tên: ' + data.name;

        let $location = document.createElement('p');
        $location.innerHTML = `Diễn ra tại: ${data.location}`;

        let $date = document.createElement('p');
        $date.innerHTML = `Ngày bắt đầu - kết thúc: ${data.firstday}-${data.lastday}`;

        let $result = document.createElement('p');
        $result.innerHTML = `Kết quả: ${data.result}`;

        let $meaning = document.createElement('p');
        $meaning.innerHTML = `Ý nghĩa: ${data.meaning}`;

        $figcaption.append($name, $location, $date, $result, $meaning);

        let $link = document.createElement('a');
        $link.onclick = async() => {
            let id1 = await db.collection('events').doc(doc.id).get();
            console.log(id1.id);
            localStorage.setItem('idEvent', id1.id);
            location.href = 'EventDetails_user.html';
        }

        $figure.append($img, $figcaption, $link);
        $li.append($figure);
        $ul.append($li);
    }
}



async function searchEvent(search) {
    let response = await db.collection('events').get();
    for (let doc of response.docs) {
        let data = doc.data();
        let $li = document.createElement('li');
        $li.className = 'character event mr-3 mb-3';

        let $figure = document.createElement('figure');
        $figure.className = 'snip1273';

        if (data.name.includes(search)) {
            console.log('yes', data.name);
        } else if (data.name.includes(search) === false) {
            console.log('Không thấy');
            $li.style.display = 'none';

            $ul.innerHTML = 'Không tìm thấy sự kiện!';
            $ul.className = 'list d-flex justify-content-center mt-5';
        } else {
            $li.style.display = 'none';
            console.log('no', data.name);
        }

        let $img = document.createElement('img');
        $img.src = data.picture;
        $img.alt = 'sample72';

        let $figcaption = document.createElement('figcaption');

        let $name = document.createElement('h4');
        $name.innerHTML = 'Tên: ' + data.name;

        let $location = document.createElement('p');
        $location.innerHTML = `Diễn ra tại: ${data.location}`;

        let $date = document.createElement('p');
        $date.innerHTML = `Ngày bắt đầu - kết thúc: ${data.firstday}-${data.lastday}`;

        let $result = document.createElement('p');
        $result.innerHTML = `Kết quả: ${data.result}`;

        let $meaning = document.createElement('p');
        $meaning.innerHTML = `Ý nghĩa: ${data.meaning}`;

        $figcaption.append($name, $location, $date, $result, $meaning);

        let $link = document.createElement('a');
        $link.onclick = async() => {
            let id1 = await db.collection('events').doc(doc.id).get();
            console.log(id1.id);
            localStorage.setItem('idEvent', id1.id);
            location.href = 'EventDetails_user.html';
        }

        $figure.append($img, $figcaption, $link);
        $li.append($figure);
        $ul.append($li);
    }
}



function searchPage() {
    let searchInput = document.getElementById('searchInput').value;
    localStorage.setItem('searchEvent', searchInput);
    window.location.reload();
}

if (window.localStorage.hasOwnProperty('searchEvent')) {
    let search = window.localStorage.getItem('searchEvent');
    searchEvent(search);
} else {
    getListEvent();
}