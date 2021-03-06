let index = 0;

// function creatEvent() {
//     let $stageEvent = document.getElementsByClassName('stageEvent')[0];
//     index += 1;

//     console.log(index);
//     let $top = document.createElement('div');
//     $top.style.display = 'flex';
//     $top.style.paddingTop = '60px';

//     let $inputImg = document.createElement('div');
//     $inputImg.className = 'mt-1 col-sm-3 d-flex align-items-end form-control-file border ';

//     let $input = document.createElement('input');
//     $input.type = 'file';
//     $input.className = '';

//     let $inputForm = document.createElement('div');
//     $inputForm.className = 'col-sm-9';

//     let $title = document.createElement('p');
//     $title.className = 'text-center h3';
//     $title.innerHTML = 'Tạo giai đoạn sự kiện';

//     let $div = document.createElement('div');

//     let $groupName = document.createElement('div');
//     $groupName.className = 'form-group';

//     let $labelName = document.createElement('label');
//     $labelName.innerHTML = 'Tên giai đoạn:';
//     $labelName.htmlFor = 'usr';

//     let $inputName = document.createElement('input');
//     $inputName.type = 'text';
//     $inputName.className = 'form-control';
//     $inputName.id = 'usr';
//     $inputName.required = true;
//     $inputName.maxLength = 255;

//     let $groupDateS = document.createElement('div');
//     $groupDateS.className = 'form-group';

//     let $labelDateS = document.createElement('label');
//     $labelDateS.innerHTML = 'Ngày bắt đầu:';
//     $labelDateS.htmlFor = 'pwd';

//     let $inputDateS = document.createElement('input');
//     $inputDateS.type = 'date';
//     $inputDateS.className = 'form-control';
//     $inputDateS.id = 'pwd';
//     $inputDateS.required = true;

//     let $groupDateE = document.createElement('div');
//     $groupDateE.className = 'form-group';

//     let $labelDateE = document.createElement('label');
//     $labelDateE.innerHTML = 'Ngày kết thúc:';
//     $labelDateE.htmlFor = 'pwd';

//     let $inputDateE = document.createElement('input');
//     $inputDateE.type = 'date';
//     $inputDateE.className = 'form-control';
//     $inputDateE.id = 'pwd';
//     $inputDateE.required = true;


//     let $depictForm = document.createElement('div');
//     $depictForm.className = 'form-group text-white';
//     $depictForm.style.display = 'flex';

//     let $depictGroup = document.createElement('div');
//     $depictGroup.className = 'col-sm-12';

//     let $depictLabel = document.createElement('label');
//     $depictLabel.htmlFor = 'comment';
//     $depictLabel.innerHTML = 'Mô tả chi tiết:';

//     let $depictText = document.createElement('textarea');
//     $depictText.className = 'form-control';
//     $depictText.rows = 5;
//     $depictText.id = 'comment';
//     $depictText.required = true;


//     $inputImg.append($input);
//     $groupName.append($labelName, $inputName);
//     $groupDateS.append($labelDateS, $inputDateS);
//     $groupDateE.append($labelDateE, $inputDateE);
//     $div.append($groupName, $groupDateS, $groupDateE);
//     $inputForm.append($title, $div);
//     $top.append($inputImg, $inputForm);

//     $depictGroup.append($depictLabel, $depictText);
//     $depictForm.append($depictGroup);
//     $stageEvent.append($top, $depictForm);
// }


function createStage() {
    let $container = document.querySelector('.stageEvent');
    let $stageContainer = document.createElement('div');
    $stageContainer.className = 'stageContainer';
    $stageContainer.innerHTML = `
    <div style="padding-top: 60px;">
    <p class="text-center h3">Tạo giai đoạn sự kiện</p>
    <div class="mt-1  d-flex align-items-end form-control-file border previewStageImage" style="height: 300px;">
        <input type="text" placeholder="Nhập URL ảnh" class="stageImage" style="width: 315px;" onchange="previewStageImage(this.value,this)">
    </div>
    <!-- Thông tin -->
    <div class="">
        <div>
            <div class="form-group ">
                <label for="usr ">Tên giai đoạn:</label>
                <input type="text " class="form-control stageName" required maxlength="255">
            </div>
                <div class="form-group ">
                    <label for="pwd ">Ngày bắt đầu:</label>
                    <input type="text" class="form-control stageStartDate" required>
                </div>
                <div class="form-group ">
                    <label for="pwd ">Ngày kết thúc:</label>
                    <input type="text" class="form-control stageEndDate" required>
                </div>
            </div>
        </div>
        </div>
        <!-- Khung dưới -->
        <div class="form-group text-white" style="display: flex;">
            <div class="w-100">
                <label for="comment">Mô tả chi tiết:</label>
                <textarea class="form-control stageDetail" rows="5" required></textarea>
            </div>
        </div>`
    $container.appendChild($stageContainer);
}

async function saveEvent() {
    let data = {
        name: document.getElementById('eventName').value,
        firstday: document.getElementById('startDate').value,
        lastday: document.getElementById('endDate').value,
        location: document.getElementById('location').value,
        general: document.getElementById('general').value,
        result: document.getElementById('result').value,
        meaning: document.getElementById('meaning').value,
        picture: document.getElementById('eventImage').value,
        details: []
    };

    let $stageContainers = document.getElementsByClassName('stageContainer');

    for (let $stageContainer of $stageContainers) {
        let detail = {
            name: $stageContainer.querySelector('.stageName').value,
            content: $stageContainer.querySelector('.stageDetail').value,
            dateStart: $stageContainer.querySelector('.stageStartDate').value,
            dateEnd: $stageContainer.querySelector('.stageEndDate').value,
            picture: $stageContainer.querySelector('.stageImage').value,
        }
        data.details.push(detail);
    }
    console.log(data);
    await db.collection('events').add(data);
    window.location.reload();
    alert('Tạo sự kiện lịch sử thành công!');
    location.href = "./ListHistoryEvent_admin.html";
}

function previewEventImage(value) {
    let $imagePreview = document.getElementById('imagePreview');
    $imagePreview.style.backgroundImage = 'url(' + value + ')';
    $imagePreview.style.backgroundSize = 'cover';
}

function previewStageImage(value, input) {
    console.log(input.parentElement);
    let $imagePreview = input.parentElement;
    $imagePreview.style.backgroundImage = 'url(' + value + ')';
    $imagePreview.style.backgroundSize = 'cover';
}

function checkType() {
    // document.getElementById('btnSave').disabled = false;
    let eventName = document.getElementById('eventName').value;
    let startDate = document.getElementById('startDate').value;
    let endDate = document.getElementById('endDate').value;
    let location = document.getElementById('location').value;
    let general = document.getElementById('general').value;
    let result = document.getElementById('result').value;
    let meaning = document.getElementById('meaning').value;
    let eventImage = document.getElementById('eventImage').value;
    if (eventName.length != 0 && startDate.length != 0 && endDate.length != 0 && location.length != 0 && general.length != 0 && result.length != 0 && meaning.length != 0 && eventImage.length != 0) {
        document.getElementById('btnSave').disabled = false;
    } else {
        document.getElementById('btnSave').disabled = true;
    }

}