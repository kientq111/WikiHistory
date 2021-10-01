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
        $link.onclick = async () => {
            let id1 = await db.collection('events').doc(doc.id).get();
            console.log(id1.id);
            localStorage.setItem('id', id1.id);
            location.href = 'EventDetails_user.html';
        }

        $figure.append($img, $figcaption, $link);
        $li.append($figure);
        $ul.append($li);
    }
}

getListEvent();